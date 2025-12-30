// app.js — Dashboard client-side (pure JS, zero backend)
// Minimal dependencies: Chart.js, Leaflet (loaded via CDN in index.html)

const state = {
  rows: [], // internal normalized rows
  map: null,
  markers: [],
  charts: {}
};

// Utility: parse CSV (simple)
function parseCSV(text) {
  const lines = text.trim().split(/\r?\n/);
  const headers = lines.shift().split(',').map(h => h.trim());
  return lines.map(line => {
    const cols = line.split(',').map(c => c.trim().replace(/^"|"$/g,''));
    const obj = {};
    headers.forEach((h,i)=> obj[h]=cols[i]||'');
    return obj;
  });
}

// Minimal geocode by commune -> fake lat/lng mapping for demo
const geoCache = {};
function geocode(commune) {
  if(!commune) return null;
  if(geoCache[commune]) return geoCache[commune];
  // deterministic pseudo-random but stable coords around Brussels for demo
  const seed = Array.from(commune).reduce((s,c)=>s+c.charCodeAt(0),0);
  const lat = 50.85 + ((seed % 100) - 50) * 0.0015;
  const lng = 4.35 + ((seed % 100) - 50) * 0.0015;
  const coord = {lat, lng};
  geoCache[commune] = coord;
  return coord;
}

// Anonymize row (client-side) before export
function anonymizeRow(r) {
  const copy = {...r};
  // remove any obvious PII fields if present
  delete copy['email'];
  delete copy['phone'];
  // fuzz date to day only
  if(copy.date) copy.date = copy.date.split('T')[0];
  // remove details if marked private
  if(copy.niveau_sensibilite && copy.niveau_sensibilite.toLowerCase().includes('priv')) {
    copy.details = '[privé]';
  }
  return copy;
}

// Render functions
function renderSummary() {
  document.getElementById('count').textContent = state.rows.length;
  const places = new Set(state.rows.map(r=>r.commune).filter(Boolean)).size;
  document.getElementById('unique-places').textContent = places;
  document.getElementById('last-updated').textContent = state.rows.length ? new Date().toLocaleString() : '—';
}

