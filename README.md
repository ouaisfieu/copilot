**Résumé rapide :** **Lancez un MVP low‑tech basé sur une plateforme open‑source existante, collectez des données citoyennes en mode « consentement copropriétaire », puis financez‑vous par micro‑subventions, bourses EU/régionales et campagnes communautaires**. Voici un plan concret, priorisé et adapté à zéro budget et à un travail 100 % asynchrone.

### Options prioritaires et guide de décision
**Questions clés à trancher d’abord :** voulez‑vous *contrôler* l’infrastructure (hébergement propre) ou *démarrer vite* sur une instance hébergée ; acceptez‑vous des contributions techniques externes ; quelle est la portée géographique initiale (locale vs. EU) ?  
**Décisions rapides recommandées :** commencer sur une **plateforme open‑source mature** pour réduire le coût et le temps, garder les données **exportables** et gouvernées par des règles de copropriété (licence + pacte d’usage).

---

### Comparaison synthétique des voies possibles

| Option | Coût initial | Vitesse MVP | Contrôle données | Adapté ARG / ludification |
|---|---:|---:|---:|---:|
| Fork d’un projet existant (Decidim/Consul) | Très faible | Rapide | Élevé | Bon |
| Utiliser CivicNet / projet GitHub | Faible | Rapide‑moyen | Élevé | Moyen |
| Outil low‑tech (formulaires + Git) | Nul | Très rapide | Moyen | Limité |
| Événements ARG locaux + collecte | Faible | Lent | Faible | Excellent |

> Sources: .

---

### Plan d’action concret (priorité 1→4)
1. **MVP low‑tech (2–6 semaines)** : pages statiques + formulaires anonymes (Framaforms/Google Forms si nécessaire), données stockées en CSV sur un dépôt public chiffré; règles claires de copropriété des données (licence CC0/ODbL + contrat simple). **Objectif : prouver la collecte et la valeur des données**.  
2. **Basculer sur une plateforme open‑source** : installez Decidim ou Consul pour fonctionnalités participatives (propositions, votes, assemblées) ou explorez CivicNet pour une base modulaire.  
3. **Gamification / ARG design** : concevez micro‑missions asynchrones (semaine de silence acceptée comme mécanique de jeu), puzzles locaux, et récompenses non monétaires (badges, co‑propriété des insights) — vous pouvez vous inspirer d’ARGs civiques et de méthodes de psychogéographie pour l’engagement.  
4. **Financement** : ciblez micro‑subventions régionales (Wallonie/Flandre/Bruxelles), fonds EU (Horizon/EIC, ERDF) et programmes pour PME/innovation; le montage peut commencer avec un dossier « preuve de concept » basé sur votre MVP.

---

### Risques, limites et mitigations
- **Vie privée / RGPD** : anonymisez, minimisez les données, documentez le consentement et la copropriété.  
- **Sécurité des données** : hébergez sur services fiables, chiffrez les exports.  
- **Engagement durable** : alternez micro‑missions et temps de repos; acceptez les « silences radio » comme feature de tolérance.  
- **Financement long** : commencez par petites subventions et crowdfunding citoyen; utilisez preuves d’impact pour candidater à Horizon/EIC.

---

> Option 1

## Option 2

### Modèle de page MVP pour lancement rapide

**Titre**  
**Veille Citoyenne Ludifiée — Collecte de données copropriétaire**

**Accroche**  
Renforcez la démocratie en participant à une veille citoyenne simple, asynchrone et respectueuse de votre rythme. Vos contributions alimentent des actions concrètes et vous restez copropriétaire des données que vous partagez.

**Sous‑titre**  
Micro‑missions asynchrones · Silence radio accepté · Données ouvertes et co‑gérées

---

### Section Mission et Valeur

**Mission**  
Collecter des observations citoyennes locales pour produire des preuves exploitables par la communauté et les décideurs, tout en garantissant que les contributeurs gardent la propriété et le contrôle de leurs données.

**Valeur pour le participant**  
- **Impact concret** : vos signalements servent à produire rapports et campagnes.  
- **Co‑propriété** : accès aux données agrégées et droit de co‑décision sur leur usage.  
- **Flexibilité** : participation asynchrone, pauses longues acceptées.  
- **Récompenses non monétaires** : badges, accès prioritaire aux résultats, rôle dans la co‑construction.

---

### Section Comment ça marche

