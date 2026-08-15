const courses = [
  {
    id: 'cejm-environnement',
    track: 'bts',
    level: 'BTS · CEJM',
    icon: '◎',
    title: 'L’entreprise dans son environnement',
    desc: 'Marchés, contrats, finalités et parties prenantes.',
    chapters: 4,
    time: '2 h 10',
    concept: 'Le diagnostic de l’environnement',
    definition:
      'L’entreprise est un système ouvert : elle échange avec des agents économiques et transforme des ressources pour atteindre des finalités économiques, sociales et sociétales.',
    points: [
      'Identifier ménages, entreprises, banques et État, puis préciser la nature de leurs échanges.',
      'Distinguer une opportunité d’une menace grâce au modèle PESTEL.',
      'Relier chaque partie prenante à ses attentes et à son pouvoir d’influence.',
    ],
    example:
      'Une savonnerie artisanale subit la hausse du prix de l’huile (menace économique), mais bénéficie de l’attrait pour le made in France (opportunité socioculturelle).',
    question: 'Une nouvelle norme environnementale constitue toujours une menace.',
    answers: [
      'Vrai',
      'Faux : elle peut aussi créer une opportunité',
      'Cela dépend uniquement du prix',
    ],
    correct: 1,
    feedback:
      'Une contrainte peut devenir une occasion de se différencier si l’entreprise possède les ressources pour s’y adapter.',
  },
  {
    id: 'cejm-regulation',
    track: 'bts',
    level: 'BTS · CEJM',
    icon: '⚖',
    title: 'La régulation de l’activité',
    desc: 'État, politiques économiques et droit de la concurrence.',
    chapters: 3,
    time: '1 h 45',
    concept: 'Réguler le marché',
    definition:
      'La régulation combine l’action publique, le droit et les autorités indépendantes afin de corriger les défaillances du marché et préserver une concurrence effective.',
    points: [
      'Distinguer politiques conjoncturelles et structurelles.',
      'Reconnaître une entente, un abus de position dominante et une concentration.',
      'Mesurer l’impact d’une décision publique sur une entreprise.',
    ],
    example:
      'Trois concurrents partagent un laboratoire de R&D : la coopération n’est pas automatiquement illicite. Il faut examiner son objet, ses effets et une éventuelle exemption fondée sur le progrès économique.',
    question: 'Une entente entre concurrents est nécessairement interdite.',
    answers: [
      'Oui, sans exception',
      'Non, elle peut être exemptée sous conditions',
      'Seulement si elle est écrite',
    ],
    correct: 1,
    feedback:
      'Le raisonnement porte sur l’effet anticoncurrentiel puis sur les conditions d’exemption, notamment le progrès économique et le bénéfice équitable aux utilisateurs.',
  },
  {
    id: 'cejm-strategie',
    track: 'bts',
    level: 'BTS · CEJM',
    icon: '↗',
    title: 'Les choix stratégiques',
    desc: 'Diagnostic, croissance, internationalisation et ressources.',
    chapters: 4,
    time: '2 h 20',
    concept: 'Du diagnostic au choix',
    definition:
      'Une stratégie cohérente met en relation l’environnement externe, les ressources internes et les objectifs de long terme de l’organisation.',
    points: [
      'Construire un diagnostic ressources-compétences.',
      'Distinguer croissance interne, externe et conjointe.',
      'Apprécier les risques et avantages de l’internationalisation.',
    ],
    example:
      'Pour entrer aux États-Unis sans supporter seule tous les risques, une PME peut privilégier une croissance conjointe avec un distributeur local.',
    question: 'Quel élément est une compétence distinctive ?',
    answers: [
      'Une machine disponible sur le marché',
      'Un savoir-faire rare, pertinent et difficile à imiter',
      'Le montant du capital social',
    ],
    correct: 1,
    feedback:
      'Une compétence distinctive soutient un avantage concurrentiel durable parce qu’elle crée de la valeur et reste difficile à reproduire.',
  },
  {
    id: 'droit-raisonnement',
    track: 'stmg',
    level: 'STMG · DROIT',
    icon: '§',
    title: 'Le raisonnement juridique',
    desc: 'Qualification, problème de droit, règle et application.',
    chapters: 4,
    time: '1 h 35',
    concept: 'Le syllogisme juridique',
    definition:
      'Le raisonnement juridique confronte une règle générale à des faits juridiquement qualifiés pour aboutir à une solution argumentée.',
    points: [
      'Qualifier les personnes, les faits et les prétentions.',
      'Formuler une question générale sans nom propre.',
      'Énoncer la règle, l’appliquer avec « en l’espèce », puis conclure.',
    ],
    example:
      'Faits : un produit défectueux blesse un client. Problème : dans quelles conditions le producteur engage-t-il sa responsabilité ? Application : dommage, fait générateur et lien de causalité doivent être établis.',
    question: 'Dans un problème de droit, faut-il conserver le nom des parties ?',
    answers: [
      'Oui, toujours',
      'Non, il faut généraliser juridiquement',
      'Seulement celui du demandeur',
    ],
    correct: 1,
    feedback:
      'Le problème de droit est abstrait et transposable. On remplace les noms par leurs qualités : salarié, employeur, consommateur, professionnel…',
  },
  {
    id: 'eco-richesse',
    track: 'stmg',
    level: 'STMG · ÉCONOMIE',
    icon: '◒',
    title: 'Création & répartition de la richesse',
    desc: 'Valeur ajoutée, PIB, revenus et redistribution.',
    chapters: 3,
    time: '1 h 30',
    concept: 'La valeur ajoutée',
    definition:
      'La valeur ajoutée mesure la richesse réellement créée : valeur de la production moins consommations intermédiaires.',
    points: [
      'Calculer une valeur ajoutée à partir de données.',
      'Distinguer PIB marchand et non marchand.',
      'Analyser la répartition primaire puis la redistribution.',
    ],
    example:
      'Une entreprise vend 240 000 € et consomme 90 000 € de matières et services : elle crée 150 000 € de valeur ajoutée, à répartir entre plusieurs acteurs.',
    question: 'CA = 180 000 € et consommations intermédiaires = 70 000 €. Quelle VA ?',
    answers: ['250 000 €', '110 000 €', '70 000 €'],
    correct: 1,
    feedback:
      'VA = valeur de la production − consommations intermédiaires = 180 000 − 70 000 = 110 000 €.',
  },
  {
    id: 'sgn-valeur',
    track: 'stmg',
    level: 'STMG · SGN',
    icon: '◇',
    title: 'Création de valeur & performance',
    desc: 'Valeurs financière, sociale, perçue et indicateurs.',
    chapters: 4,
    time: '1 h 50',
    concept: 'Une performance multidimensionnelle',
    definition:
      'La performance est l’aptitude à atteindre des objectifs (efficacité) en mobilisant au mieux les ressources (efficience). Elle ne se réduit pas au résultat financier.',
    points: [
      'Calculer et interpréter des indicateurs simples.',
      'Distinguer valeurs financière, sociale et perçue.',
      'Construire un tableau de bord cohérent avec les objectifs.',
    ],
    example:
      'Une entreprise augmente son résultat mais voit l’absentéisme et les réclamations progresser : sa performance financière s’améliore, contrairement à ses performances sociale et commerciale.',
    question: 'Une organisation efficace est nécessairement efficiente.',
    answers: ['Oui', 'Non', 'Seulement dans le secteur public'],
    correct: 1,
    feedback:
      'Elle peut atteindre son objectif en gaspillant des ressources : elle est alors efficace, mais pas efficiente.',
  },
];