function renderTable(rows) {
  const tbody = document.querySelector('#data-table tbody');
  tbody.innerHTML = '';
  rows.slice(0,200).forEach(r=>{
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${r.date||''}</td><td>${r.commune||''}</td><td>${r.type_observation||''}</td><td>${r.description_courte||''}</td><td>${r.niveau_sensibilite||''}</td>`;
    tbody.appendChild(tr);
  });
}

function renderFilters() {
  const sel = document.getElementById('filter-type');
  const types = Array.from(new Set(state.rows.map(r=>r.type_observation).filter(Boolean))).sort();
  sel.innerHTML = '<option value="">Tous types</option>' + types.map(t=>`<option>${t}</option>`).join('');
}

// Map init
function initMap() {
  const map = L.map('map', {attributionControl:false}).setView([50.85,4.35], 11);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19}).addTo(map);
  state.map = map;
}

function renderMap() {
  if(!state.map) initMap();
  state.markers.forEach(m=> state.map.removeLayer(m));
  state.markers = [];
  state.rows.forEach(r=>{
    const coord = geocode(r.commune);
    if(coord) {
      const m = L.circleMarker([coord.lat, coord.lng], {radius:6, color:'#0b6efd', fillOpacity:0.7}).addTo(state.map);
      m.bindPopup(`<strong>${r.type_observation||'Signalement'}</strong><br>${r.commune||''}<br>${r.description_courte||''}`);
      state.markers.push(m);
    }
  });
  if(state.markers.length) {
    const group = L.featureGroup(state.markers);
    state.map.fitBounds(group.getBounds().pad(0.2));
  }
}

// Charts
function initCharts() {
  const typeCtx = document.getElementById('typeChart').getContext('2d');
  const timeCtx = document.getElementById('timeChart').getContext('2d');
  state.charts.type = new Chart(typeCtx, {type:'doughnut', data:{labels:[],datasets:[{data:[],backgroundColor:['#0b6efd','#06b6d4','#f59e0b','#ef4444','#10b981']}]}});
  state.charts.time = new Chart(timeCtx, {type:'bar', data:{labels:[],datasets:[{label:'Signalements',data:[],backgroundColor:'#0b6efd'}]}, options:{scales:{x:{title:{display:true,text:'Date'}},y:{title:{display:true,text:'Nombre'}}}}});
}

function renderCharts() {
  // type distribution
  const counts = {};
  state.rows.forEach(r=> counts[r.type_observation] = (counts[r.type_observation]||0)+1);
  const labels = Object.keys(counts);
  const data = labels.map(l=>counts[l]);
  state.charts.type.data.labels = labels;
  state.charts.type.data.datasets[0].data = data;
  state.charts.type.update();

  // time series by day
  const byDay = {};
  state.rows.forEach(r=>{
    const d = (r.date||'').split('T')[0] || 'unknown';
    byDay[d] = (byDay[d]||0)+1;
  });
  const days = Object.keys(byDay).sort();
  state.charts.time.data.labels = days;
  state.charts.time.data.datasets[0].data = days.map(d=>byDay[d]);
  state.charts.time.update();
}

// Persistence (localStorage)
function saveLocal() {
  try { localStorage.setItem('vc_rows', JSON.stringify(state.rows)); } catch(e){}
}
function loadLocal() {
  try {
    const raw = localStorage.getItem('vc_rows');
    if(raw) state.rows = JSON.parse(raw);
  } catch(e){}
}

// Handlers
function handleFile(file) {
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const parsed = parseCSV(e.target.result);
      // normalize keys to expected names
      const normalized = parsed.map(r=>({
        date: r.date || r['Date'] || r['date'] || '',
        commune: r.commune || r['Commune'] || r['commune'] || r['commune_code'] || '',
        type_observation: r.type_observation || r['Type'] || r['type_observation'] || '',
        description_courte: r.description_courte || r['Description'] || r['description_courte'] || '',
        details: r.details || r['Details'] || '',
        preuve_url: r.preuve_url || r['Preuve'] || '',
        niveau_sensibilite: r.niveau_sensibilite || r['Sensibilite'] || r['niveau_sensibilite'] || '',
        consentement: r.consentement || r['Consentement'] || 'oui',
        autorisation_contact: r.autorisation_contact || r['AutorisationContact'] || 'non'
      }));
      state.rows = state.rows.concat(normalized);
      saveLocal();
      refreshAll();
    } catch(err) {
      alert('Erreur lecture CSV : ' + err.message);
    }
  };
  reader.readAsText(file);
}

function exportAnonymized() {
  const anonymize = document.getElementById('anonymize-toggle').checked;
  const rows = anonymize ? state.rows.map(anonymizeRow) : state.rows;
  const headers = Object.keys(rows[0]||{date:'',commune:'',type_observation:'',description_courte:'',details:'',preuve_url:'',niveau_sensibilite:'',consentement:'',autorisation_contact:''});
  const csv = [headers.join(',')].concat(rows.map(r=>headers.map(h=>`"${(r[h]||'').toString().replace(/"/g,'""')}"`).join(','))).join('\n');
  const blob = new Blob([csv], {type:'text/csv;charset=utf-8;'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'veille_citoyenne_export.csv';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

// UI wiring
function refreshAll() {
  renderSummary();
  renderTable(state.rows);
  renderFilters();
  renderMap();
  renderCharts();
}

function setupUI() {
  document.getElementById('file-input').addEventListener('change', e=>{
    const f = e.target.files[0];
    if(f) handleFile(f);
    e.target.value = '';
  });
  document.getElementById('download-btn').addEventListener('click', exportAnonymized);
  document.getElementById('apply-filters').addEventListener('click', ()=>{
    const type = document.getElementById('filter-type').value;
    const commune = document.getElementById('filter-commune').value.trim().toLowerCase();
    const filtered = state.rows.filter(r=>{
      if(type && r.type_observation !== type) return false;
      if(commune && !(r.commune||'').toLowerCase().includes(commune)) return false;
      return true;
    });
    renderTable(filtered);
  });
  document.getElementById('reset-filters').addEventListener('click', ()=> renderTable(state.rows));
  document.getElementById('clear-data').addEventListener('click', ()=>{
    if(confirm('Supprimer toutes les données locales ? Cette action est irréversible.')) {
      state.rows = [];
      saveLocal();
      refreshAll();
    }
  });
}

// Init
window.addEventListener('load', ()=>{
  loadLocal();
  initCharts();
  initMap();
  setupUI();
  refreshAll();
});

// Service worker registration for offline caching (optional)
if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(()=>{});
}