**Étapes simples**  
1. Remplissez un signalement via le formulaire ci‑dessous.  
2. Vos données sont anonymisées et stockées dans un dépôt ouvert.  
3. La communauté valide et enrichit les données.  
4. Les insights sont publiés sous licence ouverte et co‑gérés.

**Principes clés**  
- **Minimisation** des données collectées.  
- **Transparence** sur l’usage et les accès.  
- **Consentement explicite** et possibilité de retrait.  
- **Tolérance au silence** : votre absence n’empêche pas la progression collective.

---

### Formulaire de signalement prêt à copier

**Instructions**  
Copier‑coller ce formulaire dans Framaforms, Typeform, ou un simple Google Form. Exportez en CSV et hébergez le CSV sur un dépôt public (GitHub/GitLab) ou un stockage chiffré.

**Champs du formulaire**  
- **Date et heure du signalement** — *automatique* — **obligatoire**  
- **Zone géographique** — *code postal ou commune* — **obligatoire**  
- **Type d’observation** — *choix multiple : urbanisme; environnement; services publics; transparence; autre* — **obligatoire**  
- **Description courte** — *1–3 phrases* — **obligatoire**  
- **Détails complémentaires** — *texte libre* — optionnel  
- **Preuve jointe** — *URL ou upload (optionnel)* — optionnel  
- **Niveau de sensibilité** — *public; anonymisé; privé pour modération* — **obligatoire**  
- **Consentement de copropriété des données** — case à cocher **obligatoire** : « Je consens à ce que mes données soient stockées, anonymisées et partagées sous licence ODbL; je deviens copropriétaire des jeux de données agrégés. »  
- **Autorisation de contact** — case à cocher optionnelle : « J’accepte d’être contacté·e pour co‑construction. »

**Exemple d’en‑tête CSV**  
`date,commune,type_observation,description_courte,details,preuve_url,niveau_sensibilite,consentement,autorisation_contact`

---

### Texte de consentement et clause de copropriété courte

**Consentement**  
En cochant, vous acceptez que votre signalement soit collecté, anonymisé et publié dans des jeux de données agrégés. Vous conservez des droits de copropriété sur les jeux de données et participez aux décisions d’usage via les mécanismes de gouvernance communautaire.

**Clause de copropriété (version courte)**  
Les contributeurs deviennent copropriétaires des jeux de données agrégés. Toute exploitation commerciale ou redistribution significative nécessite l’accord d’un comité représentatif des contributeurs. Les données individuelles restent anonymisées sauf accord explicite.

---

### Politique vie privée et conformité RGPD simplifiée

**Principes**  
- **Base légale** : consentement explicite.  
- **Données minimales** : ne collecter que l’essentiel.  
- **Anonymisation** : suppression des identifiants directs avant publication.  
- **Droit d’accès et de retrait** : procédure simple par email ou via dépôt.  
- **Durée de conservation** : définie et publiée (ex. 3 ans pour données brutes, jeux agrégés publiés indéfiniment sous licence).

---

### Hébergement low‑tech et outils recommandés

**Option la plus rapide**  
- **Formulaire** : Framaforms ou Google Forms.  
- **Stockage** : CSV exporté vers un dépôt GitHub public (ou GitLab) avec versioning.  
- **Page statique** : GitHub Pages ou Netlify pour héberger la page MVP.  
- **Gouvernance** : fichier `GOVERNANCE.md` dans le dépôt décrivant la copropriété et le comité.

**Sécurité basique**  
- Chiffrement des backups.  
- Accès admin limité.  
- Processus de modération documenté.

---

### Appels à l’action et éléments à afficher sur la page

**Boutons**  
- **Signaler maintenant** (ouvre le formulaire)  
- **Voir les données agrégées** (lien vers CSV/visualisation)  
- **Rejoindre la co‑construction** (inscription optionnelle)  
- **Contribuer au code** (lien GitHub)

**Éléments visibles**  
- Compteur de signalements collectés.  
- Carte simple (embed) des observations publiques.  
- FAQ courte sur la copropriété des données.

---

### Modèle de message pour la page « À propos » court

**À propos**  
Nous sommes une initiative citoyenne indépendante qui collecte des observations locales pour produire des preuves et des actions. Notre approche est ouverte, inclusive et conçue pour respecter les rythmes de vie de chacun·e. Les contributeurs sont copropriétaires des données et participent aux décisions d’usage.

---

### Checklist technique pour mise en ligne en 48 heures