const examQuestions = [
  [
    '1.1 · Diagnostic interne',
    'Réalisez le diagnostic des ressources et compétences de la Savonnerie du Paradou.',
    'Classez les éléments en ressources tangibles, intangibles, forces et faiblesses. Une compétence n’est distinctive que si elle est pertinente, rare et difficilement imitable.',
    'Forces : équipements automatisés récents, maîtrise du processus de « cuite », marque historique, clientèle fidèle, logiciel propriétaire et label collectif. Faiblesses : rentabilité et capacité d’autofinancement inférieures au secteur, effectif réduit. Compétences distinctives : savoir-faire ancestral, innovation produit et intégration technologique.',
  ],
  [
    '1.2 · Facteurs de production',
    'Montrez les conséquences économiques de leur évolution.',
    'Identifiez d’abord le mouvement entre travail et capital, puis séparez les effets favorables des risques.',
    'La substitution du capital au travail accroît la production et la productivité et diminue le coût unitaire. Elle renforce la compétitivité hors prix et optimise l’eau. En contrepartie : coûts fixes et besoin de financement augmentent ; de nouvelles qualifications numériques deviennent nécessaires.',
  ],
  [
    '1.3 · Raisonnement juridique',
    'Déterminez la licéité de l’entente de R&D.',
    'Structure attendue : faits qualifiés → problème de droit → règle → application → conclusion.',
    'L’article L.420-1 du Code de commerce prohibe les ententes qui restreignent la concurrence. L’article L.420-4 permet une exemption si elles contribuent au progrès économique, réservent une part équitable du profit aux utilisateurs, restent indispensables et n’éliminent pas la concurrence. Le laboratoire commun paraît orienté vers l’innovation : la licéité dépendra du respect cumulé de ces critères.',
  ],
  [
    '2.1 · Croissance',
    'Analysez la modalité de croissance adaptée.',
    'Comparez rapidité, contrôle, ressources nécessaires et partage du risque.',
    'Une alliance avec un acteur implanté constitue une croissance conjointe. Elle accélère l’accès au marché, partage investissements et connaissances, mais implique une gouvernance claire et un partage des résultats. Ce choix est cohérent avec la faible capacité d’autofinancement.',
  ],
  [
    '2.2 · International',
    'Présentez les risques économiques liés à l’export vers les États-Unis.',
    'Reliez chaque risque à une conséquence concrète pour la PME.',
    'Risques de change, barrières tarifaires et réglementaires, coûts logistiques, évolution de la demande et intensité concurrentielle. Ils peuvent comprimer la marge, retarder la livraison ou imposer une adaptation du produit et du prix.',
  ],
  [
    '2.3 · Statut juridique',
    'Indiquez et justifiez le statut le plus approprié.',
    'Raisonnez avec les critères : associés, capital, responsabilité, gouvernance et évolution envisagée.',
    'Une SAS offre une grande liberté statutaire, facilite l’entrée d’investisseurs et limite la responsabilité aux apports. La conclusion doit toutefois être reliée précisément aux objectifs et contraintes donnés par les annexes.',
  ],
  [
    '3.1 · Politique économique',
    'Expliquez en quoi le label EPV relève d’une politique structurelle.',
    'Une politique structurelle agit durablement sur les capacités de production et la compétitivité.',
    'Le label valorise sur la durée des savoir-faire rares, soutient la compétitivité hors prix, l’emploi qualifié et l’attractivité à l’export. Il modifie durablement les conditions de l’offre : c’est un instrument structurel.',
  ],
  [
    '3.2 · Compétences',
    'Démontrez la mise en œuvre d’un management des compétences.',
    'Citez des pratiques, puis leurs effets sur les compétences individuelles et collectives.',
    'L’identification des besoins, la transmission du savoir-faire, la formation aux outils numériques et l’accompagnement des mobilités permettent d’adapter les compétences à la stratégie, de sécuriser les parcours et de préserver la qualité.',
  ],
  [
    '3.3 · Responsabilité',
    'Appréciez, par un raisonnement juridique, la responsabilité de l’entreprise.',
    'Vérifiez fait générateur, dommage, lien causal et éventuelle cause d’exonération.',
    'La réponse doit qualifier les faits et identifier le régime applicable. La responsabilité suppose un dommage certain, un fait générateur imputable et un lien causal. Il faut ensuite confronter chaque condition aux annexes avant de conclure, sans affirmer automatiquement la responsabilité.',
  ],
];

