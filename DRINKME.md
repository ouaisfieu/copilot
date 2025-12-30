### Fichiers complets à coller (manifest, icônes SVG, versions minifiées, mapping communes)

Ci‑dessous vous avez **tout** le nécessaire prêt à copier‑coller : `manifest.json`, trois icônes SVG (favicon, icon 192, icon 512), versions minifiées de `styles.css` et `app.js`, un fichier `commune_coords.csv` pour remplacer la géocodification pseudo‑aléatoire, et un `sw.js` légèrement amélioré. Enregistrez chaque bloc dans un fichier portant le nom indiqué et poussez dans votre dépôt GitHub Pages.

---

### `manifest.json`
```json
{
  "name": "Veille Citoyenne — Dashboard",
  "short_name": "VeilleCitoyenne",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#f6f8fb",
  "theme_color": "#0b6efd",
  "description": "Dashboard open-source pour collecte citoyenne, export anonymisé et co-gestion des données.",
  "icons": [
    { "src": "icon-192.svg", "sizes": "192x192", "type": "image/svg+xml" },
    { "src": "icon-512.svg", "sizes": "512x512", "type": "image/svg+xml" },
    { "src": "favicon.svg", "sizes": "any", "type": "image/svg+xml" }
  ]
}
```

---

### Icônes SVG (copier chaque bloc dans un fichier `.svg`)

#### `favicon.svg`
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="12" fill="#0b6efd"/>
  <g fill="#fff" transform="translate(8,8)">
    <rect x="0" y="0" width="48" height="8" rx="3"/>
    <rect x="0" y="14" width="36" height="8" rx="3"/>
    <rect x="0" y="28" width="24" height="8" rx="3"/>
  </g>
</svg>
```

#### `icon-192.svg`
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192">
  <rect width="192" height="192" rx="28" fill="#0b6efd"/>
  <g transform="translate(36,36)" fill="#fff">
    <rect x="0" y="0" width="120" height="20" rx="8"/>
    <rect x="0" y="36" width="90" height="20" rx="8"/>
    <rect x="0" y="72" width="60" height="20" rx="8"/>
  </g>
</svg>
```

#### `icon-512.svg`
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="64" fill="#0b6efd"/>
  <g transform="translate(120,120)" fill="#fff">
    <rect x="0" y="0" width="272" height="48" rx="16"/>
    <rect x="0" y="96" width="204" height="48" rx="16"/>
    <rect x="0" y="192" width="136" height="48" rx="16"/>
  </g>