- [ ] Créer dépôt GitHub public.  
- [ ] Créer formulaire et tester export CSV.  
- [ ] Rédiger `README.md`, `GOVERNANCE.md`, `PRIVACY.md`.  
- [ ] Mettre en ligne page statique avec contenu ci‑dessus.  
- [ ] Publier premier CSV anonymisé.  
- [ ] Partager lien dans 2 communautés locales pour premiers tests.

---

### Prochaine action que je peux préparer immédiatement

Je peux **générer le texte complet prêt à coller** pour :  
- la page d’accueil (HTML/Markdown),  
- le formulaire (questions et descriptions prêtes),  
- le fichier `GOVERNANCE.md` minimal.  

Je prépare cela maintenant et vous le fournis dans le format que vous préférez.


### Prochaines étapes que je peux faire pour vous maintenant
- **Rédiger un modèle de page MVP + formulaire** (texte prêt à copier).  
- **Ébaucher un pitch court pour une micro‑subvention belge**.  
- **Proposer 6 micro‑missions ARG asynchrones** adaptées à tolérance d’absence.

Dites laquelle de ces trois actions vous voulez que je prépare en premier.

> le tout en zip

### Limitation technique et solution immédiate

Je ne peux pas créer ni envoyer directement un fichier ZIP depuis ici. Je fournis ci‑dessous **tous les fichiers prêts à copier** (Markdown et CSV) — vous pouvez ensuite les enregistrer localement et les compresser en ZIP en suivant les instructions fournies.

---

### Contenu que je fournis maintenant (fichiers inclus)

Je fournis les fichiers suivants, prêts à coller dans des fichiers texte :

- **`index.md`** — page d’accueil / landing page (Markdown)  
- **`form.md`** — questions du formulaire prêtes à coller dans Framaforms/Google Forms (Markdown)  
- **`GOVERNANCE.md`** — gouvernance minimale  
- **`PRIVACY.md`** — politique vie privée simplifiée (RGPD)  
- **`README.md`** — instructions rapides pour mise en ligne en 48 h  
- **`data_sample.csv`** — en‑tête CSV d’exemple et une ligne de test

---

### `index.md`

```markdown
# Veille Citoyenne Ludifiée — Collecte de données copropriétaire

**Accroche**  
Renforcez la démocratie en participant à une veille citoyenne simple, asynchrone et respectueuse de votre rythme. Vos contributions alimentent des actions concrètes et vous restez copropriétaire des données que vous partagez.

**Sous‑titre**  
Micro‑missions asynchrones · Silence radio accepté · Données ouvertes et co‑gérées

## Mission  
Collecter des observations citoyennes locales pour produire des preuves exploitables par la communauté et les décideurs, tout en garantissant que les contributeurs gardent la propriété et le contrôle de leurs données.

## Valeur pour le participant  
- **Impact concret** : vos signalements servent à produire rapports et campagnes.  
- **Co‑propriété** : accès aux données agrégées et droit de co‑décision sur leur usage.  
- **Flexibilité** : participation asynchrone, pauses longues acceptées.  
- **Récompenses non monétaires** : badges, accès prioritaire aux résultats, rôle dans la co‑construction.

## Comment ça marche  
1. Remplissez un signalement via le formulaire.  
2. Vos données sont anonymisées et stockées dans un dépôt ouvert.  
3. La communauté valide et enrichit les données.  
4. Les insights sont publiés sous licence ouverte et co‑gérés.

## Principes clés  
- Minimisation des données collectées.  
- Transparence sur l’usage et les accès.  
- Consentement explicite et possibilité de retrait.  
- Tolérance au silence : votre absence n’empêche pas la progression collective.

## Appels à l’action  
- **Signaler maintenant** (lien vers formulaire)  
- **Voir les données agrégées** (lien vers CSV/visualisation)  
- **Rejoindre la co‑construction** (inscription optionnelle)  
- **Contribuer au code** (lien GitHub)

## FAQ courte  
**Qui gère les données ?** Un comité représentatif des contributeurs, décrit dans GOVERNANCE.md.  
**Comment retirer un signalement ?** Procédure décrite dans PRIVACY.md.
```

---

### `form.md` (questions du formulaire)