const state = JSON.parse(
  localStorage.getItem('nexus-state') || '{"completed":[],"quizzes":{},"xp":0}',
);
const save = () => {
  localStorage.setItem('nexus-state', JSON.stringify(state));
  updateDashboard();
};
function renderCourses(filter = 'all') {
  const grid = document.querySelector('#courseGrid');
  grid.innerHTML = courses
    .filter((c) => filter === 'all' || c.track === filter)
    .map((c) => {
      const done = state.completed.includes(c.id);
      const page = c.level.includes('CEJM')
        ? 'cejm.html'
        : c.level.includes('DROIT')
          ? 'droit.html'
          : c.level.includes('ÉCONOMIE')
            ? 'economie.html'
            : 'sgn.html';
      return `<a class="course-card" href="${page}"><div class="top"><span class="tag">${c.level}</span><span class="round">${c.icon}</span></div><h3>${c.title}</h3><p>${c.desc}</p><div class="card-bottom"><div class="card-progress"><i style="width:${done ? 100 : state.quizzes[c.id] ? 65 : 12}%"></i></div><div class="card-meta"><span>${c.chapters} chapitres · ${c.time}</span><b>OUVRIR LE PARCOURS →</b></div></div></a>`;
    })
    .join('');
  bindOpeners();
}
function courseTemplate(c) {
  return `<header class="lesson-head"><div class="eyebrow">${c.level} · PARCOURS GUIDÉ</div><h2 id="modalTitle">${c.title}</h2><p>${c.desc} À la fin de cette séquence, vous saurez mobiliser la notion dans une réponse argumentée.</p></header><nav class="lesson-tabs"><button class="active" data-tab="learn">Comprendre</button><button data-tab="quiz">Se tester</button><button data-tab="case">Appliquer</button></nav><section class="lesson-section active" data-section="learn"><div class="concept"><div class="eyebrow">NOTION CLÉ</div><h3>${c.concept}</h3><p>${c.definition}</p><ul>${c.points.map((p) => `<li>${p}</li>`).join('')}</ul></div><div class="example-box"><div class="eyebrow">EXEMPLE CONCRET</div><p>${c.example}</p></div><div class="memory"><div><b>1</b>Définir</div><div><b>2</b>Expliquer</div><div><b>3</b>Illustrer</div></div></section><section class="lesson-section" data-section="quiz"><div class="concept"><div class="eyebrow">QUESTION FLASH</div><h3>${c.question}</h3>${c.answers.map((a, i) => `<button class="quiz-option" data-answer="${i}">${String.fromCharCode(65 + i)} · ${a}</button>`).join('')}<div class="feedback">${c.feedback}</div></div></section><section class="lesson-section" data-section="case"><div class="concept"><div class="eyebrow">MINI-CAS · 10 MIN</div><h3>À vous de construire la réponse</h3><p>${c.example}</p><p><strong>Consigne :</strong> identifiez la notion pertinente, expliquez le mécanisme et appliquez-le explicitement à la situation.</p></div><div class="case-question"><button data-reveal>Voir les critères de réussite ＋</button><div class="correction"><strong>Votre réponse est complète si elle :</strong><ul><li>définit la notion avec précision ;</li><li>cite au moins deux éléments du contexte ;</li><li>explique le lien logique avec des connecteurs ;</li><li>se termine par une conclusion explicite.</li></ul></div></div></section><button class="button primary completion" data-complete="${c.id}">${state.completed.includes(c.id) ? 'Séquence maîtrisée ✓' : 'Marquer comme maîtrisée'}</button>`;
}
function openCourse(id) {
  const c = courses.find((x) => x.id === id);
  if (!c) return;
  document.querySelector('#courseContent').innerHTML = courseTemplate(c);
  const modal = document.querySelector('#courseModal');
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  bindLesson(c);
}
function bindOpeners() {
  document
    .querySelectorAll('[data-open-course]')
    .forEach((el) => (el.onclick = () => openCourse(el.dataset.openCourse)));
}
function bindLesson(c) {
  document.querySelectorAll('.lesson-tabs button').forEach(
    (b) =>
      (b.onclick = () => {
        document
          .querySelectorAll('.lesson-tabs button')
          .forEach((x) => x.classList.remove('active'));
        document.querySelectorAll('.lesson-section').forEach((x) => x.classList.remove('active'));
        b.classList.add('active');
        document.querySelector(`[data-section="${b.dataset.tab}"]`).classList.add('active');
      }),
  );
  document.querySelectorAll('.quiz-option').forEach(
    (b) =>
      (b.onclick = () => {
        if (state.quizzes[c.id] !== undefined) return;
        const good = Number(b.dataset.answer) === c.correct;
        b.classList.add(good ? 'correct' : 'wrong');
        document.querySelectorAll('.quiz-option')[c.correct].classList.add('correct');
        document.querySelector('.feedback').style.display = 'block';
        state.quizzes[c.id] = good;
        if (good) state.xp += 20;
        save();
        toast(good ? 'Bonne réponse · +20 XP' : 'À revoir : lisez le feedback puis reformulez.');
      }),
  );
  document.querySelector('[data-reveal]').onclick = (e) => {
    const x = e.target.nextElementSibling;
    x.style.display = x.style.display === 'block' ? 'none' : 'block';
  };
  document.querySelector('[data-complete]').onclick = (e) => {
    if (!state.completed.includes(c.id)) {
      state.completed.push(c.id);
      state.xp += 50;
      save();
      e.target.textContent = 'Séquence maîtrisée ✓';
      toast('Progression enregistrée · +50 XP');
      renderCourses(document.querySelector('.filters .active').dataset.filter);
    }
  };
}
function updateDashboard() {
  const pct = Math.round((state.completed.length / courses.length) * 100);
  document.querySelector('#navProgress').textContent = `${pct} % maîtrisé`;
  document.querySelector('#heroScore').textContent = state.xp;
  document.querySelector('#lessonsStat').textContent = state.completed.length;
  const q = Object.values(state.quizzes);
  document.querySelector('#quizStat').textContent = q.length
    ? `${Math.round((q.filter(Boolean).length / q.length) * 100)}%`
    : '0%';
  document.querySelector('#weekCount').textContent =
    `${Math.min(3, state.completed.length)} / 3 objectifs`;
  document.querySelector('#goalBar').style.width = `${pct}%`;
}
function openExam() {
  document.querySelector('#courseContent').innerHTML =
    `<header class="lesson-head"><div class="eyebrow">BTS CEJM · SESSION 2026</div><h2 id="modalTitle">La Savonnerie du Paradou</h2><p>Traitez chaque question sur feuille avant d’ouvrir l’indice ou le corrigé. Les propositions reprennent la logique du corrigé fourni et mettent en évidence la méthode attendue.</p></header><div class="lesson-tabs"><button class="active">Sujet guidé · 9 questions</button></div>${examQuestions.map((q, i) => `<article class="case-question"><div class="eyebrow">MISSION ${Math.floor(i / 3) + 1}</div><h3>${q[0]}</h3><p>${q[1]}</p><button data-reveal>Afficher l’indice ＋</button><div class="correction"><strong>Indice méthode</strong><p>${q[2]}</p><button data-reveal>Afficher le corrigé détaillé ＋</button><div class="correction"><strong>Éléments de corrigé</strong><p>${q[3]}</p></div></div></article>`).join('')}<button class="button primary completion" data-finish-exam>Terminer l'entraînement</button>`;
  document.querySelector('#courseModal').classList.add('open');
  document.querySelector('#courseModal').setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  document.querySelectorAll('[data-reveal]').forEach(
    (b) =>
      (b.onclick = (e) => {
        const x = e.target.nextElementSibling;
        x.style.display = x.style.display === 'block' ? 'none' : 'block';
      }),
  );
  document.querySelector('[data-finish-exam]').onclick = () => {
    state.xp += 100;
    save();
    toast('Sujet terminé · +100 XP');
  };
}
function toast(msg) {
  const t = document.querySelector('#toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2600);
}
document.querySelectorAll('[data-close]').forEach(
  (x) =>
    (x.onclick = () => {
      document.querySelector('#courseModal').classList.remove('open');
      document.body.style.overflow = '';
    }),
);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') document.querySelector('[data-close]').click();
});
document.querySelectorAll('.filters button').forEach(
  (b) =>
    (b.onclick = () => {
      document.querySelectorAll('.filters button').forEach((x) => x.classList.remove('active'));
      b.classList.add('active');
      renderCourses(b.dataset.filter);
    }),
);
document.querySelector('#startExam').onclick = openExam;
document.querySelector('#menuButton').onclick = () =>
  document.querySelector('.nav-links').classList.toggle('mobile');
document.querySelector('#progressButton').onclick = () =>
  document.querySelector('#parcours').scrollIntoView();
const observer = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add('visible');
    }),
  { threshold: 0.05 },
);
function revealAboveFold() {
  document.querySelectorAll('.reveal:not(.visible)').forEach((e) => {
    const rect = e.getBoundingClientRect();
    if (rect.top < window.innerHeight * 1.2) {
      e.classList.add('visible');
    } else {
      observer.observe(e);
    }
  });
}
revealAboveFold();
requestAnimationFrame(revealAboveFold);
renderCourses();
updateDashboard();