</svg>
```

---

### `commune_coords.csv` (échantillon et format)
Copiez ce fichier et complétez avec vos communes cibles. Le format est `commune,lat,lng`. Utilisez ce CSV pour remplacer la fonction `geocode()` dans `app.js` (voir instructions plus bas).

```csv
commune,lat,lng
Bruxelles,50.8503,4.3517
Ixelles,50.8225,4.3664
Saint-Gilles,50.8356,4.3499
Schaerbeek,50.8642,4.3756
Anderlecht,50.8350,4.3333
Uccle,50.7975,4.3456
Woluwe-Saint-Lambert,50.8399,4.4146
Woluwe-Saint-Pierre,50.8275,4.4244
Forest,50.8206,4.3411
Evere,50.8731,4.3922
```

---

### `sw.js` (service worker amélioré, cache versionné)
```javascript
const CACHE = 'vc-cache-v2';
const ASSETS = ['/', '/index.html', '/styles.css', '/app.js', '/data_sample.csv', '/favicon.svg'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => k !== CACHE ? caches.delete(k) : null))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(resp => {
    if (!resp || resp.status !== 200 || resp.type !== 'basic') return resp;
    const clone = resp.clone();
    caches.open(CACHE).then(c => c.put(e.request, clone));
    return resp;
  })).catch(()=> caches.match('/index.html')));
});
```

---

### `styles.min.css` (version minifiée)
```css
:root{--bg:#f6f8fb;--card:#fff;--accent:#0b6efd;--muted:#6b7280;--danger:#e11d48;--maxw:1100px;--radius:10px}*{box-sizing:border-box}body{font-family:Inter,system-ui,Segoe UI,Roboto,Arial;color:#0b1220;background:var(--bg);margin:0;padding:18px;display:flex;flex-direction:column;align-items:center}.topbar{width:100%;max-width:var(--maxw);display:flex;justify-content:space-between;align-items:center;margin-bottom:18px}.brand h1{margin:0;font-size:1.2rem}.brand .tag{margin:4px 0 0;color:var(--muted);font-size:0.9rem}.actions{display:flex;gap:8px;align-items:center}.file-btn{background:#fff;border:1px dashed #e6e9ef;padding:8px 12px;border-radius:8px;cursor:pointer;color:var(--muted)}.file-btn input{display:none}.btn{background:var(--accent);color:#fff;padding:8px 12px;border-radius:8px;text-decoration:none;border:none;cursor:pointer;font-weight:600}.btn.ghost{background:transparent;color:var(--accent);border:1px solid rgba(11,110,253,0.12)}.btn.danger{background:var(--danger)}.container{width:100%;max-width:var(--maxw);display:grid;grid-template-columns:1fr;gap:14px}.panel{background:var(--card);padding:14px;border-radius:var(--radius);box-shadow:0 6px 18px rgba(12,20,40,0.04)}.cards{display:flex;gap:12px}.card{flex:1;padding:12px;border-radius:8px;background:#f8fafc;text-align:center}.card strong{display:block;font-size:1.4rem}.map{height:320px;border-radius:8px;border:1px solid #eef2ff;background:linear-gradient(180deg,#fff,#fbfdff);display:flex;align-items:center;justify-content:center;color:var(--muted)}.grid-2{display:grid;grid-template-columns:1fr 1fr;gap:12px}.table-wrap{overflow:auto}table{width:100%;border-collapse:collapse}th,td{padding:8px;border-bottom:1px solid #f1f5f9;text-align:left;font-size:0.95rem}.controls-row{display:flex;gap:8px;align-items:center;margin-top:8px}.controls-row input,.controls-row select{padding:8px;border-radius:8px;border:1px solid #e6e9ef}.hint{color:var(--muted);font-size:0.9rem;margin-top:8px}.footer{margin-top:12px;color:var(--muted);font-size:0.9rem}.small{font-size:0.9rem;color:var(--muted)}@media(max-width:900px){.grid-2{grid-template-columns:1fr}.topbar{flex-direction:column;align-items:flex-start;gap:8px}}
```

---

### `app.min.js` (version minifiée — remplace `app.js`)
> **Remarque** : ce minifié contient la logique complète, y compris lecture du CSV `commune_coords.csv` si présent. Collez dans `app.min.js` et remplacez l’ancien `app.js` dans `index.html` (ou renommez).

```javascript
const state={rows:[],map:null,markers:[],charts:{},communeMap:{}};function parseCSV(t){const l=t.trim().split(/\r?\n/);const h=l.shift().split(',').map(x=>x.trim());return l.map(line=>{const cols=line.split(',').map(c=>c.trim().replace(/^"|"$/g,''));const o={};h.forEach((hh,i)=>o[hh]=cols[i]||'');return o})}function anonymizeRow(r){const c=Object.assign({},r);delete c.email;delete c.phone;if(c.date)c.date=c.date.split('T')[0];if(c.niveau_sensibilite&&c.niveau_sensibilite.toLowerCase().includes('priv'))c.details='[privé]';return c}function renderSummary(){document.getElementById('count').textContent=state.rows.length;document.getElementById('unique-places').textContent=new Set(state.rows.map(r=>r.commune).filter(Boolean)).size;document.getElementById('last-updated').textContent=state.rows.length?new Date().toLocaleString():'—'}function renderTable(rows){const tbody=document.querySelector('#data-table tbody');tbody.innerHTML='';rows.slice(0,200).forEach(r=>{const tr=document.createElement('tr');tr.innerHTML=`<td>${r.date||''}</td><td>${r.commune||''}</td><td>${r.type_observation||''}</td><td>${r.description_courte||''}</td><td>${r.niveau_sensibilite||''}</td>`;tbody.appendChild(tr)})}function renderFilters(){const sel=document.getElementById('filter-type');const types=Array.from(new Set(state.rows.map(r=>r.type_observation).filter(Boolean))).sort();sel.innerHTML='<option value="">Tous types</option>'+types.map(t=>`<option>${t}</option>`).join('')}function initMap(){state.map=L.map('map',{attributionControl:false}).setView([50.85,4.35],11);L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19}).addTo(state.map)}function renderMap(){if(!state.map)initMap();state.markers.forEach(m=>state.map.removeLayer(m));state.markers=[];state.rows.forEach(r=>{const coord=geocode(r.commune);if(coord){const m=L.circleMarker([coord.lat,coord.lng],{radius:6,color:'#0b6efd',fillOpacity:0.7}).addTo(state.map);m.bindPopup(`<strong>${r.type_observation||'Signalement'}</strong><br>${r.commune||''}<br>${r.description_courte||''}`);state.markers.push(m)}});if(state.markers.length){const group=L.featureGroup(state.markers);state.map.fitBounds(group.getBounds().pad(0.2))}}function initCharts(){const typeCtx=document.getElementById('typeChart').getContext('2d');const timeCtx=document.getElementById('timeChart').getContext('2d');state.charts.type=new Chart(typeCtx,{type:'doughnut',data:{labels:[],datasets:[{data:[],backgroundColor:['#0b6efd','#06b6d4','#f59e0b','#ef4444','#10b981']}]}});state.charts.time=new Chart(timeCtx,{type:'bar',data:{labels:[],datasets:[{label:'Signalements',data:[],backgroundColor:'#0b6efd'}]},options:{scales:{x:{title:{display:true,text:'Date'}},y:{title:{display:true,text:'Nombre'}}}})}function renderCharts(){const counts={};state.rows.forEach(r=>counts[r.type_observation]=(counts[r.type_observation]||0)+1);const labels=Object.keys(counts);const data=labels.map(l=>counts[l]);state.charts.type.data.labels=labels;state.charts.type.data.datasets[0].data=data;state.charts.type.update();const byDay={};state.rows.forEach(r=>{const d=(r.date||'').split('T')[0]||'unknown';byDay[d]=(byDay[d]||0)+1});const days=Object.keys(byDay).sort();state.charts.time.data.labels=days;state.charts.time.data.datasets[0].data=days.map(d=>byDay[d]);state.charts.time.update()}function saveLocal(){try{localStorage.setItem('vc_rows',JSON.stringify(state.rows))}catch(e){}}function loadLocal(){try{const raw=localStorage.getItem('vc_rows');if(raw)state.rows=JSON.parse(raw)}catch(e){}}function handleFile(file){const reader=new FileReader();reader.onload=e=>{try{const parsed=parseCSV(e.target.result);const normalized=parsed.map(r=>({date:r.date||r['Date']||r['date']||'',commune:r.commune||r['Commune']||r['commune']||r['commune_code']||'',type_observation:r.type_observation||r['Type']||r['type_observation']||'',description_courte:r.description_courte||r['Description']||r['description_courte']||'',details:r.details||r['Details']||'',preuve_url:r.preuve_url||r['Preuve']||'',niveau_sensibilite:r.niveau_sensibilite||r['Sensibilite']||r['niveau_sensibilite']||'',consentement:r.consentement||r['Consentement']||'oui',autorisation_contact:r.autorisation_contact||r['AutorisationContact']||'non'}));state.rows=state.rows.concat(normalized);saveLocal();refreshAll()}catch(err){alert('Erreur lecture CSV : '+err.message)}};reader.readAsText(file)}function exportAnonymized(){const anonymize=document.getElementById('anonymize-toggle').checked;const rows=anonymize?state.rows.map(anonymizeRow):state.rows;const headers=Object.keys(rows[0]||{date:'',commune:'',type_observation:'',description_courte:'',details:'',preuve_url:'',niveau_sensibilite:'',consentement:'',autorisation_contact:''});const csv=[headers.join(',')].concat(rows.map(r=>headers.map(h=>`"${(r[h]||'').toString().replace(/"/g,'""')}"`).join(','))).join('\n');const blob=new Blob([csv],{type:'text/csv;charset=utf-8;'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='veille_citoyenne_export.csv';document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url)}function refreshAll(){renderSummary();renderTable(state.rows);renderFilters();renderMap();renderCharts()}function setupUI(){document.getElementById('file-input').addEventListener('change',e=>{const f=e.target.files[0];if(f)handleFile(f);e.target.value=''});document.getElementById('download-btn').addEventListener('click',exportAnonymized);document.getElementById('apply-filters').addEventListener('click',()=>{const type=document.getElementById('filter-type').value;const commune=document.getElementById('filter-commune').value.trim().toLowerCase();const filtered=state.rows.filter(r=>{if(type&&r.type_observation!==type)return false;if(commune&&!(r.commune||'').toLowerCase().includes(commune))return false;return true});renderTable(filtered)});document.getElementById('reset-filters').addEventListener('click',()=>renderTable(state.rows));document.getElementById('clear-data').addEventListener('click',()=>{if(confirm('Supprimer toutes les données locales ? Cette action est irréversible.')){state.rows=[];saveLocal();refreshAll()}})}function geocode(commune){if(!commune)return null;const key=commune.trim();if(state.communeMap[key])return state.communeMap[key];return pseudoGeocode(commune)}function pseudoGeocode(commune){const seed=Array.from(commune).reduce((s,c)=>s+c.charCodeAt(0),0);const lat=50.85+((seed%100)-50)*0.0015;const lng=4.35+((seed%100)-50)*0.0015;const coord={lat,lng};state.communeMap[commune]=coord;return coord}function loadCommuneCSV(file){const r=new FileReader();r.onload=e=>{try{const parsed=parseCSV(e.target.result);parsed.forEach(row=>{const k=(row.commune||row.Commune||'').trim();if(k)state.communeMap[k]={lat:parseFloat(row.lat||row.Lat||row.LAT),lng:parseFloat(row.lng||row.Lng||row.LNG)}});refreshAll()}catch(err){console.warn('Erreur chargement communes',err)}};r.readAsText(file)}window.addEventListener('load',()=>{loadLocal();initCharts();initMap();setupUI();refreshAll();const communeInput=document.createElement('input');communeInput.type='file';communeInput.accept='.csv';communeInput.style.display='none';communeInput.id='commune-input';document.body.appendChild(communeInput);communeInput.addEventListener('change',e=>{const f=e.target.files[0];if(f)loadCommuneCSV(f);e.target.value=''});const btn=document.createElement('button');btn.className='btn ghost';btn.textContent='Importer mapping communes';btn.style.marginLeft='6px';btn.onclick=()=>communeInput.click();document.querySelector('.actions').appendChild(btn)});if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js').catch(()=>{})}
```

---

### Remplacement de la géocodification pseudo‑aléatoire par `commune_coords.csv`

1. Ajoutez `commune_coords.csv` à la racine du dépôt (ou modifiez le nom dans le code).  
2. Le `app.min.js` ci‑dessus inclut un bouton **Importer mapping communes** qui permet d’importer ce CSV côté client et de remplir `state.communeMap`.  
3. Si vous préférez charger automatiquement au démarrage, ajoutez dans `index.html` un fetch vers `/commune_coords.csv` et parsez‑le avec `parseCSV()` pour remplir `state.communeMap` avant `refreshAll()`.

---

### Instructions finales et checklist avant déploiement

- [ ] Créez ou mettez à jour les fichiers : `index.html` (référencez `styles.min.css` et `app.min.js`), `styles.min.css`, `app.min.js`, `manifest.json`, `sw.js`, `favicon.svg`, `icon-192.svg`, `icon-512.svg`, `commune_coords.csv`, `data_sample.csv`, `GOVERNANCE.md`, `PRIVACY.md`.  
- [ ] Poussez sur `main` et activez GitHub Pages (branch `main`, root).  
- [ ] Testez : importer `data_sample.csv`, importer `commune_coords.csv`, vérifier carte, exporter anonymisé.  
- [ ] Optionnel : minifier `index.html` et activer compression côté CDN si besoin.

---

Si vous voulez, je peux **fournir maintenant** la version finale d’`index.html` déjà adaptée pour charger `styles.min.css` et `app.min.js`, et incluant le bouton « Importer mapping communes » visible (prêt à coller). Je peux aussi générer un **exemple complet de `commune_coords.csv`** pour toute la Belgique si vous le souhaitez.