```markdown
# Formulaire de signalement — Veille Citoyenne Ludifiée

**Instructions**  
Merci de décrire brièvement votre observation. Les champs marqués d’un astérisque sont obligatoires.

**Champs**  
- Date et heure du signalement — *automatique* — **obligatoire**  
- Zone géographique — *code postal ou commune* — **obligatoire**  
- Type d’observation — *choix multiple* — **obligatoire**  
  - urbanisme; environnement; services publics; transparence; autre  
- Description courte — *1–3 phrases* — **obligatoire**  
- Détails complémentaires — *texte libre* — optionnel  
- Preuve jointe — *URL ou upload (optionnel)* — optionnel  
- Niveau de sensibilité — *choix* — **obligatoire**  
  - public; anonymisé; privé pour modération  
- Consentement de copropriété des données — **case à cocher obligatoire**  
  - « Je consens à ce que mes données soient stockées, anonymisées et partagées sous licence ODbL; je deviens copropriétaire des jeux de données agrégés. »  
- Autorisation de contact — **case à cocher optionnelle**  
  - « J’accepte d’être contacté·e pour co‑construction. »

**Export CSV**  
Utilisez l’en‑tête suivante pour l’export automatique :
`date,commune,type_observation,description_courte,details,preuve_url,niveau_sensibilite,consentement,autorisation_contact`
```

---

### `GOVERNANCE.md`

```markdown
# GOVERNANCE

## Principes
- Les contributeurs sont copropriétaires des jeux de données agrégés.  
- Toute exploitation commerciale ou redistribution significative nécessite l’accord d’un comité représentatif des contributeurs.

## Comité représentatif
- Composition initiale : 5 membres volontaires élus par les contributeurs inscrits.  
- Mandat : 1 an renouvelable.  
- Rôle : valider les usages des données, arbitrer les demandes d’accès, superviser la publication.

## Processus de décision
- Propositions soumises sur le dépôt public (issue).  
- Vote en ligne asynchrone sur une période de 7 jours.  
- Quorum : 10 % des contributeurs inscrits ou 50 contributeurs, selon le plus petit.

## Modifications
- Toute modification de la gouvernance doit être approuvée par vote du comité et consultation publique.
```

---

### `PRIVACY.md`

```markdown
# PRIVACY

## Principes
- **Base légale** : consentement explicite.  
- **Minimisation** : seules les données nécessaires sont collectées.  
- **Anonymisation** : suppression des identifiants directs avant publication.  
- **Droit d’accès et de retrait** : procédure simple par email ou via le dépôt.  
- **Durée de conservation** : 3 ans pour données brutes; jeux agrégés publiés indéfiniment sous licence ODbL.

## Procédure de retrait
- Envoyer une demande via l’adresse indiquée sur la page.  
- Le comité traite la demande et retire les données identifiables dans un délai de 30 jours, sauf si la donnée a déjà été intégrée de façon irréversible dans un jeu agrégé (les contributeurs en seront informés).

## Sécurité
- Backups chiffrés.  
- Accès admin limité et journalisé.
```

---

### `README.md`

```markdown
# README — Mise en ligne rapide en 48 h

## Étapes
1. Créer un dépôt GitHub public.  
2. Copier les fichiers fournis (`index.md`, `form.md`, `GOVERNANCE.md`, `PRIVACY.md`, `data_sample.csv`) dans le dépôt.  
3. Créer le formulaire sur Framaforms ou Google Forms en utilisant `form.md`. Tester l’export CSV.  
4. Mettre en ligne la page statique via GitHub Pages ou Netlify en utilisant `index.md`.  
5. Publier le premier CSV anonymisé dans le dépôt (data/data_sample.csv).  
6. Partager le lien dans 2 communautés locales pour premiers tests.

## Outils recommandés
- Formulaire : Framaforms ou Google Forms.  
- Hébergement page : GitHub Pages ou Netlify.  
- Dépôt : GitHub ou GitLab.
```

---

### `data_sample.csv`

```csv
date,commune,type_observation,description_courte,details,preuve_url,niveau_sensibilite,consentement,autorisation_contact
2025-12-30T12:34:00,Exampleville,urbanisme,"Trottoir endommagé devant école","Trottoir fissuré sur 10m, risque pour poussettes",http://example.org/photo.jpg,public,oui,non
```

---

### Instructions pour créer un ZIP localement

**Sur macOS ou Linux (terminal)**  
1. Enregistrez chaque bloc ci‑dessous dans un fichier portant le nom indiqué (`index.md`, `form.md`, `GOVERNANCE.md`, `PRIVACY.md`, `README.md`, `data_sample.csv`).  
2. Ouvrez un terminal dans le dossier contenant ces fichiers.  
3. Exécutez :  
```bash
zip -r veille_citoyenne.zip index.md form.md GOVERNANCE.md PRIVACY.md README.md data_sample.csv
```

**Sur Windows (Explorateur)**  
1. Enregistrez chaque bloc dans les fichiers listés.  
2. Sélectionnez les fichiers, clic droit → Envoyer vers → Dossier compressé.  
3. Renommez le fichier compressé en `veille_citoyenne.zip`.

---

### Prochaine étape que je fournis maintenant

Je vais coller **immédiatement** ci‑dessous les contenus complets (déjà fournis). Si vous voulez, je peux aussi :  
- fournir une version HTML de `index.md` prête à coller,  
- générer un exemple de `GOVERNANCE.md` plus détaillé,  
- ou préparer un message court pour lancer la première diffusion dans des communautés locales.

J’ai préparé les fichiers Markdown et CSV ci‑dessus — dites simplement si vous voulez la **version HTML** de la page d’accueil maintenant.

> oui

```
<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Veille Citoyenne Ludifiée — Collecte de données copropriétaire</title>
  <meta name="description" content="Micro‑missions asynchrones · Silence radio accepté · Données ouvertes et co‑gérées" />
  <style>
    :root{--bg:#f7f8fb;--card:#ffffff;--accent:#0b6efd;--muted:#6b7280;--maxw:900px}
    body{font-family:system-ui,-apple-system,Segoe UI,Roboto,"Helvetica Neue",Arial;line-height:1.5;color:#111;background:var(--bg);margin:0;padding:24px;display:flex;justify-content:center}
    .wrap{max-width:var(--maxw);width:100%}
    header{background:linear-gradient(90deg,#fff 0,#f3f6ff 100%);padding:28px;border-radius:10px;box-shadow:0 6px 18px rgba(12,20,40,0.06);margin-bottom:18px}
    h1{margin:0 0 8px;font-size:1.6rem}
    p.lead{margin:0;color:var(--muted)}
    .grid{display:grid;grid-template-columns:1fr 320px;gap:18px}
    .card{background:var(--card);padding:18px;border-radius:10px;box-shadow:0 6px 18px rgba(12,20,40,0.04)}
    .small{font-size:0.95rem;color:var(--muted)}
    ul{padding-left:1.1rem}
    .cta{display:flex;flex-direction:column;gap:8px}
    .btn{display:inline-block;padding:10px 14px;border-radius:8px;text-decoration:none;color:#fff;background:var(--accent);font-weight:600}
    .btn.ghost{background:transparent;color:var(--accent);border:1px solid rgba(11,110,253,0.12)}
    .meta{font-size:0.9rem;color:var(--muted);margin-top:12px}
    footer{margin-top:18px;text-align:center;color:var(--muted);font-size:0.9rem}
    @media(max-width:880px){.grid{grid-template-columns:1fr;}.card{padding:14px}}
    code{background:#f3f4f6;padding:2px 6px;border-radius:6px;font-family:monospace;font-size:0.95em}
  </style>
</head>
<body>
  <main class="wrap" role="main" aria-labelledby="page-title">
    <header>
      <h1 id="page-title">Veille Citoyenne Ludifiée — Collecte de données copropriétaire</h1>
      <p class="lead">Micro‑missions asynchrones · Silence radio accepté · Données ouvertes et co‑gérées</p>
    </header>

    <div class="grid">
      <section class="card" aria-labelledby="mission-title">
        <h2 id="mission-title">Mission</h2>
        <p class="small">Collecter des observations citoyennes locales pour produire des preuves exploitables par la communauté et les décideurs, tout en garantissant que les contributeurs gardent la propriété et le contrôle de leurs données.</p>

        <h3>Valeur pour le participant</h3>
        <ul>
          <li><strong>Impact concret</strong> : vos signalements servent à produire rapports et campagnes.</li>
          <li><strong>Co‑propriété</strong> : accès aux données agrégées et droit de co‑décision sur leur usage.</li>
          <li><strong>Flexibilité</strong> : participation asynchrone, pauses longues acceptées.</li>
          <li><strong>Récompenses non monétaires</strong> : badges, accès prioritaire aux résultats, rôle dans la co‑construction.</li>
        </ul>

        <h3>Comment ça marche</h3>
        <ol>
          <li>Remplissez un signalement via le formulaire.</li>
          <li>Vos données sont anonymisées et stockées dans un dépôt ouvert.</li>
          <li>La communauté valide et enrichit les données.</li>
          <li>Les insights sont publiés sous licence ouverte et co‑gérés.</li>
        </ol>

        <h3>Principes clés</h3>
        <ul>
          <li>Minimisation des données collectées.</li>
          <li>Transparence sur l’usage et les accès.</li>
          <li>Consentement explicite et possibilité de retrait.</li>
          <li>Tolérance au silence : votre absence n’empêche pas la progression collective.</li>
        </ul>

        <p class="meta">Voir <a href="#governance">Gouvernance</a> et <a href="#privacy">Politique vie privée</a> pour les détails.</p>
      </section>

      <aside class="card" aria-labelledby="actions-title">
        <h2 id="actions-title">Actions rapides</h2>
        <div class="cta">
          <a class="btn" href="https://example.org/form" id="report-link">Signaler maintenant</a>
          <a class="btn ghost" href="https://example.org/data.csv" id="data-link">Voir les données agrégées</a>
          <a class="btn ghost" href="https://example.org/join" id="join-link">Rejoindre la co‑construction</a>
          <a class="btn ghost" href="https://github.com/example/repo" id="code-link">Contribuer au code</a>
        </div>

        <div class="meta" aria-hidden="false">
          <p><strong>Compteur</strong> : <span id="counter">0</span> signalements</p>
          <p><strong>Carte</strong> : embed simple disponible après premiers signalements.</p>
        </div>
      </aside>
    </div>

    <section class="card" id="form-section" aria-labelledby="form-title" style="margin-top:18px">
      <h2 id="form-title">Formulaire de signalement (extrait)</h2>
      <p class="small">Les champs marqués d’un astérisque sont obligatoires. Copiez ce modèle dans Framaforms, Typeform ou Google Forms.</p>

      <pre style="white-space:pre-wrap;background:#f8fafc;padding:12px;border-radius:8px;border:1px solid #eef2ff">
Champs :
- Date et heure du signalement — automatique — *obligatoire*
- Zone géographique — code postal ou commune — *obligatoire*
- Type d’observation — choix multiple — *obligatoire* (urbanisme; environnement; services publics; transparence; autre)
- Description courte — 1–3 phrases — *obligatoire*
- Détails complémentaires — texte libre — optionnel
- Preuve jointe — URL ou upload — optionnel
- Niveau de sensibilité — choix — *obligatoire* (public; anonymisé; privé pour modération)
- Consentement de copropriété des données — case à cocher obligatoire
- Autorisation de contact — case à cocher optionnelle
      </pre>
    </section>

    <section class="card" id="governance" aria-labelledby="gov-title" style="margin-top:18px">
      <h2 id="gov-title">GOVERNANCE (extrait)</h2>
      <p class="small"><strong>Principes</strong> : Les contributeurs sont copropriétaires des jeux de données agrégés. Toute exploitation commerciale ou redistribution significative nécessite l’accord d’un comité représentatif des contributeurs.</p>

      <p class="small"><strong>Comité représentatif</strong> : 5 membres volontaires élus par les contributeurs inscrits. Mandat 1 an. Rôle : valider usages, arbitrer accès, superviser publication.</p>

      <p class="small"><strong>Processus</strong> : propositions sur le dépôt public (issue), vote en ligne asynchrone 7 jours, quorum 10 % ou 50 contributeurs.</p>
    </section>

    <section class="card" id="privacy" aria-labelledby="privacy-title" style="margin-top:18px">
      <h2 id="privacy-title">Politique vie privée (extrait)</h2>
      <p class="small"><strong>Base légale</strong> : consentement explicite. <strong>Minimisation</strong> : seules les données nécessaires sont collectées. <strong>Anonymisation</strong> : suppression des identifiants directs avant publication.</p>

      <p class="small"><strong>Retrait</strong> : demande par email ou via le dépôt ; traitement sous 30 jours. <strong>Durée</strong> : 3 ans pour données brutes ; jeux agrégés publiés indéfiniment sous licence ODbL.</p>
    </section>

    <footer>
      <p>Prêt à lancer un MVP low‑tech en 48 h. <a href="#form-section">Commencez par le formulaire</a>.</p>
    </footer>
  </main>

  <script>
    // Petit script client pour compteur et liens de démonstration (à remplacer par données réelles)
    (function(){
      // compteur simulé
      var counter = document.getElementById('counter');
      var stored = localStorage.getItem('vc_count') || '0';
      counter.textContent = stored;

      // liens placeholders : remplacez les href par vos URLs réelles
      document.getElementById('report-link').href = 'https://example.org/form';
      document.getElementById('data-link').href = 'https://example.org/data.csv';
      document.getElementById('join-link').href = 'https://example.org/join';
      document.getElementById('code-link').href = 'https://github.com/example/repo';
    })();
  </script>
</body>
</html>

```
