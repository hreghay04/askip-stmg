const programs = {
  cejm: {
    label: 'BTS · Culture économique, juridique et managériale',
    short: 'CEJM',
    intro:
      `Comprendre les défis de l’entreprise en croisant systématiquement économie, droit et management. Un parcours contextualisé conforme aux six thèmes du référentiel BTS.`,
    color: 'coral',
    themes: [
      [
        `L’intégration de l’entreprise dans son environnement`,
        'Agents économiques, marchés, contrats, finalités et parties prenantes.',
        [
          'Agents économiques et flux',
          'Circuit économique',
          'Marché, prix et information',
          `Asymétrie d’information`,
          'Externalités',
          'Types de contrats',
          'Conditions de validité du contrat',
          'Parties prenantes',
          'Performance globale',
          'RSE',
        ],
        `Une microbrasserie locale négocie avec une banque, emploie huit salariés et vend via des distributeurs. Cartographier ses échanges permet d’identifier les flux réels, monétaires et les rapports de pouvoir.`,
        `Montrer comment le marché coordonne-t-il les décisions de l’entreprise.`,
        `L’offre et la demande contribuent à former un prix qui transmet une information. Mais asymétries d’information et externalités peuvent empêcher une allocation efficace.`,
      ],
      [
        `La régulation de l’activité économique`,
        `Rôle de l’État, politiques économiques, concurrence et innovation.`,
        [
          `Fonctions économiques de l'État`,
          'Prélèvements et dépenses publiques',
          'Politique budgétaire et monétaire',
          'Politiques conjoncturelles et structurelles',
          'Concurrence et ententes',
          'Abus de position dominante',
          'Brevet et marque',
          'Propriété industrielle',
          'Modèle PESTEL',
        ],
        `Une aide à la décarbonation réduit le coût d’un nouvel équipement. Elle soutient l’investissement à court terme et transforme durablement l’appareil productif.`,
        'Une coopération de R&D entre concurrents est-elle nécessairement illicite ?',
        `Non. Il faut caractériser ses effets sur la concurrence puis vérifier une éventuelle exemption liée au progrès économique, au bénéfice des utilisateurs et au caractère indispensable de l’accord.`,
      ],
      [
        `L’organisation de l’activité de l’entreprise`,
        'Production, transaction, financement, RSE et structures.',
        [
          'Facteurs de production',
          'Combinaison productive',
          'Productivité et rendements',
          'Coûts de transaction',
          'Faire ou faire faire',
          'Autofinancement et financement externe',
          'Actions et obligations',
          'RSE et développement durable',
          'Structures organisationnelles',
        ],
        `L’automatisation substitue du capital au travail : elle peut accroître productivité et qualité, mais augmente les coûts fixes et exige de nouvelles compétences.`,
        'Faut-il produire un composant ou le sous-traiter ?',
        `Comparer coût de production et coût de transaction, qualité, maîtrise du savoir-faire, flexibilité, dépendance et risques. La solution la moins chère n’est pas toujours la plus stratégique.`,
      ],
      [
        `L’impact du numérique sur la vie de l’entreprise`,
        'Données, plateformes, contrats électroniques et SI.',
        [
          `Système d’information`,
          'Donnée, information, connaissance',
          'Données personnelles et RGPD',
          'Bases légales du traitement',
          'Contrat électronique',
          'Plateformes numériques',
          'Effets de réseau directs et indirects',
          'Économie de la donnée',
          'Dématérialisation',
        ],
        `Une marketplace bénéficie d’effets de réseau : plus les vendeurs sont nombreux, plus elle attire d’acheteurs, ce qui attire à nouveau des vendeurs.`,
        `L’entreprise peut-elle collecter toute donnée utile à son activité ?`,
        'Non. La collecte suppose une finalité déterminée, une base légale, la minimisation des données, une durée limitée, la sécurité et le respect des droits des personnes.',
      ],
      [
        'Les mutations du travail',
        'Emploi, contrats, protection, compétences et conditions de travail.',
        [
          'Marché du travail',
          'Offre et demande de travail',
          'Contrat de travail et subordination',
          'CDI, CDD et contrats atypiques',
          'Pouvoir de direction et libertés',
          'Formation professionnelle',
          'GPEC',
          'Qualité de vie au travail',
          'Dialogue social et négociation',
        ],
        `Le télétravail modifie le contrôle, l’autonomie et les risques psychosociaux. Il nécessite des règles, des outils adaptés et un management fondé sur les objectifs.`,
        'Comment reconnaître un contrat de travail ?',
        'Il repose sur une prestation, une rémunération et surtout un lien de subordination juridique : pouvoir de donner des ordres, contrôler et sanctionner.',
      ],
      [
        `Les choix stratégiques de l’entreprise`,
        'Diagnostic, orientations, croissance et internationalisation.',
        [
          'Diagnostic externe (PESTEL, 5 forces)',
          'Diagnostic interne (ressources, compétences)',
          'Avantage concurrentiel durable',
          `Domaines d'activité stratégiques`,
          'Spécialisation et diversification',
          'Domination par les coûts / Différenciation',
          'Croissance interne, externe, conjointe',
          'Internationalisation',
          'Alliances et partenariats',
        ],
        `Une PME au savoir-faire rare mais aux moyens financiers limités peut s’internationaliser par alliance afin de partager risques, investissements et connaissance du marché.`,
        'Une ressource constitue-t-elle toujours un avantage concurrentiel ?',
        `Non. Elle doit être pertinente, rare, difficile à imiter et correctement organisée. Une machine accessible à tous ne suffit généralement pas à différencier durablement l’entreprise.`,
      ],
    ],
  },
  droit: {
    label: 'STMG · Droit',
    short: 'Droit',
    intro:
      'Acquérir le vocabulaire juridique, qualifier une situation et construire un raisonnement rigoureux. Le parcours couvre la première et la terminale.',
    themes: [
      [
        `Qu’est-ce que le droit ?`,
        'Fonctions, règle de droit, sources et hiérarchie.',
        [
          'État de droit et laïcité',
          'Fonctions du droit',
          'Distinction droit et morale',
          'Règle de droit et ordre public',
          'Sources nationales (loi, règlement)',
          'Sources européennes (traités, directives)',
          'Jurisprudence et Cour de cassation',
          'Hiérarchie des normes et QPC',
          'Conventions et accords collectifs',
        ],
        'Un règlement intérieur ne peut contredire une loi : une norme inférieure doit respecter les normes qui lui sont supérieures.',
        'Pourquoi le droit doit-il évoluer ?',
        'Il accompagne les transformations sociales, économiques et technologiques tout en maintenant sécurité juridique et protection des libertés.',
      ],
      [
        'Comment le droit permet-il de régler un litige ?',
        'Litige, preuve, juridictions et procès équitable.',
        [
          'Litige et prétentions',
          'Acte juridique et fait juridique',
          'Charge et modes de preuve',
          'Preuve électronique',
          `Compétence d'attribution et territoriale`,
          'Procès équitable et double degré',
          'Cour de cassation',
          'Médiation, conciliation, arbitrage',
        ],
        'Un consommateur réclame réparation à un professionnel. Il faut identifier les prétentions, les moyens de preuve et la juridiction compétente.',
        'La Cour de cassation rejuge-t-elle les faits ?',
        'Non. Elle contrôle la correcte application du droit par les juges du fond ; elle rejette le pourvoi ou casse la décision.',
      ],
      [
        'Qui peut faire valoir ses droits ?',
        'Personnalité juridique, capacité et patrimoine.',
        [
          'Personne physique (naissance, décès)',
          'Personne morale (immatriculation)',
          'Nom, domicile, siège social',
          'Droits patrimoniaux et extrapatrimoniaux',
          `Capacité de jouissance et d'exercice`,
          'Incapacité et représentation',
          'Patrimoine et séparation des dettes',
          `Statut de l'animal`,
        ],
        'Une association déclarée acquiert une personnalité distincte de ses membres : elle peut contracter, posséder un patrimoine et agir en justice.',
        'Un mineur a-t-il des droits ?',
        `Oui, il a la personnalité juridique mais sa capacité d’exercice est limitée ; ses représentants accomplissent en principe les actes juridiques.`,
      ],
      [
        'Quels droits sont reconnus aux personnes ?',
        'Droits patrimoniaux, extrapatrimoniaux et numérique.',
        [
          'Droit de propriété (usage, fruits, disposition)',
          'Biens corporels et incorporels',
          `Vie privée et droit à l’image`,
          'Données personnelles et RGPD',
          'Identité numérique',
          `Droit d’auteur`,
          `Brevet d’invention`,
          'Marque commerciale',
          'Trouble anormal de voisinage',
        ],
        `Publier la photo identifiable d’un élève suppose en principe son autorisation, indépendamment du fait que la photo ait été prise dans un lieu accessible.`,
        'Propriété et droit au respect de la vie privée sont-ils absolus ?',
        `Non. Leur exercice connaît des limites légales et doit parfois être concilié avec d’autres droits fondamentaux.`,
      ],
      [
        'Quel est le rôle du contrat ?',
        'Formation, exécution, inexécution et consommation.',
        [
          'Formation du contrat',
          'Consentement libre et éclairé',
          'Vices du consentement (erreur, dol, violence)',
          'Capacité et contenu licite',
          'Force obligatoire et bonne foi',
          'Inexécution et sanctions',
          `Obligation d'information précontractuelle`,
          'Droit de rétractation',
          'Clauses abusives',
          'Contrat électronique',
        ],
        `Un abonnement en ligne avec une case précochée pose la question d’un consentement libre et éclairé et des règles protectrices du consommateur.`,
        `Que peut demander le créancier en cas d’inexécution ?`,
        `Selon la situation : exception d’inexécution, exécution forcée, réduction du prix, résolution et/ou dommages-intérêts.`,
      ],
      [
        `Qu’est-ce qu’être responsable ?`,
        'Responsabilités civile et pénale, dommage et réparation.',
        [
          'Responsabilité civile et pénale',
          'Dommage réparable (corporel, matériel, moral)',
          'Fait générateur et lien de causalité',
          'Responsabilité du fait des choses',
          `Responsabilité du fait d’autrui`,
          'Responsabilité contractuelle',
          'Obligation de moyens et de résultat',
          'Préjudice écologique',
          'Produits défectueux',
          'Exonération et assurance',
        ],
        'Un chariot mal entretenu blesse un client : il faut identifier le dommage, le fait générateur et le lien de causalité avant de conclure.',
        'La responsabilité civile vise-t-elle à punir ?',
        'Son objectif principal est la réparation du dommage. La responsabilité pénale sanctionne une infraction au nom de la société.',
      ],
      [
        'Comment le droit encadre-t-il le travail salarié ?',
        'Contrat, libertés, rupture et conflits.',
        [
          'Contrat de travail et subordination',
          'CDI, CDD, intérim, saisonnier',
          'Clauses spécifiques (mobilité, non-concurrence, télétravail)',
          'Pouvoir de direction, contrôle, sanction',
          'Licenciement (motif personnel, économique)',
          'Démission et rupture conventionnelle',
          'Droit de grève',
          'Liberté syndicale et CSE',
          'Négociation collective',
        ],
        'Une clause de mobilité doit être justifiée, proportionnée et définir précisément sa zone géographique pour ne pas porter une atteinte excessive au salarié.',
        'Tout licenciement est-il possible avec une indemnité ?',
        'Non. Il doit reposer sur une cause réelle et sérieuse et respecter une procédure ; certains motifs sont illicites ou discriminatoires.',
      ],
      [
        'Dans quel cadre et comment entreprendre ?',
        `Liberté d’entreprendre, structures et concurrence.`,
        [
          `Liberté d'entreprendre`,
          'Entreprise individuelle',
          'Contrat de société et affectio societatis',
          'EURL, SARL, SAS, SA',
          'Apports et limitation de responsabilité',
          'Société coopérative (SCOP)',
          'Concurrence déloyale',
          'Pratiques anticoncurrentielles',
          'Franchise et concession',
          'Procédures collectives',
        ],
        `Le choix entre entreprise individuelle et société dépend du projet, du nombre d’associés, des besoins financiers, du régime social et du risque accepté.`,
        'Copier une idée constitue-t-il toujours une faute ?',
        'Non. Les idées sont en principe de libre parcours ; la protection porte sur certains droits et la copie peut devenir fautive en cas de confusion, parasitisme ou droit privatif.',
      ],
    ],
  },
  economie: {
    label: 'STMG · Économie',
    short: 'Économie',
    intro:
      'Lire les mécanismes économiques, interpréter des données et argumenter à partir des neuf thèmes du programme de première et terminale.',
    themes: [
      [
        'Les grandes questions économiques',
        'Choix, rareté, agents et échanges.',
        [
          'Besoins illimités et rareté',
          'Biens et services (marchands, non marchands)',
          `Coût d’opportunité`,
          'Utilité et utilité marginale',
          'Rationalité et préférences',
          'Agents économiques et fonctions',
          'Circuit économique',
          'Fonctions de la monnaie',
        ],
        `Consacrer un budget à un ordinateur signifie renoncer à d’autres consommations : ce renoncement constitue un coût d’opportunité.`,
        'Pourquoi les agents doivent-ils effectuer des choix ?',
        'Leurs ressources sont limitées alors que leurs besoins sont nombreux ; ils arbitrent sous contrainte.',
      ],
      [
        'Création et répartition de la richesse',
        'Production, valeur ajoutée, PIB et revenus.',
        [
          'Production marchande et non marchande',
          'Consommations intermédiaires',
          'Valeur ajoutée',
          'PIB nominal et réel',
          'Limites du PIB',
          'Revenus primaires (travail, capital, mixtes)',
          'Redistribution et prestations sociales',
          'Revenu disponible',
        ],
        `Avec 300 000 € de production et 120 000 € de consommations intermédiaires, l’entreprise crée 180 000 € de valeur ajoutée.`,
        'Le PIB mesure-t-il parfaitement le bien-être ?',
        'Non : activités domestiques, inégalités, qualité environnementale et dimensions non marchandes sont imparfaitement reflétées.',
      ],
      [
        `L’affectation du revenu des ménages`,
        `Consommation, épargne et pouvoir d’achat.`,
        [
          'Revenu disponible',
          'Consommation et ses déterminants',
          `Pouvoir d’achat et IPC`,
          'Propension à consommer et à épargner',
          'Épargne financière et non financière',
          `Motifs d’épargne`,
          `Effet d’imitation et normes sociales`,
          `Taux d’épargne`,
        ],
        `Si le revenu nominal progresse de 3 % et les prix de 5 %, le pouvoir d’achat diminue approximativement.`,
        'Pourquoi un ménage épargne-t-il ?',
        `Précaution, projet futur, constitution d’un patrimoine ou recherche de rendement ; le revenu et les taux influencent l’arbitrage.`,
      ],
      [
        `Le financement de l’activité économique`,
        'Capacités, besoins, banques et marchés.',
        [
          'Capacité et besoin de financement',
          'Autofinancement',
          'Financement indirect (crédit bancaire)',
          'Création monétaire',
          'Financement direct (marché des capitaux)',
          'Actions et obligations',
          'Rendement, risque et liquidité',
          `Taux d'intérêt`,
          'Diversification des placements',
        ],
        `Une émission d’actions apporte des fonds propres sans remboursement prévu, mais dilue potentiellement le contrôle et les bénéfices.`,
        'Crédit bancaire et obligation sont-ils identiques ?',
        `Non. Le crédit relève d’un intermédiaire bancaire ; l’obligation est un titre de dette émis sur le marché.`,
      ],
      [
        'La concurrence sur les marchés',
        'Structures, pouvoir de marché et défaillances.',
        [
          `Offre, demande et prix d'équilibre`,
          'Élasticité-prix de la demande',
          'Concurrence pure et parfaite',
          'Monopole, oligopole, pouvoir de marché',
          `Barrières à l'entrée`,
          'Externalités positives et négatives',
          'Biens publics (non rivalité, non exclusion)',
          `Asymétrie d'information`,
          'Défaillances de marché',
        ],
        `Une plateforme dominante profite d’effets de réseau qui renforcent les barrières à l’entrée et son pouvoir de marché.`,
        'Un marché concurrentiel est-il toujours efficace ?',
        `Non, notamment en présence d’externalités, biens publics ou asymétries d’information.`,
      ],
      [
        `L’intervention de l’État`,
        'Fonctions, budget et politiques économiques.',
        [
          'Fonctions de Musgrave (allocation, redistribution, stabilisation)',
          'Prélèvements obligatoires',
          'Dépenses publiques',
          'Budget, déficit et dette publique',
          'Politique budgétaire de relance / rigueur',
          'Politique monétaire et taux directeurs',
          'Politiques structurelles',
          'Effets attendus et effets pervers',
        ],
        `Une baisse temporaire d’impôt peut soutenir la demande ; un investissement éducatif agit davantage sur la croissance potentielle.`,
        'Déficit et dette sont-ils synonymes ?',
        'Non. Le déficit est un flux annuel ; la dette est un stock accumulé de financements passés.',
      ],
      [
        `L’État, l’emploi et le chômage`,
        'Marché du travail, politiques et transformations.',
        [
          `Population active et taux d'activité`,
          'Taux de chômage (BIT)',
          'Chômage conjoncturel et structurel',
          'Coût du travail',
          'Capital humain',
          'Politiques passives (indemnisation)',
          'Politiques actives (formation, aides)',
          'Flexibilité du marché du travail',
          `Appariement offre-demande d'emploi`,
        ],
        `Une formation de reconversion améliore l’appariement entre compétences offertes et emplois disponibles.`,
        `Toute baisse du chômage signifie-t-elle plus d’emplois ?`,
        'Pas nécessairement : une sortie de la population active peut aussi réduire le taux de chômage.',
      ],
      [
        'Le commerce international',
        'Échanges, spécialisation, firmes et protectionnisme.',
        [
          'Avantage comparatif (Ricardo)',
          'Spécialisation internationale',
          'Libre-échange et ses effets',
          'OMC et accords régionaux',
          'Protectionnisme (droits de douane, quotas)',
          'Barrières non tarifaires',
          'Taux de change',
          'Firmes multinationales',
          'Chaînes de valeur mondiales',
        ],
        'Même moins productif dans tous les domaines, un pays peut se spécialiser là où son désavantage relatif est le plus faible.',
        'Quels sont les effets ambivalents du libre-échange ?',
        'Prix et variété, spécialisation et débouchés ; mais aussi ajustements sectoriels, dépendances et répartition inégale des gains.',
      ],
      [
        'Croissance et développement durable',
        'Sources, limites et transition écologique.',
        [
          'Croissance extensive et intensive',
          'Productivité et progrès technique',
          'Innovation (produit, procédé)',
          'IDH et limites du PIB',
          'Développement durable',
          'Externalités et internalisation',
          `Taxe carbone et quotas d'émission`,
          'Normes environnementales',
          'Économie circulaire',
        ],
        'Une taxe carbone internalise une partie du coût environnemental en modifiant les prix relatifs et les comportements.',
        'Croissance et développement sont-ils équivalents ?',
        'Non. La croissance mesure une hausse de production ; le développement inclut transformations sociales, santé, éducation et soutenabilité.',
      ],
    ],
  },
  sgn: {
    label: 'STMG · Sciences de gestion et numérique',
    short: 'SGN',
    intro:
      `Observer les organisations, manipuler l’information et évaluer la performance à travers les quatre thèmes du programme de première.`,
    themes: [
      [
        `De l’individu à l’acteur`,
        'Comportements, compétences, activité et relations.',
        [
          'Personnalité et traits individuels',
          'Émotions et influence sur la décision',
          'Perception et cadre de référence',
          'Attitude et comportement',
          'Compétence (savoirs, savoir-faire, savoir-être)',
          'Compétence individuelle et collective',
          'Qualification et formation',
          'Groupe formel et informel',
          'Leadership et dynamique de groupe',
          'Culture organisationnelle',
        ],
        'Deux salariés interprètent différemment un même message selon leur expérience et leur perception ; le management doit réduire les ambiguïtés.',
        `Comment l’individu devient-il acteur ?`,
        `En mobilisant ses compétences, en interagissant avec le groupe et en adoptant ou en faisant évoluer les règles et la culture de l’organisation.`,
      ],
      [
        'Numérique et intelligence collective',
        'Donnée, information, collaboration et SI.',
        [
          'Donnée, information, connaissance',
          `Système d’information (acteurs, outils, règles)`,
          'Processus et PGI',
          'Travail collaboratif et intelligence collective',
          'Communautés en ligne et forums',
          `Réseaux sociaux d’entreprise`,
          'E-réputation et identité numérique',
          'Traces numériques et big data',
          'Cloud computing',
          'Sécurité des données',
        ],
        `Un tableau de ventes devient une information lorsqu’il est structuré et interprété pour décider d’un réapprovisionnement.`,
        'Le numérique garantit-il la collaboration ?',
        'Non. Il offre des outils, mais règles de partage, confiance, qualité des données et animation restent déterminantes.',
      ],
      [
        'Création de valeur et performance',
        'Valeurs, indicateurs et tableaux de bord.',
        [
          'Valeur ajoutée',
          'Valeur financière (rentabilité, trésorerie)',
          'Valeur perçue par le client',
          'Valeur sociale (conditions, insertion)',
          'Coûts, charges directes et indirectes',
          'Seuil de rentabilité',
          'Prix et marge',
          'Productivité du travail',
          'Efficacité et efficience',
          'Indicateurs et tableaux de bord',
        ],
        'Une organisation peut atteindre son objectif commercial tout en consommant trop de ressources : elle est efficace mais peu efficiente.',
        'Pourquoi combiner plusieurs indicateurs ?',
        `Parce que la performance est multidimensionnelle et que l’amélioration d’une dimension peut dégrader une autre.`,
      ],
      [
        'Temps et risque',
        'Prévision, actualisation, qualité et décision.',
        [
          'Horizon de décision (court/long terme)',
          'Veille informationnelle',
          'Prévision et simulation',
          'Actualisation et valeur temps',
          'Risque et incertitude',
          'Probabilité et gravité',
          'Matrice de risques',
          'Prévention, transfert, acceptation',
          'Gestion de projet (planification, jalons)',
          'Ordonnancement et diagramme de Gantt',
        ],
        'Lancer trop tard un produit réduit le risque technique mais augmente le risque concurrentiel : décider revient à arbitrer entre plusieurs risques.',
        'Peut-on supprimer tout risque ?',
        `Non. On peut l’identifier, l’évaluer, le prévenir, le transférer ou l’accepter selon son niveau et le coût du traitement.`,
      ],
    ],
  },
};

const exams = {
  cejm: {
    title: 'CEJM BTS 2026',
    subtitle: 'SolaireTech',
    desc: 'Trois missions croisant économie, droit et management autour d’une entreprise de panneaux solaires.',
    duration: '4 h',
    qcount: 9,
    level: 'BTS',
    missions: [
      {
        num: 1,
        title: 'Environnement et régulation',
        summary: 'PESTEL, parties prenantes et politique publique.',
        time: '3 questions · 50 min',
        items: [
          [
            '1.1 · Diagnostic externe',
            `SolaireTech, PME de 45 salariés, conçoit et installe des panneaux photovoltaïques pour les professionnels. Le marché progresse de 20 % par an grâce aux obligations réglementaires sur les bâtiments neufs. Un concurrent chinois propose des panneaux 40 % moins chers mais dont l’empreinte carbone est trois fois supérieure.`,
            'Réalisez un diagnostic du macro-environnement de SolaireTech en mobilisant le modèle PESTEL.',
            `Politique : obligation d’installation, soutien public à la transition. Économique : croissance du marché, pression concurrentielle sur les prix. Socioculturel : sensibilité croissante au développement durable. Technologique : évolution rapide du rendement des cellules. Écologique : bilan carbone des panneaux comme critère de choix. Légal : normes de construction, réglementation des marchés publics. La réglementation constitue une opportunité majeure ; la concurrence par les prix est la menace principale.`,
          ],
          [
            '1.2 · Parties prenantes',
            `Les clients institutionnels exigent un bilan carbone favorable. Les salariés demandent une revalorisation salariale face à l’inflation. Les actionnaires souhaitent maintenir la marge. Un fournisseur stratégique de cellules annonce une hausse de 15 %.`,
            'Identifiez les parties prenantes, leurs attentes et les tensions possibles.',
            `Clients : qualité environnementale et prix compétitif. Salariés : rémunération et conditions de travail. Actionnaires : rentabilité et croissance. Fournisseur : prix couvrant ses coûts. La tension oppose la hausse des coûts et la pression sur les prix. La direction doit arbitrer entre ces intérêts divergents, ce qui illustre le caractère systémique de l’entreprise.`,
          ],
          [
            '1.3 · Politique publique',
            `L’État lance un crédit d’impôt de 30 % pour les installations de panneaux européens et finance un programme de formation aux métiers du solaire.`,
            'Montrez comment ces mesures combinent politiques conjoncturelle et structurelle.',
            `Le crédit d’impôt est une mesure budgétaire conjoncturelle : il soutient immédiatement la demande. Le programme de formation est structurel : il agit sur l’offre de travail qualifié et la productivité à long terme. Ensemble, elles corrigent une défaillance de marché (externalité positive insuffisamment valorisée) et poursuivent allocation, redistribution et stabilisation.`,
          ],
        ],
      },
      {
        num: 2,
        title: 'Organisation et numérique',
        summary: 'Production, coûts de transaction, SI et RGPD.',
        time: '3 questions · 55 min',
        items: [
          [
            '2.1 · Faire ou faire faire',
            `SolaireTech hésite entre fabriquer ses propres onduleurs (investissement de 800 000 €, réduction du coût unitaire de 18 %) et les acheter auprès d’un fournisseur allemand fiable dont les délais s’allongent.`,
            'Analysez ce choix en mobilisant facteurs de production et coûts de transaction.',
            `Internaliser mobilise du capital et de nouvelles compétences. L’intégration supprime les coûts de transaction (recherche, négociation, contrôle, risque de rupture). Externaliser maintient flexibilité et expertise, mais expose à la dépendance. Le choix dépend du volume, de la maîtrise technologique et de la capacité de financement.`,
          ],
          [
            `2.2 · Système d’information`,
            'SolaireTech déploie un logiciel de suivi connecté qui remonte en temps réel la production de chaque installation. Les données permettent la maintenance prédictive.',
            'Montrez comment ce SI crée de la valeur pour SolaireTech et ses clients.',
            'Pour SolaireTech : anticipation des pannes, démonstration de performance, services à valeur ajoutée. Pour les clients : visibilité sur le rendement, réduction des arrêts. Le SI transforme des données brutes en informations décisionnelles, créant un avantage concurrentiel fondé sur le service.',
          ],
          [
            '2.3 · Données personnelles',
            `Le logiciel collecte localisation, consommation énergétique et horaires d’activité de chaque site. Un client s’interroge sur l’utilisation de ces données.`,
            'Analysez la conformité de cette collecte au RGPD.',
            'Le RGPD exige : finalité déterminée, base légale, minimisation, durée limitée, sécurité et droits des personnes. Les horaires pourraient révéler des données sur les salariés du client : leur collecte doit être justifiée et proportionnée. SolaireTech doit informer clairement et prévoir des garanties contractuelles.',
          ],
        ],
      },
      {
        num: 3,
        title: 'Travail et stratégie',
        summary: 'Contrat, compétences et choix de croissance.',
        time: '3 questions · 55 min',
        items: [
          [
            '3.1 · Contrat de travail',
            'Le contrat des installateurs inclut une clause de mobilité « France entière » et une clause de non-concurrence de deux ans sans contrepartie financière.',
            'Analysez la validité de ces clauses.',
            `La clause de mobilité « France entière » est trop vaste ; la jurisprudence exige une zone géographique précise. La clause de non-concurrence sans contrepartie financière est nulle : une indemnité compensatrice, une limitation dans le temps, l’espace et l’activité sont cumulativement requises.`,
          ],
          [
            '3.2 · Compétences',
            `L’évolution technologique exige de nouvelles qualifications en domotique et en gestion de données. Cinq salariés risquent de ne plus maîtriser les équipements dans deux ans.`,
            'Proposez une démarche de GPEC adaptée.',
            `Diagnostiquer les compétences présentes, identifier les besoins futurs, mesurer l’écart, puis agir : formation professionnelle, tutorat interne, recrutement ciblé ou mobilité. L’enjeu est de transformer la contrainte technologique en montée en compétences.`,
          ],
          [
            '3.3 · Choix stratégique',
            `Trois options : a) croissance interne par recrutement, b) rachat d’un concurrent régional (400 000 €), c) alliance avec un fabricant espagnol pour le marché ibérique.`,
            'Comparez les trois modalités de croissance et recommandez la plus adaptée.',
            `Interne : maîtrise totale mais lenteur. Externe : rapidité, parts de marché immédiates, mais coût et risques d’intégration. Conjointe : partage des risques et des connaissances du marché espagnol, sans supporter seule les coûts. Au regard de la capacité financière limitée et de l’ambition internationale, l’alliance paraît la plus cohérente.`,
          ],
        ],
      },
    ],
  },
  droit: {
    title: 'Droit STMG 2026',
    subtitle: 'L’affaire GreenMove',
    desc: 'Un sujet complet croisant trois thèmes du programme. Qualifiez juridiquement et construisez un raisonnement structuré.',
    duration: '2 h',
    qcount: 6,
    level: 'STMG',
    missions: [
      {
        num: 1,
        title: 'Responsabilité civile',
        summary: 'Trottinette défectueuse, dommage corporel et rôle du prestataire.',
        time: '2 questions · 30 min',
        items: [
          [
            '1.1 · Responsabilité du fait des choses',
            `Un utilisateur de GreenMove, entreprise de location de trottinettes électriques en libre-service, est blessé lorsque le frein de sa trottinette lâche en descente. Il subit une fracture du poignet et un arrêt de travail de trois semaines. GreenMove confie l’entretien à la société MaintenPlus, qui avait vérifié l’engin deux jours avant.`,
            'Identifiez les conditions de la responsabilité civile et déterminez si GreenMove peut être tenue pour responsable.',
            `Le dommage est corporel, certain et personnel. Le fait générateur relève de la responsabilité du fait des choses : GreenMove est gardienne de la trottinette. Le lien de causalité relie le frein défectueux à la chute. GreenMove ne peut s’exonérer en invoquant le contrat avec MaintenPlus, qui n’est ni force majeure ni fait d’un tiers exclusif. Elle reste responsable vis-à-vis de la victime.`,
          ],
          [
            '1.2 · Exonération',
            `GreenMove affirme que l’utilisateur roulait à vitesse excessive sur un trottoir mouillé, en contradiction avec les conditions d’utilisation.`,
            `Discutez les possibilités d’exonération de GreenMove.`,
            `La faute de la victime peut atténuer la responsabilité. Vitesse excessive et sol glissant constituent une imprudence. L’exonération totale exigerait que la faute présente les caractères de la force majeure (imprévisibilité, irrésistibilité, extériorité), ce qui est peu probable ici. Une exonération partielle est plus vraisemblable : le juge répartit la charge du dommage.`,
          ],
        ],
      },
      {
        num: 2,
        title: 'Contrat de travail',
        summary: 'CDD renouvelé, requalification et surveillance.',
        time: '2 questions · 30 min',
        items: [
          [
            '2.1 · Recours au CDD',
            `Kévin, chargé de maintenance, a été embauché en CDD pour « accroissement temporaire d’activité ». Son contrat a été renouvelé trois fois en vingt mois sur un poste permanent.`,
            'Analysez la régularité du recours au CDD et les conséquences pour Kévin.',
            `Le CDD ne peut pourvoir durablement un emploi lié à l’activité normale. Un renouvellement sur vingt mois pour un poste permanent contredit le motif de recours. Kévin peut demander la requalification en CDI devant le conseil de prud’hommes, avec une indemnité au moins égale à un mois de salaire.`,
          ],
          [
            '2.2 · Pouvoir de direction',
            `GreenMove installe une application de géolocalisation permanente sur le téléphone professionnel de Kévin sans l’en informer.`,
            'Ce dispositif de contrôle est-il licite ?',
            `L’employeur peut contrôler l’activité, mais toute restriction aux libertés doit être justifiée et proportionnée. Le salarié doit être préalablement informé des dispositifs de surveillance. L’absence d’information rend la géolocalisation inopposable. La surveillance permanente pourrait être jugée disproportionnée si une vérification ponctuelle suffisait.`,
          ],
        ],
      },
      {
        num: 3,
        title: 'Contrat et consommation',
        summary: 'Conditions générales, clause abusive et consentement numérique.',
        time: '2 questions · 30 min',
        items: [
          [
            '3.1 · Validité du contrat',
            `L’inscription sur l’application GreenMove s’effectue en faisant défiler les conditions générales sans case à cocher. Une clause prévoit que « GreenMove décline toute responsabilité en cas de dommage, quelle qu’en soit la cause ».`,
            'Discutez la validité de cette clause.',
            `Un contrat suppose un consentement libre et éclairé. L’absence de case de validation pose la question de la preuve du consentement. Une clause exonératoire totale crée un déséquilibre significatif : elle peut être qualifiée de clause abusive et réputée non écrite. Le consommateur bénéficie de protections d’ordre public.`,
          ],
          [
            '3.2 · Droit de rétractation',
            `Un utilisateur souscrit un abonnement mensuel « Premium » depuis l’application et souhaite se rétracter le lendemain.`,
            `Précisez si l’utilisateur peut se rétracter.`,
            `Le contrat est conclu à distance avec un consommateur : le droit de rétractation de quatorze jours s’applique en principe. Certaines exceptions existent pour les services pleinement exécutés avant la fin du délai avec accord exprès. Si l’abonnement n’a pas encore été utilisé, la rétractation devrait être possible. Le professionnel doit informer clairement du droit et de ses exceptions.`,
          ],
        ],
      },
    ],
  },
  economie: {
    title: 'Économie STMG 2026',
    subtitle: 'Le marché du vélo électrique',
    desc: 'Trois parties croisant les mécanismes économiques du programme. Analysez les données, identifiez les mécanismes et argumentez.',
    duration: '2 h',
    qcount: 6,
    level: 'STMG',
    missions: [
      {
        num: 1,
        title: 'Marché et prix',
        summary: 'Structure du marché, offre, demande et défaillances.',
        time: '2 questions · 30 min',
        items: [
          [
            '1.1 · Structure du marché',
            'Document 1 — Le marché français du vélo à assistance électrique (VAE) a progressé de 28 % en valeur entre 2022 et 2025. Trois acteurs réalisent 62 % des ventes. Le prix moyen est passé de 1 800 € à 1 550 € tandis que le nombre de modèles disponibles a doublé.',
            `Caractérisez la structure de ce marché et montrez comment l’évolution des prix influence les comportements.`,
            `Structure oligopolistique : un petit nombre d’offreurs détient une large part de marché. La baisse du prix moyen stimule la demande (élasticité-prix). La concurrence incite les producteurs à innover et à comprimer les coûts. Les économies d’échelle renforcent la position des leaders.`,
          ],
          [
            '1.2 · Défaillances',
            `Document 2 — La production de batteries au lithium génère des rejets polluants non intégrés au prix du vélo. Les consommateurs ne disposent pas toujours d’informations fiables sur la durée de vie réelle de la batterie.`,
            'Identifiez les défaillances de marché et expliquez leurs conséquences.',
            `Externalité négative : la pollution est un coût supporté par la collectivité, non reflété dans le prix, d’où une surproduction par rapport à l’optimum. Asymétrie d’information : le producteur connaît la durée réelle mieux que l’acheteur, ce qui fausse le choix et fragilise la confiance.`,
          ],
        ],
      },
      {
        num: 2,
        title: 'Intervention de l’État',
        summary: 'Bonus écologique, fonctions et limites.',
        time: '2 questions · 35 min',
        items: [
          [
            `2.1 · Fonctions de l’État`,
            `Document 3 — L’État accorde un bonus de 400 € pour l’achat d’un VAE aux ménages dont le revenu fiscal est inférieur à 15 400 €. Le secteur du cycle emploie 12 000 personnes (+15 % sur trois ans). Le déficit public atteint 5,2 % du PIB.`,
            'Présentez les fonctions économiques mobilisées par le bonus et analysez leurs effets.',
            `Allocation : orienter la consommation vers un mode moins polluant en corrigeant l’externalité. Redistribution : cibler les ménages modestes réduit l’inégalité d’accès. Stabilisation : la dépense soutient indirectement la demande et l’emploi dans la filière.`,
          ],
          [
            '2.2 · Limites',
            `Document 4 — 70 % des VAE vendus sont assemblés à partir de composants importés d’Asie. Le coût budgétaire atteint 95 millions d’euros par an.`,
            'Discutez les limites de cette politique.',
            `Le bonus profite en partie aux producteurs étrangers : l’effet multiplicateur national est limité. Le coût aggrave le déficit. Un effet d’aubaine existe pour des ménages qui auraient acheté sans aide. La mesure conjoncturelle ne transforme pas l’appareil productif : elle doit être complétée par des mesures structurelles.`,
          ],
        ],
      },
      {
        num: 3,
        title: 'Commerce international',
        summary: 'Spécialisation, chaîne de valeur et protectionnisme.',
        time: '2 questions · 35 min',
        items: [
          [
            '3.1 · Échanges',
            `Document 5 — La France exporte des vélos haut de gamme vers l’Allemagne et la Belgique, mais importe 80 % de ses composants de Chine et de Taïwan où les coûts de production sont inférieurs.`,
            `Expliquez, en mobilisant l’avantage comparatif, pourquoi la France à la fois importe et exporte.`,
            `L’avantage comparatif repose sur les coûts relatifs. La France dispose d’un avantage dans la conception haut de gamme (savoir-faire, image, proximité européenne). La Chine dispose d’un avantage dans les composants standardisés (coût du travail, économies d’échelle). La chaîne de valeur se fragmente géographiquement selon ces avantages.`,
          ],
          [
            '3.2 · Protectionnisme',
            `Document 6 — L’Union européenne envisage un droit de douane de 25 % sur les batteries de vélos importées afin de protéger les investissements dans les « gigafactories » européennes.`,
            'Discutez les avantages et les inconvénients de cette mesure.',
            `Avantages : protéger une industrie naissante, sécuriser la chaîne d’approvisionnement, maintenir l’emploi européen. Inconvénients : hausse du prix pour le consommateur, risque de représailles commerciales, moindre pression concurrentielle, renchérissement pour les assembleurs dépendants des composants importés.`,
          ],
        ],
      },
    ],
  },
  sgn: {
    title: 'SGN STMG 2026',
    subtitle: 'NaturaBio',
    desc: 'Trois parties couvrant les thèmes du programme. Observez l’organisation, analysez l’information et évaluez la performance.',
    duration: '1 h 30',
    qcount: 5,
    level: 'STMG',
    missions: [
      {
        num: 1,
        title: 'De l’individu à l’acteur',
        summary: 'Perception, compétences et dynamique de groupe.',
        time: '2 questions · 25 min',
        items: [
          [
            '1.1 · Facteurs individuels',
            `NaturaBio fabrique des cosmétiques biologiques. L’arrivée d’Amira, nouvelle responsable de production, modifie les procédures qualité. Marc, technicien depuis huit ans, perçoit les nouvelles consignes comme une remise en cause de son expertise. Lucie, recrutée récemment, y voit une opportunité d’apprentissage.`,
            'Montrez comment les facteurs individuels expliquent les réactions différentes de Marc et Lucie.',
            `Personnalité, expérience et perception influencent le comportement. Marc filtre les consignes à travers ses habitudes et y lit une menace pour son statut : sa perception est défensive. Lucie, sans ancienneté, perçoit le changement comme un enrichissement. Les émotions (frustration vs curiosité) orientent l’engagement. Un même message produit des réactions opposées selon le cadre de référence.`,
          ],
          [
            '1.2 · Devenir acteur',
            `Amira organise une réunion où chaque technicien propose une amélioration. Marc suggère un contrôle visuel qu’il pratiquait déjà. La direction intègre sa proposition au protocole.`,
            `Expliquez comment Marc passe du statut d’individu à celui d’acteur.`,
            `Marc devient acteur en mobilisant sa compétence au service d’un objectif collectif. Sa contribution est reconnue et intégrée aux règles communes. L’interaction avec le groupe transforme la résistance en participation. L’individu devient acteur lorsqu’il influence les décisions et s’approprie les normes du groupe.`,
          ],
        ],
      },
      {
        num: 2,
        title: 'Numérique et intelligence collective',
        summary: 'Système d’information, qualité des données et collaboration.',
        time: '2 questions · 25 min',
        items: [
          [
            `2.1 · Système d’information`,
            'NaturaBio installe un logiciel de gestion des stocks partagé entre production, achats et expédition. Des erreurs de saisie provoquent la commande de 200 kg de beurre de karité au lieu de 20 kg.',
            'Analysez le rôle du SI et identifiez les causes du dysfonctionnement.',
            `Le SI collecte, stocke, traite et diffuse l’information utile à la décision. Il inclut personnes, procédures et outils. L’erreur vient d’une donnée mal saisie : donnée brute incorrecte → information fausse → décision erronée. Les causes sont humaines (formation insuffisante, absence de double vérification) et organisationnelles (aucune règle de validation).`,
          ],
          [
            '2.2 · Travail collaboratif',
            `L’équipe propose un processus de validation croisée : chaque commande est vérifiée par un second service. Un espace collaboratif en ligne centralise les fiches produits.`,
            `Montrez les conditions pour que le numérique favorise réellement l’intelligence collective.`,
            `Le travail collaboratif suppose coordination, partage et responsabilité commune. Les conditions : qualité et actualisation des données, règles d’accès claires, formation des utilisateurs, confiance entre les services et animation managériale. Sans elles, le numérique crée surcharge, doublons ou perte de responsabilité.`,
          ],
        ],
      },
      {
        num: 3,
        title: 'Création de valeur et performance',
        summary: 'Valeurs multiples, indicateurs et tableau de bord.',
        time: '1 question · 20 min',
        items: [
          [
            '3.1 · Performance multidimensionnelle',
            `Résultats de NaturaBio : chiffre d’affaires 1,2 M€ (+18 %), résultat net 95 000 € (+12 %), satisfaction client 72 % (–8 points), absentéisme 9,5 % (+3 points), consommation d’eau +22 % malgré un label bio affiché.`,
            'Montrez que la performance ne se réduit pas à sa dimension financière et proposez des indicateurs complémentaires.',
            `La performance financière progresse, mais la valeur perçue recule (satisfaction –8 points), la valeur sociale se dégrade (absentéisme +3 points) et l’engagement environnemental est fragilisé (+22 % d’eau). L’efficacité commerciale ne garantit pas l’efficience. Un tableau de bord devrait combiner indicateurs financiers, commerciaux, sociaux et environnementaux. Améliorer un axe en dégradant les autres n’est pas soutenable.`,
          ],
        ],
      },
    ],
  },
};
['pedagogy.css', 'pedagogy-v2.css', 'support-cours.css'].forEach((href) => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  document.head.appendChild(link);
});
const competencesSavoirs = {
  cejm: [
    { // Thème 1
      competences: [
        'Identifier les principaux agents économiques en relation avec l’entreprise et leurs rôles',
        'Présenter le fonctionnement des marchés sur lesquels intervient l’entreprise',
        'Repérer l’existence d’externalités pour l’entreprise',
        'Qualifier une situation précontractuelle et repérer le processus de formation d’un contrat',
        'Analyser et évaluer les conditions de validité, les clauses et les effets juridiques d’un contrat',
        'Identifier les finalités économique, sociale et sociétale de l’entreprise',
        'Caractériser les différentes parties prenantes de l’entreprise',
        'Distinguer une démarche entrepreneuriale d’une démarche managériale',
        'Identifier les différentes composantes de la performance de l’entreprise',
      ],
      savoirs: [
        'Les agents économiques et leurs rôles',
        'Les échanges entre les agents économiques',
        'Le rôle du marché et son fonctionnement',
        'La concurrence et les relations de coopération',
        'Les barrières à l’entrée',
        'L’asymétrie de l’information',
        'Les externalités positives et négatives',
        'Le rôle des banques et du marché financier',
        'Les principes contractuels et leur évolution',
        'La formation du contrat',
        'Le contenu du contrat',
        'Les finalités de l’entreprise',
        'Les parties prenantes',
        'Logique entrepreneuriale et logique managériale',
        'Les indicateurs de performance',
      ],
    },
    { // Thème 2
      competences: [
        'Identifier les principales politiques économiques et leurs outils',
        'Repérer l’impact des politiques sur l’environnement de l’entreprise',
        'Repérer les enjeux du droit de la concurrence et du droit de la propriété industrielle pour l’entreprise',
        'Repérer les principaux éléments du macro-environnement de l’entreprise',
        'Analyser les évolutions de l’environnement et en identifier les conséquences sur la situation de l’entreprise',
      ],
      savoirs: [
        'Le rôle de l’État (allocation, redistribution, régulation)',
        'La croissance économique',
        'L’existence de déséquilibres : inflation, chômage',
        'Les politiques économiques et leurs finalités',
        'Les politiques conjoncturelles et structurelles',
        'Les limites de l’intervention de l’État dans un contexte d’internationalisation',
        'La régulation supranationale dans le cadre européen',
        'Le rôle du droit dans la régulation',
        'Le rôle des autorités administratives indépendantes',
        'Le droit de la concurrence',
        'Le droit de la propriété industrielle : brevet et marque',
        'Les caractéristiques de l’environnement : facteurs PESTEL',
        'Le rôle de l’innovation',
      ],
    },
    { // Thème 3
      competences: [
        'Caractériser la structure de coût de l’entreprise',
        'Analyser l’influence de paramètres économiques sur les décisions de l’entreprise',
        'Argumenter le choix de l’entreprise entre « faire » ou « faire-faire »',
        'Justifier le choix d’une structure juridique d’entreprise adaptée à une situation donnée',
        'Caractériser le risque d’une situation donnée',
        'Identifier la nature juridique de la responsabilité d’une entreprise',
        'Caractériser les styles de management',
        'Identifier le type de structure, les mécanismes de coordination et de contrôle',
        'Repérer les ressources et les compétences au sein de l’entreprise',
        'Identifier le besoin de financement de l’entreprise',
      ],
      savoirs: [
        'Les facteurs de production (capital, travail, matières premières, connaissances)',
        'Les gains de productivité et coûts de production',
        'La chaîne de valeur',
        'Les principes et finalités de l’impartition',
        'Les facteurs de choix d’une structure juridique',
        'L’entreprise individuelle et les structures sociétaires (SA, SAS, EURL/SARL)',
        'Les formes juridiques de l’économie sociale et solidaire',
        'Les types de risques',
        'L’inexécution du contrat',
        'Responsabilité civile et pénale',
        'Les ressources tangibles et intangibles',
        'Les compétences et les mécanismes de coordination',
        'Les styles de management et les différents niveaux de management',
        'Les processus de l’entreprise',
        'La responsabilité éthique, sociale, sociétale et environnementale',
        'Les différents modes de financement',
        'L’équilibre financier de l’entreprise',
      ],
    },
    { // Thème 4
      competences: [
        'Identifier les conséquences du numérique sur les modes de production et de consommation',
        'Analyser les conséquences du numérique dans les relations d’échange de l’entreprise',
        'Identifier les modalités juridiques de protection des actifs immatériels',
        'Caractériser les conséquences juridiques des choix sur la protection des personnes et des données',
        'Qualifier et analyser les clauses de contrats relatives à une vente ou prestation numérique',
        'Repérer le rôle du système d’information dans le fonctionnement de l’entreprise',
        'Identifier les conséquences du déploiement du numérique sur le management et les processus décisionnels',
      ],
      savoirs: [
        'La place de marché',
        'Les relations d’échange : B to B, B to C, C to C, B to G',
        'Les externalités de réseau',
        'L’évolution des modèles économiques : économie collaborative, propriété et usages',
        'Les normes et les standards',
        'Le rôle de la CNIL',
        'La protection des actifs immatériels : droit d’auteurs et droits d’utilisation',
        'La protection de la personne : données personnelles, identité numérique',
        'La preuve électronique',
        'Le contrat de vente électronique',
        'Composantes et rôles du système d’information',
        'Spécialisation, intégration, action collective',
        'Mode de coordination, flexibilité, modalités d’organisation du travail',
      ],
    },
    { // Thème 5
      competences: [
        'Décrire les principales tendances du marché du travail',
        'Caractériser l’action des pouvoirs publics pour accompagner les transformations du marché du travail',
        'Analyser un contrat de travail et justifier les clauses au regard des besoins',
        'Caractériser les obligations de l’employeur en matière de protection des salariés',
        'Identifier les dispositifs de formation au sein de l’entreprise',
        'Identifier le rôle du droit négocié et des partenaires sociaux',
        'Qualifier une modification ou une rupture du rapport d’emploi et en déduire les conséquences juridiques',
        'Proposer des actions appropriées dans le cadre d’une GPEC',
        'Identifier les leviers de motivation conciliant objectif de l’entreprise et attentes de l’individu',
      ],
      savoirs: [
        'L’offre et la demande de travail',
        'La segmentation du marché du travail',
        'Les déséquilibres du marché du travail et la politique de l’emploi',
        'Les différentes sources du droit du travail',
        'Les régimes juridiques du salarié et du travailleur indépendant',
        'Les contrats de travail',
        'Les principes de la protection du salarié',
        'Les modifications du rapport d’emploi',
        'Les modes de rupture du rapport d’emploi',
        'Le droit négocié et le rôle des partenaires sociaux',
        'La gestion prévisionnelle des emplois et des compétences',
        'Les facteurs de la motivation et de la satisfaction au travail',
        'Les conditions de travail et leurs évolutions',
      ],
    },
    { // Thème 6
      competences: [
        'Identifier les différentes étapes d’une démarche d’analyse stratégique',
        'Présenter les principaux éléments d’un diagnostic interne et/ou externe de l’entreprise',
        'Présenter les étapes de la décision stratégique',
        'Identifier et analyser les choix stratégiques de l’entreprise',
        'Analyser la pertinence de choix stratégiques de l’entreprise',
      ],
      savoirs: [
        'Le diagnostic externe et l’analyse de l’environnement',
        'Le diagnostic interne et les ressources stratégiques de l’entreprise',
        'Les domaines d’activités stratégiques',
        'Les options stratégiques globales et par domaines d’activités',
        'Les modalités de croissance des entreprises',
      ],
    },
  ],
  droit: [
    { // Thème 1
      competences: [
        'Expliquer et distinguer les fonctions du droit',
        'Vérifier les caractères de la règle de droit',
        'Identifier la source d’une règle de droit',
        'Distinguer les différentes institutions',
        'Expliquer le sens et la portée d’une décision de justice',
        'Qualifier juridiquement une situation de fait',
      ],
      savoirs: [
        'État de droit, laïcité, égalité, liberté, solidarité',
        'Fonctions du droit et distinction entre droit et morale',
        'Ordre public',
        'Caractères de la règle de droit et autorité légitime',
        'Constitution et contrôle de constitutionnalité (QPC)',
        'Droit communautaire, traités, droit dérivé (règlement, directive)',
        'Loi, règlement, jurisprudence',
        'Conventions et accords collectifs',
        'Organisation judiciaire et hiérarchie des normes',
      ],
    },
    { // Thème 2
      competences: [
        'Identifier les éléments d’un litige : parties, faits, prétentions, question de droit',
        'Déterminer si le litige est causé par un acte ou un fait juridique pour envisager un mode de preuve',
        'Apprécier la force probante d’un élément de preuve',
        'Déterminer la juridiction qui a prononcé une décision de justice',
        'Sélectionner la juridiction susceptible de juger un litige',
        'Distinguer le rôle du procès civil et du procès pénal',
        'Identifier les phases d’un procès',
        'Expliquer les enjeux de la constitution de partie civile',
      ],
      savoirs: [
        'Litige, demandeur, défendeur, prétentions, accord amiable',
        'Acte et fait juridiques, présomption',
        'Charge et mode de preuve, preuve électronique',
        'Acte authentique et sous signature privée',
        'Témoignage, aveu, intime conviction du juge',
        'Voies de recours : appel, pourvoi en cassation',
        'Partie civile, instance, audience, jugement, arrêt',
        'Compétence d’attribution, assignation, mise en examen',
        'Infractions : contravention, délit, crime',
      ],
    },
    { // Thème 3
      competences: [
        'Identifier et qualifier une personne juridique',
        'Distinguer une personne physique et une personne morale',
        'Analyser les conséquences de la personnalité juridique',
        'Identifier les attributs d’une personne physique ou morale',
        'Expliquer les conséquences de l’incapacité juridique',
      ],
      savoirs: [
        'Genre, nom/dénomination, domicile/siège',
        'Droits patrimoniaux et extrapatrimoniaux',
        'Statut de l’animal',
        'Capacité et incapacité juridique',
        'Mécanismes de la représentation',
        'Acte de disposition, acte d’administration',
        'Patrimoine',
      ],
    },
    { // Thème 4
      competences: [
        'Distinguer entre les droits patrimoniaux et les droits extrapatrimoniaux',
        'Identifier une atteinte à un droit extrapatrimonial',
        'Expliquer les enjeux de la protection des données à caractère personnel',
        'Distinguer entre les biens corporels et les biens incorporels',
        'Identifier les attributs et caractères du droit de propriété',
        'Qualifier un trouble anormal du voisinage',
        'Identifier les composantes du droit d’auteur',
        'Connaître les enjeux de la protection juridique de la marque commerciale',
      ],
      savoirs: [
        'Droits de la personne et protection des données personnelles',
        'Respect de la vie privée et droit à l’image',
        'Biens corporels et incorporels',
        'Usus, fructus, abusus',
        'Caractères absolu, exclusif et perpétuel du droit de propriété',
        'Trouble anormal du voisinage',
        'Marque commerciale, propriété industrielle, monopole d’exploitation',
        'Action en contrefaçon',
        'Droit d’auteur',
      ],
    },
    { // Thème 5
      competences: [
        'Analyser les conditions de validité d’un contrat',
        'Identifier les vices du consentement',
        'Expliquer les effets obligatoires du contrat et l’exécution de bonne foi',
        'Identifier les moyens d’action du créancier en cas d’inexécution',
        'Repérer les obligations d’information précontractuelle',
        'Qualifier les clauses abusives dans un contrat de consommation',
        'Identifier le droit de rétractation du consommateur',
      ],
      savoirs: [
        'Conditions de validité du contrat : consentement, capacité, contenu licite',
        'Vices du consentement : erreur, dol, violence',
        'Force obligatoire et bonne foi',
        'Sanctions de l’inexécution : exception d’inexécution, exécution forcée, résolution',
        'Obligation d’information précontractuelle',
        'Droit de rétractation',
        'Clauses abusives',
        'Contrat de consommation et contrat électronique',
      ],
    },
    { // Thème 6
      competences: [
        'Identifier les conditions de mise en œuvre de la responsabilité civile',
        'Distinguer responsabilité civile et responsabilité pénale',
        'Qualifier le dommage et le fait générateur',
        'Identifier les causes d’exonération',
        'Distinguer responsabilité contractuelle et extracontractuelle',
        'Identifier les régimes spéciaux de responsabilité',
      ],
      savoirs: [
        'Dommage certain, personnel et légitime',
        'Fait générateur : faute, fait d’une chose, fait d’autrui',
        'Lien de causalité',
        'Responsabilité civile contractuelle et extracontractuelle',
        'Responsabilité pénale',
        'Causes d’exonération : force majeure, faute de la victime, fait d’un tiers',
        'Préjudice écologique',
        'Responsabilité du fait des produits défectueux',
        'Accident du travail et assurance',
      ],
    },
    { // Thème 7
      competences: [
        'Caractériser le contrat de travail et identifier le lien de subordination',
        'Distinguer CDI, CDD et contrat de travail temporaire',
        'Qualifier une modification ou une rupture du contrat de travail',
        'Identifier les pouvoirs et les limites du pouvoir de l’employeur',
        'Analyser le rôle des représentants du personnel et du CSE',
        'Identifier les conditions d’exercice du droit de grève',
      ],
      savoirs: [
        'Contrat de travail et lien de subordination',
        'CDI, CDD, contrat de travail temporaire',
        'Pouvoir de direction, de contrôle et disciplinaire',
        'Libertés individuelles et collectives du salarié',
        'Licenciement pour cause réelle et sérieuse',
        'Rupture conventionnelle et démission',
        'Droit négocié : conventions et accords collectifs',
        'CSE et partenaires sociaux',
        'Droit de grève',
      ],
    },
    { // Thème 8
      competences: [
        'Identifier les principes de la liberté d’entreprendre et de la liberté de concurrence',
        'Qualifier les actes de concurrence déloyale',
        'Justifier le choix d’un statut juridique pour entreprendre',
        'Distinguer entreprise individuelle et société',
        'Identifier les éléments du contrat de société',
        'Analyser les procédures collectives en cas de difficultés',
      ],
      savoirs: [
        'Liberté d’entreprendre et liberté de concurrence',
        'Concurrence déloyale : confusion, dénigrement, désorganisation, parasitisme',
        'Entreprise individuelle et société',
        'Contrat de société et affectio societatis',
        'SARL, SAS, SA et SCOP',
        'Franchise et concession',
        'Procédures collectives : sauvegarde, redressement, liquidation',
      ],
    },
  ],
  economie: [
    { // Thème 1
      competences: [
        'Expliquer le problème de la rareté et la nécessité des choix économiques',
        'Identifier le coût d’opportunité d’un choix',
        'Présenter le circuit économique et les flux entre agents',
        'Distinguer les fonctions de la monnaie',
        'Expliquer le principe de l’utilité marginale décroissante',
      ],
      savoirs: [
        'Besoins, biens, rareté, choix',
        'Coût d’opportunité',
        'Agents économiques : ménages, entreprises, administrations, institutions financières, reste du monde',
        'Circuit économique : flux réels et monétaires',
        'Division du travail et spécialisation',
        'Utilité et utilité marginale',
        'Fonctions de la monnaie : unité de compte, intermédiaire des échanges, réserve de valeur',
      ],
    },
    { // Thème 2
      competences: [
        'Distinguer production marchande et non marchande',
        'Calculer et interpréter la valeur ajoutée',
        'Identifier les limites du PIB comme indicateur de richesse',
        'Analyser le partage de la valeur ajoutée entre les agents',
        'Distinguer revenus primaires et revenus de transfert',
      ],
      savoirs: [
        'Production marchande et non marchande',
        'Consommations intermédiaires et valeur ajoutée',
        'PIB et ses limites',
        'PIB nominal et PIB réel',
        'Revenus primaires : salaires, revenus du patrimoine, revenus mixtes',
        'Redistribution et prestations sociales',
        'Revenu disponible',
      ],
    },
    { // Thème 3
      competences: [
        'Identifier les déterminants de la consommation et de l’épargne',
        'Calculer et interpréter le pouvoir d’achat',
        'Distinguer les différentes formes d’épargne',
        'Expliquer le rôle du taux d’intérêt dans les choix des agents',
      ],
      savoirs: [
        'Revenu disponible et formation du revenu',
        'Consommation et ses déterminants',
        'Pouvoir d’achat et indice des prix à la consommation (IPC)',
        'Épargne : précaution, projet, transmission',
        'Taux d’épargne',
        'Épargne financière et non financière',
      ],
    },
    { // Thème 4
      competences: [
        'Distinguer capacité et besoin de financement',
        'Identifier les modes de financement direct et indirect',
        'Expliquer le mécanisme de la création monétaire',
        'Analyser les choix de placement selon rendement, risque et liquidité',
        'Expliquer le rôle de la politique monétaire',
      ],
      savoirs: [
        'Capacité et besoin de financement',
        'Autofinancement',
        'Financement indirect : intermédiation bancaire',
        'Financement direct : actions et obligations',
        'Création monétaire par le crédit',
        'Politique monétaire : taux directeurs, masse monétaire',
        'Rendement, risque, liquidité',
      ],
    },
    { // Thème 5
      competences: [
        'Analyser le fonctionnement d’un marché à partir de l’offre et de la demande',
        'Calculer et interpréter une élasticité-prix',
        'Distinguer les différentes structures de marché',
        'Identifier les défaillances de marché et justifier l’intervention publique',
        'Expliquer le concept de bien public',
      ],
      savoirs: [
        'Offre, demande, prix d’équilibre',
        'Élasticité-prix de la demande',
        'Concurrence pure et parfaite, monopole, oligopole',
        'Pouvoir de marché et barrières à l’entrée',
        'Externalités positives et négatives',
        'Bien public : non-rivalité et non-exclusion',
        'Asymétrie d’information',
      ],
    },
    { // Thème 6
      competences: [
        'Identifier les trois fonctions économiques de l’État (Musgrave)',
        'Distinguer politiques conjoncturelles et structurelles',
        'Analyser les effets d’une politique budgétaire ou monétaire',
        'Interpréter le solde budgétaire et la dette publique',
      ],
      savoirs: [
        'Fonctions de l’État : allocation, redistribution, stabilisation',
        'Budget de l’État : recettes et dépenses',
        'Déficit et dette publique',
        'Politique budgétaire de relance ou de rigueur',
        'Politique monétaire expansionniste ou restrictive',
        'Politiques structurelles',
      ],
    },
    { // Thème 7
      competences: [
        'Analyser le fonctionnement du marché du travail',
        'Distinguer chômage conjoncturel et structurel',
        'Calculer et interpréter le taux de chômage et le taux d’emploi',
        'Identifier les politiques de l’emploi actives et passives',
        'Expliquer le rôle du coût du travail et du capital humain',
      ],
      savoirs: [
        'Offre et demande de travail, population active',
        'Taux d’activité, taux d’emploi, taux de chômage (au sens du BIT)',
        'Chômage conjoncturel et chômage structurel',
        'Politiques actives et passives de l’emploi',
        'Coût du travail et allègements de cotisations',
        'Capital humain et formation',
      ],
    },
    { // Thème 8
      competences: [
        'Expliquer le principe de l’avantage comparatif',
        'Analyser les effets du libre-échange et du protectionnisme',
        'Identifier les instruments du protectionnisme',
        'Analyser le rôle des firmes multinationales dans les échanges',
        'Expliquer l’influence du taux de change sur la compétitivité',
      ],
      savoirs: [
        'Avantage comparatif et spécialisation',
        'Libre-échange et gains à l’échange',
        'Protectionnisme : droits de douane, quotas, barrières non tarifaires',
        'Industrie naissante',
        'Firmes multinationales et chaînes de valeur mondiales',
        'Commerce intra-firme',
        'Taux de change et compétitivité',
      ],
    },
    { // Thème 9
      competences: [
        'Distinguer croissance extensive et croissance intensive',
        'Identifier les sources de la croissance (innovation, progrès technique)',
        'Distinguer croissance et développement',
        'Expliquer les enjeux du développement durable',
        'Identifier les instruments de politique environnementale',
        'Interpréter l’IDH et comparer avec le PIB',
      ],
      savoirs: [
        'Croissance extensive et intensive',
        'Productivité, innovation, progrès technique',
        'Développement et IDH',
        'Développement durable : piliers économique, social, environnemental',
        'Externalités et internalisation : taxe, norme, quota échangeable',
        'Économie circulaire et écoconception',
        'Transition écologique',
      ],
    },
  ],
  sgn: [
    { // Thème 1
      competences: [
        'Caractériser les comportements individuels au sein des groupes',
        'Identifier les bonnes pratiques de gestion de l’identité numérique',
        'Repérer ce qui, dans les relations, révèle la culture et les valeurs de l’organisation',
        'Décrire et analyser les situations de communication à partir de leurs composantes',
        'Distinguer l’approche par la qualification de l’approche par la compétence',
        'Mesurer l’activité de travail à l’aide d’indicateurs pertinents',
        'Évaluer le coût global du travail avec les charges',
        'Établir un lien entre conditions de travail et comportement des membres de l’organisation',
      ],
      savoirs: [
        'Individu : personnalité, émotion, perception, attitude, comportement',
        'Compétences et identité numérique',
        'Communication interpersonnelle',
        'Interactions individu/groupe : caractéristiques des groupes, identité, statut',
        'Interactions individu/organisation : cultures, normes, codes, rituels',
        'Phénomènes relationnels : relations formelles et informelles, leadership',
        'Activité de travail : conditions de travail, compétences et qualification',
        'Tableaux de bord, indicateurs d’activité et de productivité',
        'Rémunération et coût du travail',
      ],
    },
    { // Thème 2
      competences: [
        'Repérer l’origine d’une information et les étapes de sa transformation',
        'Distinguer les données à caractère personnel et les contraintes de leur utilisation',
        'Manipuler des données ouvertes pour créer de l’information',
        'Se situer dans un environnement numérique (rôles, droits, responsabilités)',
        'Identifier les étapes d’un processus de gestion et en schématiser l’enchaînement',
        'Repérer les effets de l’automatisation sur la circulation de l’information',
        'Situer le rôle des acteurs et des applications du SI dans un processus de gestion',
      ],
      savoirs: [
        'Donnée, information et connaissance',
        'Données à caractère personnel',
        'Mégadonnées (big data) et données ouvertes (open data)',
        'Rôles, accessibilité et valeur de l’information',
        'Système d’information (SI)',
        'Applications et usages du numérique : e-communication, collaboration',
        'Intelligence artificielle et automatisation',
        'Processus : nature et représentation',
        'Système de gestion intégrée (PGI/ERP)',
        'Informatique en nuage (cloud computing)',
      ],
    },
    { // Thème 3
      competences: [
        'Identifier le rôle des différents acteurs dans le processus de création de valeur',
        'Caractériser les différents types de valeur et les mettre en relation avec les attentes d’acteurs',
        'Repérer la répartition de la valeur ajoutée',
        'Utiliser un bilan et un compte de résultat pour repérer la valeur financière',
        'Analyser la relation entre le prix, le coût et le niveau de qualité',
        'Identifier les indicateurs pertinents pour apprécier la performance',
        'Effectuer des comparaisons dans le temps et l’espace pour situer la performance',
        'Percevoir le caractère potentiellement contradictoire des différents types de performances',
      ],
      savoirs: [
        'Valeur ajoutée : création et répartition',
        'Valeur financière et actionnariale, valeur boursière',
        'Valeur perçue : image de marque, notoriété, satisfaction, qualité',
        'Indicateurs quantitatifs et qualitatifs',
        'Prix, coût, marge, charges',
        'Performance des processus : efficacité et efficience',
        'Performance commerciale : fidélité, chiffre d’affaires, part de marché',
        'Performance financière : rentabilité, profitabilité, autofinancement',
        'Performance sociale et environnementale',
        'Tableaux de bord',
      ],
    },
    { // Thème 4
      competences: [
        'Identifier les différentes étapes d’un projet et les contraintes d’antériorité',
        'Représenter un projet à l’aide d’un diagramme de Gantt',
        'Évaluer un projet en termes de coûts, délais et risques',
        'Identifier et hiérarchiser les risques à l’aide d’une matrice de risques',
        'Distinguer et appliquer les stratégies de gestion du risque',
        'Utiliser des outils de simulation et de planification',
        'Expliquer le lien entre temps et valeur financière (actualisation)',
      ],
      savoirs: [
        'Horizon et période',
        'Actualité et pérennité de l’information, veille informationnelle',
        'Prospective : enquête, budget, seuil de rentabilité',
        'Lien entre temps et valeur financière',
        'Outils de planification : diagramme de Gantt, calendrier prévisionnel',
        'Risque : probabilité, gravité, matrice de risques',
        'Gestion du risque : évitement, prévention, transfert, acceptation',
      ],
    },
  ],
};

const savoirsContenu = {
  cejm: [
    [
      `L’activité économique met en relation cinq catégories d’agents : les <strong>ménages</strong> (consommation, offre de travail), les <strong>entreprises</strong> (production marchande), les <strong>administrations publiques</strong> (services non marchands financés par les prélèvements obligatoires), les <strong>institutions financières</strong> (collecte de l’épargne et crédit) et le <strong>reste du monde</strong> (agents non résidents).`,
      `Les agents sont reliés par des <strong>flux réels</strong> (travail, biens, services) et des <strong>flux monétaires</strong> (salaires, prix, impôts, intérêts). Le <strong>circuit économique</strong> représente ces interdépendances : les ménages fournissent du travail et reçoivent un salaire ; les entreprises vendent et versent des impôts ; l’État redistribue sous forme de prestations.`,
      `Le <strong>marché</strong> est le lieu de rencontre entre l’offre et la demande, où se forme un prix. Lorsque le prix augmente, l’offre tend à croître tandis que la demande diminue. Le <strong>prix d’équilibre</strong> est celui pour lequel quantités offertes et demandées coïncident. <em>Exemple : sur le marché du logement, une pénurie d’offre fait monter les prix.</em>`,
      `La <strong>concurrence</strong> prend plusieurs formes : par les prix, par la qualité, par l’innovation ou par la différenciation. Les entreprises nouent aussi des <strong>relations de coopération</strong> — partenariats, alliances, sous-traitance — lorsque la collaboration est plus avantageuse que l’affrontement. <em>Exemple : deux PME mutualisent leurs achats pour de meilleurs tarifs fournisseurs.</em>`,
      `Les <strong>barrières à l’entrée</strong> empêchent de nouveaux concurrents d’accéder à un marché : <strong>brevets</strong> (monopole temporaire), <strong>investissements lourds</strong> (usine, réseau), <strong>réglementation</strong> (licences, agréments), <strong>effets de réseau</strong> (un réseau social est d’autant plus attractif qu’il a d’utilisateurs). Plus elles sont élevées, plus les entreprises installées sont protégées.`,
      `L’<strong>asymétrie d’information</strong> existe lorsqu’une partie dispose d’informations que l’autre n’a pas. Elle peut conduire à une <strong>sélection adverse</strong> (les mauvais produits chassent les bons) ou à un <strong>aléa moral</strong> (une partie modifie son comportement après la conclusion du contrat). <em>Exemple : sur le marché des voitures d’occasion, l’acheteur ignore l’état réel du véhicule.</em>`,
      `Une <strong>externalité</strong> apparaît lorsqu’une activité affecte un tiers sans compensation par le marché. <strong>Négative</strong> : une usine pollue une rivière sans en payer le prix. <strong>Positive</strong> : la vaccination d’une personne protège aussi son entourage. Les externalités justifient l’intervention publique (taxes, normes, subventions).`,
      `Les <strong>banques</strong> assurent l’<strong>intermédiation financière</strong> : elles collectent l’épargne et accordent des crédits. En prêtant, elles créent de la <strong>monnaie scripturale</strong> (les crédits font les dépôts). Le <strong>marché financier</strong> permet un financement <strong>direct</strong> via des <strong>actions</strong> (titres de propriété) ou des <strong>obligations</strong> (titres de dette).`,
      `Le droit des contrats repose sur la <strong>liberté contractuelle</strong> (chacun s’engage librement) et la <strong>force obligatoire</strong> (le contrat s’impose comme une loi). Le droit contemporain y ajoute l’exigence de <strong>bonne foi</strong> et la <strong>protection de la partie faible</strong> (consommateur, salarié).`,
      `La <strong>formation du contrat</strong> suppose trois conditions de validité : un <strong>consentement</strong> libre et éclairé (vicié par l’erreur, le dol ou la violence), la <strong>capacité</strong> juridique de chaque partie et un <strong>contenu</strong> licite et certain. Si l’une fait défaut, le contrat peut être annulé.`,
      `Le <strong>contenu du contrat</strong> fixe les obligations réciproques : objet, prix, durée, modalités d’exécution. La <strong>clause pénale</strong> fixe à l’avance les dommages-intérêts ; la <strong>clause résolutoire</strong> prévoit la résiliation automatique ; la <strong>clause de non-concurrence</strong> interdit l’exercice d’une activité concurrente (limitée dans le temps et l’espace).`,
      `L’entreprise poursuit trois types de <strong>finalités</strong> : <strong>économique</strong> (profit, pérennité), <strong>sociale</strong> (bien-être des salariés, conditions de travail), <strong>sociétale</strong> (respect de l’environnement, engagement citoyen). La <strong>RSE</strong> intègre volontairement ces préoccupations dans la stratégie.`,
      `Les <strong>parties prenantes</strong> (<em>stakeholders</em>) sont tous les acteurs affectés par l’activité de l’entreprise. <strong>Internes</strong> : dirigeants, salariés, actionnaires. <strong>Externes</strong> : clients, fournisseurs, banques, État, associations. <em>Enjeu : leurs intérêts peuvent diverger — le management doit arbitrer.</em>`,
      `La <strong>logique entrepreneuriale</strong> consiste à identifier une opportunité, prendre un risque et innover (Schumpeter : « destruction créatrice »). La <strong>logique managériale</strong> vise à optimiser les ressources existantes : planifier, organiser, diriger, contrôler. <em>En pratique, un dirigeant de PME combine souvent les deux.</em>`,
      `La <strong>performance</strong> se mesure sur plusieurs dimensions : <strong>financière</strong> (rentabilité, profitabilité), <strong>commerciale</strong> (CA, part de marché, satisfaction), <strong>sociale</strong> (absentéisme, turnover, formation), <strong>environnementale</strong> (empreinte carbone, déchets). Un <strong>tableau de bord</strong> rassemble ces indicateurs pour piloter l’activité.`
    ],
    [
      `L’économiste Musgrave identifie trois fonctions de l’État. <strong>Allocation</strong> : fournir les biens que le marché ne produit pas efficacement (infrastructure, éducation). <strong>Redistribution</strong> : réduire les inégalités par prélèvements progressifs et transferts sociaux. <strong>Régulation</strong> : atténuer les fluctuations conjoncturelles.`,
      `La <strong>croissance économique</strong> est l’augmentation durable de la production, mesurée par le taux de variation du PIB réel. Elle crée des emplois, augmente les revenus et finance les dépenses publiques. <em>Distinction : le PIB nominal inclut l’inflation ; seul le PIB réel reflète une évolution des quantités produites.</em>`,
      `L’<strong>inflation</strong> est la hausse durable et généralisée des prix. Modérée (1-2 %), elle accompagne la croissance ; excessive, elle érode le pouvoir d’achat. Le <strong>chômage</strong> peut être <strong>conjoncturel</strong> (ralentissement) ou <strong>structurel</strong> (inadéquations durables entre compétences et besoins). Ces déséquilibres justifient l’intervention de l’État.`,
      `Les <strong>politiques économiques</strong> visent des objectifs macroéconomiques : croissance, plein emploi, stabilité des prix, équilibre extérieur (« carré magique » de Kaldor). Ces objectifs peuvent être contradictoires : relancer l’activité pour réduire le chômage peut alimenter l’inflation.`,
      `Les <strong>politiques conjoncturelles</strong> agissent à court terme : politique budgétaire (recettes/dépenses publiques) et politique monétaire (taux d’intérêt). Une <strong>relance</strong> augmente les dépenses ; une <strong>rigueur</strong> les réduit. Les <strong>politiques structurelles</strong> transforment durablement les capacités productives : éducation, recherche, réforme du marché du travail.`,
      `L’internationalisation limite l’efficacité des politiques nationales. Une relance budgétaire peut profiter aux importations plutôt qu’à la production nationale (« fuites »). La mobilité des capitaux contraint les choix fiscaux : des impôts trop élevés peuvent provoquer des délocalisations.`,
      `Dans l’UE, le <strong>Pacte de stabilité</strong> encadre les déficits (3 % du PIB) et la dette (60 %). La <strong>politique monétaire</strong> est centralisée à la <strong>BCE</strong>, privant les États d’un levier individuel sur les taux d’intérêt. Cette coordination crée des tensions lorsque les situations économiques nationales divergent.`,
      `Le <strong>droit</strong> est un instrument de régulation de l’activité économique : droit de la concurrence, droit de la consommation, droit de l’environnement, droit du travail. Il protège les acteurs vulnérables et sanctionne les comportements faussant le marché. <em>Il évolue pour s’adapter : commerce électronique, économie de plateforme, transition écologique.</em>`,
      `Les <strong>AAI</strong> (autorités administratives indépendantes) veillent au respect des règles sans dépendre du gouvernement. L’<strong>Autorité de la concurrence</strong> sanctionne ententes et abus de position dominante. L’<strong>ARCEP</strong> régule les télécoms. L’<strong>AMF</strong> surveille les marchés financiers. La <strong>CNIL</strong> protège les données personnelles.`,
      `Le <strong>droit de la concurrence</strong> prohibe les <strong>ententes</strong> (accords pour fixer les prix ou se répartir les marchés) et sanctionne les <strong>abus de position dominante</strong> (prix prédateurs, refus de vente discriminatoire). <em>Exemple : en 2020, l’Autorité de la concurrence a infligé 1,1 milliard d’euros d’amende à Apple.</em>`,
      `Le <strong>brevet</strong> protège une invention nouvelle, inventive et industriellement applicable pendant <strong>20 ans</strong>. La <strong>marque</strong> protège un signe distinctif (nom, logo) permettant d’identifier un produit, renouvelable par périodes de <strong>10 ans</strong>. Ces droits encouragent l’innovation en permettant de rentabiliser l’investissement en R&D.`,
      `Le modèle <strong>PESTEL</strong> structure le macro-environnement en six dimensions : <strong>P</strong>olitique, <strong>É</strong>conomique, <strong>S</strong>ocioculturel, <strong>T</strong>echnologique, <strong>É</strong>cologique et <strong>L</strong>égal. <em>L’enjeu n’est pas de lister les facteurs, mais d’identifier ceux qui constituent une opportunité ou une menace concrète pour l’entreprise.</em>`,
      `L’<strong>innovation</strong> peut porter sur le <strong>produit</strong>, le <strong>procédé</strong>, l’<strong>organisation</strong> ou la <strong>commercialisation</strong>. Une innovation de <strong>rupture</strong> transforme radicalement un marché (le smartphone a remplacé l’appareil photo et le GPS) ; une innovation <strong>incrémentale</strong> l’améliore progressivement. <em>Schumpeter considère l’innovation comme le moteur de la croissance.</em>`
    ],
    [
      `Produire consiste à combiner des <strong>facteurs de production</strong> : le <strong>travail</strong> (activités humaines), le <strong>capital</strong> (machines, bâtiments, ressources financières), les <strong>matières premières</strong> et les <strong>connaissances</strong> (brevets, savoir-faire, bases de données).`,
      `La <strong>productivité</strong> mesure l’efficacité des facteurs. Un <strong>gain de productivité</strong> signifie produire davantage avec la même quantité de facteur (grâce à l’innovation, la formation, l’organisation). Les <strong>coûts de production</strong> se décomposent en <strong>coûts fixes</strong> (loyer, amortissement) et <strong>coûts variables</strong> (matières premières, énergie).`,
      `La <strong>chaîne de valeur</strong> (Porter) décompose l’activité en fonctions créatrices de valeur : logistique, production, marketing, SAV (activités principales), soutenues par l’infrastructure, la GRH, la R&D et les approvisionnements. Analyser cette chaîne identifie les sources d’avantage concurrentiel.`,
      `L’<strong>impartition</strong> consiste à confier à un partenaire extérieur une activité que l’entreprise pourrait réaliser : <strong>sous-traitance</strong> (fabrication d’un composant) ou <strong>externalisation</strong> (fonction entière). L’entreprise compare coût interne et prix du prestataire, en intégrant les <strong>coûts de transaction</strong> (recherche, négociation, contrôle, risque de dépendance).`,
      `Le choix d’une <strong>structure juridique</strong> dépend du nombre d’associés, du besoin de capitaux, de la responsabilité souhaitée, du régime fiscal et social. Les critères sont : protection du patrimoine personnel, flexibilité statutaire, coût de création, régime social du dirigeant.`,
      `L’<strong>entreprise individuelle</strong> est la forme la plus simple (patrimoine personnel protégé depuis 2022). La <strong>EURL/SARL</strong> est une société à responsabilité limitée aux apports. La <strong>SAS</strong> offre une grande liberté statutaire. La <strong>SA</strong> convient aux grandes entreprises et à la cotation en bourse.`,
      `L’<strong>économie sociale et solidaire</strong> (ESS) propose des formes alternatives : <strong>coopératives</strong> (un associé = une voix), <strong>mutuelles</strong>, <strong>associations</strong>. Ces structures poursuivent une utilité sociale et réinvestissent majoritairement leurs bénéfices.`,
      `L’entreprise fait face à de multiples <strong>risques</strong> : commercial, financier, opérationnel, juridique, environnemental et de réputation. La <strong>gestion du risque</strong> identifie, évalue et traite chaque menace — par la prévention, le transfert (assurance) ou l’acceptation.`,
      `L’<strong>inexécution du contrat</strong> engage la responsabilité du débiteur. Le créancier peut : suspendre sa propre obligation (<strong>exception d’inexécution</strong>), demander l’<strong>exécution forcée</strong>, obtenir une <strong>réduction de prix</strong>, provoquer la <strong>résolution</strong> du contrat ou réclamer des <strong>dommages-intérêts</strong>.`,
      `La <strong>responsabilité civile</strong> oblige à réparer le dommage causé (indemnisation). La <strong>responsabilité pénale</strong> sanctionne les infractions par des peines (amende, emprisonnement). Un même fait peut engager les deux. L’entreprise peut être pénalement responsable en tant que personne morale.`,
      `Les <strong>ressources tangibles</strong> (équipements, locaux, trésorerie) et <strong>intangibles</strong> (marque, brevets, savoir-faire, réputation) constituent le patrimoine stratégique de l’entreprise. Une ressource est stratégique si elle est valorisable, rare, difficilement imitable et non substituable.`,
      `Les <strong>compétences</strong> individuelles et collectives déterminent la capacité d’adaptation. Les <strong>mécanismes de coordination</strong> structurent le travail : supervision directe (hiérarchie), standardisation (des procédés, des résultats, des qualifications) et ajustement mutuel (communication informelle).`,
      `Le <strong>style de management</strong> varie : <strong>directif</strong> (impose les décisions), <strong>persuasif</strong> (explique et mobilise), <strong>participatif</strong> (associe les salariés), <strong>délégatif</strong> (confie l’autonomie). On distingue aussi management <strong>stratégique</strong> (orientations long terme) et <strong>opérationnel</strong> (gestion quotidienne).`,
      `Un <strong>processus</strong> est une suite coordonnée d’activités transformant des entrées en sorties avec une valeur ajoutée. Cartographier les processus permet de repérer les dysfonctionnements et d’améliorer l’efficience. On distingue processus de réalisation, de support et de pilotage.`,
      `La <strong>RSE</strong> intègre volontairement des préoccupations sociales, environnementales et de gouvernance dans la stratégie, au-delà de la conformité légale. Elle couvre : conditions de travail, diversité, réduction de l’empreinte carbone, éthique des affaires, dialogue avec les parties prenantes.`,
      `L’<strong>autofinancement</strong> utilise les bénéfices non distribués (préserve l’autonomie). L’<strong>emprunt bancaire</strong> ne dilue pas le capital mais crée des charges d’intérêts. L’<strong>augmentation de capital</strong> renforce les fonds propres mais dilue le pouvoir. Le <strong>crédit-bail</strong> permet d’utiliser un bien sans l’acheter.`,
      `L’<strong>équilibre financier</strong> suppose que les emplois stables soient financés par des ressources durables. Le <strong>fonds de roulement</strong> mesure l’excédent de ressources stables sur les emplois stables ; il doit couvrir le <strong>besoin en fonds de roulement</strong> (BFR), décalage entre décaissements et encaissements.`
    ],
    [
      `Une <strong>place de marché</strong> (<em>marketplace</em>) met en relation vendeurs et acheteurs sur une plateforme numérique — Amazon, Leboncoin, Uber. Elle réduit les coûts de transaction et élargit l’accès au marché, mais la plateforme capte une part de la valeur via des commissions.`,
      `Les <strong>relations d’échange</strong> se diversifient avec le numérique : <strong>B to B</strong> (entre entreprises), <strong>B to C</strong> (entreprise vers consommateur), <strong>C to C</strong> (entre particuliers : Vinted, Blablacar) et <strong>B to G</strong> (entreprise vers administration). Chaque relation a ses règles juridiques et commerciales propres.`,
      `Les <strong>externalités de réseau</strong> signifient que la valeur d’un service augmente avec le nombre d’utilisateurs. Ce cercle vertueux peut conduire à des quasi-monopoles (Facebook, Google). Le premier arrivé qui atteint une masse critique bénéficie d’un avantage décisif.`,
      `L’<strong>économie collaborative</strong> favorise le partage et la mutualisation plutôt que la propriété : abonnement plutôt qu’achat, streaming, SaaS, covoiturage. Les <strong>modèles économiques</strong> évoluent : freemium (gratuit + premium), publicité ciblée, commission sur transaction.`,
      `Les <strong>normes et standards</strong> techniques sont stratégiques dans le numérique. Imposer son standard permet de verrouiller un marché (USB, format de fichier, protocole). Les standards ouverts favorisent l’interopérabilité et la concurrence ; les standards propriétaires créent des barrières à l’entrée.`,
      `La <strong>CNIL</strong> (Commission nationale de l’informatique et des libertés) est l’autorité chargée de veiller au respect de la protection des données personnelles en France. Elle contrôle, sanctionne et conseille. Elle veille à l’application du <strong>RGPD</strong> sur le territoire national.`,
      `Le <strong>droit d’auteur</strong> protège les œuvres originales dès leur création, sans formalité : droit moral (paternité, intégrité) et droits patrimoniaux (reproduction, représentation). Les <strong>droits d’utilisation</strong> — licences, CGU — encadrent ce que l’utilisateur peut faire d’un logiciel ou d’un contenu numérique.`,
      `Le <strong>RGPD</strong> encadre la collecte et le traitement des <strong>données personnelles</strong> (six principes : finalité, base légale, minimisation, exactitude, durée limitée, sécurité). L’<strong>identité numérique</strong> est un actif sensible : une fuite de données peut provoquer des usurpations d’identité. Droits : accès, rectification, effacement, portabilité.`,
      `La <strong>preuve électronique</strong> est admise si elle garantit l’intégrité du document et l’identification de son auteur. La <strong>signature électronique</strong> qualifiée a la même valeur qu’une signature manuscrite. L’horodatage certifie la date et l’heure d’un événement numérique.`,
      `Le <strong>contrat de vente électronique</strong> obéit aux mêmes conditions de validité que tout contrat, avec des obligations supplémentaires : <strong>information précontractuelle</strong> claire, processus de <strong>double clic</strong> (récapitulatif et confirmation), <strong>droit de rétractation</strong> de quatorze jours.`,
      `Le <strong>système d’information</strong> (SI) réunit personnes, procédures, matériels, logiciels et données pour collecter, stocker, traiter et diffuser l’information. Il ne se réduit pas à l’informatique : il inclut les processus humains et organisationnels.`,
      `Le numérique permet de <strong>spécialiser</strong> certaines tâches (automatisation), d’<strong>intégrer</strong> des informations dispersées (ERP/PGI) et de favoriser l’<strong>action collective</strong> à distance (outils collaboratifs, visioconférence).`,
      `Le numérique modifie l’organisation du travail : <strong>télétravail</strong>, flex office, management par objectifs, <strong>droit à la déconnexion</strong>. Les <strong>processus décisionnels</strong> évoluent avec l’accès en temps réel aux données. L’entreprise peut adopter des structures plus souples (mode projet, management agile).`
    ],
    [
      `L’<strong>offre de travail</strong> provient des personnes souhaitant travailler (population active) ; la <strong>demande de travail</strong> émane des employeurs. Leur rencontre dépend du salaire, des qualifications, de la localisation et de la conjoncture.`,
      `Le marché du travail est <strong>segmenté</strong> : un <strong>marché primaire</strong> offre des emplois stables et bien rémunérés ; un <strong>marché secondaire</strong> propose des emplois précaires et peu qualifiés. Les tendances incluent la tertiarisation, la féminisation, le temps partiel et les nouvelles formes de travail (freelance, plateformes).`,
      `Les <strong>politiques passives</strong> assurent un revenu de remplacement (allocation chômage). Les <strong>politiques actives</strong> favorisent le retour à l’emploi : formation, aide à la création d’entreprise, contrats aidés. Les <strong>allègements de cotisations</strong> sur les bas salaires réduisent le coût du travail.`,
      `Les sources du droit du travail forment une <strong>hiérarchie</strong> : Constitution, traités, Code du travail, <strong>conventions collectives</strong>, accords d’entreprise et contrat individuel. Le <strong>principe de faveur</strong> s’applique, mais depuis 2017, l’accord d’entreprise peut prévaloir dans certains domaines.`,
      `Le <strong>salarié</strong> est lié par un <strong>lien de subordination</strong> : l’employeur peut diriger, contrôler et sanctionner. Le <strong>travailleur indépendant</strong> n’a pas de lien de subordination et organise librement son activité. Cette distinction emporte des conséquences en termes de protection sociale et de droit applicable.`,
      `Le <strong>CDI</strong> est la forme normale du contrat de travail. Le <strong>CDD</strong> ne peut être conclu que pour un motif légal (remplacement, surcroît d’activité) et une durée limitée. Le <strong>contrat de travail temporaire</strong> (intérim) met en jeu trois parties : salarié, agence d’intérim et entreprise utilisatrice.`,
      `L’employeur a une <strong>obligation de sécurité</strong> couvrant les risques physiques et psychosociaux. Il doit assurer la santé et la sécurité des salariés. Cette obligation est de résultat : même sans faute, l’employeur peut être tenu responsable d’un dommage subi par un salarié.`,
      `Une <strong>modification du contrat</strong> (rémunération, qualification, lieu) nécessite l’accord du salarié. Un simple <strong>changement des conditions de travail</strong> (horaires, tâches dans la même qualification) relève du pouvoir de direction de l’employeur.`,
      `Le <strong>licenciement</strong> doit reposer sur une <strong>cause réelle et sérieuse</strong> (motif personnel ou économique) et respecter une procédure. La <strong>démission</strong> est à l’initiative du salarié. La <strong>rupture conventionnelle</strong> est un accord mutuel homologué ouvrant droit au chômage.`,
      `Le <strong>droit négocié</strong> occupe une place croissante. Une <strong>convention collective</strong> fixe les règles d’un secteur. Un <strong>accord d’entreprise</strong> adapte ces règles localement. Les <strong>partenaires sociaux</strong> (syndicats et organisations patronales) négocient ces textes. Le <strong>CSE</strong> représente le personnel.`,
      `La <strong>GPEC</strong> (gestion prévisionnelle des emplois et des compétences) anticipe les évolutions des métiers et des effectifs. Elle compare les ressources actuelles aux besoins futurs et déploie des actions : recrutement, formation, mobilité, reconversion.`,
      `La <strong>motivation</strong> dépend de facteurs multiples. Herzberg distingue les facteurs d’<strong>hygiène</strong> (conditions de travail, rémunération — leur absence démotive) des facteurs de <strong>motivation</strong> (responsabilité, reconnaissance — ils créent la satisfaction). La rémunération est un levier important mais insuffisant.`,
      `Les <strong>conditions de travail</strong> évoluent sous l’effet du numérique (télétravail, droit à la déconnexion), des attentes sociétales (équilibre vie pro/perso) et des contraintes économiques. L’enjeu est de concilier les <strong>objectifs de l’entreprise</strong> avec les <strong>attentes des individus</strong>.`
    ],
    [
      `Le <strong>diagnostic externe</strong> repère les <strong>opportunités</strong> et <strong>menaces</strong> de l’environnement : macro-environnement (PESTEL) et micro-environnement (cinq forces de Porter : clients, fournisseurs, concurrents, nouveaux entrants, produits de substitution). Il identifie les <strong>facteurs clés de succès</strong> du secteur.`,
      `Le <strong>diagnostic interne</strong> évalue les <strong>forces</strong> et <strong>faiblesses</strong> de l’entreprise : ressources tangibles et intangibles, compétences distinctives. La matrice <strong>SWOT</strong> synthétise les résultats des diagnostics externe et interne. Une ressource est <strong>stratégique</strong> si elle est valorisable, rare, difficilement imitable et non substituable.`,
      `Un <strong>domaine d’activités stratégiques</strong> (DAS) est un sous-ensemble de l’activité partageant les mêmes facteurs clés de succès, concurrents et compétences. La <strong>segmentation stratégique</strong> découpe l’entreprise en DAS pour analyser chacun séparément et définir une stratégie adaptée.`,
      `Au niveau global : <strong>spécialisation</strong> (un seul DAS, expertise mais risque) ou <strong>diversification</strong> (plusieurs DAS, répartition des risques mais complexité). Par DAS : <strong>domination par les coûts</strong>, <strong>différenciation</strong> (produit perçu comme unique) ou <strong>focalisation</strong> (concentration sur une niche).`,
      `La <strong>croissance interne</strong> (organique) développe les moyens propres — investissement, embauche, R&D. La <strong>croissance externe</strong> acquiert une autre entreprise (rachat, fusion) — rapide mais risquée. La <strong>croissance conjointe</strong> (alliances, partenariats, joint-venture) mutualise les ressources. Le choix dépend des ressources, de l’urgence et des risques.`
    ],
  ],
  droit: [
    [
      `L’<strong>État de droit</strong> signifie que tous — citoyens et pouvoirs publics — sont soumis aux mêmes règles. La <strong>laïcité</strong>, l’<strong>égalité</strong>, la <strong>liberté</strong> et la <strong>solidarité</strong> fondent l’organisation de la société démocratique française.`,
      `Le <strong>droit</strong> organise la vie sociale, protège les personnes et pacifie les conflits. La <strong>morale</strong> relève de la conscience individuelle. Un comportement peut être moralement réprouvé sans être juridiquement sanctionné (mentir n’est pas toujours illégal), et inversement.`,
      `L’<strong>ordre public</strong> désigne les règles auxquelles les individus ne peuvent déroger par convention. Il garantit un socle minimal de protection au-delà de la liberté contractuelle. Les dispositions d’ordre public s’imposent même si les parties souhaitent y déroger.`,
      `La <strong>règle de droit</strong> est <strong>générale</strong> (elle s’applique à tous), <strong>impersonnelle</strong> (elle ne vise personne en particulier) et <strong>obligatoire</strong> (son non-respect est sanctionné). Elle est édictée par une <strong>autorité légitime</strong> (Parlement, gouvernement, institutions européennes).`,
      `La <strong>Constitution</strong> est la norme suprême. La <strong>QPC</strong> (question prioritaire de constitutionnalité) permet à tout justiciable de contester la conformité d’une loi à la Constitution devant le Conseil constitutionnel. Le <strong>contrôle de constitutionnalité</strong> garantit la suprématie de la Constitution.`,
      `Le <strong>droit de l’Union européenne</strong> comprend le droit primaire (traités) et le droit dérivé : le <strong>règlement</strong> est directement applicable dans tous les États membres ; la <strong>directive</strong> fixe des objectifs que chaque État doit transposer dans son droit national.`,
      `La <strong>loi</strong>, votée par le Parlement, fixe les règles dans les domaines définis par la Constitution. Le <strong>règlement</strong> (décrets, arrêtés) émane du pouvoir exécutif. La <strong>jurisprudence</strong> désigne les interprétations des tribunaux qui orientent les solutions futures.`,
      `Les <strong>conventions collectives</strong> sont négociées entre partenaires sociaux pour fixer les conditions de travail d’un secteur. Les <strong>accords collectifs</strong> adaptent ces règles au niveau de l’entreprise. Ils s’insèrent dans la hiérarchie des normes entre la loi et le contrat individuel.`,
      `L’<strong>organisation judiciaire</strong> comprend les juridictions de l’ordre judiciaire (civil et pénal) et de l’ordre administratif. La <strong>hiérarchie des normes</strong> impose qu’une norme inférieure respecte la norme supérieure : Constitution > traités > lois > règlements > contrats.`
    ],
    [
      `Le <strong>litige</strong> naît lorsqu’une prétention se heurte à la résistance d’une autre personne. Le <strong>demandeur</strong> est celui qui saisit le juge ; le <strong>défendeur</strong> résiste à la demande. Un <strong>accord amiable</strong> (médiation, conciliation) peut résoudre le différend sans procès.`,
      `L’<strong>acte juridique</strong> est une manifestation de volonté destinée à produire des effets de droit (contrat, testament). Le <strong>fait juridique</strong> est un événement qui produit des effets sans qu’ils aient été recherchés (accident, naissance). La <strong>présomption</strong> dispense de preuve celui qui en bénéficie.`,
      `La <strong>charge de la preuve</strong> pèse en principe sur le demandeur. Les <strong>modes de preuve</strong> varient selon la nature : un acte juridique se prouve par écrit ; un fait juridique par tous moyens. La <strong>preuve électronique</strong> est admise si intégrité et identification sont garanties.`,
      `L’<strong>acte authentique</strong> est rédigé par un officier public (notaire) et fait foi jusqu’inscription de faux. L’<strong>acte sous signature privée</strong> est rédigé par les parties elles-mêmes et fait foi jusqu’preuve du contraire. La force probante diffère selon la forme.`,
      `Le <strong>témoignage</strong> est la déclaration d’un tiers sur des faits dont il a eu connaissance. L’<strong>aveu</strong> est la reconnaissance par une partie d’un fait qui lui est défavorable. Le juge apprécie les preuves selon son <strong>intime conviction</strong> en matière pénale.`,
      `Les <strong>voies de recours</strong> permettent de contester une décision. L’<strong>appel</strong> soumet l’affaire à un nouvel examen en fait et en droit. Le <strong>pourvoi en cassation</strong> ne juge pas les faits mais vérifie la bonne application du droit.`,
      `La <strong>partie civile</strong> est la victime qui se constitue au procès pénal pour obtenir réparation. L’<strong>instance</strong> est la période entre la saisine et le jugement. L’<strong>audience</strong> est la séance publique. Le <strong>jugement</strong> est rendu en première instance, l’<strong>arrêt</strong> en appel ou en cassation.`,
      `La <strong>compétence d’attribution</strong> détermine quelle catégorie de juridiction est saisie (tribunal judiciaire, conseil de prud’hommes, tribunal de commerce). L’<strong>assignation</strong> est l’acte par lequel le demandeur convoque le défendeur. La <strong>mise en examen</strong> est propre à la procédure pénale.`,
      `Les <strong>infractions</strong> sont classées par gravité : la <strong>contravention</strong> (tribunal de police), le <strong>délit</strong> (tribunal correctionnel) et le <strong>crime</strong> (cour d’assises). La qualification détermine la juridiction compétente et les peines encourues.`
    ],
    [
      `Toute personne juridique est identifiée par des attributs : <strong>genre</strong> (personne physique ou morale), <strong>nom</strong> ou <strong>dénomination sociale</strong>, <strong>domicile</strong> ou <strong>siège social</strong>. Ces éléments permettent de l’individualiser et de la localiser juridiquement.`,
      `Les <strong>droits patrimoniaux</strong> ont une valeur pécuniaire et sont cessibles, transmissibles et saisissables (propriété, créances). Les <strong>droits extrapatrimoniaux</strong> sont attachés à la personne et incessibles (vie privée, intégrité physique, honneur).`,
      `Depuis 2015, l’<strong>animal</strong> est reconnu comme un <strong>être vivant doué de sensibilité</strong>, mais il reste soumis au régime des biens en l’absence de loi spéciale. Il n’a pas de personnalité juridique et ne peut être titulaire de droits au sens strict.`,
      `La <strong>capacité de jouissance</strong> est l’aptitude à être titulaire d’un droit. La <strong>capacité d’exercice</strong> est l’aptitude à exercer soi-même ce droit. Un mineur non émancipé a la capacité de jouissance mais une capacité d’exercice limitée ; ses parents le représentent.`,
      `La <strong>représentation</strong> organise l’exercice des droits d’une personne par une autre : parents pour le mineur, tuteur pour le majeur protégé, dirigeant pour la société. Le représentant agit au nom et pour le compte du représenté.`,
      `Un <strong>acte de disposition</strong> modifie la composition du patrimoine (vendre un bien, emprunter). Un <strong>acte d’administration</strong> assure la gestion courante sans altérer le patrimoine (percevoir un loyer, entretenir un bien). Cette distinction est essentielle pour les incapables.`,
      `Le <strong>patrimoine</strong> d’une personne regroupe l’ensemble de ses droits et obligations évaluables en argent — actif (biens, créances) et passif (dettes). Chaque personne dispose d’un seul patrimoine, qui constitue le gage général de ses créanciers.`
    ],
    [
      `Les <strong>données personnelles</strong> sont protégées par le RGPD. Toute personne dispose de droits d’accès, de rectification, d’effacement et de portabilité. Le responsable du traitement doit respecter les principes de finalité, minimisation, exactitude, durée limitée et sécurité.`,
      `Le <strong>droit à l’image</strong> permet à chacun de s’opposer à la captation et à la diffusion de son image sans consentement. Le <strong>respect de la vie privée</strong> est un droit fondamental protégé par le Code civil. Une atteinte peut donner lieu à des dommages-intérêts et à la cessation du trouble.`,
      `Les <strong>biens corporels</strong> ont une existence matérielle (immeuble, véhicule, marchandise). Les <strong>biens incorporels</strong> sont sans matérialité (créance, brevet, fonds de commerce, droit d’auteur). Cette distinction a des conséquences sur les modes de preuve et de transmission.`,
      `L’<strong>usus</strong> est le droit d’utiliser la chose, le <strong>fructus</strong> le droit d’en percevoir les fruits (loyer, récolte, dividende), l’<strong>abusus</strong> le droit d’en disposer (vendre, donner, détruire). Ces trois attributs réunis forment le droit de propriété complet.`,
      `Le droit de propriété est <strong>absolu</strong> (le propriétaire peut en user librement), <strong>exclusif</strong> (lui seul peut en jouir) et <strong>perpétuel</strong> (il ne s’éteint pas par le non-usage). Ces caractères connaissent cependant des limites légales : servitudes, expropriation, trouble de voisinage.`,
      `Le <strong>trouble anormal du voisinage</strong> engage la responsabilité de celui qui cause à son voisin un préjudice excédant les inconvénients normaux, même sans faute. Exemples : bruit excessif, odeurs, privation de lumière. La réparation peut être en nature (cessation) ou en argent.`,
      `La <strong>marque commerciale</strong> est un signe distinctif (nom, logo, couleur) protégé par la <strong>propriété industrielle</strong>. Elle confère un <strong>monopole d’exploitation</strong> renouvelable par périodes de dix ans. Son titulaire peut s’opposer à toute utilisation non autorisée.`,
      `L’<strong>action en contrefaçon</strong> sanctionne la reproduction ou l’imitation d’un droit de propriété intellectuelle sans autorisation. Elle peut être civile (dommages-intérêts) ou pénale (amende, emprisonnement). La contrefaçon numérique est particulièrement répandue.`,
      `Le <strong>droit d’auteur</strong> protège les œuvres originales dès leur création, sans formalité. Il comprend un <strong>droit moral</strong> (paternité, intégrité, divulgation — perpétuel et incessible) et des <strong>droits patrimoniaux</strong> (reproduction, représentation — cessibles et limités dans le temps).`
    ],
    [
      `La <strong>validité du contrat</strong> suppose trois conditions : un <strong>consentement</strong> libre et éclairé, la <strong>capacité</strong> juridique des parties et un <strong>contenu</strong> licite et certain. L’absence d’une condition peut entraîner la <strong>nullité</strong> du contrat.`,
      `Le consentement est vicié par l’<strong>erreur</strong> (se tromper sur une qualité essentielle), le <strong>dol</strong> (manœuvres frauduleuses de l’autre partie pour tromper) ou la <strong>violence</strong> (contrainte physique, morale ou économique). Le vice doit être déterminant du consentement.`,
      `La <strong>force obligatoire</strong> signifie que le contrat s’impose aux parties comme une loi : elles doivent exécuter ce qu’elles ont promis. L’exécution doit se faire de <strong>bonne foi</strong>, c’est-à-dire loyalement, sans chercher à nuire ni à détourner l’esprit du contrat.`,
      `En cas d’inexécution, le créancier dispose de plusieurs <strong>sanctions</strong> : l’<strong>exception d’inexécution</strong> (suspendre sa propre obligation), l’<strong>exécution forcée</strong>, la <strong>réduction de prix</strong>, la <strong>résolution</strong> du contrat et les <strong>dommages-intérêts</strong>.`,
      `Le professionnel a une <strong>obligation d’information précontractuelle</strong> sur les caractéristiques essentielles du bien ou du service, le prix et les conditions de vente. Cette obligation protège le consommateur contre le déséquilibre d’information avec le professionnel.`,
      `Le <strong>droit de rétractation</strong> permet au consommateur de revenir sur son engagement dans un délai de <strong>quatorze jours</strong> pour les contrats conclus à distance ou hors établissement, sans avoir à justifier de motif ni à payer de pénalité.`,
      `Les <strong>clauses abusives</strong> créent un <strong>déséquilibre significatif</strong> entre les droits et obligations des parties au détriment du consommateur. Elles sont <strong>réputées non écrites</strong> : le contrat subsiste, mais la clause est supprimée.`,
      `Le <strong>contrat de consommation</strong> est conclu entre un professionnel et un consommateur. Le <strong>contrat électronique</strong> obéit aux mêmes conditions de validité avec des obligations supplémentaires : processus de double clic, récapitulatif, confirmation et droit de rétractation.`
    ],
    [
      `Le <strong>dommage</strong> doit être <strong>certain</strong> (réel et évaluable), <strong>personnel</strong> (subi par le demandeur) et <strong>légitime</strong> (portant sur un intérêt juridiquement protégé). Il peut être corporel, matériel ou moral. Sans dommage avéré, il n’y a pas de responsabilité.`,
      `Le <strong>fait générateur</strong> est l’événement à l’origine du dommage. Il peut être une <strong>faute</strong> (comportement fautif), le <strong>fait d’une chose</strong> (dont on est gardien) ou le <strong>fait d’autrui</strong> (enfant mineur, préposé). Chaque fait générateur correspond à un régime de responsabilité.`,
      `Le <strong>lien de causalité</strong> est le lien entre le fait générateur et le dommage. La victime doit prouver que sans le fait générateur, le dommage ne se serait pas produit. La causalité peut être directe ou indirecte selon les circonstances.`,
      `La <strong>responsabilité contractuelle</strong> naît de l’inexécution d’un contrat entre les parties. La <strong>responsabilité extracontractuelle</strong> (délictuelle) sanctionne un dommage causé en dehors de tout contrat. Les régimes de preuve et d’indemnisation diffèrent.`,
      `La <strong>responsabilité pénale</strong> sanctionne les <strong>infractions</strong> (contravention, délit, crime) par des peines (amende, emprisonnement). Elle est personnelle : seul l’auteur de l’infraction peut être condamné. Les personnes morales peuvent aussi être pénalement responsables.`,
      `Les <strong>causes d’exonération</strong> peuvent supprimer ou réduire la responsabilité. La <strong>force majeure</strong> (événement imprévisible, irrésistible et extérieur) exonère totalement. La <strong>faute de la victime</strong> ou le <strong>fait d’un tiers</strong> peuvent entraîner une exonération partielle ou totale.`,
      `Le <strong>préjudice écologique</strong> est l’atteinte aux éléments ou aux fonctions des écosystèmes. Depuis 2016, il peut donner lieu à une réparation en nature (remise en état) ou en espèces. Les associations environnementales peuvent agir en justice.`,
      `La <strong>responsabilité du fait des produits défectueux</strong> permet à la victime d’obtenir réparation du producteur sans prouver de faute, à condition de démontrer le défaut du produit, le dommage et le lien de causalité. Le produit est défectueux s’il n’offre pas la sécurité attendue.`,
      `L’<strong>accident du travail</strong> bénéficie d’une <strong>présomption d’imputabilité</strong> : tout accident survenu au temps et au lieu du travail est présumé professionnel. L’<strong>assurance</strong> mutualise les risques : chaque assuré paie une prime, et le sinistre est indemnisé par le fonds commun.`
    ],
    [
      `Le <strong>contrat de travail</strong> repose sur trois éléments : une prestation de travail, une rémunération et un <strong>lien de subordination</strong> (pouvoir de diriger, contrôler et sanctionner). Ce lien distingue le salarié du travailleur indépendant.`,
      `Le <strong>CDI</strong> est la forme normale (sans terme). Le <strong>CDD</strong> ne peut être conclu que pour un motif légal (remplacement, surcroît, saison) et une durée limitée ; le non-respect entraîne une <strong>requalification en CDI</strong>. Le <strong>contrat de travail temporaire</strong> (intérim) implique trois parties.`,
      `L’employeur dispose d’un <strong>pouvoir de direction</strong> (organiser le travail), d’un <strong>pouvoir de contrôle</strong> (surveiller l’exécution) et d’un <strong>pouvoir disciplinaire</strong> (sanctionner les fautes). Ces pouvoirs sont encadrés par la loi et les conventions collectives.`,
      `Le salarié conserve ses <strong>libertés individuelles</strong> (expression, opinion, vie privée) dans l’entreprise. Les <strong>libertés collectives</strong> incluent le droit syndical, le droit de grève et la représentation du personnel. Toute restriction doit être justifiée et proportionnée.`,
      `Le <strong>licenciement</strong> doit reposer sur une <strong>cause réelle et sérieuse</strong> : motif personnel (faute, insuffisance) ou économique (difficultés, restructuration). La procédure inclut convocation, entretien préalable, notification motivée et respect du préavis.`,
      `La <strong>rupture conventionnelle</strong> est un accord mutuel entre employeur et salarié pour mettre fin au CDI. Elle doit être homologuée par l’administration et ouvre droit aux allocations chômage. La <strong>démission</strong> est l’initiative unilatérale du salarié ; elle ne donne pas droit au chômage.`,
      `Le <strong>droit négocié</strong> résulte de la négociation entre employeurs et syndicats. Les <strong>conventions collectives</strong> fixent les règles d’un secteur. Les <strong>accords collectifs</strong> adaptent ces règles au niveau de l’entreprise. Depuis 2017, l’accord d’entreprise peut prévaloir dans certains domaines.`,
      `Le <strong>CSE</strong> (comité social et économique) est l’instance de représentation du personnel. Il assure l’expression collective des salariés, est consulté sur les décisions économiques et sociales, et contribue à la santé et à la sécurité au travail. Les <strong>partenaires sociaux</strong> sont les syndicats et les organisations patronales.`,
      `Le <strong>droit de grève</strong> est constitutionnel. La grève est une cessation collective et concertée du travail pour appuyer des revendications professionnelles. Le salarié gréviste est protégé contre le licenciement (sauf faute lourde). Dans le service public, un préavis est obligatoire.`
    ],
    [
      `La <strong>liberté d’entreprendre</strong> est un principe constitutionnel : chacun peut créer une activité économique. La <strong>liberté de concurrence</strong> garantit que les entreprises peuvent rivaliser sur le marché. Ces libertés sont encadrées par le droit pour éviter les abus.`,
      `La <strong>concurrence déloyale</strong> sanctionne quatre types de comportements : la <strong>confusion</strong> (imiter l’apparence d’un concurrent), le <strong>dénigrement</strong> (discréditer publiquement), la <strong>désorganisation</strong> (débaucher massivement, détourner des secrets) et le <strong>parasitisme</strong> (profiter des investissements d’autrui sans contrepartie).`,
      `L’<strong>entreprise individuelle</strong> est la forme la plus simple : pas de personnalité morale distincte, patrimoine personnel protégé depuis 2022. La <strong>société</strong> crée une <strong>personne morale</strong> après immatriculation, avec un patrimoine distinct de celui des associés.`,
      `Le <strong>contrat de société</strong> repose sur la réunion d’<strong>apports</strong> (numéraire, nature, industrie), le partage des bénéfices et des pertes, et l’<strong>affectio societatis</strong> — la volonté de collaborer sur un pied d’égalité. C’est un contrat spécial soumis au droit des sociétés.`,
      `La <strong>SARL</strong> et la <strong>SAS</strong> limitent la responsabilité aux apports ; la <strong>SA</strong> convient aux grandes entreprises et permet la cotation en bourse. La <strong>SCOP</strong> (société coopérative) obéit au principe « un associé-salarié = une voix » et affecte prioritairement les bénéfices aux réserves.`,
      `La <strong>franchise</strong> permet au franchisé d’exploiter la marque et le savoir-faire du franchiseur moyennant une redevance. La <strong>concession</strong> accorde un droit de distribution exclusif sur un territoire. Ces formes structurent l’activité sans créer de lien de subordination.`,
      `Les <strong>procédures collectives</strong> traitent les difficultés de l’entreprise. La <strong>sauvegarde</strong> intervient avant la cessation de paiements. Le <strong>redressement judiciaire</strong> vise à poursuivre l’activité et apurer les dettes. La <strong>liquidation judiciaire</strong> met fin à l’activité lorsque le redressement est impossible.`
    ],
  ],
  economie: [
    [
      `Les <strong>besoins</strong> humains sont en pratique illimités, tandis que les <strong>biens</strong> (ressources, temps, revenus) sont limités. Cette <strong>rareté</strong> oblige chaque individu et chaque société à faire des <strong>choix</strong>. L’économie est la science qui étudie comment les agents allouent des ressources rares entre des usages concurrents.`,
      `Le <strong>coût d’opportunité</strong> est la valeur de la meilleure alternative à laquelle on renonce en faisant un choix. <em>Exemple : un ménage qui consacre 800 € à un smartphone renonce à un week-end ou à de l’épargne.</em> Ce raisonnement en termes d’arbitrage est au cœur de la démarche économique.`,
      `L’activité économique met en relation cinq catégories d’<strong>agents</strong> : les <strong>ménages</strong> (consommation, travail), les <strong>entreprises</strong> (production marchande), les <strong>administrations publiques</strong> (services non marchands), les <strong>institutions financières</strong> (crédit) et le <strong>reste du monde</strong> (échanges extérieurs).`,
      `Le <strong>circuit économique</strong> représente les interdépendances entre agents par des <strong>flux réels</strong> (travail, biens, services) et des <strong>flux monétaires</strong> (salaires, prix, impôts, intérêts). Toute opération réelle a généralement sa contrepartie monétaire.`,
      `La <strong>division du travail</strong> accroît la productivité en permettant à chaque agent de se concentrer sur ce qu’il fait le mieux. La <strong>spécialisation</strong> génère des gains d’efficacité mais crée une dépendance vis-à-vis des échanges. <em>Exemple : un boulanger et un maraîcher ont intérêt à échanger plutôt qu’à tout produire seuls.</em>`,
      `L’<strong>utilité</strong> est la satisfaction retirée de la consommation d’un bien. L’<strong>utilité marginale</strong> — le supplément de satisfaction procuré par la dernière unité — est généralement <strong>décroissante</strong>. Le premier verre d’eau désaltère davantage que le dixième. Un consommateur rationnel cesse d’acheter quand l’utilité marginale devient inférieure au prix.`,
      `La <strong>monnaie</strong> remplit trois fonctions : <strong>unité de compte</strong> (mesurer la valeur), <strong>intermédiaire des échanges</strong> (éviter le troc) et <strong>réserve de valeur</strong> (conserver du pouvoir d’achat dans le temps). Les nouvelles formes (monnaie scripturale, cryptomonnaies) renouvellent ces fonctions.`
    ],
    [
      `La <strong>production marchande</strong> est vendue à un prix couvrant au moins son coût ; la <strong>production non marchande</strong> (éducation publique, justice) est fournie gratuitement ou quasi gratuitement, financée par les prélèvements obligatoires.`,
      `La <strong>valeur ajoutée</strong> = production − <strong>consommations intermédiaires</strong>. Elle mesure la richesse réellement créée. <em>Exemple : si une boulangerie vend 200 000 € de pain et achète 80 000 € de farine et énergie, sa VA est de 120 000 €.</em>`,
      `Le <strong>PIB</strong> additionne les valeurs ajoutées de toutes les unités de production résidant sur le territoire. Ses <strong>limites</strong> : il ne comptabilise ni le travail domestique, ni le bénévolat, ni les dégradations environnementales. Il ne dit rien de la répartition des revenus.`,
      `Le <strong>PIB nominal</strong> est mesuré en euros courants et inclut l’inflation. Le <strong>PIB réel</strong> (en volume, euros constants) est corrigé de l’inflation et reflète seul une évolution des quantités produites. La différence entre les deux permet d’isoler l’effet des prix.`,
      `Les <strong>revenus primaires</strong> rémunèrent la participation à la production : <strong>salaires</strong> (travail), <strong>revenus du patrimoine</strong> (intérêts, dividendes, loyers) et <strong>revenus mixtes</strong> (indépendants). Ils reflètent la répartition initiale de la valeur ajoutée.`,
      `La <strong>redistribution</strong> corrige la répartition initiale : l’État prélève cotisations et impôts, puis verse des <strong>prestations sociales</strong> (allocations familiales, pensions de retraite, indemnités chômage, minima sociaux). L’objectif est de réduire les inégalités.`,
      `Le <strong>revenu disponible</strong> est ce que le ménage peut effectivement consommer ou épargner : revenus primaires + prestations sociales reçues − prélèvements obligatoires directs. C’est la grandeur pertinente pour analyser le niveau de vie.`
    ],
    [
      `Le <strong>revenu disponible</strong> est la somme dont un ménage dispose pour consommer ou épargner : revenus primaires + prestations sociales − prélèvements directs. <em>Exemple : 2 400 € net + 200 € d’allocations − 150 € d’impôt = 2 450 € de revenu disponible.</em>`,
      `La <strong>consommation</strong> dépend principalement du revenu, mais aussi des prix, du crédit, des anticipations et de facteurs sociologiques (effet d’imitation, normes sociales). Elle représente l’utilisation de biens et services pour satisfaire un besoin.`,
      `Le <strong>pouvoir d’achat</strong> mesure la quantité de biens qu’un revenu permet d’acquérir. Il n’augmente que si le revenu progresse plus vite que les prix. <em>Si un salaire augmente de 2 % et l’inflation atteint 3 %, le pouvoir d’achat diminue d’environ 1 %.</em> L’<strong>IPC</strong> sert de référence.`,
      `L’<strong>épargne</strong> est la part du revenu disponible non consommée. Les motifs sont variés : <strong>précaution</strong> (faire face à un imprévu), <strong>projet</strong> (achat immobilier), <strong>transmission</strong> (patrimoine). Le niveau des taux d’intérêt et la confiance influencent le choix entre consommation et épargne.`,
      `Le <strong>taux d’épargne</strong> rapporte l’épargne au revenu disponible. En France, il se situe autour de 15-17 %. Il varie selon les pays, les revenus et les anticipations des ménages. Un taux élevé peut freiner la consommation et la croissance à court terme.`,
      `L’épargne <strong>financière</strong> regroupe les placements monétaires et financiers (livret, assurance-vie, actions). L’épargne <strong>non financière</strong> correspond principalement à l’investissement immobilier. Le choix dépend du rendement, du risque, de la liquidité et de la fiscalité.`
    ],
    [
      `Un agent en <strong>capacité de financement</strong> épargne plus qu’il n’investit (il peut prêter le surplus). Un agent en <strong>besoin de financement</strong> investit plus qu’il n’épargne (il doit trouver des ressources extérieures). Les ménages sont généralement en capacité, les entreprises et l’État en besoin.`,
      `L’<strong>autofinancement</strong> utilise les bénéfices non distribués — il préserve l’autonomie mais dépend des résultats passés. C’est le financement interne par excellence.`,
      `Le <strong>financement indirect</strong> passe par un intermédiaire, principalement la <strong>banque</strong>, qui collecte des dépôts et accorde des crédits. Elle réalise aussi de la <strong>création monétaire</strong> en prêtant au-delà des dépôts existants.`,
      `Le <strong>financement direct</strong> met en relation épargnants et emprunteurs sur le marché des capitaux. Les <strong>actions</strong> sont des titres de propriété (l’actionnaire est copropriétaire). Les <strong>obligations</strong> sont des titres de dette (l’obligataire est créancier). Chaque mode a des avantages et contraintes.`,
      `Les banques <strong>créent de la monnaie</strong> chaque fois qu’elles accordent un <strong>crédit</strong> : elles inscrivent le montant au compte du client sans le prélever sur un autre dépôt. « Les crédits font les dépôts. » La banque centrale encadre cette création par les taux directeurs et les réserves obligatoires.`,
      `La <strong>politique monétaire</strong>, conduite par la banque centrale, agit sur les <strong>taux directeurs</strong> pour influencer le crédit et la <strong>masse monétaire</strong>. Une politique <strong>expansionniste</strong> abaisse les taux pour stimuler l’activité ; une politique <strong>restrictive</strong> les relève pour freiner l’inflation.`,
      `Trois critères guident les décisions de placement : le <strong>rendement</strong> (gain espéré), le <strong>risque</strong> (possibilité de perte) et la <strong>liquidité</strong> (facilité à récupérer son argent). En règle générale, un placement plus risqué offre un rendement potentiel plus élevé. La <strong>diversification</strong> réduit le risque global.`
    ],
    [
      `Sur un marché, la <strong>demande</strong> décroît généralement quand le prix augmente et l’<strong>offre</strong> croît avec le prix. Le <strong>prix d’équilibre</strong> est celui pour lequel offre et demande coïncident. Le marché s’ajuste par les prix pour éliminer les excédents ou les pénuries.`,
      `L’<strong>élasticité-prix de la demande</strong> mesure la sensibilité de la demande à une variation de prix. <em>Si une hausse de 10 % du prix réduit la demande de 20 %, l’élasticité vaut −2.</em> Plus la demande est élastique, plus le consommateur réagit au prix.`,
      `La <strong>concurrence pure et parfaite</strong> suppose atomicité, homogénéité, transparence et libre entrée. En <strong>monopole</strong>, un seul offreur fixe les prix. En <strong>oligopole</strong>, quelques entreprises dominent et leurs décisions sont interdépendantes. Ces structures rarement pures coexistent.`,
      `Le <strong>pouvoir de marché</strong> est la capacité d’une entreprise à fixer un prix supérieur au coût marginal. Les <strong>barrières à l’entrée</strong> — brevets, investissements lourds, effets de réseau — limitent l’arrivée de nouveaux concurrents et renforcent ce pouvoir.`,
      `Les <strong>externalités positives</strong> (vaccination, éducation) procurent un bénéfice gratuit à des tiers. Les <strong>externalités négatives</strong> (pollution) imposent un coût non compensé. Le marché ne les intègre pas spontanément dans les prix, ce qui justifie l’intervention publique.`,
      `Un <strong>bien public</strong> est <strong>non rival</strong> (la consommation par l’un n’empêche pas celle de l’autre) et <strong>non excluable</strong> (on ne peut empêcher quiconque d’en bénéficier). <em>Exemples : éclairage public, défense nationale.</em> Le marché ne le produit pas spontanément (problème du « passager clandestin »).`,
      `L’<strong>asymétrie d’information</strong> avantage la partie la mieux informée. Elle peut conduire à une <strong>sélection adverse</strong> (seuls les « mauvais risques » restent sur le marché) ou à un <strong>aléa moral</strong> (un assuré prend plus de risques une fois couvert).`
    ],
    [
      `Musgrave identifie trois fonctions : <strong>allocation</strong> (produire ou financer les biens que le marché ne fournit pas efficacement), <strong>redistribution</strong> (réduire les inégalités par prélèvements et transferts), <strong>stabilisation</strong> (atténuer les fluctuations conjoncturelles).`,
      `Le <strong>budget de l’État</strong> retrace les <strong>recettes</strong> (impôts directs et indirects, cotisations) et les <strong>dépenses</strong> (fonctionnement, investissement, transferts). Le solde budgétaire est leur différence. Lorsqu’il est négatif, on parle de <strong>déficit</strong>.`,
      `La <strong>dette publique</strong> est l’accumulation des déficits financés par l’emprunt, souvent exprimée en % du PIB. Un niveau élevé accroît la charge d’intérêts et peut limiter les marges de manœuvre futures, mais sa soutenabilité dépend aussi de la croissance et des taux.`,
      `Une politique budgétaire de <strong>relance</strong> augmente les dépenses ou réduit les impôts pour soutenir l’activité, au risque d’aggraver le déficit. Une politique de <strong>rigueur</strong> (austérité) réduit les dépenses pour contenir le déficit, au prix d’un ralentissement.`,
      `Une politique monétaire <strong>expansionniste</strong> abaisse les taux d’intérêt pour faciliter le crédit et l’investissement. Une politique <strong>restrictive</strong> les relève pour freiner l’inflation. La BCE conduit la politique monétaire dans la zone euro.`,
      `Les <strong>politiques structurelles</strong> transforment durablement les capacités productives : réforme de l’éducation, investissement dans la recherche et l’innovation, déréglementation du marché du travail, politique industrielle. Leurs effets sont plus lents mais plus profonds que les politiques conjoncturelles.`
    ],
    [
      `L’<strong>offre de travail</strong> provient des personnes souhaitant travailler. La <strong>demande de travail</strong> émane des employeurs. La <strong>population active</strong> regroupe les personnes en emploi et les chômeurs. Le <strong>taux d’activité</strong> rapporte la population active à la population en âge de travailler.`,
      `Le <strong>taux d’emploi</strong> mesure la proportion de personnes effectivement en emploi. Le <strong>taux de chômage</strong> (au sens du BIT) rapporte les chômeurs à la population active. Ces indicateurs distinguent les situations où le chômage baisse par création d’emplois de celles où des personnes sortent de la population active.`,
      `Le <strong>chômage conjoncturel</strong> résulte d’un ralentissement de l’activité économique. Le <strong>chômage structurel</strong> persiste même en période de croissance, en raison d’inadéquations entre compétences offertes et recherchées, de rigidités du marché ou de mutations technologiques.`,
      `Les <strong>politiques actives</strong> favorisent le retour à l’emploi : formation, aides à l’embauche, accompagnement, contrats aidés. Les <strong>politiques passives</strong> assurent un revenu de remplacement (indemnisation du chômage) et soutiennent la consommation.`,
      `Le <strong>coût du travail</strong> comprend le salaire brut et les cotisations sociales patronales. Les <strong>allègements de cotisations</strong> sur les bas salaires visent à réduire ce coût pour encourager les embauches. Le débat porte sur l’arbitrage entre compétitivité et financement de la protection sociale.`,
      `Le <strong>capital humain</strong> désigne l’ensemble des connaissances, compétences et qualifications acquises par la <strong>formation</strong> initiale et continue. L’investissement en capital humain améliore la productivité et l’appariement sur le marché du travail, mais ses effets sont différés.`
    ],
    [
      `Le principe de l’<strong>avantage comparatif</strong> (Ricardo) : chaque pays a intérêt à se spécialiser dans les productions pour lesquelles son coût relatif est le plus faible, même s’il est moins productif dans tous les domaines. La <strong>spécialisation</strong> accroît la production globale.`,
      `Le <strong>libre-échange</strong> supprime les obstacles aux échanges entre pays. Il élargit les débouchés, offre plus de choix et des prix plus bas. Ses <strong>gains</strong> sont cependant inégalement répartis : certains secteurs et travailleurs subissent la concurrence accrue.`,
      `Le <strong>protectionnisme</strong> protège les productions nationales. Instruments : <strong>droits de douane</strong> (taxes à l’importation), <strong>quotas</strong> (limitations quantitatives) et <strong>barrières non tarifaires</strong> (normes techniques, sanitaires, subventions). Risques : hausse des prix, représailles, perte d’efficacité.`,
      `L’argument de l’<strong>industrie naissante</strong> justifie une protection temporaire le temps qu’un secteur atteigne une taille compétitive. C’est l’un des rares arguments théoriquement fondés en faveur du protectionnisme, à condition que la protection reste limitée dans le temps.`,
      `Les <strong>firmes multinationales</strong> (FMN) organisent leur production à l’échelle mondiale en localisant chaque étape là où les conditions sont les plus favorables. Les <strong>chaînes de valeur mondiales</strong> décomposent la production en étapes réparties entre plusieurs pays.`,
      `Le <strong>commerce intra-firme</strong> désigne les échanges entre filiales d’un même groupe multinational. Il représente une part majeure du commerce international. Les prix de transfert entre filiales posent des enjeux fiscaux importants (optimisation, évasion).`,
      `Le <strong>taux de change</strong> est le prix d’une monnaie dans une autre. Une <strong>dépréciation</strong> de l’euro rend les exportations européennes moins chères à l’étranger mais renchérit les importations. Une <strong>appréciation</strong> produit l’effet inverse. Le taux de change influence la <strong>compétitivité</strong>.`
    ],
    [
      `La croissance <strong>extensive</strong> résulte de l’accumulation des facteurs (plus de travailleurs, plus de machines). La croissance <strong>intensive</strong> provient des <strong>gains de productivité</strong>, c’est-à-dire d’une utilisation plus efficace des facteurs.`,
      `La <strong>productivité</strong> mesure l’efficacité des facteurs. L’<strong>innovation</strong> (nouveaux produits, procédés) et le <strong>progrès technique</strong> sont les principaux moteurs de la croissance intensive. Le résidu de Solow désigne la part de la croissance non expliquée par l’accumulation quantitative.`,
      `Le <strong>développement</strong> est un processus qualitatif : amélioration des conditions de vie, accès à l’éducation et à la santé, réduction des inégalités. L’<strong>IDH</strong> combine espérance de vie, éducation et revenu pour une image plus complète que le PIB seul.`,
      `Le <strong>développement durable</strong> concilie trois piliers : efficacité <strong>économique</strong>, équité <strong>sociale</strong> et préservation de l’<strong>environnement</strong>. Il répond aux besoins du présent sans compromettre la capacité des générations futures à répondre aux leurs.`,
      `Plusieurs instruments permettent d’<strong>internaliser les externalités</strong> : la <strong>taxe</strong> (taxe carbone) augmente le coût de la pollution, la <strong>norme</strong> fixe un seuil d’émission, le <strong>quota échangeable</strong> crée un marché de droits à polluer. Chaque instrument a ses avantages et limites.`,
      `L’<strong>économie circulaire</strong> propose un modèle alternatif au schéma linéaire « extraire-produire-jeter ». Elle repose sur l’<strong>écoconception</strong>, l’économie de la fonctionnalité, le réemploi, la réparation et le recyclage.`,
      `La <strong>transition écologique</strong> suppose de transformer les modes de production et de consommation en intégrant les coûts environnementaux. Elle implique des choix politiques sur la répartition des efforts entre agents économiques, secteurs et générations.`
    ],
  ],
  sgn: [
    [
      `Le comportement d’un individu dans une organisation dépend de sa <strong>personnalité</strong> (traits stables), de ses <strong>émotions</strong> (joie, colère, peur), de sa <strong>perception</strong> (sélection et interprétation des informations), de son <strong>attitude</strong> (prédisposition favorable ou défavorable) et de son <strong>comportement</strong> observable.`,
      `La <strong>compétence</strong> combine savoirs, savoir-faire et savoir-être, mobilisés en situation. L’<strong>identité numérique</strong> professionnelle (profils, publications, traces d’activité) participe de l’image du salarié dans l’organisation et sur le marché du travail.`,
      `La <strong>communication interpersonnelle</strong> met en jeu un émetteur, un récepteur, un message, un canal et un contexte. Les <strong>composantes</strong> incluent le verbal, le paraverbal (ton, débit) et le non-verbal (gestes, posture). Le <strong>bruit</strong> (technique ou sémantique) peut altérer le message.`,
      `Un <strong>groupe</strong> réunit des individus partageant un objectif commun. Les <strong>interactions individu/groupe</strong> dépendent des caractéristiques du groupe (taille, cohésion), de l’<strong>identité</strong> de chacun (place dans le groupe), du <strong>statut</strong> (position reconnue) et des normes implicites ou explicites.`,
      `Les <strong>interactions individu/organisation</strong> sont façonnées par la <strong>culture</strong> organisationnelle (valeurs partagées, croyances), les <strong>normes</strong> (règles formelles et informelles), les <strong>codes</strong> (vestimentaires, langagiers) et les <strong>rituels</strong> (réunions, événements). L’individu s’y adapte ou les transforme.`,
      `Les <strong>relations formelles</strong> sont prescrites par l’organisation (organigramme, fiches de poste). Les <strong>relations informelles</strong> se nouent spontanément (affinités, entraide). Le <strong>leadership</strong> — capacité à orienter et mobiliser — peut être formel (désigné) ou informel (reconnu par les pairs).`,
      `L’<strong>activité de travail</strong> se caractérise par les <strong>conditions de travail</strong> (physiques, organisationnelles, psychologiques), les <strong>compétences</strong> mobilisées et la <strong>qualification</strong> requise. La distinction entre qualification (certifiée par un diplôme) et compétence (effective en situation) est essentielle.`,
      `Les <strong>tableaux de bord</strong> rassemblent des <strong>indicateurs</strong> pour suivre l’activité et la performance. Les indicateurs d’<strong>activité</strong> mesurent le volume (nombre de commandes, heures travaillées). Les indicateurs de <strong>productivité</strong> rapportent la production aux moyens engagés.`,
      `La <strong>rémunération</strong> comprend le salaire de base, les primes, les avantages en nature et l’intéressement. Le <strong>coût du travail</strong> pour l’employeur inclut le salaire brut et les cotisations patronales. Il dépasse significativement le salaire net perçu par le salarié.`
    ],
    [
      `Une <strong>donnée</strong> est un élément brut, sans contexte (un chiffre, un nom). Elle devient <strong>information</strong> lorsqu’elle est organisée et porteuse de sens. L’information se transforme en <strong>connaissance</strong> lorsqu’un acteur se l’approprie et peut l’utiliser pour décider et agir.`,
      `Les <strong>données à caractère personnel</strong> permettent d’identifier directement ou indirectement une personne (nom, adresse, numéro de sécurité sociale, adresse IP). Leur traitement est encadré par le <strong>RGPD</strong> : consentement, finalité déterminée, minimisation, durée limitée, sécurité.`,
      `Les <strong>mégadonnées</strong> (<em>big data</em>) désignent des volumes massifs de données, variées et produites à grande vitesse. Les <strong>données ouvertes</strong> (<em>open data</em>) sont des données publiques librement accessibles et réutilisables. Leur exploitation crée de la valeur mais pose des enjeux éthiques et de protection.`,
      `L’information a des <strong>rôles</strong> variés : aide à la décision, coordination, contrôle, communication. Son <strong>accessibilité</strong> (qui peut y accéder ?) et sa <strong>valeur</strong> (pertinence, fiabilité, actualité) dépendent de l’organisation du système d’information.`,
      `Le <strong>système d’information</strong> (SI) réunit acteurs, règles, outils et données pour collecter, stocker, traiter et diffuser l’information. Il ne se réduit pas à l’informatique : il inclut les procédures humaines et organisationnelles. Le SI supporte les processus de gestion.`,
      `Les <strong>applications numériques</strong> facilitent l’<strong>e-communication</strong> (messagerie, visioconférence) et la <strong>collaboration</strong> (partage de documents, espaces de travail). Le <strong>travail collaboratif</strong> permet la co-construction à distance et l’émergence d’une intelligence collective.`,
      `L’<strong>intelligence artificielle</strong> désigne des systèmes capables de réaliser des tâches nécessitant habituellement l’intelligence humaine (reconnaissance, prédiction, décision). L’<strong>automatisation</strong> des processus réduit les tâches répétitives mais transforme les emplois et les compétences requises.`,
      `Un <strong>processus</strong> est une suite coordonnée d’activités aboutissant à un résultat (traitement d’une commande, recrutement). Sa <strong>représentation</strong> (logigramme, diagramme de flux) identifie les étapes, les acteurs et les documents associés, permettant de repérer les dysfonctionnements.`,
      `Le <strong>PGI</strong> (progiciel de gestion intégré) ou <strong>ERP</strong> centralise les données de toutes les fonctions de l’organisation dans une <strong>base de données unique</strong>. Il évite les saisies multiples, améliore la cohérence et automatise les processus transversaux.`,
      `Le <strong>cloud computing</strong> (informatique en nuage) permet d’accéder à des ressources informatiques via internet sans les posséder physiquement. Avantages : flexibilité, réduction des coûts. Risques : sécurité, souveraineté des données, dépendance envers le prestataire.`
    ],
    [
      `La <strong>valeur ajoutée</strong> mesure la richesse créée : production − consommations intermédiaires. Sa <strong>répartition</strong> se fait entre les salariés (salaires), l’État (impôts), les prêteurs (intérêts), les actionnaires (dividendes) et l’entreprise (autofinancement).`,
      `La <strong>valeur financière</strong> intéresse les apporteurs de capitaux : rentabilité, capacité à générer des flux de trésorerie. La <strong>valeur actionnariale</strong> est la valeur créée pour les actionnaires. La <strong>valeur boursière</strong> est le cours de l’action multiplié par le nombre d’actions.`,
      `La <strong>valeur perçue</strong> dépend du jugement du client : <strong>image de marque</strong>, <strong>notoriété</strong>, <strong>satisfaction</strong>, <strong>qualité</strong> perçue du produit ou du service. Elle peut diverger de la valeur objective et influencer fortement les choix d’achat.`,
      `Les <strong>indicateurs quantitatifs</strong> sont chiffrés (CA, taux de marge, taux d’absentéisme). Les <strong>indicateurs qualitatifs</strong> évaluent des dimensions non directement mesurables (satisfaction, image, climat social). Un bon pilotage combine les deux types.`,
      `Le <strong>prix</strong> est ce que le client paie. Le <strong>coût</strong> est ce que l’entreprise dépense pour produire. La <strong>marge</strong> est la différence entre prix de vente et coût de revient. Les <strong>charges</strong> se décomposent en fixes (indépendantes du volume) et variables (proportionnelles à l’activité).`,
      `La <strong>performance des processus</strong> s’évalue selon deux critères : l’<strong>efficacité</strong> (degré d’atteinte des objectifs) et l’<strong>efficience</strong> (rapport entre résultats obtenus et ressources consommées). Un processus peut être efficace sans être efficient, et inversement.`,
      `La <strong>performance commerciale</strong> se mesure par le taux de <strong>fidélité</strong> des clients, le <strong>chiffre d’affaires</strong> (volume des ventes), la <strong>part de marché</strong> (CA de l’entreprise / CA du marché). Ces indicateurs reflètent la capacité à attirer et retenir les clients.`,
      `La <strong>performance financière</strong> s’évalue par la <strong>rentabilité</strong> (résultat / capitaux investis), la <strong>profitabilité</strong> (résultat / CA) et la capacité d’<strong>autofinancement</strong> (ressources générées par l’activité pour investir sans recours externe).`,
      `La <strong>performance sociale</strong> concerne les conditions de travail, l’absentéisme, le turnover, l’investissement en formation. La <strong>performance environnementale</strong> mesure l’empreinte carbone, la gestion des déchets, l’utilisation des ressources. Ces dimensions peuvent entrer en tension avec la performance financière.`,
      `Un <strong>tableau de bord</strong> regroupe des indicateurs clés, présentés de manière synthétique, pour <strong>piloter</strong> l’activité et prendre des décisions. Le choix des indicateurs dépend des objectifs de l’organisation et des attentes de ses parties prenantes.`
    ],
    [
      `L’<strong>horizon</strong> de décision détermine le degré d’engagement. Une décision de <strong>court terme</strong> (achat de fournitures) est facilement réversible ; une décision de <strong>long terme</strong> (investissement) engage durablement. La <strong>période</strong> est l’intervalle de temps retenu pour l’analyse.`,
      `L’<strong>actualité</strong> d’une information dépend de sa date et de son contexte. La <strong>pérennité</strong> concerne sa durée de validité. La <strong>veille informationnelle</strong> — surveillance continue de l’environnement (concurrentiel, technologique, réglementaire) — permet d’anticiper les changements.`,
      `La <strong>prospective</strong> explore les futurs possibles. L’<strong>enquête</strong> collecte des données (questionnaire, entretien). Le <strong>budget</strong> prévisionnel chiffre les recettes et dépenses attendues. Le <strong>seuil de rentabilité</strong> (point mort) est le CA à partir duquel l’entreprise couvre ses charges et commence à dégager un bénéfice.`,
      `Le <strong>lien entre temps et valeur financière</strong> : un euro aujourd’hui vaut plus qu’un euro demain, car il peut être placé et rapporter des intérêts. L’<strong>actualisation</strong> ramène des flux futurs à leur valeur présente pour les comparer. Ce principe est essentiel en analyse d’investissement.`,
      `Le <strong>diagramme de Gantt</strong> représente visuellement chaque tâche d’un projet sous forme de barre horizontale sur un axe temporel. Le <strong>calendrier prévisionnel</strong> fixe les jalons et les échéances. Ces outils permettent de repérer les marges, les chevauchements et les retards.`,
      `Un <strong>risque</strong> se caractérise par sa <strong>probabilité</strong> d’occurrence et sa <strong>gravité</strong> (impact). La <strong>matrice de risques</strong> croise ces deux dimensions pour hiérarchiser les menaces et concentrer les efforts sur les plus critiques.`,
      `Face au risque, quatre stratégies : l’<strong>évitement</strong> (renoncer à l’activité risquée), la <strong>prévention</strong> (réduire la probabilité), le <strong>transfert</strong> (assurance, sous-traitance) ou l’<strong>acceptation</strong> du risque résiduel. Le choix dépend du rapport coût de la mesure / gravité du risque.`
    ],
  ],
};

/*
 * Les référentiels formulent les compétences avec un verbe d'action. Cette
 * fonction transforme cette formulation en véritable aide méthodologique :
 * l'élève sait ce qu'il doit produire, dans quel ordre et comment vérifier sa
 * réponse. Le contenu reste lié au libellé officiel de chaque compétence.
 */
function competencePedagogy(label, themeTitle, audienceLabel, themeIndex, dataKey) {
  const verb = (label.match(/^(Identifier|Repérer|Présenter|Analyser|Qualifier|Caractériser|Distinguer|Justifier|Argumenter|Décrire|Proposer|Expliquer|Évaluer|Représenter|Utiliser)/i) || ['Agir'])[0];
  const target = label.replace(/^(Identifier|Repérer|Présenter|Analyser|Qualifier|Caractériser|Distinguer|Justifier|Argumenter|Décrire|Proposer|Expliquer|Évaluer|Représenter|Utiliser)\s+/i, '');
  const methods = {
    Identifier: 'Repérez d’abord les acteurs, les faits et les indices du dossier, puis nommez précisément la notion.',
    Repérer: 'Soulignez les éléments observables dans le contexte et classez-les avant de tirer une conséquence.',
    Présenter: 'Définissez la notion, sélectionnez deux caractéristiques essentielles et illustrez-les par le dossier.',
    Analyser: 'Partez des faits, mobilisez la notion, reliez les causes aux effets et terminez par une conclusion contextualisée.',
    Qualifier: 'Traduisez les faits dans le vocabulaire disciplinaire, puis justifiez la qualification par un élément précis.',
    Caractériser: 'Distinguez les critères de la notion, comparez-les à la situation et formulez une conclusion nuancée.',
    Distinguer: 'Construisez une comparaison : définition, point commun, différence décisive et exemple de chaque notion.',
    Justifier: 'Avancez une décision, donnez au moins deux arguments et rattachez chacun à une information du contexte.',
    Argumenter: 'Organisez la réponse en idée, preuve, explication et limite ; évitez la simple opinion.',
    Décrire: 'Présentez les éléments dans un ordre logique, sans interpréter trop tôt, puis reliez-les au problème posé.',
    Proposer: 'Formulez une action réaliste, précisez sa mise en œuvre, ses effets attendus et le risque associé.',
    Expliquer: 'Définissez le mécanisme, déroulez ses étapes avec des connecteurs logiques et donnez un exemple.',
    Évaluer: 'Choisissez des critères, mesurez les résultats et confrontez les avantages aux limites.',
    Représenter: 'Sélectionnez les informations utiles, utilisez les conventions de l’outil et vérifiez la cohérence du résultat.',
    Utiliser: 'Choisissez l’outil adapté, renseignez-le avec les données du dossier et interprétez le résultat obtenu.',
    Agir: 'Repérez la question, mobilisez une notion et justifiez votre réponse par un élément concret.'
  };
  const proof = /Analyser|Justifier|Argumenter|Évaluer|Proposer/i.test(verb)
    ? 'Réussite : une conclusion répond clairement à la consigne et s’appuie sur au moins deux éléments du contexte.'
    : 'Réussite : la notion est exacte, les critères sont visibles et l’exemple montre qu’elle est comprise.';
  return `<article class="competence-card"><h5>${label}</h5><p class="competence-purpose"><strong>Attendu :</strong> maîtriser <em>${target}</em> dans le thème « ${themeTitle} ».</p>${competenceConcepts(label, themeIndex, dataKey)}<div class="competence-grid"><div><b>Démarche</b><span>${methods[verb] || methods.Agir}</span></div><div><b>Preuve de maîtrise</b><span>${proof}</span></div><div><b>À éviter</b><span>Réciter le cours sans qualifier les faits, ou conclure sans expliquer le lien avec la situation.</span></div></div><p class="competence-transfer"><strong>Micro-défi ${audienceLabel} :</strong> reformulez la compétence en une question, puis répondez en quatre phrases : notion, indice, mécanisme, conclusion.</p></article>`;
}

function competenceConcepts(label, themeIndex, dataKey) {
  const source = competencesSavoirs[dataKey]?.[themeIndex];
  const contents = savoirsContenu[dataKey]?.[themeIndex] || [];
  if (!source || !contents.length) return '';
  const stop = new Set('les des une une et ou de du la le l un en au aux avec pour dans sur entre par leur leurs aux principaux différentes différents au sein est sont cette cette son sa ses rôle rôles'.split(' '));
  const words = value => value.toLowerCase().normalize('NFD').replace(/[\\u0300-\\u036f]/g, '').split(/[^a-z0-9]+/).filter(w => w.length > 3 && !stop.has(w));
  const wanted = new Set(words(label));
  const ranked = source.savoirs.map((title, i) => ({ title, text: contents[i] || '', score: words(title).filter(w => wanted.has(w)).length })).sort((a, b) => b.score - a.score);
  const selected = ranked.filter(x => x.score > 0).slice(0, 2);
  const concepts = (selected.length ? selected : ranked.slice(0, 2)).map(item => {
    const paragraphs = item.text.match(/<p>[\s\S]*?<\/p>/g)?.slice(0, 2).join('') || item.text;
    return `<div class="concept-link"><b>${item.title}</b>${paragraphs}</div>`;
  }).join('');
  return `<div class="competence-concepts"><strong>CONCEPTS À COMPRENDRE</strong><p class="concepts-intro">Avant de réaliser cette compétence, maîtrisez les notions suivantes :</p>${concepts}</div>`;
}

const key = document.body.dataset.subject,
  program = programs[key];
const slug = (i) => `chapitre-${i + 1}`;
document.title = `${program.short} — EcoGest'Lab`;
document
  .querySelectorAll('#subjectLabel')
  .forEach((element) => (element.textContent = program.label));
document.querySelector('#subjectTitle').textContent = program.short;
document.querySelector('#subjectIntro').textContent = program.intro;
document.querySelector('#themeCount').textContent = program.themes.length;
document.querySelector('#chapterNav').innerHTML = program.themes
  .map((t, i) => `<a href="#${slug(i)}" data-chapter="${i}"><span>${i + 1}. ${t[0]}</span><span class="nav-pct" data-pct-key="${key}-${i}"></span></a>`)
  .join('');
const stepLabels = ['Je comprends', 'Je mémorise', `Je m’entraîne`, `J’applique`, 'Je me teste'];
const stepKeys = ['comprends', 'memorise', 'entraine', 'applique', 'teste'];
document.querySelector('#chapters').innerHTML = program.themes
  .map(
    (t, i) =>
      `<article class="chapter" id="${slug(i)}"><header class="chapter-header"><div class="chapter-num">${String(i + 1).padStart(2, '0')}</div><div class="chapter-title"><small>THÈME ${i + 1}</small><h3>${t[0]}</h3><p>${t[1]}</p></div><div class="chapter-pct" data-pct-key="${key}-${i}"><svg width="38" height="38" viewBox="0 0 38 38"><circle cx="19" cy="19" r="16" fill="none" stroke="var(--line)" stroke-width="2.5"/><circle class="pct-arc" cx="19" cy="19" r="16" fill="none" stroke="var(--coral)" stroke-width="2.5" stroke-dasharray="100.5" stroke-dashoffset="100.5" stroke-linecap="round" transform="rotate(-90 19 19)"/></svg><span>0%</span></div><button class="chapter-toggle" aria-label="Ouvrir le chapitre">+</button></header><div class="chapter-content"><div class="goal-selector"><h4>Comment aborder ce chapitre ?</h4><div class="goal-grid"><button class="goal-btn" data-goal="learn"><span class="goal-icon">1→5</span><strong>Apprendre</strong><p>Parcours complet en 5 étapes</p></button><button class="goal-btn" data-goal="revise"><span class="goal-icon">⚡</span><strong>Réviser en 10 min</strong><p>L’essentiel condensé</p></button><button class="goal-btn" data-goal="practice"><span class="goal-icon">✎</span><strong>M’entraîner</strong><p>Exercices guidés et cas</p></button><button class="goal-btn" data-goal="test"><span class="goal-icon">✓</span><strong>Tester ma maîtrise</strong><p>Quiz et auto-évaluation</p></button></div></div><nav class="step-nav" style="display:none">${stepKeys.map((sk, si) => `<button class="step-tab${si === 0 ? ' active' : ''}" data-step="${sk}"><span class="step-num">${si + 1}</span><span>${stepLabels[si]}</span></button>`).join('')}</nav><section class="step-panel" data-step="comprends"><div class="step-header"><span class="step-badge">ÉTAPE 1</span><h4>Je comprends</h4></div><div class="step-body"><div class="objectives"><strong>COMPÉTENCES</strong><ul>${(competencesSavoirs[key] && competencesSavoirs[key][i] ? competencesSavoirs[key][i].competences : []).map(c => '<li>' + c + '</li>').join('')}</ul></div><div class="savoirs-section"><strong>SAVOIRS ASSOCIÉS</strong>${(competencesSavoirs[key] && competencesSavoirs[key][i] ? competencesSavoirs[key][i].savoirs : []).map((s, j) => { const sc = savoirsContenu[key] && savoirsContenu[key][i] && savoirsContenu[key][i][j]; return sc ? '<div class="savoir-card"><div class="savoir-title" onclick="this.parentElement.classList.toggle(\'open\')"><span class="savoir-chevron">\u25b8</span>' + s + '</div><div class="savoir-detail">' + sc + '</div></div>' : '<div class="savoir-card"><div class="savoir-title no-content"><span class="savoir-chevron">\u25b8</span>' + s + '</div></div>'; }).join('')}</div><div class="course-block"><span>EXEMPLE ANALYSÉ</span><h4>Du concept à la situation</h4><div class="worked-example"><strong>Situation</strong><p>${t[3]}</p></div></div></div><button class="step-next" data-next="memorise">J’ai compris → Mémoriser</button></section><section class="step-panel" data-step="memorise"><div class="step-header"><span class="step-badge">ÉTAPE 2</span><h4>Je mémorise</h4></div><div class="step-body step-memorise-body"></div><button class="step-next" data-next="entraine">C’est retenu → M’entraîner</button></section><section class="step-panel" data-step="entraine"><div class="step-header"><span class="step-badge">ÉTAPE 3</span><h4>Je m’entraîne</h4></div><div class="step-body step-entraine-body"></div><button class="step-next" data-next="applique">Prêt → Appliquer</button></section><section class="step-panel" data-step="applique"><div class="step-header"><span class="step-badge">ÉTAPE 4</span><h4>J’applique</h4></div><div class="step-body step-applique-body"></div><button class="step-next" data-next="teste">Passer au test →</button></section><section class="step-panel" data-step="teste"><div class="step-header"><span class="step-badge">ÉTAPE 5</span><h4>Je me teste</h4></div><div class="step-body step-teste-body page-quiz"></div></section><p class="source-note">Contenu structuré à partir du référentiel officiel.</p></div></article>`,
  )
  .join('');
const deepLessons = {
  cejm: [
    `<h5>1. Les agents économiques et le circuit des échanges</h5><p>L’activité économique repose sur cinq catégories d’<strong>agents économiques</strong>. Les <strong>ménages</strong> consomment des biens et services et offrent leur travail aux entreprises. Les <strong>entreprises</strong> produisent des biens et services marchands en combinant travail et capital. Les <strong>administrations publiques</strong> (État, collectivités, Sécurité sociale) fournissent des services non marchands — éducation, justice, santé — financés par les prélèvements obligatoires. Les <strong>institutions financières</strong> — banques et assurances — collectent l’épargne et financent l’économie par le crédit. Le <strong>reste du monde</strong> regroupe les agents non résidents avec lesquels le pays échange.</p><p>Ces agents sont reliés par des <strong>flux réels</strong> (travail, biens, services) et des <strong>flux monétaires</strong> (salaires, prix, impôts, intérêts). Le <strong>circuit économique</strong> représente graphiquement ces interdépendances : les ménages fournissent du travail aux entreprises et reçoivent un salaire ; les entreprises vendent aux ménages et versent des impôts à l’État ; l’État redistribue sous forme de prestations.</p><h5>2. Le marché : fonctionnement, concurrence et coopération</h5><p>Le <strong>marché</strong> est le lieu — physique ou virtuel — de rencontre entre l’offre et la demande, où se forme un prix. Lorsque le prix augmente, l’offre tend à croître tandis que la demande diminue. Le <strong>prix d’équilibre</strong> est celui pour lequel quantités offertes et demandées coïncident.</p><p>La <strong>concurrence</strong> entre entreprises prend plusieurs formes : concurrence par les prix, par la qualité, par l’innovation ou par la différenciation. Mais les entreprises nouent aussi des <strong>relations de coopération</strong> — partenariats, alliances, sous-traitance — lorsque la collaboration est plus avantageuse que l’affrontement.</p><p>Trois <strong>imperfections</strong> perturbent le fonctionnement du marché. Les <strong>barrières à l’entrée</strong> — brevets, investissements lourds, effets de réseau — empêchent de nouveaux concurrents d’accéder au marché. L’<strong>asymétrie d’information</strong> avantage la partie la mieux informée : un vendeur connaît mieux les défauts de son produit que l’acheteur. Les <strong>externalités</strong> font supporter à des tiers un coût ou un bénéfice non intégré au prix : la pollution est une externalité <strong>négative</strong>, la vaccination une externalité <strong>positive</strong>.</p><h5>3. Le rôle des banques et du marché financier</h5><p>Les <strong>banques</strong> remplissent une fonction d’<strong>intermédiation financière</strong> : elles collectent l’épargne des agents en capacité de financement et la redistribuent sous forme de crédits aux agents en besoin de financement. En accordant un crédit, la banque crée de la monnaie scripturale : elle inscrit le montant au compte de l’emprunteur sans le prélever sur un autre dépôt. C’est le mécanisme de la <strong>création monétaire</strong> : « les crédits font les dépôts ».</p><p>Le <strong>marché financier</strong> permet un financement <strong>direct</strong> : les entreprises émettent des <strong>actions</strong> (titres de propriété) ou des <strong>obligations</strong> (titres de dette) que les épargnants achètent. Ce marché offre une alternative au crédit bancaire, mais suppose que l’entreprise soit suffisamment grande et transparente pour inspirer confiance aux investisseurs.</p><h5>4. Le contrat : principes, formation et contenu</h5><p>Le <strong>contrat</strong> est un accord de volontés destiné à créer des obligations juridiques. Les <strong>principes contractuels</strong> ont évolué : le droit classique privilégiait la <strong>liberté contractuelle</strong> et la <strong>force obligatoire</strong>. Le droit contemporain y ajoute des exigences de <strong>bonne foi</strong>, de <strong>loyauté</strong> et de protection de la partie faible.</p><p>La <strong>formation du contrat</strong> suppose la réunion de trois conditions de validité : un <strong>consentement</strong> libre et éclairé (non vicié par l’erreur, le dol ou la violence), la <strong>capacité</strong> de contracter et un <strong>contenu licite</strong> et certain. Le <strong>contenu du contrat</strong> fixe les obligations réciproques : objet, prix, durée, modalités d’exécution, clauses particulières (clause pénale, clause résolutoire, clause de non-concurrence). Si une condition fait défaut, le contrat peut être frappé de <strong>nullité</strong>.</p><h5>5. Finalités et parties prenantes de l’entreprise</h5><p>L’entreprise poursuit simultanément plusieurs <strong>finalités</strong>. La finalité <strong>économique</strong> — dégager un profit et assurer sa pérennité — est la condition de survie. La finalité <strong>sociale</strong> concerne les salariés : conditions de travail, rémunération, développement des compétences. La finalité <strong>sociétale</strong> intègre les attentes de la société : respect de l’environnement, engagement citoyen, éthique des affaires.</p><p>Les <strong>parties prenantes</strong> sont tous les acteurs affectés par l’activité de l’entreprise ou pouvant l’influencer. Les parties prenantes <strong>internes</strong> (dirigeants, salariés, actionnaires) participent directement à la création de valeur. Les parties prenantes <strong>externes</strong> (clients, fournisseurs, banques, État, associations) sont impactées par les décisions sans y participer directement. Leurs intérêts peuvent converger ou diverger ; le management doit arbitrer.</p><h5>6. Logique entrepreneuriale et logique managériale</h5><p>La <strong>démarche entrepreneuriale</strong> consiste à identifier une opportunité, prendre un risque et innover pour créer de la valeur. L’entrepreneur mobilise des ressources, accepte l’incertitude et porte un projet de création ou de reprise. Schumpeter a théorisé l’entrepreneur comme moteur de la « destruction créatrice ».</p><p>La <strong>démarche managériale</strong> vise à optimiser les ressources existantes pour atteindre les objectifs fixés. Le manager planifie, organise, dirige et contrôle. Il recherche l’efficience plutôt que la rupture. Dans la pratique, ces deux logiques se combinent : un dirigeant de PME est souvent à la fois entrepreneur et manager.</p><h5>7. Les indicateurs de performance</h5><p>La <strong>performance</strong> de l’entreprise se mesure à travers plusieurs dimensions complémentaires. La <strong>performance financière</strong> s’évalue par la rentabilité, la profitabilité et la capacité d’autofinancement. La <strong>performance commerciale</strong> se mesure par le chiffre d’affaires, la part de marché, le taux de fidélisation et la satisfaction client. La <strong>performance sociale</strong> s’apprécie par le taux d’absentéisme, le turnover, l’investissement en formation et le climat social. La <strong>performance environnementale</strong> prend en compte l’empreinte carbone, la gestion des déchets et l’utilisation des ressources.</p><p>Un <strong>tableau de bord</strong> rassemble ces indicateurs pour donner une vision synthétique. Ces performances peuvent être contradictoires : maximiser le profit à court terme peut détériorer le climat social. L’enjeu managérial est de trouver un équilibre entre ces dimensions, en cohérence avec la stratégie et les attentes des parties prenantes.</p>`,
    `<h5>1. Les fonctions économiques de l’État</h5><p>Le marché ne produit pas spontanément tous les résultats souhaitables. L’économiste Musgrave identifie trois fonctions de l’État. La fonction d’<strong>allocation</strong> consiste à fournir les biens et services que le marché ne produit pas efficacement — infrastructure, éducation, défense, justice — et à corriger les défaillances de marché. La fonction de <strong>redistribution</strong> vise à réduire les inégalités de revenus par les prélèvements progressifs et les transferts sociaux. La fonction de <strong>stabilisation</strong> cherche à atténuer les fluctuations conjoncturelles — récession, inflation, chômage — par des politiques adaptées.</p><h5>2. Croissance, inflation et déséquilibres</h5><p>La <strong>croissance économique</strong> désigne l’augmentation durable de la production, mesurée par le taux de variation du PIB réel. Elle permet de créer des emplois et de financer les dépenses publiques. Mais la croissance n’est pas régulière : l’économie traverse des phases d’expansion et de ralentissement.</p><p>L’<strong>inflation</strong> est la hausse durable et généralisée du niveau des prix. Modérée, elle accompagne la croissance ; excessive, elle érode le pouvoir d’achat. Le <strong>chômage</strong> résulte d’un déséquilibre entre l’offre et la demande de travail. Ces <strong>déséquilibres</strong> justifient l’intervention de l’État.</p><h5>3. Politiques conjoncturelles et structurelles</h5><p>Les <strong>politiques conjoncturelles</strong> agissent à court terme sur la demande globale. La <strong>politique budgétaire</strong>, menée par le gouvernement, joue sur les recettes (impôts) et les dépenses publiques. Une <strong>relance</strong> augmente les dépenses ou réduit les impôts pour stimuler consommation et investissement, au risque de creuser le déficit. Une <strong>rigueur</strong> réduit les dépenses pour contenir le déficit, au prix d’un ralentissement. La <strong>politique monétaire</strong>, conduite par la banque centrale (BCE), agit sur les <strong>taux directeurs</strong>. Baisser les taux stimule le crédit et l’investissement ; les relever freine l’inflation.</p><p>Les <strong>politiques structurelles</strong> transforment durablement les capacités productives : éducation, recherche, infrastructure, réforme du marché du travail. Leurs effets sont plus lents mais plus profonds.</p><h5>4. Les limites de l’intervention dans un cadre internationalisé</h5><p>L’internationalisation limite l’efficacité des politiques nationales. Une relance budgétaire peut profiter davantage aux importations qu’à la production nationale. La mobilité des capitaux contraint les choix fiscaux. Dans le cadre européen, la <strong>régulation supranationale</strong> impose des règles communes : le Pacte de stabilité encadre les déficits, et la politique monétaire est centralisée à la BCE, privant les États d’un levier individuel.</p><h5>5. Le droit de la concurrence et de la propriété industrielle</h5><p>Le <strong>droit de la concurrence</strong> préserve le fonctionnement concurrentiel du marché. Il prohibe les <strong>ententes</strong> (accords pour fixer les prix ou répartir les marchés) et sanctionne les <strong>abus de position dominante</strong>. Les <strong>autorités administratives indépendantes</strong> — Autorité de la concurrence, ARCEP, AMF — veillent au respect de ces règles sans dépendre du gouvernement.</p><p>Le <strong>brevet</strong> protège une invention nouvelle, inventive et susceptible d’application industrielle pendant vingt ans. La <strong>marque</strong> protège un signe distinctif permettant d’identifier un produit ; sa protection est renouvelable par périodes de dix ans. Ces droits encouragent l’innovation mais restent limités dans le temps.</p><h5>6. Analyser le macro-environnement : PESTEL et innovation</h5><p>Le modèle <strong>PESTEL</strong> structure l’analyse de l’environnement en six dimensions : <strong>P</strong>olitique (stabilité, fiscalité), <strong>É</strong>conomique (croissance, taux), <strong>S</strong>ocioculturel (démographie, modes de vie), <strong>T</strong>echnologique (innovations, numérisation), <strong>É</strong>cologique (réglementation, transition) et <strong>L</strong>égal (droit du travail, normes, protection des données).</p><p>L’<strong>innovation</strong> est un facteur déterminant. Elle peut être de produit, de procédé, organisationnelle ou commerciale. Une innovation de <strong>rupture</strong> transforme un marché ; une innovation <strong>incrémentale</strong> l’améliore progressivement. L’enjeu n’est pas de lister les facteurs PESTEL, mais d’identifier ceux qui constituent une <strong>opportunité</strong> ou une <strong>menace</strong> concrète pour l’entreprise et d’adapter sa stratégie en conséquence.</p>`,
    `<h5>1. Les facteurs de production et la productivité</h5><p>Produire consiste à combiner des <strong>facteurs de production</strong>. Le <strong>travail</strong> regroupe les activités humaines mobilisées. Le <strong>capital</strong> comprend les biens durables utilisés dans le processus productif (machines, bâtiments) et les ressources financières. Les <strong>matières premières</strong> et les <strong>connaissances</strong> (brevets, savoir-faire, bases de données) complètent ces facteurs.</p><p>La <strong>productivité</strong> mesure l’efficacité des facteurs. Un <strong>gain de productivité</strong> signifie produire davantage avec la même quantité de facteur, grâce à l’innovation, la formation ou l’organisation du travail. Les <strong>coûts de production</strong> se décomposent en <strong>coûts fixes</strong> (loyer, amortissement) et <strong>coûts variables</strong> (matières premières, énergie).</p><h5>2. La chaîne de valeur et l’impartition</h5><p>La <strong>chaîne de valeur</strong> (Porter) décompose l’activité de l’entreprise en fonctions créatrices de valeur : logistique, production, marketing, service après-vente (activités principales), soutenues par l’infrastructure, la GRH, la R&D et les approvisionnements. Analyser cette chaîne identifie les sources d’avantage concurrentiel.</p><p>L’<strong>impartition</strong> consiste à confier à un partenaire extérieur une activité que l’entreprise pourrait réaliser elle-même : <strong>sous-traitance</strong> (fabrication d’un composant) ou <strong>externalisation</strong> (fonction entière). L’entreprise compare coût interne et prix du prestataire, en intégrant les <strong>coûts de transaction</strong> : recherche du partenaire, négociation, contrôle, risque de dépendance. Internaliser protège le savoir-faire ; externaliser apporte flexibilité et expertise.</p><h5>3. Le choix de la structure juridique</h5><p>Le choix d’une <strong>structure juridique</strong> dépend du nombre d’associés, du besoin de capitaux, de la responsabilité souhaitée, du régime fiscal et social. L’<strong>entreprise individuelle</strong> est la forme la plus simple : pas de personnalité morale distincte, patrimoine personnel protégé depuis 2022. La <strong>EURL/SARL</strong> est une société à responsabilité limitée aux apports. La <strong>SAS</strong> offre une grande liberté statutaire. La <strong>SA</strong> convient aux grandes entreprises et à la cotation en bourse.</p><p>L’<strong>économie sociale et solidaire</strong> (ESS) propose des formes alternatives : <strong>coopératives</strong> (un associé = une voix), <strong>mutuelles</strong>, <strong>associations</strong>. Ces structures poursuivent une utilité sociale et réinvestissent majoritairement leurs bénéfices.</p><h5>4. Les risques et la responsabilité</h5><p>L’entreprise fait face à de multiples <strong>types de risques</strong> : commercial, financier, opérationnel, juridique, environnemental et de réputation. La gestion du risque identifie, évalue et traite chaque menace — par la prévention, le transfert (assurance) ou l’acceptation.</p><p>L’<strong>inexécution du contrat</strong> engage la responsabilité du débiteur. Le créancier peut suspendre sa propre obligation (<strong>exception d’inexécution</strong>), demander l’<strong>exécution forcée</strong>, obtenir une <strong>réduction de prix</strong>, provoquer la <strong>résolution</strong> du contrat ou réclamer des <strong>dommages-intérêts</strong>. La <strong>responsabilité civile</strong> oblige à réparer ; la <strong>responsabilité pénale</strong> sanctionne les infractions.</p><h5>5. Structure organisationnelle et styles de management</h5><p>La <strong>structure organisationnelle</strong> définit la répartition des tâches, des responsabilités et des mécanismes de coordination. Les <strong>ressources tangibles</strong> (équipements, locaux, trésorerie) et <strong>intangibles</strong> (marque, brevets, savoir-faire, réputation) constituent le patrimoine stratégique. Les <strong>compétences</strong> individuelles et collectives déterminent la capacité d’adaptation. Les <strong>mécanismes de coordination</strong> incluent la supervision directe, la standardisation et l’ajustement mutuel.</p><p>Le <strong>style de management</strong> varie : <strong>directif</strong> (impose les décisions), <strong>persuasif</strong> (explique et mobilise), <strong>participatif</strong> (associe les salariés) ou <strong>délégatif</strong> (confie l’autonomie). On distingue aussi management <strong>stratégique</strong> (orientations long terme) et <strong>opérationnel</strong> (gestion quotidienne).</p><h5>6. RSE et processus de l’entreprise</h5><p>La <strong>RSE</strong> intègre volontairement des préoccupations sociales, environnementales et de gouvernance dans la stratégie, au-delà de la conformité légale. Un <strong>processus</strong> est une suite coordonnée d’activités transformant des entrées en sorties avec une valeur ajoutée. Cartographier les processus permet de repérer les dysfonctionnements et d’améliorer l’efficience.</p><h5>7. Le financement de l’entreprise</h5><p>L’<strong>autofinancement</strong> utilise les bénéfices non distribués — il préserve l’autonomie mais dépend des résultats passés. L’<strong>emprunt bancaire</strong> ne dilue pas le capital mais crée des charges d’intérêts. L’<strong>augmentation de capital</strong> renforce les fonds propres mais dilue le pouvoir des actionnaires existants. Le <strong>crédit-bail</strong> permet d’utiliser un bien sans l’acheter.</p><p>L’<strong>équilibre financier</strong> suppose que les emplois stables soient financés par des ressources durables. Le <strong>fonds de roulement</strong> mesure l’excédent de ressources stables sur les emplois stables ; il doit couvrir le <strong>besoin en fonds de roulement</strong> (BFR), décalage entre décaissements et encaissements.</p>`,
    `<h5>1. L’économie de plateforme et les nouveaux modèles</h5><p>Le numérique transforme les modes de production et de consommation. Une <strong>place de marché</strong> (<em>marketplace</em>) met en relation vendeurs et acheteurs — Amazon, Leboncoin, Uber. Les <strong>relations d’échange</strong> se diversifient : <strong>B to B</strong> (entre entreprises), <strong>B to C</strong> (entreprise-consommateur), <strong>C to C</strong> (entre particuliers : Vinted, Blablacar) et <strong>B to G</strong> (entreprise-administration).</p><p>Les <strong>externalités de réseau</strong> sont centrales : la valeur d’un service augmente avec le nombre d’utilisateurs. Ce cercle vertueux peut conduire à des quasi-monopoles. Les <strong>modèles économiques</strong> évoluent : l’<strong>économie collaborative</strong> favorise le partage et la mutualisation plutôt que la propriété (abonnement plutôt qu’achat, streaming, SaaS). Les <strong>normes et standards</strong> techniques jouent un rôle stratégique : imposer son standard permet de verrouiller un marché.</p><h5>2. La protection des actifs immatériels</h5><p>Le <strong>droit d’auteur</strong> protège les œuvres originales dès leur création, sans formalité. Il confère un droit moral (paternité, intégrité) et des droits patrimoniaux (reproduction, représentation). Les <strong>droits d’utilisation</strong> — licences, CGU — encadrent ce que l’utilisateur peut faire d’un logiciel ou d’un contenu numérique. La <strong>contrefaçon numérique</strong> est une infraction pénale et civile.</p><h5>3. La protection des personnes et des données</h5><p>Le <strong>RGPD</strong> encadre la collecte et le traitement des <strong>données personnelles</strong>. Six principes s’imposent : finalité déterminée, base légale, minimisation, exactitude, durée de conservation limitée et sécurité. La <strong>CNIL</strong> veille au respect de ces règles. Les personnes disposent de droits : accès, rectification, effacement (« droit à l’oubli »), portabilité et opposition.</p><p>L’<strong>identité numérique</strong> d’une personne est un actif sensible. Une fuite de données peut porter atteinte à la vie privée et provoquer des usurpations d’identité. L’entreprise a une obligation de sécurisation renforcée.</p><h5>4. Le contrat électronique et la preuve</h5><p>Le <strong>contrat électronique</strong> obéit aux mêmes conditions de validité que tout contrat, mais le législateur impose des obligations supplémentaires : <strong>information précontractuelle</strong> claire, processus de <strong>double clic</strong> (récapitulatif et confirmation), <strong>droit de rétractation</strong> de quatorze jours pour les achats à distance.</p><p>La <strong>preuve électronique</strong> est admise si elle garantit l’intégrité du document et l’identification de son auteur. La <strong>signature électronique</strong> qualifiée a la même valeur qu’une signature manuscrite. L’horodatage certifie la date et l’heure d’un événement numérique.</p><h5>5. Le système d’information et le management numérique</h5><p>Le <strong>système d’information</strong> (SI) est l’ensemble organisé de ressources — personnes, procédures, matériels, logiciels, données — qui collecte, stocke, traite et diffuse l’information. Il ne se réduit pas à l’informatique : il inclut les processus humains et organisationnels.</p><p>Le numérique transforme le <strong>management</strong> et les <strong>processus décisionnels</strong>. Le télétravail, les outils collaboratifs et l’accès en temps réel aux données modifient l’organisation du travail. L’entreprise peut adopter des structures plus souples (mode projet, management agile). Le numérique permet de <strong>spécialiser</strong> certaines tâches (automatisation), d’<strong>intégrer</strong> des informations dispersées (ERP/PGI) et de favoriser l’<strong>action collective</strong> à distance. Les <strong>modalités d’organisation du travail</strong> s’adaptent : télétravail, flex office, management par objectifs, droit à la déconnexion.</p>`,
    `<h5>1. Le marché du travail et ses transformations</h5><p>L’<strong>offre de travail</strong> provient des personnes qui souhaitent travailler (population active) ; la <strong>demande de travail</strong> émane des employeurs. Leur rencontre dépend du salaire, des qualifications, de la localisation et de la conjoncture. Le marché du travail est <strong>segmenté</strong> : un marché primaire offre des emplois stables et bien rémunérés ; un marché secondaire propose des emplois précaires et peu qualifiés.</p><p>Les principales <strong>tendances</strong> incluent la tertiarisation, la féminisation, le temps partiel, les contrats courts et les nouvelles formes de travail (télétravail, freelance, plateformes).</p><h5>2. Les politiques publiques en faveur de l’emploi</h5><p>Les <strong>pouvoirs publics</strong> accompagnent les transformations par plusieurs leviers. Les <strong>politiques passives</strong> assurent un revenu de remplacement (allocation chômage). Les <strong>politiques actives</strong> favorisent le retour à l’emploi : formation, aide à la création d’entreprise, contrats aidés. Les <strong>allègements de cotisations</strong> sur les bas salaires réduisent le coût du travail. Le <strong>CPF</strong> permet de financer des formations tout au long de la carrière.</p><h5>3. Le contrat de travail et le lien de subordination</h5><p>Le <strong>contrat de travail</strong> associe prestation, rémunération et <strong>lien de subordination</strong> (pouvoir de diriger, contrôler et sanctionner). Ce lien distingue le <strong>salarié</strong> du <strong>travailleur indépendant</strong>. Le <strong>CDI</strong> est la forme normale. Le <strong>CDD</strong> ne peut être conclu que pour un motif légal et une durée limitée. Le <strong>contrat de travail temporaire</strong> (intérim) met en jeu trois parties.</p><h5>4. La protection du salarié et la formation</h5><p>L’<strong>employeur</strong> doit assurer la santé et la sécurité des salariés. Cette <strong>obligation de sécurité</strong> couvre les risques physiques et psychosociaux. Les <strong>dispositifs de formation</strong> — plan de développement des compétences, CPF, VAE, alternance — maintiennent et développent les compétences face aux évolutions.</p><h5>5. Le droit négocié et les partenaires sociaux</h5><p>Le droit du travail provient de sources hiérarchisées : Constitution, traités, Code du travail, <strong>conventions collectives</strong>, accords d’entreprise et contrat. Le <strong>droit négocié</strong> occupe une place croissante. Une <strong>convention collective</strong> fixe les règles d’un secteur. Un <strong>accord d’entreprise</strong> peut prévaloir sur la convention de branche dans certains domaines depuis 2017. Le <strong>CSE</strong> représente le personnel : réclamations, consultation, santé et sécurité.</p><h5>6. Les ruptures du contrat et la GPEC</h5><p>Une <strong>modification du contrat</strong> (rémunération, qualification, lieu) nécessite l’accord du salarié. La <strong>démission</strong> est l’initiative du salarié. Le <strong>licenciement</strong> doit reposer sur une <strong>cause réelle et sérieuse</strong> (motif personnel ou économique). La <strong>rupture conventionnelle</strong> est un accord mutuel homologué ouvrant droit au chômage.</p><p>La <strong>GPEC</strong> anticipe les évolutions des métiers et des effectifs. Elle compare les ressources actuelles aux besoins futurs et déploie des actions d’adaptation : recrutement, formation, mobilité, reconversion.</p><h5>7. Motivation et conditions de travail</h5><p>La <strong>motivation</strong> dépend de facteurs multiples. Herzberg distingue les facteurs d’<strong>hygiène</strong> (conditions de travail, rémunération — leur absence démotive) des facteurs de <strong>motivation</strong> (responsabilité, reconnaissance — ils créent la satisfaction). La <strong>rémunération</strong> est un levier important mais insuffisant : reconnaissance, autonomie, perspectives et sens du travail sont déterminants.</p><p>Les <strong>conditions de travail</strong> évoluent sous l’effet du numérique (télétravail, droit à la déconnexion), des attentes sociétales (équilibre vie pro/perso) et des contraintes économiques. L’enjeu est de concilier les <strong>objectifs de l’entreprise</strong> avec les <strong>attentes des individus</strong>.</p>`,
    `<h5>1. La démarche d’analyse stratégique</h5><p>L’<strong>analyse stratégique</strong> est un processus structuré. D’abord, la <strong>segmentation stratégique</strong> identifie les <strong>domaines d’activités stratégiques</strong> (DAS) — sous-ensembles de l’activité partageant les mêmes facteurs clés de succès, concurrents et compétences. Ensuite, le <strong>diagnostic</strong> analyse la position de l’entreprise. Enfin, les <strong>choix stratégiques</strong> définissent les orientations et les moyens à mobiliser.</p><h5>2. Le diagnostic externe</h5><p>Le <strong>diagnostic externe</strong> repère les <strong>opportunités</strong> et les <strong>menaces</strong> de l’environnement. Il s’appuie sur l’analyse du macro-environnement (PESTEL) et du micro-environnement (cinq forces de Porter : clients, fournisseurs, concurrents, nouveaux entrants, produits de substitution). Ce diagnostic identifie les <strong>facteurs clés de succès</strong> du secteur.</p><h5>3. Le diagnostic interne et les ressources stratégiques</h5><p>Le <strong>diagnostic interne</strong> évalue les <strong>forces</strong> et <strong>faiblesses</strong> de l’entreprise. Il porte sur les <strong>ressources</strong> tangibles (équipements, trésorerie) et intangibles (marque, brevets, savoir-faire, réputation), et sur les <strong>compétences</strong>. Une ressource est <strong>stratégique</strong> si elle est valorisable, rare, difficilement imitable et non substituable. La matrice <strong>SWOT</strong> (Forces, Faiblesses, Opportunités, Menaces) synthétise la position stratégique.</p><h5>4. Les étapes de la décision stratégique</h5><p>La <strong>décision stratégique</strong> engage l’entreprise sur le long terme et est peu réversible. Le processus comprend : identification du problème, collecte d’informations, formulation d’options, évaluation (coûts, risques, cohérence), choix, mise en œuvre et contrôle. La rationalité du décideur est <strong>limitée</strong> (Herbert Simon) : il choisit une solution « satisfaisante » plutôt qu’optimale.</p><h5>5. Les options stratégiques</h5><p>Au niveau global : la <strong>spécialisation</strong> concentre les ressources sur un seul DAS (expertise, économies d’échelle, mais risque de dépendance). La <strong>diversification</strong> élargit le portefeuille (répartition des risques, synergies, mais complexité accrue). Elle peut être <strong>liée</strong> (activités connexes) ou <strong>conglomérale</strong>.</p><p>Au niveau de chaque DAS : la <strong>domination par les coûts</strong> produit à coût inférieur grâce aux économies d’échelle et à l’optimisation. La <strong>différenciation</strong> propose un produit perçu comme unique (qualité, design, image) justifiant un prix supérieur. La <strong>focalisation</strong> (niche) concentre l’effort sur un segment étroit.</p><h5>6. Les modalités de croissance</h5><p>La <strong>croissance interne</strong> (organique) développe les moyens propres — investissement, embauche, R&D. Elle est maîtrisée mais progressive. La <strong>croissance externe</strong> acquiert une autre entreprise (rachat, fusion) — rapide mais coûteuse et risquée (intégration). La <strong>croissance conjointe</strong> (alliances, partenariats, joint-venture, franchise) mutualise les ressources entre entreprises indépendantes — elle partage les risques mais peut créer des conflits.</p><p>Le choix dépend des ressources disponibles, de l’urgence, des risques acceptés et de la culture de l’entreprise. La pertinence d’un choix stratégique s’évalue au regard de trois critères : la <strong>cohérence</strong> avec le diagnostic, l’<strong>acceptabilité</strong> par les parties prenantes et la <strong>faisabilité</strong> au vu des ressources et compétences disponibles.</p>`,
  ],
  droit: [
    `<h5>La règle de droit</h5><p>Le droit organise la vie sociale, protège les personnes et pacifie les conflits. Sa règle est générale, impersonnelle et obligatoire. Elle se distingue de la morale : une conduite peut être moralement désapprouvée sans être juridiquement sanctionnée. Constitution, traités, droit européen, lois et règlements s’insèrent dans une hiérarchie ; une norme inférieure doit respecter la norme supérieure.</p><h5>Le rôle du juge</h5><p>La jurisprudence désigne les décisions rendues par les juridictions. Le juge interprète les textes pour les appliquer à des situations concrètes. Il ne crée pas une règle générale comme le législateur, mais ses interprétations orientent fortement les solutions futures.</p><h5>Les sources du droit</h5><p>Les règles de droit proviennent de plusieurs sources organisées en une <strong>hiérarchie des normes</strong>. Au sommet, la <strong>Constitution</strong> fixe les principes fondamentaux. Les <strong>traités internationaux</strong> et le <strong>droit de l’Union européenne</strong> (règlements, directives) s’imposent au droit national dans leur domaine. La <strong>loi</strong>, votée par le Parlement, et le <strong>règlement</strong> (décrets, arrêtés), édicté par le pouvoir exécutif, forment le droit écrit. La <strong>coutume</strong> et les <strong>usages professionnels</strong> complètent ponctuellement ces sources. Chaque norme inférieure doit respecter les normes supérieures : c’est le principe de constitutionnalité et de légalité.</p><h5>État de droit et distinction droit-morale</h5><p>L’<strong>État de droit</strong> signifie que tous — citoyens et pouvoirs publics — sont soumis aux mêmes règles juridiques. La <strong>laïcité</strong>, l’<strong>égalité</strong>, la <strong>liberté</strong> et la <strong>solidarité</strong> fondent l’organisation de la société démocratique française. Le droit se distingue de la morale : une conduite peut être moralement réprouvée sans être juridiquement sanctionnée (mentir n’est pas toujours illégal), et inversement, une obligation juridique ne suppose pas nécessairement un jugement moral. L’<strong>ordre public</strong> désigne les règles auxquelles les individus ne peuvent déroger par convention. La <strong>QPC</strong> (question prioritaire de constitutionnalité) permet à tout justiciable de contester la conformité d’une loi à la Constitution devant le Conseil constitutionnel.</p>`,
    `<h5>Du désaccord au litige</h5><p>Le litige naît lorsqu’une prétention se heurte à la résistance d’une autre personne. Chaque partie invoque des faits et des règles, appelés moyens. La preuve doit être loyale et admissible ; sa charge pèse en principe sur celui qui réclame l’exécution d’une obligation.</p><h5>L’organisation judiciaire</h5><p>La compétence d’attribution détermine la catégorie de juridiction ; la compétence territoriale désigne le lieu. L’appel permet un nouvel examen en fait et en droit. La Cour de cassation ne constitue pas un troisième degré : elle vérifie l’application de la règle de droit.</p><h5>Les modes alternatifs de règlement</h5><p>Les parties peuvent régler leur différend sans recourir au juge. La <strong>médiation</strong> fait intervenir un tiers impartial qui aide les parties à trouver elles-mêmes un accord. La <strong>conciliation</strong> est similaire, mais le conciliateur peut proposer une solution. L'<strong>arbitrage</strong> confie le litige à un ou plusieurs arbitres dont la sentence s’impose aux parties. Ces modes présentent des avantages : rapidité, confidentialité et maîtrise du processus. Ils sont encouragés par le législateur et parfois obligatoires en préalable à la saisine du juge pour les litiges de faible montant.</p><h5>Acte juridique, fait juridique et preuve</h5><p>L'<strong>acte juridique</strong> est une manifestation de volonté destinée à produire des effets de droit (un contrat, un testament). Le <strong>fait juridique</strong> est un événement qui produit des effets de droit sans que ceux-ci aient été recherchés (un accident, une naissance). Cette distinction est essentielle pour la preuve : un acte juridique se prouve en principe par un <strong>écrit</strong> — un <strong>acte authentique</strong> (rédigé par un officier public comme un notaire) ou un <strong>acte sous signature privée</strong>. Un fait juridique peut se prouver par <strong>tous moyens</strong> : témoignage, aveu, présomption, expertise. La <strong>preuve électronique</strong> — signature électronique, courriels, horodatage — est désormais admise à condition de garantir l'intégrité et l'identification de l'auteur. Le juge apprécie les preuves selon son <strong>intime conviction</strong> en matière pénale.</p>`,
    `<h5>Personnalité et capacité</h5><p>La personnalité juridique est l’aptitude à être titulaire de droits et d’obligations. La personne physique l’acquiert à la naissance, si elle naît vivante et viable. Une personne morale la reçoit selon les formalités propres à sa forme. La capacité de jouissance permet d’avoir un droit ; la capacité d’exercice permet de l’exercer soi-même.</p><h5>Le patrimoine</h5><p>Le patrimoine regroupe actif et passif évaluables en argent. Celui d’une société est distinct de celui des associés, ce qui explique notamment la séparation des dettes.</p><h5>Naissance et disparition de la personnalité</h5><p>La personnalité juridique de la <strong>personne physique</strong> commence à la naissance, à condition que l’enfant naisse vivant et viable ; elle s’éteint au décès. La <strong>personne morale</strong> acquiert la personnalité par l’accomplissement de formalités : immatriculation au registre du commerce pour les sociétés, déclaration en préfecture pour les associations. Elle disparaît à la dissolution, suivie de la liquidation. La <strong>représentation</strong> organise l’exercice des droits d’une personne par une autre : parents pour le mineur, tuteur pour le majeur protégé, dirigeant pour la société.</p><h5>Le patrimoine et le statut de l’animal</h5><p>Le <strong>patrimoine</strong> d’une personne juridique regroupe l’ensemble de ses droits et obligations évaluables en argent — l’actif (biens, créances) et le passif (dettes). Chaque personne dispose d’un seul patrimoine, qui constitue le gage général de ses créanciers. Ce principe a des conséquences pratiques : pour une société, le patrimoine est distinct de celui des associés, ce qui protège les biens personnels. Depuis la loi de 2015, l’<strong>animal</strong> est reconnu comme un <strong>être vivant doué de sensibilité</strong>, mais il reste soumis au régime des biens en l’absence de loi spéciale. Il n’a pas de personnalité juridique et ne peut être titulaire de droits au sens strict.</p>`,
    `<h5>Droits patrimoniaux et extrapatrimoniaux</h5><p>Les droits patrimoniaux ont une valeur pécuniaire et sont en principe cessibles, transmissibles et saisissables. Les droits extrapatrimoniaux, comme la vie privée, sont attachés à la personne. Le droit de propriété comporte usage, perception des fruits et disposition, dans les limites de la loi.</p><h5>Identité numérique</h5><p>Droit à l’image et protection des données ne se confondent pas. Une photo identifiable est une donnée personnelle, mais sa diffusion peut aussi porter atteinte au droit à l’image. La personne dispose notamment de droits d’accès, rectification et effacement sous conditions.</p><h5>La propriété intellectuelle</h5><p>La <strong>propriété intellectuelle</strong> protège les créations de l’esprit. Le <strong>droit d’auteur</strong> protège les œuvres originales (textes, musiques, logiciels) dès leur création, sans formalité. Le <strong>brevet</strong> protège une invention nouvelle, inventive et susceptible d’application industrielle, pour une durée de vingt ans. La <strong>marque</strong> protège un signe distinctif (nom, logo) permettant d’identifier un produit ou un service. À l’ère numérique, la contrefaçon se développe et la protection des créations impose une vigilance accrue, notamment sur les plateformes en ligne.</p><h5>Biens corporels et incorporels</h5><p>Les biens se divisent en <strong>biens corporels</strong> — ayant une existence matérielle (immeuble, véhicule, marchandise) — et <strong>biens incorporels</strong> — sans matérialité (créance, brevet, fonds de commerce, droit d’auteur). Le <strong>droit de propriété</strong> comporte trois attributs : l’<strong>usus</strong> (droit d’utiliser la chose), le <strong>fructus</strong> (droit d’en percevoir les fruits, comme un loyer) et l’<strong>abusus</strong> (droit d’en disposer, notamment de la vendre ou la détruire). Ce droit n’est pas absolu : il connaît des limites légales comme les servitudes, l’expropriation pour cause d’utilité publique ou le <strong>trouble anormal de voisinage</strong>. Ce dernier engage la responsabilité de celui qui cause à son voisin un préjudice excédant les inconvénients normaux, même sans faute (bruit excessif, odeurs, privation de lumière).</p>`,
    `<h5>Former un contrat valable</h5><p>Un contrat suppose un consentement libre et éclairé, la capacité de contracter et un contenu licite et certain. L’erreur, le dol ou la violence peuvent vicier le consentement. Une fois valablement formé, le contrat a force obligatoire et doit être exécuté de bonne foi.</p><h5>Réagir à l’inexécution</h5><p>Le créancier peut suspendre sa propre obligation, demander l’exécution forcée, une réduction du prix, la résolution et/ou des dommages-intérêts selon les conditions. En droit de la consommation, l’information précontractuelle et le droit de rétractation corrigent le déséquilibre entre professionnel et consommateur.</p><h5>Le contrat de consommation</h5><p>Le droit de la consommation corrige le déséquilibre entre le <strong>professionnel</strong>, présumé mieux informé, et le <strong>consommateur</strong>. Le professionnel a une <strong>obligation d’information précontractuelle</strong> sur les caractéristiques essentielles, le prix et les conditions de vente. Pour les contrats conclus à distance ou hors établissement, le consommateur bénéficie d’un <strong>droit de rétractation</strong> de quatorze jours. Les <strong>clauses abusives</strong>, qui créent un déséquilibre significatif au détriment du consommateur, sont réputées non écrites. Le contrat électronique obéit aux mêmes conditions de validité mais impose des étapes de confirmation spécifiques.</p>`,
    `<h5>Les conditions de la responsabilité civile</h5><p>Réparer suppose un dommage certain, personnel et légitime, un fait générateur et un lien de causalité. Le fait générateur peut être une faute, le fait d’une chose ou le fait d’autrui. La victime doit établir les conditions selon le régime applicable.</p><h5>Civil ou pénal ?</h5><p>La responsabilité civile répare ; la responsabilité pénale sanctionne une infraction. Un même événement peut déclencher les deux. Force majeure, faute de la victime ou fait d’un tiers peuvent exonérer totalement ou partiellement selon leur rôle causal.</p><h5>Les régimes spéciaux de responsabilité</h5><p>Outre la responsabilité pour faute, le droit prévoit des régimes de responsabilité sans faute. La <strong>responsabilité du fait des choses</strong> pèse sur le gardien d’une chose qui cause un dommage : il est présumé responsable sans que la victime ait à prouver une faute. La <strong>responsabilité du fait d’autrui</strong> s’applique aux parents pour leurs enfants mineurs, à l’employeur pour ses salariés ou à l’artisan pour ses apprentis. La <strong>responsabilité du fait des produits défectueux</strong> permet à la victime d’un produit défectueux d’obtenir réparation du producteur. Ces régimes facilitent l’indemnisation en allégeant la charge de la preuve.</p><h5>Régimes spéciaux et assurance</h5><p>Certains dommages relèvent de régimes d’indemnisation spécifiques. Le <strong>préjudice écologique</strong> — atteinte aux éléments ou aux fonctions des écosystèmes — peut donner lieu à réparation en nature (remise en état) ou en espèces. L’<strong>accident du travail</strong> bénéficie d’une présomption d’imputabilité : tout accident survenu au temps et au lieu du travail est présumé professionnel. L’<strong>accident de la circulation</strong> est régi par la loi Badinter (1985) qui facilite l’indemnisation des victimes impliquant un véhicule terrestre à moteur. La responsabilité du fait des <strong>produits défectueux</strong> permet à la victime d’obtenir réparation du producteur sans avoir à prouver une faute, à condition de démontrer le défaut du produit, le dommage et le lien de causalité. L’<strong>assurance</strong> mutualise les risques : chaque assuré paie une prime, et le sinistre est indemnisé par le fonds commun. L’assurance de responsabilité civile est obligatoire dans de nombreux domaines.</p>`,
    `<h5>Le contrat de travail</h5><p>Le lien de subordination distingue le salarié du travailleur indépendant. Le CDI est la forme normale ; le CDD ne peut répondre qu’à un besoin temporaire prévu par la loi et doit respecter un formalisme strict.</p><h5>Pouvoirs et libertés</h5><p>L’employeur dirige, contrôle et sanctionne, mais toute restriction aux libertés doit être justifiée et proportionnée. Un licenciement exige une cause réelle et sérieuse et une procédure. Le droit de grève est une cessation collective et concertée du travail en appui de revendications professionnelles.</p><h5>La négociation collective</h5><p>Au-delà du contrat individuel, les conditions de travail sont encadrées par la <strong>négociation collective</strong> entre employeurs et syndicats représentatifs. La <strong>convention collective</strong> couvre l’ensemble des conditions de travail d’une branche professionnelle ; l'<strong>accord d’entreprise</strong> adapte ces règles au niveau local. Depuis les ordonnances de 2017, l’accord d’entreprise peut prévaloir sur l’accord de branche dans plusieurs domaines (durée du travail, rémunération variable). Les <strong>représentants du personnel</strong> — élus au comité social et économique (CSE) — assurent l’expression collective des salariés et participent aux consultations obligatoires.</p><h5>Les formes du contrat et la rupture</h5><p>Le <strong>CDI</strong> est la forme normale du contrat de travail : il ne comporte pas de terme. Le <strong>CDD</strong> ne peut être conclu que pour un motif prévu par la loi (remplacement, surcroît d’activité, emploi saisonnier) et pour une durée limitée ; le non-respect de ces règles entraîne la <strong>requalification en CDI</strong>. Le <strong>contrat de travail temporaire</strong> (intérim) met en jeu trois parties : le salarié, l’agence d’intérim et l’entreprise utilisatrice. Le CDI peut prendre fin par <strong>démission</strong> (initiative du salarié), <strong>licenciement</strong> (initiative de l’employeur, qui doit reposer sur une cause réelle et sérieuse — motif personnel ou économique — et respecter une procédure), ou <strong>rupture conventionnelle</strong> (accord mutuel homologué par l’administration). Le salarié qui quitte l’entreprise a droit, selon les cas, à une indemnité de licenciement, une indemnité compensatrice de congés payés, un préavis et le solde de tout compte. La clause de <strong>télétravail</strong> organise le travail à distance : lieu, équipement, temps de travail et droit à la déconnexion doivent être précisés.</p>`,
    `<h5>Choisir un cadre juridique</h5><p>Le choix dépend du nombre de porteurs, du besoin de capitaux, de la gouvernance, de la protection du patrimoine et du régime social. L’entreprise individuelle est simple et sans personnalité distincte ; la société crée une personne morale après immatriculation.</p><h5>La liberté sous contrôle</h5><p>La liberté d’entreprendre et la liberté de concurrence n’autorisent ni confusion, ni dénigrement, ni désorganisation, ni parasitisme. Le droit sanctionne aussi ententes anticoncurrentielles et abus de domination afin de préserver le fonctionnement du marché.</p><h5>L’entrepreneur face au risque</h5><p>Le choix du statut juridique détermine l’étendue de la responsabilité de l’entrepreneur. En <strong>entreprise individuelle</strong>, le patrimoine professionnel et personnel étaient historiquement confondus ; depuis 2022, le patrimoine personnel est protégé par défaut. En <strong>société</strong> (SARL, SAS, SA), la responsabilité est en principe limitée aux apports. La <strong>procédure de sauvegarde</strong> intervient avant la cessation de paiements pour réorganiser l’entreprise. Le <strong>redressement judiciaire</strong> vise à poursuivre l’activité et apurer les dettes. La <strong>liquidation judiciaire</strong> met fin à l’activité lorsque le redressement est impossible.</p><h5>Formes de société et organisation de l’activité</h5><p>Le <strong>contrat de société</strong> repose sur la réunion d’apports (en numéraire, en nature ou en industrie), le partage des bénéfices et des pertes, et l’<strong>affectio societatis</strong> — la volonté de collaborer sur un pied d’égalité. La responsabilité des associés est généralement <strong>limitée à leurs apports</strong> dans les SARL, SAS et SA. La <strong>société coopérative</strong> (SCOP) obéit à une éthique différente : chaque associé-salarié dispose d’une voix quelle que soit sa part de capital, et les bénéfices sont prioritairement affectés aux réserves et à l’intéressement des salariés. L’entreprise peut aussi organiser son activité par des contrats de réseau : la <strong>franchise</strong> permet à un franchisé d’exploiter la marque et le savoir-faire du franchiseur moyennant une redevance ; la <strong>concession</strong> accorde un droit de distribution exclusif sur un territoire. Ces formes structurent l’activité sans créer de lien de subordination entre les partenaires.</p>`,
  ],
  economie: [
    `<h5>1. Le problème de la rareté</h5><p>Les besoins humains sont en pratique illimités — se nourrir, se loger, se déplacer, se divertir —, alors que les ressources disponibles (temps, revenu, matières premières, travail) sont limitées. Cette <strong>rareté</strong> oblige chaque individu et chaque société à faire des choix. Tout choix implique un <strong>coût d’opportunité</strong> : la meilleure alternative à laquelle on renonce. Un ménage qui consacre 800 € à un smartphone renonce par exemple à un week-end ou à de l’épargne. Ce raisonnement en termes d’arbitrage est au cœur de la démarche économique.</p><h5>2. Les agents et le circuit économique</h5><p>L’activité économique met en relation cinq catégories d'<strong>agents</strong>. Les <strong>ménages</strong> consomment et offrent leur travail. Les <strong>entreprises</strong> produisent des biens et services marchands. Les <strong>administrations publiques</strong> fournissent des services non marchands financés par les prélèvements obligatoires. Les <strong>institutions financières</strong> collectent l’épargne et accordent des crédits. Le <strong>reste du monde</strong> regroupe les agents extérieurs avec lesquels le pays échange. Ces agents effectuent des opérations — production, consommation, investissement, épargne, exportation — qui forment un <strong>circuit économique</strong> où circulent des flux réels (biens, travail) et des flux monétaires (salaires, prix, impôts).</p><h5>3. L’échange et la spécialisation</h5><p>L’échange permet à chacun de se procurer ce qu’il ne produit pas lui-même. La <strong>division du travail</strong> accroît la productivité en permettant à chaque agent de se concentrer sur ce qu’il fait le mieux. Un boulanger et un maraîcher ont intérêt à échanger pain contre légumes plutôt qu’à tout produire seuls. Cette logique s’applique aussi entre pays et entre entreprises. L’échange s’appuie sur le <strong>marché</strong>, lieu de rencontre entre offre et demande où se forme un prix, mais aussi sur des institutions qui fixent des règles et garantissent la confiance.</p><h5>4. Utilité marginale et fonctions de la monnaie</h5><p>L’<strong>utilité</strong> désigne la satisfaction qu’un individu retire de la consommation d’un bien. L’<strong>utilité marginale</strong> est le supplément de satisfaction procuré par la dernière unité consommée : elle est généralement décroissante. Le premier verre d’eau désaltère davantage que le dixième. Ce principe explique pourquoi un consommateur rationnel cesse d’acheter lorsque l’utilité marginale devient inférieure au prix. La <strong>monnaie</strong> remplit trois fonctions essentielles : <strong>unité de compte</strong> (mesurer la valeur des biens), <strong>intermédiaire des échanges</strong> (éviter le troc) et <strong>réserve de valeur</strong> (conserver du pouvoir d’achat dans le temps). Les nouvelles formes de monnaie (monnaie scripturale, monnaie électronique, cryptomonnaies) renouvellent ces fonctions tout en posant des questions de confiance et de régulation.</p>`,
    `<h5>1. De la production à la valeur ajoutée</h5><p>Produire, c’est créer des biens ou des services en combinant des facteurs de production. La <strong>production marchande</strong> est vendue à un prix couvrant au moins son coût ; la <strong>production non marchande</strong> (éducation publique, justice) est fournie gratuitement ou quasi gratuitement. Pour mesurer la richesse réellement créée, on calcule la <strong>valeur ajoutée</strong> : production − consommations intermédiaires. Si une boulangerie vend pour 200 000 € de pain et achète 80 000 € de farine, énergie et emballage, sa valeur ajoutée est de 120 000 €. Ce sont ces 120 000 € qui rémunèrent le travail, l’État, les prêteurs et l’entreprise elle-même.</p><h5>2. Le PIB et ses limites</h5><p>Le <strong>produit intérieur brut</strong> additionne les valeurs ajoutées de toutes les unités de production résidant sur le territoire pendant un an. C’est l’indicateur de référence de la richesse nationale. Cependant, le PIB ne comptabilise ni le travail domestique, ni le bénévolat, ni les dégradations environnementales. Il ne dit rien de la répartition des revenus : un PIB élevé peut coexister avec de fortes inégalités. Pour comparer dans le temps, on distingue le PIB <strong>nominal</strong> (en euros courants) du PIB <strong>réel</strong> (en volume, corrigé de l’inflation), qui seul reflète une évolution des quantités produites.</p><h5>3. Le partage des revenus</h5><p>La valeur ajoutée est répartie entre plusieurs bénéficiaires. Les <strong>revenus primaires</strong> rémunèrent la participation à la production : salaires pour le travail, intérêts et dividendes pour le capital, revenus mixtes pour les indépendants. La <strong>redistribution</strong> corrige ensuite cette répartition initiale : l’État prélève cotisations et impôts, puis verse des <strong>prestations sociales</strong> (allocations, pensions, indemnités). Le <strong>revenu disponible</strong> obtenu est ce que le ménage peut effectivement consommer ou épargner. L’évolution du partage entre travail et capital fait l’objet de débats économiques récurrents.</p>`,
    `<h5>1. La formation du revenu disponible</h5><p>Le <strong>revenu disponible</strong> est la somme dont un ménage dispose réellement pour consommer ou épargner. Il se calcule ainsi : revenus primaires (salaires, revenus du patrimoine, revenus mixtes) + prestations sociales reçues − prélèvements obligatoires directs (impôt sur le revenu, CSG, cotisations). Par exemple, un salarié percevant 2 400 € net, recevant 200 € d’allocations et payant 150 € d’impôt direct dispose de 2 450 € de revenu disponible. Cette grandeur est essentielle pour analyser le niveau de vie et les comportements de consommation.</p><h5>2. Consommation et pouvoir d’achat</h5><p>La <strong>consommation</strong> représente l’utilisation de biens et services pour satisfaire un besoin. Elle dépend principalement du revenu, mais aussi des prix, du crédit, des anticipations et de facteurs sociologiques (effet d’imitation, normes sociales). Le <strong>pouvoir d’achat</strong> mesure la quantité de biens et services qu’un revenu permet d’acquérir. Il n’augmente que si le revenu progresse plus vite que les prix. Si un salaire augmente de 2 % et l’inflation atteint 3 %, le pouvoir d’achat diminue d’environ 1 %. L'<strong>indice des prix à la consommation</strong> (IPC) sert de référence pour cette mesure.</p><h5>3. L’épargne et ses déterminants</h5><p>L'<strong>épargne</strong> est la part du revenu disponible non consommée. Le <strong>taux d’épargne</strong> rapporte l’épargne au revenu disponible. Les motifs d’épargne sont variés : <strong>précaution</strong> (faire face à un imprévu), <strong>projet</strong> (achat immobilier, études), <strong>transmission</strong> (patrimoine) ou <strong>rendement</strong> (placements financiers). L’épargne peut être financière (livret, assurance-vie, actions) ou non financière (investissement immobilier). Le niveau des taux d’intérêt, la confiance dans l’avenir et la fiscalité influencent le choix entre consommation immédiate et épargne.</p>`,
    `<h5>1. Capacité et besoin de financement</h5><p>Tout agent économique qui investit compare son épargne à sa dépense d’investissement. Si l’épargne excède l’investissement, il est en <strong>capacité de financement</strong> et peut prêter le surplus. S’il investit davantage qu’il n’épargne, il est en <strong>besoin de financement</strong> et doit trouver des ressources extérieures. En France, les ménages sont globalement en capacité de financement, tandis que les entreprises et l’État sont structurellement en besoin. Le système financier organise la rencontre entre agents en capacité et agents en besoin.</p><h5>2. Financement direct et indirect</h5><p>Le <strong>financement interne</strong> (autofinancement) utilise les bénéfices non distribués de l’entreprise. Le <strong>financement externe</strong> fait appel à des tiers et prend deux formes. Le financement <strong>indirect</strong> passe par un intermédiaire, principalement la banque, qui collecte des dépôts et accorde des crédits ; elle réalise aussi de la <strong>création monétaire</strong> en prêtant au-delà des dépôts. Le financement <strong>direct</strong> met en relation épargnants et emprunteurs sur le marché des capitaux, via des <strong>actions</strong> (titres de propriété) ou des <strong>obligations</strong> (titres de dette). Chaque mode présente des avantages et des contraintes en termes de coût, de risque et de contrôle.</p><h5>3. Les choix de placement</h5><p>Trois critères guident les décisions financières : le <strong>rendement</strong> (gain espéré), le <strong>risque</strong> (possibilité de perte) et la <strong>liquidité</strong> (facilité à récupérer son argent). En règle générale, un placement plus risqué offre un rendement potentiel plus élevé, et un placement très liquide rapporte moins. Un livret d’épargne est très liquide et peu risqué mais faiblement rémunéré ; une action peut rapporter davantage mais sa valeur fluctue. La <strong>diversification</strong> — répartir ses placements sur plusieurs supports — permet de réduire le risque global sans sacrifier tout le rendement.</p><h5>4. La création monétaire</h5><p>Les banques commerciales créent de la monnaie chaque fois qu'elles accordent un <strong>crédit</strong> : elles inscrivent le montant prêté au compte du client sans le prélever sur les dépôts d'un autre épargnant. « Les crédits font les dépôts. » Cette création monétaire est encadrée par la <strong>banque centrale</strong>, qui fixe les taux directeurs et impose des réserves obligatoires. Une politique monétaire <strong>expansionniste</strong> abaisse les taux pour stimuler le crédit et l'investissement ; une politique <strong>restrictive</strong> les relève pour freiner l'inflation. La masse monétaire — quantité totale de monnaie en circulation — doit croître en rapport avec l'activité réelle pour éviter soit l'inflation (trop de monnaie) soit la déflation (pas assez). Le <strong>taux d'intérêt</strong> est à la fois le prix du crédit pour l'emprunteur et la rémunération du prêteur : il influence les décisions d'investissement des entreprises et d'épargne des ménages.</p>`,
    `<h5>1. Le mécanisme de l’offre et de la demande</h5><p>Sur un marché, la <strong>demande</strong> exprime les quantités que les acheteurs souhaitent acquérir à chaque niveau de prix : elle décroît généralement quand le prix augmente. L'<strong>offre</strong> exprime les quantités que les vendeurs sont prêts à proposer : elle croît généralement avec le prix. Le <strong>prix d’équilibre</strong> est celui pour lequel offre et demande coïncident. L'<strong>élasticité-prix de la demande</strong> mesure la sensibilité de la demande à une variation de prix : si une hausse de 10 % du prix réduit la demande de 20 %, l’élasticité vaut −2. Plus la demande est élastique, plus le consommateur réagit au prix.</p><h5>2. Les structures de marché</h5><p>La <strong>concurrence pure et parfaite</strong> suppose un grand nombre d’offreurs et de demandeurs, un produit homogène, une information transparente et la libre entrée. Ces conditions sont rarement réunies. En <strong>monopole</strong>, un seul offreur fixe les prix ; en <strong>oligopole</strong>, quelques entreprises dominent et leurs décisions sont interdépendantes. Le <strong>pouvoir de marché</strong> désigne la capacité d’une entreprise à fixer un prix supérieur au coût marginal. Il est renforcé par les <strong>barrières à l’entrée</strong> — brevets, investissements lourds, effets de réseau — qui limitent l’arrivée de nouveaux concurrents.</p><h5>3. Les défaillances de marché</h5><p>Le marché ne produit pas toujours un résultat optimal pour la collectivité. Une <strong>externalité</strong> apparaît lorsqu’une activité affecte un tiers sans compensation : la pollution est une externalité négative, la vaccination une externalité positive. Un <strong>bien public</strong> (éclairage urbain, défense) est non rival et non excluable : le marché ne le produit pas spontanément. L'<strong>asymétrie d’information</strong> avantage l’une des parties (le vendeur connaît mieux le produit que l’acheteur). Ces défaillances justifient l'<strong>intervention publique</strong> : taxes, normes, subventions ou production directe par l’État.</p>`,
    `<h5>1. Les trois fonctions économiques de l’État</h5><p>L’État intervient dans l’économie selon trois grandes fonctions identifiées par l’économiste Musgrave. La fonction d'<strong>allocation</strong> consiste à produire ou financer des biens et services que le marché ne fournit pas efficacement (infrastructure, éducation, justice). La fonction de <strong>redistribution</strong> vise à réduire les inégalités de revenus par les prélèvements progressifs et les prestations sociales. La fonction de <strong>stabilisation</strong> cherche à atténuer les fluctuations économiques — récession, inflation, chômage — par des politiques conjoncturelles adaptées.</p><h5>2. Le budget et les finances publiques</h5><p>Le <strong>budget de l’État</strong> retrace l’ensemble des recettes (impôts directs et indirects, cotisations) et des dépenses (fonctionnement, investissement, transferts) sur une année. Le <strong>solde budgétaire</strong> est la différence entre recettes et dépenses. Lorsqu’il est négatif, on parle de <strong>déficit</strong>. L’accumulation des déficits financés par l’emprunt constitue la <strong>dette publique</strong>, souvent exprimée en pourcentage du PIB. Un niveau élevé de dette accroît la charge d’intérêts et peut limiter les marges de manœuvre futures, mais l’appréciation de sa soutenabilité dépend aussi de la croissance et des taux d’intérêt.</p><h5>3. Les politiques économiques</h5><p>Les <strong>politiques conjoncturelles</strong> agissent à court terme sur la demande globale. Une <strong>politique budgétaire</strong> de relance augmente les dépenses ou réduit les impôts pour soutenir l’activité, au risque d’aggraver le déficit. Une <strong>politique monétaire</strong> expansionniste abaisse les taux d’intérêt pour faciliter le crédit et l’investissement. Les <strong>politiques structurelles</strong> visent à transformer durablement les capacités productives : réforme de l’éducation, investissement dans la recherche, réglementation du marché du travail. Toute politique présente des effets attendus et des effets pervers qu’il convient d’identifier et de mettre en balance.</p>`,
    `<h5>1. Le marché du travail</h5><p>Le marché du travail confronte l'<strong>offre de travail</strong> (les personnes qui souhaitent travailler) et la <strong>demande de travail</strong> (les emplois proposés par les employeurs). La <strong>population active</strong> regroupe les personnes en emploi et les chômeurs. Le <strong>taux d’activité</strong> rapporte la population active à la population en âge de travailler. Le <strong>taux d’emploi</strong> mesure la proportion de personnes effectivement en emploi. Ces indicateurs permettent de distinguer les situations où le chômage baisse parce que des emplois sont créés de celles où des personnes sortent simplement de la population active.</p><h5>2. Les formes et la mesure du chômage</h5><p>Le <strong>chômage</strong> au sens du BIT concerne toute personne sans emploi, disponible et en recherche active. Le <strong>taux de chômage</strong> rapporte les chômeurs à la population active. Le <strong>chômage conjoncturel</strong> résulte d’un ralentissement de l’activité économique : la demande de biens diminue, les entreprises réduisent leurs effectifs. Le <strong>chômage structurel</strong> persiste même en période de croissance, en raison d’inadéquations entre les compétences offertes et recherchées, de rigidités du marché ou de mutations technologiques. Un même pays peut connaître les deux simultanément.</p><h5>3. Les politiques de l’emploi</h5><p>Les <strong>politiques passives</strong> (indemnisation du chômage) assurent un revenu de remplacement et soutiennent la consommation. Les <strong>politiques actives</strong> visent à favoriser le retour à l’emploi : formation professionnelle, aides à l’embauche, accompagnement personnalisé, contrats aidés. D’autres leviers agissent sur le <strong>coût du travail</strong> (allègements de cotisations sur les bas salaires) ou sur la <strong>flexibilité</strong> du marché (faciliter les transitions entre emplois). L’investissement en <strong>capital humain</strong> — éducation, formation continue — améliore l’appariement et la productivité à long terme, mais ses effets ne se manifestent qu’avec un décalage temporel.</p>`,
    `<h5>1. L’avantage comparatif et la spécialisation</h5><p>Le commerce international repose sur le principe de l'<strong>avantage comparatif</strong>, formulé par Ricardo : chaque pays a intérêt à se spécialiser dans les productions pour lesquelles son coût relatif est le plus faible, même s’il est moins productif que ses partenaires dans tous les domaines. Un pays qui produit du vin à un coût relatif inférieur au textile a intérêt à exporter du vin et importer du textile. La spécialisation accroît la production globale et permet à chaque partenaire de consommer davantage qu’en autarcie.</p><h5>2. Le libre-échange et ses effets</h5><p>Le <strong>libre-échange</strong> consiste à supprimer les obstacles aux échanges commerciaux entre pays. Il élargit les débouchés pour les producteurs, offre plus de choix et des prix plus bas aux consommateurs, et stimule l’innovation par la concurrence. Cependant, ses gains sont <strong>inégalement répartis</strong> : certains secteurs et travailleurs sont exposés à une concurrence accrue qui peut entraîner des pertes d’emplois et des restructurations. Les organisations internationales (OMC) encadrent les échanges par des règles multilatérales, tandis que les accords régionaux (UE, Mercosur) créent des zones préférentielles.</p><h5>3. Le protectionnisme et ses instruments</h5><p>Le <strong>protectionnisme</strong> vise à protéger les productions nationales de la concurrence étrangère. Ses principaux instruments sont les <strong>droits de douane</strong> (taxes à l’importation qui renchérissent les produits étrangers), les <strong>quotas</strong> (limitations quantitatives) et les <strong>barrières non tarifaires</strong> (normes techniques, sanitaires, subventions). L’argument de l'<strong>industrie naissante</strong> justifie une protection temporaire le temps qu’un secteur atteigne une taille compétitive. Mais le protectionnisme comporte des risques : hausse des prix pour les consommateurs, représailles commerciales et perte d’efficacité globale.</p><h5>4. Les firmes multinationales et les chaînes de valeur</h5><p>Les <strong>firmes multinationales</strong> (FMN) organisent leur production à l’échelle mondiale en localisant chaque étape là où les conditions sont les plus favorables — coûts de main-d’œuvre, proximité des marchés, fiscalité, infrastructures. La <strong>chaîne de valeur mondiale</strong> décompose la production d’un bien en étapes successives (conception, fabrication de composants, assemblage, distribution) réparties entre plusieurs pays. Un smartphone peut être conçu en Californie, ses puces fabriquées en Corée, assemblé en Chine et vendu en Europe. Les FMN représentent une part majeure du commerce international, une grande partie des échanges se faisant entre filiales d’un même groupe (commerce <strong>intra-firme</strong>). Le <strong>taux de change</strong> — prix d’une monnaie exprimé dans une autre — influence la compétitivité des exportations et le coût des importations : une dépréciation de l’euro rend les produits européens moins chers à l’étranger mais renchérit les importations.</p>`,
    `<h5>1. Les sources de la croissance</h5><p>La <strong>croissance économique</strong> désigne l’augmentation durable de la production, mesurée par le taux de variation du PIB réel. La croissance <strong>extensive</strong> résulte de l’accumulation des facteurs de production (plus de travailleurs, plus de machines). La croissance <strong>intensive</strong> provient des gains de <strong>productivité</strong>, c’est-à-dire d’une utilisation plus efficace des facteurs, notamment grâce à l'<strong>innovation</strong> (nouveaux produits, nouveaux procédés) et au <strong>progrès technique</strong>. Le résidu de Solow désigne la part de la croissance non expliquée par l’augmentation quantitative des facteurs.</p><h5>2. Croissance et développement</h5><p>La <strong>croissance</strong> est un phénomène quantitatif ; le <strong>développement</strong> est un processus qualitatif qui englobe l’amélioration des conditions de vie, l’accès à l’éducation et à la santé, la réduction des inégalités. L'<strong>IDH</strong> (indice de développement humain) combine espérance de vie, niveau d’éducation et revenu par habitant pour donner une image plus complète qu’un simple PIB. Un pays peut connaître une croissance forte sans que le développement suive, si les richesses restent concentrées ou si les indicateurs sociaux stagnent.</p><h5>3. Vers une croissance soutenable</h5><p>La croissance peut dégrader l’environnement par l’épuisement des ressources, la pollution et le changement climatique. Le <strong>développement durable</strong> vise à concilier efficacité économique, équité sociale et préservation de l’environnement. Plusieurs instruments permettent d'<strong>internaliser les externalités</strong> : la <strong>taxe</strong> (taxe carbone) augmente le coût de la pollution, la <strong>norme</strong> fixe un seuil d’émission, le <strong>quota échangeable</strong> crée un marché de droits à polluer, la <strong>subvention</strong> encourage les comportements vertueux. Chaque instrument présente des avantages et des limites en termes d’efficacité et de justice redistributive.</p><h5>4. IDH et économie circulaire</h5><p>L’<strong>IDH</strong> (indice de développement humain) combine trois dimensions — espérance de vie, niveau d’éducation et revenu par habitant — pour donner une mesure plus complète du développement qu’un simple PIB. Un pays à forte croissance peut avoir un IDH faible si les richesses sont concentrées ou si les indicateurs sociaux stagnent. L’<strong>économie circulaire</strong> propose un modèle alternatif au schéma linéaire « extraire-produire-jeter ». Elle repose sur l’<strong>écoconception</strong> (concevoir des produits durables et recyclables), l’<strong>économie de la fonctionnalité</strong> (vendre l’usage plutôt que le bien), le <strong>réemploi</strong>, la <strong>réparation</strong> et le <strong>recyclage</strong>. Ce modèle vise à découpler la croissance économique de la consommation de ressources naturelles. La <strong>transition écologique</strong> suppose de transformer les modes de production et de consommation en intégrant les coûts environnementaux, ce qui implique des choix politiques sur la répartition des efforts.</p>`,
  ],
  sgn: [
    `<h5>1. Comprendre le comportement individuel</h5><p>Le comportement d’un individu dans une organisation dépend de plusieurs facteurs psychologiques. La <strong>personnalité</strong> regroupe les traits stables qui caractérisent une personne (extraversion, ouverture, conscience). Les <strong>émotions</strong> — joie, colère, peur, surprise — influencent la prise de décision et les relations interpersonnelles. La <strong>perception</strong> est le processus par lequel chacun sélectionne, organise et interprète les informations reçues : deux personnes peuvent percevoir différemment un même message selon leur expérience et leur cadre de référence. L'<strong>attitude</strong> prédispose à réagir favorablement ou défavorablement face à une situation.</p><h5>2. La compétence au cœur de l’activité</h5><p>La <strong>compétence</strong> ne se réduit pas à un savoir théorique. Elle combine trois dimensions : les <strong>connaissances</strong> (savoirs), les <strong>savoir-faire</strong> (capacités pratiques) et les <strong>savoir-être</strong> (comportements adaptés à la situation). On distingue la compétence <strong>individuelle</strong>, propre à une personne, de la compétence <strong>collective</strong>, qui émerge de la coopération au sein d’une équipe. C’est en <strong>situation professionnelle</strong> que la compétence se manifeste : un diplôme atteste des connaissances, mais c’est la capacité à les mobiliser face à un problème concret qui fait la compétence.</p><h5>3. Le groupe et la culture organisationnelle</h5><p>Un <strong>groupe</strong> réunit des individus partageant un objectif commun, des <strong>normes</strong> (règles de conduite implicites ou explicites) et des <strong>rôles</strong> (fonctions attendues de chacun). Le <strong>leadership</strong> — capacité à orienter et mobiliser le groupe — peut être formel (désigné) ou informel (reconnu par les pairs). La <strong>culture organisationnelle</strong> est l’ensemble des valeurs, croyances et pratiques partagées au sein de l’organisation. L’individu devient <strong>acteur</strong> lorsqu’il ne se contente pas de subir les règles mais les interprète, les adapte et contribue activement à la réalisation des objectifs collectifs.</p><h5>4. Qualification et compétence</h5><p>La <strong>qualification</strong> est attestée par un diplôme ou un titre professionnel : elle certifie un niveau de connaissances et de capacités reconnu socialement. La <strong>compétence</strong>, elle, ne se réduit pas à la qualification : c’est la capacité effective à mobiliser des ressources (savoirs, savoir-faire, savoir-être) dans une situation concrète de travail. Un salarié peut être qualifié sans être compétent dans un poste spécifique (manque d’expérience) ou compétent sans qualification formelle (expérience terrain). La <strong>formation continue</strong> permet de maintenir et développer les compétences tout au long de la vie professionnelle. L’<strong>identité numérique professionnelle</strong> d’un salarié — profils en ligne, publications, traces d’activité — participe désormais de son image dans l’organisation et sur le marché du travail.</p>`,
    `<h5>1. De la donnée à la connaissance</h5><p>Une <strong>donnée</strong> est un élément brut, sans contexte : un chiffre, un nom, une date. Elle devient <strong>information</strong> lorsqu’elle est organisée, contextualisée et porteuse de sens — par exemple, un tableau de ventes mensuel permet de repérer une tendance. L’information se transforme en <strong>connaissance</strong> lorsqu’un acteur se l’approprie et peut l’utiliser pour agir et décider. Cette chaîne donnée → information → connaissance est fondamentale : la valeur ne réside pas dans la donnée brute, mais dans la capacité de l’organisation à la transformer en aide à la décision.</p><h5>2. Le système d’information</h5><p>Le <strong>système d’information</strong> (SI) réunit les <strong>acteurs</strong> (utilisateurs, gestionnaires), les <strong>règles</strong> (procédures, droits d’accès), les <strong>outils</strong> (logiciels, réseaux, bases de données) et les <strong>données</strong> nécessaires pour collecter, stocker, traiter et diffuser l’information. Le SI ne se réduit pas à l’informatique : il inclut aussi les procédures humaines et organisationnelles. Un <strong>processus</strong> est une suite coordonnée d’activités aboutissant à un résultat : traitement d’une commande, recrutement, gestion de stock. Le SI supporte ces processus en automatisant certaines tâches et en facilitant la circulation de l’information.</p><h5>3. Numérique et travail collaboratif</h5><p>Les outils numériques — messageries, plateformes collaboratives, réseaux sociaux d’entreprise, espaces de stockage partagés — facilitent le <strong>travail collaboratif</strong> en permettant l’échange instantané, le partage de documents et la co-construction à distance. L'<strong>intelligence collective</strong> émerge lorsque la collaboration produit un résultat supérieur à la somme des contributions individuelles. Cependant, le numérique présente des <strong>risques</strong> : surcharge informationnelle, dépendance technologique, menaces sur la sécurité des données, <strong>traces numériques</strong> involontaires et exclusion des personnes peu à l’aise avec les outils. L’organisation doit encadrer les usages pour en tirer le meilleur parti.</p><h5>4. PGI, cloud et e-réputation</h5><p>Le <strong>progiciel de gestion intégré</strong> (PGI ou ERP) centralise les données de l’ensemble des fonctions de l’organisation (achats, ventes, stock, comptabilité, RH) dans une <strong>base de données unique</strong>. Il évite les saisies multiples, améliore la cohérence des informations et automatise les processus transversaux. Le <strong>cloud computing</strong> (informatique en nuage) permet d’accéder à des ressources informatiques (stockage, logiciels, puissance de calcul) via internet, sans les posséder physiquement. Il offre flexibilité et réduction des coûts, mais pose des questions de <strong>sécurité</strong>, de <strong>souveraineté des données</strong> et de dépendance envers le prestataire. L’<strong>e-réputation</strong> est l’image d’une organisation telle qu’elle est perçue sur internet — avis clients, mentions sur les réseaux sociaux, articles de presse en ligne. Elle constitue un actif immatériel qui influence la confiance des clients, des partenaires et des candidats au recrutement. Sa gestion implique une veille active et une stratégie de communication numérique maîtrisée.</p>`,
    `<h5>1. Les différentes formes de valeur</h5><p>La notion de valeur est multidimensionnelle dans une organisation. La <strong>valeur ajoutée</strong> mesure la richesse effectivement créée par l’activité (production − consommations intermédiaires). La <strong>valeur financière</strong> intéresse les apporteurs de capitaux : elle s’évalue par la rentabilité, le cours de l’action ou la capacité à générer des flux de trésorerie. La <strong>valeur perçue</strong> dépend du jugement du client sur l’utilité du produit, sa qualité, son image et son rapport qualité-prix. La <strong>valeur sociale</strong> concerne les conditions de travail, la formation, l’insertion et le développement humain au sein de l’organisation.</p><h5>2. Mesurer la performance</h5><p>La <strong>performance</strong> exprime la capacité d’une organisation à atteindre ses objectifs. Elle ne se limite pas aux résultats financiers : elle est <strong>multidimensionnelle</strong>. Un <strong>indicateur</strong> est une donnée chiffrée qui permet de suivre un objectif — chiffre d’affaires, taux de satisfaction client, taux d’absentéisme, empreinte carbone. Un <strong>tableau de bord</strong> regroupe un ensemble d’indicateurs clés, présentés de manière synthétique, pour piloter l’activité et prendre des décisions. Le choix des indicateurs dépend des objectifs de l’organisation et de ses parties prenantes.</p><h5>3. Efficacité et efficience</h5><p>L'<strong>efficacité</strong> désigne le degré d’atteinte des objectifs : une organisation est efficace si elle réalise ce qu’elle s’est fixé. L'<strong>efficience</strong> compare les résultats obtenus aux ressources consommées : une organisation est efficiente si elle atteint ses objectifs en utilisant le minimum de moyens. Une campagne publicitaire qui atteint ses objectifs de notoriété mais à un coût disproportionné est efficace mais peu efficiente. Ces deux notions ne sont pas toujours compatibles : la recherche d’efficience à tout prix peut nuire à la qualité du service, et inversement. Toute évaluation de la performance doit croiser les points de vue des différentes <strong>parties prenantes</strong>.</p><h5>4. Seuil de rentabilité et charges</h5><p>Le <strong>seuil de rentabilité</strong> (ou point mort) est le niveau de chiffre d'affaires à partir duquel l'entreprise couvre l'ensemble de ses charges et commence à dégager un bénéfice. Pour le calculer, on distingue les <strong>charges fixes</strong> (loyer, salaires permanents, amortissements — indépendantes du volume d'activité) des <strong>charges variables</strong> (matières premières, commissions — proportionnelles à la production). Les charges sont également classées en <strong>charges directes</strong> (affectables sans ambiguïté à un produit ou une activité) et <strong>charges indirectes</strong> (partagées entre plusieurs activités, nécessitant une clé de répartition). Le <strong>coût de revient</strong> d'un produit inclut l'ensemble des charges nécessaires à sa production et sa commercialisation. La <strong>marge</strong> est la différence entre le prix de vente et le coût de revient : elle conditionne la rentabilité et les choix de prix.</p>`,
    `<h5>1. La dimension temporelle de la décision</h5><p>Toute décision s’inscrit dans le temps et engage l’avenir. Une décision de <strong>court terme</strong> (achat de fournitures) est facilement réversible ; une décision de <strong>long terme</strong> (investissement, recrutement) engage l’organisation durablement et coûte cher à modifier. L'<strong>horizon de décision</strong> détermine les informations à collecter et les outils à mobiliser. Une action immédiate peut produire des effets pendant des années. La <strong>veille</strong> — surveillance continue de l’environnement (concurrentiel, technologique, réglementaire) — fournit les signaux qui permettent d’anticiper les changements et de réagir à temps.</p><h5>2. Identifier et évaluer les risques</h5><p>Un <strong>risque</strong> est un événement incertain qui, s’il se réalise, peut avoir des conséquences négatives sur l’organisation. Il se caractérise par sa <strong>probabilité</strong> d’occurrence et sa <strong>gravité</strong> (impact en cas de réalisation). On distingue plusieurs catégories : risque financier, commercial, technologique, juridique, humain, environnemental. Une <strong>matrice de risques</strong> croise probabilité et gravité pour hiérarchiser les menaces et concentrer les efforts sur les plus critiques. L’incertitude, contrairement au risque, ne peut pas être chiffrée par une probabilité — elle requiert prudence et adaptabilité.</p><h5>3. Les outils de gestion du temps et du risque</h5><p>Face au risque, l’organisation peut <strong>éviter</strong> l’activité risquée, <strong>prévenir</strong> en réduisant la probabilité, <strong>transférer</strong> (assurance, sous-traitance) ou <strong>accepter</strong> le risque résiduel. La <strong>prévision</strong> et les <strong>scénarios</strong> aident à se préparer à plusieurs futurs possibles. L'<strong>actualisation</strong> permet de comparer des sommes disponibles à des dates différentes : un euro aujourd’hui vaut plus qu’un euro demain, car il peut être placé. La <strong>gestion de projet</strong> (planification, jalons, suivi) structure l’action dans le temps et coordonne les ressources pour maîtriser délais, coûts et qualité.</p><h5>4. Ordonnancement et outils de planification</h5><p>L’<strong>ordonnancement</strong> consiste à organiser dans le temps les différentes tâches d’un projet en tenant compte de leurs durées, de leurs contraintes d’antériorité (certaines tâches ne peuvent commencer qu’une fois d’autres terminées) et des ressources disponibles. Le <strong>diagramme de Gantt</strong> représente visuellement chaque tâche sous forme de barre horizontale sur un axe temporel, permettant de repérer d’un coup d’œil les chevauchements, les marges et les retards. Le <strong>chemin critique</strong> est la séquence de tâches la plus longue : tout retard sur l’une d’elles retarde l’ensemble du projet. La <strong>budgétisation</strong> estime les ressources financières nécessaires pour chaque phase. Le suivi régulier compare le <strong>prévu</strong> au <strong>réalisé</strong> et permet d’ajuster : réallouer des ressources, réviser les délais ou modifier le périmètre. L’<strong>analyse de scénarios</strong> (optimiste, probable, pessimiste) aide à anticiper les aléas et à préparer des plans de contingence.</p>`,
  ],
};
const teachingProfiles = {
  cejm: {
    question:
      `Quelle décision l’entreprise doit-elle prendre et quelles dimensions faut-il croiser ?`,
    method: [
      `Identifier le problème de l’entreprise.`,
      'Classer les informations utiles par discipline.',
      'Mobiliser les notions et expliquer le mécanisme.',
      'Appliquer chaque idée au contexte.',
      'Répondre directement et nuancer.',
    ],
    errors: [
      'Réciter sans exploiter les documents.',
      'Énumérer sans expliquer les conséquences.',
      'Donner un avis personnel sans argument.',
    ],
  },
  droit: {
    question: 'Quels faits sont juridiquement importants et quelle règle résout le problème ?',
    method: [
      'Qualifier les personnes et les faits.',
      'Formuler un problème de droit général.',
      'Énoncer la règle et ses conditions.',
      'Confronter les conditions aux faits.',
      'Conclure sur la prétention.',
    ],
    errors: [
      'Raconter au lieu de qualifier.',
      'Conserver les noms dans le problème de droit.',
      'Conclure sans règle ni application.',
    ],
  },
  economie: {
    question:
      `Quel mécanisme explique la situation et quels indicateurs permettent de l’observer ?`,
    method: [
      'Définir la notion centrale.',
      'Repérer acteurs, flux et variables.',
      'Dérouler les causes et les effets.',
      'Exploiter et interpréter les données.',
      'Conclure avec une limite.',
    ],
    errors: [
      'Confondre corrélation et causalité.',
      `Citer un chiffre sans l’interpréter.`,
      'Présenter un mécanisme comme automatique.',
    ],
  },
  sgn: {
    question:
      `Comment l’organisation transforme-t-elle ses ressources pour atteindre ses objectifs ?`,
    method: [
      'Identifier organisation, finalité et acteurs.',
      'Sélectionner données et notions.',
      'Calculer si nécessaire.',
      `Interpréter selon l’objectif.`,
      'Proposer une conclusion cohérente.',
    ],
    errors: [
      'Limiter la performance au financier.',
      'Calculer sans interpréter.',
      'Confondre donnée et information.',
    ],
  },
};
const courseDiagrams = {
  cejm: [
    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>Le circuit des échanges de l’entreprise</b></div><svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circuit des échanges entre l’entreprise et ses partenaires"><defs><marker id="ah1" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#5b8db8"/></marker><marker id="ah1r" markerWidth="8" markerHeight="6" refX="0" refY="3" orient="auto"><path d="M8,0 L0,3 L8,6" fill="#ef6a5b"/></marker></defs><rect x="250" y="140" width="200" height="80" rx="14" fill="#132b38"/><text x="350" y="175" text-anchor="middle" fill="#fff" font-weight="800" font-size="16" font-family="Manrope,sans-serif">ENTREPRISE</text><text x="350" y="198" text-anchor="middle" fill="#b4c2c6" font-size="11" font-family="DM Sans,sans-serif">Production de biens/services</text><rect x="20" y="20" width="140" height="56" rx="10" fill="#f2f5f2" stroke="#dfe2dc"/><text x="90" y="45" text-anchor="middle" fill="#132b38" font-weight="700" font-size="13" font-family="Manrope,sans-serif">Ménages</text><text x="90" y="62" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Travail / Consommation</text><rect x="540" y="20" width="140" height="56" rx="10" fill="#f2f5f2" stroke="#dfe2dc"/><text x="610" y="45" text-anchor="middle" fill="#132b38" font-weight="700" font-size="13" font-family="Manrope,sans-serif">Banques</text><text x="610" y="62" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Crédit / Épargne</text><rect x="20" y="290" width="140" height="56" rx="10" fill="#f2f5f2" stroke="#dfe2dc"/><text x="90" y="315" text-anchor="middle" fill="#132b38" font-weight="700" font-size="13" font-family="Manrope,sans-serif">Fournisseurs</text><text x="90" y="332" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Matières / Services</text><rect x="540" y="290" width="140" height="56" rx="10" fill="#f2f5f2" stroke="#dfe2dc"/><text x="610" y="315" text-anchor="middle" fill="#132b38" font-weight="700" font-size="13" font-family="Manrope,sans-serif">État</text><text x="610" y="332" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Impôts / Services publics</text><rect x="280" y="310" width="140" height="46" rx="10" fill="#fff7e7" stroke="#e8b74f"/><text x="350" y="337" text-anchor="middle" fill="#9a6c2a" font-weight="700" font-size="12" font-family="Manrope,sans-serif">Clients</text><line x1="160" y1="55" x2="248" y2="152" stroke="#5b8db8" stroke-width="2" marker-end="url(#ah1)"/><text x="165" y="95" fill="#5b8db8" font-size="9" font-weight="600" font-family="DM Sans,sans-serif">Travail</text><line x1="248" y1="168" x2="160" y2="70" stroke="#ef6a5b" stroke-width="2" marker-end="url(#ah1r)"/><text x="165" y="115" fill="#ef6a5b" font-size="9" font-weight="600" font-family="DM Sans,sans-serif">Salaires</text><line x1="452" y1="155" x2="538" y2="60" stroke="#5b8db8" stroke-width="2" marker-end="url(#ah1)"/><text x="535" y="95" text-anchor="end" fill="#5b8db8" font-size="9" font-weight="600" font-family="DM Sans,sans-serif">Remboursements</text><line x1="538" y1="68" x2="452" y2="162" stroke="#ef6a5b" stroke-width="2" marker-end="url(#ah1r)"/><text x="535" y="115" text-anchor="end" fill="#ef6a5b" font-size="9" font-weight="600" font-family="DM Sans,sans-serif">Crédits</text><line x1="160" y1="310" x2="248" y2="215" stroke="#5b8db8" stroke-width="2" marker-end="url(#ah1)"/><text x="165" y="260" fill="#5b8db8" font-size="9" font-weight="600" font-family="DM Sans,sans-serif">Biens/Services</text><line x1="248" y1="210" x2="160" y2="300" stroke="#ef6a5b" stroke-width="2" marker-end="url(#ah1r)"/><text x="165" y="278" fill="#ef6a5b" font-size="9" font-weight="600" font-family="DM Sans,sans-serif">Paiements</text><line x1="452" y1="215" x2="538" y2="300" stroke="#ef6a5b" stroke-width="2" marker-end="url(#ah1)"/><text x="535" y="278" text-anchor="end" fill="#ef6a5b" font-size="9" font-weight="600" font-family="DM Sans,sans-serif">Impôts</text><line x1="538" y1="295" x2="452" y2="210" stroke="#5b8db8" stroke-width="2" marker-end="url(#ah1r)"/><text x="535" y="260" text-anchor="end" fill="#5b8db8" font-size="9" font-weight="600" font-family="DM Sans,sans-serif">Infrastructures</text><line x1="350" y1="222" x2="350" y2="307" stroke="#e8b74f" stroke-width="2" marker-end="url(#ah1)"/><text x="365" y="270" fill="#9a6c2a" font-size="9" font-family="DM Sans,sans-serif">Produits</text><rect x="580" y="155" width="110" height="50" rx="8" fill="#fff" stroke="#dfe2dc"/><text x="635" y="176" text-anchor="middle" fill="#5b8db8" font-weight="700" font-size="10" font-family="DM Sans,sans-serif">Flux réels →</text><text x="635" y="193" text-anchor="middle" fill="#ef6a5b" font-weight="700" font-size="10" font-family="DM Sans,sans-serif">← Flux monétaires</text></svg></div>`,

    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>Le modèle PESTEL</b></div><svg viewBox="0 0 700 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Modèle PESTEL : 6 dimensions du macro-environnement"><rect x="250" y="160" width="200" height="80" rx="14" fill="#132b38"/><text x="350" y="195" text-anchor="middle" fill="#fff" font-weight="800" font-size="15" font-family="Manrope,sans-serif">ENTREPRISE</text><text x="350" y="215" text-anchor="middle" fill="#b4c2c6" font-size="10" font-family="DM Sans,sans-serif">Macro-environnement</text><g><rect x="10" y="0" width="190" height="68" rx="10" fill="#ef6a5b" opacity="0.12" stroke="#ef6a5b" stroke-width="1.5"/><text x="105" y="24" text-anchor="middle" fill="#ef6a5b" font-weight="800" font-size="12" font-family="Manrope,sans-serif">P — Politique</text><text x="105" y="42" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Stabilité, fiscalité,</text><text x="105" y="56" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">subventions, politique publique</text><line x1="200" y1="50" x2="250" y2="165" stroke="#ef6a5b" stroke-width="1.5" stroke-dasharray="4 3"/></g><g><rect x="250" y="0" width="190" height="68" rx="10" fill="#e8b74f" opacity="0.15" stroke="#e8b74f" stroke-width="1.5"/><text x="345" y="24" text-anchor="middle" fill="#9a6c2a" font-weight="800" font-size="12" font-family="Manrope,sans-serif">E — Économique</text><text x="345" y="42" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Croissance, inflation,</text><text x="345" y="56" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">taux de change, pouvoir d’achat</text><line x1="345" y1="68" x2="345" y2="158" stroke="#e8b74f" stroke-width="1.5" stroke-dasharray="4 3"/></g><g><rect x="500" y="0" width="190" height="68" rx="10" fill="#87a99b" opacity="0.18" stroke="#87a99b" stroke-width="1.5"/><text x="595" y="24" text-anchor="middle" fill="#477565" font-weight="800" font-size="12" font-family="Manrope,sans-serif">S — Socioculturel</text><text x="595" y="42" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Démographie, modes de vie,</text><text x="595" y="56" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">valeurs, niveau d’éducation</text><line x1="500" y1="50" x2="450" y2="168" stroke="#87a99b" stroke-width="1.5" stroke-dasharray="4 3"/></g><g><rect x="10" y="340" width="190" height="68" rx="10" fill="#5b8db8" opacity="0.12" stroke="#5b8db8" stroke-width="1.5"/><text x="105" y="364" text-anchor="middle" fill="#5b8db8" font-weight="800" font-size="12" font-family="Manrope,sans-serif">T — Technologique</text><text x="105" y="382" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Innovation, R&D, brevets,</text><text x="105" y="396" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">transfert de technologie</text><line x1="200" y1="355" x2="255" y2="240" stroke="#5b8db8" stroke-width="1.5" stroke-dasharray="4 3"/></g><g><rect x="250" y="340" width="190" height="68" rx="10" fill="#87a99b" opacity="0.25" stroke="#55806f" stroke-width="1.5"/><text x="345" y="364" text-anchor="middle" fill="#477565" font-weight="800" font-size="12" font-family="Manrope,sans-serif">E — Écologique</text><text x="345" y="382" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Normes environnementales,</text><text x="345" y="396" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">climat, ressources naturelles</text><line x1="345" y1="340" x2="345" y2="242" stroke="#55806f" stroke-width="1.5" stroke-dasharray="4 3"/></g><g><rect x="500" y="340" width="190" height="68" rx="10" fill="#ef6a5b" opacity="0.08" stroke="#c2543f" stroke-width="1.5"/><text x="595" y="364" text-anchor="middle" fill="#c2543f" font-weight="800" font-size="12" font-family="Manrope,sans-serif">L — Légal</text><text x="595" y="382" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Droit du travail, normes,</text><text x="595" y="396" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">réglementation sectorielle</text><line x1="500" y1="358" x2="450" y2="235" stroke="#c2543f" stroke-width="1.5" stroke-dasharray="4 3"/></g><text x="350" y="290" text-anchor="middle" fill="#65747b" font-size="10" font-style="italic" font-family="DM Sans,sans-serif">Chaque facteur = opportunité ou menace à qualifier</text></svg></div>`,

    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>Faire ou faire faire : l’arbitrage</b></div><svg viewBox="0 0 700 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparaison internaliser versus externaliser"><text x="350" y="28" text-anchor="middle" fill="#132b38" font-weight="800" font-size="14" font-family="Manrope,sans-serif">L’entreprise doit-elle produire elle-même ou sous-traiter ?</text><line x1="350" y1="42" x2="350" y2="75" stroke="#dfe2dc" stroke-width="2"/><line x1="175" y1="75" x2="525" y2="75" stroke="#dfe2dc" stroke-width="2"/><line x1="175" y1="75" x2="175" y2="95" stroke="#dfe2dc" stroke-width="2"/><line x1="525" y1="75" x2="525" y2="95" stroke="#dfe2dc" stroke-width="2"/><rect x="50" y="95" width="250" height="210" rx="12" fill="#132b38" opacity="0.04" stroke="#132b38" stroke-width="1.5"/><text x="175" y="122" text-anchor="middle" fill="#132b38" font-weight="800" font-size="14" font-family="Manrope,sans-serif">INTERNALISER</text><text x="175" y="140" text-anchor="middle" fill="#477565" font-weight="700" font-size="10" font-family="DM Sans,sans-serif">Produire soi-même</text><g fill="#485c64" font-size="11" font-family="DM Sans,sans-serif"><text x="75" y="168">✓ Maîtrise du savoir-faire</text><text x="75" y="190">✓ Contrôle qualité direct</text><text x="75" y="212">✓ Indépendance</text><text x="75" y="234">✓ Protège l’avantage concurrentiel</text><text x="75" y="264" fill="#ef6a5b">✗ Coûts fixes élevés</text><text x="75" y="286" fill="#ef6a5b">✗ Rigidité, investissements lourds</text></g><rect x="400" y="95" width="250" height="210" rx="12" fill="#5b8db8" opacity="0.06" stroke="#5b8db8" stroke-width="1.5"/><text x="525" y="122" text-anchor="middle" fill="#5b8db8" font-weight="800" font-size="14" font-family="Manrope,sans-serif">EXTERNALISER</text><text x="525" y="140" text-anchor="middle" fill="#5b8db8" font-weight="700" font-size="10" font-family="DM Sans,sans-serif">Confier à un prestataire</text><g fill="#485c64" font-size="11" font-family="DM Sans,sans-serif"><text x="425" y="168">✓ Flexibilité</text><text x="425" y="190">✓ Expertise externe</text><text x="425" y="212">✓ Coûts variables</text><text x="425" y="234">✓ Recentrage sur le cœur de métier</text><text x="425" y="264" fill="#ef6a5b">✗ Coûts de transaction</text><text x="425" y="286" fill="#ef6a5b">✗ Dépendance / perte de contrôle</text></g></svg></div>`,

    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>De la donnée à la décision</b></div><svg viewBox="0 0 700 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chaîne donnée information connaissance décision"><defs><marker id="ahf" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#5b8db8"/></marker></defs><rect x="20" y="50" width="130" height="90" rx="12" fill="#f2f5f2" stroke="#dfe2dc" stroke-width="1.5"/><text x="85" y="82" text-anchor="middle" fill="#132b38" font-weight="800" font-size="14" font-family="Manrope,sans-serif">DONNÉE</text><text x="85" y="100" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Élément brut</text><text x="85" y="116" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">sans contexte</text><line x1="152" y1="95" x2="188" y2="95" stroke="#5b8db8" stroke-width="2" marker-end="url(#ahf)"/><rect x="190" y="50" width="140" height="90" rx="12" fill="#5b8db8" opacity="0.1" stroke="#5b8db8" stroke-width="1.5"/><text x="260" y="82" text-anchor="middle" fill="#5b8db8" font-weight="800" font-size="14" font-family="Manrope,sans-serif">INFORMATION</text><text x="260" y="100" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Donnée organisée</text><text x="260" y="116" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">et contextualisée</text><line x1="332" y1="95" x2="368" y2="95" stroke="#5b8db8" stroke-width="2" marker-end="url(#ahf)"/><rect x="370" y="50" width="140" height="90" rx="12" fill="#e8b74f" opacity="0.15" stroke="#e8b74f" stroke-width="1.5"/><text x="440" y="82" text-anchor="middle" fill="#9a6c2a" font-weight="800" font-size="14" font-family="Manrope,sans-serif">CONNAISSANCE</text><text x="440" y="100" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Information appropriée</text><text x="440" y="116" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">par un acteur</text><line x1="512" y1="95" x2="548" y2="95" stroke="#5b8db8" stroke-width="2" marker-end="url(#ahf)"/><rect x="550" y="50" width="130" height="90" rx="12" fill="#132b38"/><text x="615" y="82" text-anchor="middle" fill="#fff" font-weight="800" font-size="14" font-family="Manrope,sans-serif">DÉCISION</text><text x="615" y="100" text-anchor="middle" fill="#b4c2c6" font-size="10" font-family="DM Sans,sans-serif">Action fondée</text><text x="615" y="116" text-anchor="middle" fill="#b4c2c6" font-size="10" font-family="DM Sans,sans-serif">sur la connaissance</text><text x="140" y="170" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Structuration</text><text x="320" y="170" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Appropriation</text><text x="500" y="170" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Exploitation</text><text x="350" y="195" text-anchor="middle" fill="#65747b" font-size="10" font-style="italic" font-family="DM Sans,sans-serif">Le SI organise cette chaîne — le RGPD encadre la collecte et l’usage</text></svg></div>`,

    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>La relation de travail</b></div><svg viewBox="0 0 700 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Structure de la relation de travail salarié"><rect x="225" y="10" width="250" height="60" rx="12" fill="#132b38"/><text x="350" y="40" text-anchor="middle" fill="#fff" font-weight="800" font-size="15" font-family="Manrope,sans-serif">CONTRAT DE TRAVAIL</text><text x="350" y="58" text-anchor="middle" fill="#b4c2c6" font-size="10" font-family="DM Sans,sans-serif">Prestation + Rémunération + Subordination</text><line x1="125" y1="70" x2="125" y2="110" stroke="#dfe2dc" stroke-width="2"/><line x1="350" y1="70" x2="350" y2="110" stroke="#dfe2dc" stroke-width="2"/><line x1="575" y1="70" x2="575" y2="110" stroke="#dfe2dc" stroke-width="2"/><rect x="25" y="110" width="200" height="80" rx="10" fill="#ef6a5b" opacity="0.1" stroke="#ef6a5b" stroke-width="1.5"/><text x="125" y="138" text-anchor="middle" fill="#ef6a5b" font-weight="800" font-size="12" font-family="Manrope,sans-serif">EMPLOYEUR</text><text x="125" y="156" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Pouvoir de direction</text><text x="125" y="172" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Contrôle et sanction</text><rect x="260" y="110" width="180" height="80" rx="10" fill="#5b8db8" opacity="0.1" stroke="#5b8db8" stroke-width="1.5"/><text x="350" y="138" text-anchor="middle" fill="#5b8db8" font-weight="800" font-size="12" font-family="Manrope,sans-serif">SALARIÉ</text><text x="350" y="156" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Prestation de travail</text><text x="350" y="172" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Droits et libertés</text><rect x="475" y="110" width="200" height="80" rx="10" fill="#e8b74f" opacity="0.12" stroke="#e8b74f" stroke-width="1.5"/><text x="575" y="138" text-anchor="middle" fill="#9a6c2a" font-weight="800" font-size="12" font-family="Manrope,sans-serif">SUBORDINATION</text><text x="575" y="156" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Ordres, contrôle,</text><text x="575" y="172" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">sanctions = critère clé</text><rect x="25" y="220" width="200" height="70" rx="9" fill="#fff" stroke="#dfe2dc"/><text x="125" y="247" text-anchor="middle" fill="#132b38" font-weight="700" font-size="11" font-family="Manrope,sans-serif">CDI</text><text x="125" y="265" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Forme normale du contrat</text><rect x="250" y="220" width="200" height="70" rx="9" fill="#fff" stroke="#dfe2dc"/><text x="350" y="247" text-anchor="middle" fill="#132b38" font-weight="700" font-size="11" font-family="Manrope,sans-serif">CDD</text><text x="350" y="265" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Besoin temporaire uniquement</text><rect x="475" y="220" width="200" height="70" rx="9" fill="#fff" stroke="#dfe2dc"/><text x="575" y="247" text-anchor="middle" fill="#132b38" font-weight="700" font-size="11" font-family="Manrope,sans-serif">GPEC</text><text x="575" y="265" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Anticiper les besoins futurs</text></svg></div>`,

    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>Le diagnostic stratégique</b></div><svg viewBox="0 0 700 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Matrice diagnostic stratégique interne et externe"><text x="350" y="26" text-anchor="middle" fill="#132b38" font-weight="800" font-size="14" font-family="Manrope,sans-serif">DIAGNOSTIC STRATÉGIQUE</text><text x="178" y="58" text-anchor="middle" fill="#477565" font-weight="800" font-size="11" font-family="Manrope,sans-serif">POSITIF</text><text x="528" y="58" text-anchor="middle" fill="#ef6a5b" font-weight="800" font-size="11" font-family="Manrope,sans-serif">NÉGATIF</text><text x="32" y="135" fill="#5b8db8" font-weight="800" font-size="11" font-family="Manrope,sans-serif" transform="rotate(-90 32 135)">INTERNE</text><text x="32" y="270" fill="#e8b74f" font-weight="800" font-size="11" font-family="Manrope,sans-serif" transform="rotate(-90 32 270)">EXTERNE</text><rect x="55" y="70" width="290" height="100" rx="12" fill="#dfebe5" stroke="#87a99b" stroke-width="1.5"/><text x="200" y="98" text-anchor="middle" fill="#477565" font-weight="800" font-size="14" font-family="Manrope,sans-serif">FORCES</text><text x="200" y="118" text-anchor="middle" fill="#52646b" font-size="11" font-family="DM Sans,sans-serif">Ressources rares, compétences</text><text x="200" y="136" text-anchor="middle" fill="#52646b" font-size="11" font-family="DM Sans,sans-serif">distinctives, savoir-faire</text><text x="200" y="154" text-anchor="middle" fill="#52646b" font-size="11" font-family="DM Sans,sans-serif">→ Avantage concurrentiel durable</text><rect x="355" y="70" width="290" height="100" rx="12" fill="#f9ded9" stroke="#ef6a5b" stroke-width="1.5"/><text x="500" y="98" text-anchor="middle" fill="#ef6a5b" font-weight="800" font-size="14" font-family="Manrope,sans-serif">FAIBLESSES</text><text x="500" y="118" text-anchor="middle" fill="#52646b" font-size="11" font-family="DM Sans,sans-serif">Ressources manquantes,</text><text x="500" y="136" text-anchor="middle" fill="#52646b" font-size="11" font-family="DM Sans,sans-serif">rigidités, lacunes</text><text x="500" y="154" text-anchor="middle" fill="#52646b" font-size="11" font-family="DM Sans,sans-serif">→ Vulnérabilités à corriger</text><rect x="55" y="180" width="290" height="100" rx="12" fill="#fff7e7" stroke="#e8b74f" stroke-width="1.5"/><text x="200" y="208" text-anchor="middle" fill="#9a6c2a" font-weight="800" font-size="14" font-family="Manrope,sans-serif">OPPORTUNITÉS</text><text x="200" y="228" text-anchor="middle" fill="#52646b" font-size="11" font-family="DM Sans,sans-serif">Marché en croissance,</text><text x="200" y="246" text-anchor="middle" fill="#52646b" font-size="11" font-family="DM Sans,sans-serif">innovation, réglementation</text><text x="200" y="264" text-anchor="middle" fill="#52646b" font-size="11" font-family="DM Sans,sans-serif">→ Potentiel à exploiter</text><rect x="355" y="180" width="290" height="100" rx="12" fill="#f2f5f2" stroke="#65747b" stroke-width="1.5"/><text x="500" y="208" text-anchor="middle" fill="#65747b" font-weight="800" font-size="14" font-family="Manrope,sans-serif">MENACES</text><text x="500" y="228" text-anchor="middle" fill="#52646b" font-size="11" font-family="DM Sans,sans-serif">Concurrence, évolution</text><text x="500" y="246" text-anchor="middle" fill="#52646b" font-size="11" font-family="DM Sans,sans-serif">technologique, crise</text><text x="500" y="264" text-anchor="middle" fill="#52646b" font-size="11" font-family="DM Sans,sans-serif">→ Risques à anticiper</text><rect x="130" y="298" width="440" height="36" rx="8" fill="#132b38"/><text x="350" y="320" text-anchor="middle" fill="#fff" font-weight="700" font-size="11" font-family="DM Sans,sans-serif">Spécialisation · Diversification · Croissance interne / externe / conjointe</text></svg></div>`,
  ],
  droit: [
    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>La hiérarchie des normes</b></div><svg viewBox="0 0 700 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pyramide de Kelsen — hiérarchie des normes juridiques"><polygon points="350,15 590,310 110,310" fill="none" stroke="#dfe2dc" stroke-width="1.5"/><rect x="290" y="30" width="120" height="42" rx="8" fill="#132b38"/><text x="350" y="50" text-anchor="middle" fill="#fff" font-weight="800" font-size="11" font-family="Manrope,sans-serif">CONSTITUTION</text><text x="350" y="64" text-anchor="middle" fill="#b4c2c6" font-size="9" font-family="DM Sans,sans-serif">Norme suprême</text><rect x="255" y="88" width="190" height="42" rx="8" fill="#ef6a5b" opacity="0.15" stroke="#ef6a5b"/><text x="350" y="108" text-anchor="middle" fill="#ef6a5b" font-weight="700" font-size="11" font-family="Manrope,sans-serif">TRAITÉS INTERNATIONAUX</text><text x="350" y="122" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">UE · Conventions internationales</text><rect x="220" y="146" width="260" height="42" rx="8" fill="#5b8db8" opacity="0.1" stroke="#5b8db8"/><text x="350" y="166" text-anchor="middle" fill="#5b8db8" font-weight="700" font-size="11" font-family="Manrope,sans-serif">LOIS</text><text x="350" y="180" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Votées par le Parlement</text><rect x="185" y="204" width="330" height="42" rx="8" fill="#e8b74f" opacity="0.12" stroke="#e8b74f"/><text x="350" y="224" text-anchor="middle" fill="#9a6c2a" font-weight="700" font-size="11" font-family="Manrope,sans-serif">RÈGLEMENTS</text><text x="350" y="238" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Décrets · Arrêtés (pouvoir exécutif)</text><rect x="150" y="262" width="400" height="42" rx="8" fill="#87a99b" opacity="0.12" stroke="#87a99b"/><text x="350" y="282" text-anchor="middle" fill="#477565" font-weight="700" font-size="11" font-family="Manrope,sans-serif">CONVENTIONS COLLECTIVES · CONTRATS</text><text x="350" y="296" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Accords entre parties · Usages</text><text x="630" y="170" fill="#ef6a5b" font-weight="700" font-size="10" font-family="DM Sans,sans-serif">↑</text><text x="600" y="190" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Force</text><text x="595" y="205" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">décroissante</text><text x="350" y="340" text-anchor="middle" fill="#65747b" font-size="10" font-style="italic" font-family="DM Sans,sans-serif">Toute norme inférieure doit respecter les normes supérieures</text></svg></div>`,

    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>L’organisation judiciaire</b></div><svg viewBox="0 0 700 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Organisation des juridictions françaises"><rect x="245" y="5" width="210" height="50" rx="10" fill="#132b38"/><text x="350" y="28" text-anchor="middle" fill="#fff" font-weight="800" font-size="13" font-family="Manrope,sans-serif">COUR DE CASSATION</text><text x="350" y="45" text-anchor="middle" fill="#b4c2c6" font-size="10" font-family="DM Sans,sans-serif">Contrôle du droit (pas les faits)</text><line x1="280" y1="55" x2="180" y2="95" stroke="#dfe2dc" stroke-width="2"/><line x1="420" y1="55" x2="520" y2="95" stroke="#dfe2dc" stroke-width="2"/><rect x="65" y="95" width="225" height="45" rx="9" fill="#ef6a5b" opacity="0.1" stroke="#ef6a5b"/><text x="177" y="118" text-anchor="middle" fill="#ef6a5b" font-weight="700" font-size="12" font-family="Manrope,sans-serif">ORDRE JUDICIAIRE</text><text x="177" y="133" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Litiges entre personnes</text><rect x="410" y="95" width="225" height="45" rx="9" fill="#5b8db8" opacity="0.1" stroke="#5b8db8"/><text x="522" y="118" text-anchor="middle" fill="#5b8db8" font-weight="700" font-size="12" font-family="Manrope,sans-serif">ORDRE ADMINISTRATIF</text><text x="522" y="133" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Litiges avec l’administration</text><line x1="177" y1="140" x2="177" y2="170" stroke="#dfe2dc" stroke-width="1.5"/><rect x="80" y="170" width="195" height="40" rx="8" fill="#fff" stroke="#dfe2dc"/><text x="177" y="195" text-anchor="middle" fill="#132b38" font-weight="700" font-size="11" font-family="Manrope,sans-serif">COUR D’APPEL</text><text x="300" y="194" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">← 2ᵉ degré</text><line x1="120" y1="210" x2="120" y2="240" stroke="#dfe2dc" stroke-width="1.5"/><line x1="230" y1="210" x2="230" y2="240" stroke="#dfe2dc" stroke-width="1.5"/><rect x="25" y="240" width="190" height="40" rx="8" fill="#f2f5f2" stroke="#dfe2dc"/><text x="120" y="265" text-anchor="middle" fill="#132b38" font-weight="700" font-size="10" font-family="Manrope,sans-serif">TRIBUNAL JUDICIAIRE</text><rect x="230" y="240" width="100" height="40" rx="8" fill="#f2f5f2" stroke="#dfe2dc"/><text x="280" y="265" text-anchor="middle" fill="#132b38" font-weight="700" font-size="10" font-family="Manrope,sans-serif">PRUD’HOMMES</text><text x="300" y="295" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">← 1ᵉʳ degré</text><line x1="522" y1="140" x2="522" y2="170" stroke="#dfe2dc" stroke-width="1.5"/><rect x="425" y="170" width="195" height="40" rx="8" fill="#fff" stroke="#dfe2dc"/><text x="522" y="195" text-anchor="middle" fill="#132b38" font-weight="700" font-size="11" font-family="Manrope,sans-serif">COUR ADM. D’APPEL</text><line x1="522" y1="210" x2="522" y2="240" stroke="#dfe2dc" stroke-width="1.5"/><rect x="425" y="240" width="195" height="40" rx="8" fill="#f2f5f2" stroke="#dfe2dc"/><text x="522" y="265" text-anchor="middle" fill="#132b38" font-weight="700" font-size="10" font-family="Manrope,sans-serif">TRIBUNAL ADMINISTRATIF</text><rect x="170" y="310" width="360" height="25" rx="6" fill="#fff7e7" stroke="#e8b74f"/><text x="350" y="327" text-anchor="middle" fill="#9a6c2a" font-size="10" font-family="DM Sans,sans-serif">MODES ALTERNATIFS : médiation · conciliation · arbitrage</text></svg></div>`,

    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>Personnalité juridique et capacité</b></div><svg viewBox="0 0 700 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Personnalité juridique personne physique et morale"><rect x="200" y="10" width="300" height="50" rx="12" fill="#132b38"/><text x="350" y="35" text-anchor="middle" fill="#fff" font-weight="800" font-size="14" font-family="Manrope,sans-serif">PERSONNALITÉ JURIDIQUE</text><text x="350" y="52" text-anchor="middle" fill="#b4c2c6" font-size="10" font-family="DM Sans,sans-serif">Aptitude à avoir des droits et obligations</text><line x1="250" y1="60" x2="175" y2="90" stroke="#dfe2dc" stroke-width="2"/><line x1="450" y1="60" x2="525" y2="90" stroke="#dfe2dc" stroke-width="2"/><rect x="40" y="90" width="270" height="95" rx="11" fill="#ef6a5b" opacity="0.08" stroke="#ef6a5b" stroke-width="1.5"/><text x="175" y="115" text-anchor="middle" fill="#ef6a5b" font-weight="800" font-size="13" font-family="Manrope,sans-serif">PERSONNE PHYSIQUE</text><text x="175" y="135" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Naissance → Décès</text><text x="175" y="152" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Vivant et viable</text><text x="175" y="172" text-anchor="middle" fill="#485c64" font-size="10" font-family="DM Sans,sans-serif">Mineur = capacité limitée → représentant</text><rect x="390" y="90" width="270" height="95" rx="11" fill="#5b8db8" opacity="0.08" stroke="#5b8db8" stroke-width="1.5"/><text x="525" y="115" text-anchor="middle" fill="#5b8db8" font-weight="800" font-size="13" font-family="Manrope,sans-serif">PERSONNE MORALE</text><text x="525" y="135" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Immatriculation → Dissolution</text><text x="525" y="152" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Société, association, etc.</text><text x="525" y="172" text-anchor="middle" fill="#485c64" font-size="10" font-family="DM Sans,sans-serif">Patrimoine distinct des membres</text><rect x="130" y="210" width="200" height="40" rx="8" fill="#fff" stroke="#dfe2dc"/><text x="230" y="235" text-anchor="middle" fill="#132b38" font-weight="700" font-size="11" font-family="Manrope,sans-serif">Capacité de jouissance</text><text x="230" y="260" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Avoir un droit</text><rect x="370" y="210" width="200" height="40" rx="8" fill="#fff" stroke="#dfe2dc"/><text x="470" y="235" text-anchor="middle" fill="#132b38" font-weight="700" font-size="11" font-family="Manrope,sans-serif">Capacité d’exercice</text><text x="470" y="260" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Exercer soi-même ce droit</text></svg></div>`,

    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>Droits patrimoniaux et extrapatrimoniaux</b></div><svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Droits patrimoniaux versus extrapatrimoniaux"><rect x="30" y="10" width="300" height="230" rx="12" fill="#e8b74f" opacity="0.08" stroke="#e8b74f" stroke-width="1.5"/><text x="180" y="40" text-anchor="middle" fill="#9a6c2a" font-weight="800" font-size="14" font-family="Manrope,sans-serif">DROITS PATRIMONIAUX</text><text x="180" y="60" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Valeur pécuniaire</text><g fill="#485c64" font-size="11" font-family="DM Sans,sans-serif"><text x="55" y="90">• Cessibles (on peut les vendre)</text><text x="55" y="112">• Transmissibles (héritage)</text><text x="55" y="134">• Saisissables (par les créanciers)</text><text x="55" y="156">• Prescriptibles</text></g><rect x="55" y="175" width="250" height="48" rx="8" fill="#fff" stroke="#dfe2dc"/><text x="180" y="196" text-anchor="middle" fill="#132b38" font-weight="700" font-size="11" font-family="Manrope,sans-serif">Exemples</text><text x="180" y="214" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Propriété · Créances · Brevets</text><rect x="370" y="10" width="300" height="230" rx="12" fill="#5b8db8" opacity="0.08" stroke="#5b8db8" stroke-width="1.5"/><text x="520" y="40" text-anchor="middle" fill="#5b8db8" font-weight="800" font-size="14" font-family="Manrope,sans-serif">DROITS EXTRAPATRIMONIAUX</text><text x="520" y="60" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Attachés à la personne</text><g fill="#485c64" font-size="11" font-family="DM Sans,sans-serif"><text x="395" y="90">• Incessibles (on ne peut les vendre)</text><text x="395" y="112">• Intransmissibles</text><text x="395" y="134">• Insaisissables</text><text x="395" y="156">• Imprescriptibles</text></g><rect x="395" y="175" width="250" height="48" rx="8" fill="#fff" stroke="#dfe2dc"/><text x="520" y="196" text-anchor="middle" fill="#132b38" font-weight="700" font-size="11" font-family="Manrope,sans-serif">Exemples</text><text x="520" y="214" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Vie privée · Image · Données perso.</text></svg></div>`,

    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>Les conditions de validité du contrat</b></div><svg viewBox="0 0 700 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Trois conditions de validité du contrat et sanctions"><rect x="200" y="10" width="300" height="46" rx="10" fill="#132b38"/><text x="350" y="38" text-anchor="middle" fill="#fff" font-weight="800" font-size="14" font-family="Manrope,sans-serif">CONTRAT VALABLE</text><line x1="225" y1="56" x2="120" y2="86" stroke="#dfe2dc" stroke-width="2"/><line x1="350" y1="56" x2="350" y2="86" stroke="#dfe2dc" stroke-width="2"/><line x1="475" y1="56" x2="580" y2="86" stroke="#dfe2dc" stroke-width="2"/><rect x="20" y="86" width="200" height="90" rx="10" fill="#ef6a5b" opacity="0.1" stroke="#ef6a5b" stroke-width="1.5"/><text x="120" y="112" text-anchor="middle" fill="#ef6a5b" font-weight="800" font-size="12" font-family="Manrope,sans-serif">CONSENTEMENT</text><text x="120" y="132" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Libre et éclairé</text><text x="120" y="150" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Vices : erreur, dol, violence</text><text x="120" y="166" text-anchor="middle" fill="#ef6a5b" font-size="9" font-family="DM Sans,sans-serif">→ Nullité relative</text><rect x="250" y="86" width="200" height="90" rx="10" fill="#5b8db8" opacity="0.1" stroke="#5b8db8" stroke-width="1.5"/><text x="350" y="112" text-anchor="middle" fill="#5b8db8" font-weight="800" font-size="12" font-family="Manrope,sans-serif">CAPACITÉ</text><text x="350" y="132" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Aptitude à contracter</text><text x="350" y="150" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Mineur, majeur protégé</text><text x="350" y="166" text-anchor="middle" fill="#5b8db8" font-size="9" font-family="DM Sans,sans-serif">→ Nullité relative</text><rect x="480" y="86" width="200" height="90" rx="10" fill="#e8b74f" opacity="0.12" stroke="#e8b74f" stroke-width="1.5"/><text x="580" y="112" text-anchor="middle" fill="#9a6c2a" font-weight="800" font-size="12" font-family="Manrope,sans-serif">CONTENU</text><text x="580" y="132" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Licite et certain</text><text x="580" y="150" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Contrepartie non dérisoire</text><text x="580" y="166" text-anchor="middle" fill="#9a6c2a" font-size="9" font-family="DM Sans,sans-serif">→ Nullité absolue</text><rect x="100" y="200" width="500" height="60" rx="10" fill="#f2f5f2" stroke="#dfe2dc"/><text x="350" y="225" text-anchor="middle" fill="#132b38" font-weight="800" font-size="12" font-family="Manrope,sans-serif">En cas d’inexécution</text><text x="350" y="245" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Exception d’inexécution · Exécution forcée · Réduction de prix · Résolution · Dommages-intérêts</text></svg></div>`,

    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>Les conditions de la responsabilité civile</b></div><svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle de la responsabilité civile"><text x="350" y="25" text-anchor="middle" fill="#132b38" font-weight="800" font-size="14" font-family="Manrope,sans-serif">3 conditions cumulatives = RÉPARATION</text><polygon points="350,60 560,260 140,260" fill="none" stroke="#dfe2dc" stroke-width="1.5"/><circle cx="350" cy="70" r="35" fill="#ef6a5b" opacity="0.12" stroke="#ef6a5b" stroke-width="2"/><text x="350" y="66" text-anchor="middle" fill="#ef6a5b" font-weight="800" font-size="11" font-family="Manrope,sans-serif">DOMMAGE</text><text x="350" y="80" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Certain, personnel</text><circle cx="160" cy="250" r="35" fill="#5b8db8" opacity="0.12" stroke="#5b8db8" stroke-width="2"/><text x="160" y="246" text-anchor="middle" fill="#5b8db8" font-weight="800" font-size="10" font-family="Manrope,sans-serif">FAIT</text><text x="160" y="260" text-anchor="middle" fill="#5b8db8" font-weight="700" font-size="9" font-family="DM Sans,sans-serif">GÉNÉRATEUR</text><circle cx="540" cy="250" r="35" fill="#e8b74f" opacity="0.15" stroke="#e8b74f" stroke-width="2"/><text x="540" y="246" text-anchor="middle" fill="#9a6c2a" font-weight="800" font-size="10" font-family="Manrope,sans-serif">LIEN DE</text><text x="540" y="260" text-anchor="middle" fill="#9a6c2a" font-weight="700" font-size="9" font-family="Manrope,sans-serif">CAUSALITÉ</text><rect x="30" y="170" width="130" height="50" rx="8" fill="#fff" stroke="#dfe2dc"/><text x="95" y="190" text-anchor="middle" fill="#132b38" font-weight="700" font-size="10" font-family="Manrope,sans-serif">Faute</text><text x="95" y="208" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Art. 1240-1241</text><rect x="10" y="110" width="130" height="50" rx="8" fill="#fff" stroke="#dfe2dc"/><text x="75" y="130" text-anchor="middle" fill="#132b38" font-weight="700" font-size="10" font-family="Manrope,sans-serif">Fait des choses</text><text x="75" y="148" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Gardien présumé resp.</text><rect x="560" y="140" width="130" height="50" rx="8" fill="#fff" stroke="#dfe2dc"/><text x="625" y="160" text-anchor="middle" fill="#132b38" font-weight="700" font-size="10" font-family="Manrope,sans-serif">Fait d’autrui</text><text x="625" y="178" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Parents, employeur</text><rect x="220" y="275" width="260" height="22" rx="6" fill="#f2f5f2"/><text x="350" y="291" text-anchor="middle" fill="#477565" font-size="9" font-family="DM Sans,sans-serif">Exonération : force majeure · faute victime · fait tiers</text></svg></div>`,

    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>CDI et CDD : les deux formes du contrat de travail</b></div><svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparaison CDI et CDD"><rect x="30" y="10" width="300" height="195" rx="12" fill="#132b38" opacity="0.04" stroke="#132b38" stroke-width="1.5"/><text x="180" y="38" text-anchor="middle" fill="#132b38" font-weight="800" font-size="15" font-family="Manrope,sans-serif">CDI</text><text x="180" y="55" text-anchor="middle" fill="#477565" font-weight="700" font-size="10" font-family="DM Sans,sans-serif">Forme normale</text><g fill="#485c64" font-size="11" font-family="DM Sans,sans-serif"><text x="55" y="80">• Durée indéterminée</text><text x="55" y="100">• Pas de motif obligatoire</text><text x="55" y="120">• Rupture : démission, licenciement</text><text x="55" y="140">  ou rupture conventionnelle</text><text x="55" y="165">• Période d’essai encadrée</text><text x="55" y="190">• Pleine protection sociale</text></g><rect x="370" y="10" width="300" height="195" rx="12" fill="#ef6a5b" opacity="0.06" stroke="#ef6a5b" stroke-width="1.5"/><text x="520" y="38" text-anchor="middle" fill="#ef6a5b" font-weight="800" font-size="15" font-family="Manrope,sans-serif">CDD</text><text x="520" y="55" text-anchor="middle" fill="#ef6a5b" font-weight="700" font-size="10" font-family="DM Sans,sans-serif">Exception — motif obligatoire</text><g fill="#485c64" font-size="11" font-family="DM Sans,sans-serif"><text x="395" y="80">• Durée limitée (18 mois max gén.)</text><text x="395" y="100">• Motif : remplacement, surcroît…</text><text x="395" y="120">• Formalisme strict (écrit, motif)</text><text x="395" y="140">• Indemnité de précarité (10 %)</text><text x="395" y="165">• Renouvellement limité</text><text x="395" y="190">• Requalification possible en CDI</text></g></svg></div>`,

    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>Choisir son cadre juridique pour entreprendre</b></div><svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparaison entreprise individuelle et société"><rect x="200" y="5" width="300" height="40" rx="10" fill="#132b38"/><text x="350" y="30" text-anchor="middle" fill="#fff" font-weight="800" font-size="13" font-family="Manrope,sans-serif">CHOIX DU STATUT JURIDIQUE</text><line x1="250" y1="45" x2="170" y2="72" stroke="#dfe2dc" stroke-width="2"/><line x1="450" y1="45" x2="530" y2="72" stroke="#dfe2dc" stroke-width="2"/><rect x="20" y="72" width="300" height="110" rx="11" fill="#e8b74f" opacity="0.1" stroke="#e8b74f" stroke-width="1.5"/><text x="170" y="97" text-anchor="middle" fill="#9a6c2a" font-weight="800" font-size="13" font-family="Manrope,sans-serif">ENTREPRISE INDIVIDUELLE</text><g fill="#485c64" font-size="11" font-family="DM Sans,sans-serif"><text x="45" y="118">• Un seul exploitant</text><text x="45" y="138">• Création simple</text><text x="45" y="158">• Patrimoine personnel protégé (2022)</text><text x="45" y="178" fill="#65747b">→ Adapté aux petits projets</text></g><rect x="380" y="72" width="300" height="110" rx="11" fill="#5b8db8" opacity="0.08" stroke="#5b8db8" stroke-width="1.5"/><text x="530" y="97" text-anchor="middle" fill="#5b8db8" font-weight="800" font-size="13" font-family="Manrope,sans-serif">SOCIÉTÉ (SARL, SAS, SA)</text><g fill="#485c64" font-size="11" font-family="DM Sans,sans-serif"><text x="405" y="118">• Personne morale distincte</text><text x="405" y="138">• Responsabilité limitée aux apports</text><text x="405" y="158">• Immatriculation obligatoire</text><text x="405" y="178" fill="#65747b">→ Adapté aux projets ambitieux</text></g><rect x="100" y="205" width="500" height="45" rx="9" fill="#f2f5f2" stroke="#dfe2dc"/><text x="350" y="226" text-anchor="middle" fill="#132b38" font-weight="700" font-size="11" font-family="Manrope,sans-serif">Procédures collectives</text><text x="350" y="243" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Sauvegarde → Redressement judiciaire → Liquidation judiciaire</text></svg></div>`,
  ],
  economie: [
    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>Le circuit économique simplifié</b></div><svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circuit économique avec 5 agents"><defs><marker id="ahe" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto"><path d="M0,0 L7,2.5 L0,5" fill="#5b8db8"/></marker></defs><rect x="250" y="140" width="200" height="70" rx="13" fill="#132b38"/><text x="350" y="172" text-anchor="middle" fill="#fff" font-weight="800" font-size="14" font-family="Manrope,sans-serif">ENTREPRISES</text><text x="350" y="192" text-anchor="middle" fill="#b4c2c6" font-size="10" font-family="DM Sans,sans-serif">Production marchande</text><rect x="20" y="5" width="160" height="55" rx="10" fill="#ef6a5b" opacity="0.1" stroke="#ef6a5b"/><text x="100" y="30" text-anchor="middle" fill="#ef6a5b" font-weight="700" font-size="12" font-family="Manrope,sans-serif">MÉNAGES</text><text x="100" y="48" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Consommation · Travail</text><rect x="520" y="5" width="160" height="55" rx="10" fill="#e8b74f" opacity="0.12" stroke="#e8b74f"/><text x="600" y="30" text-anchor="middle" fill="#9a6c2a" font-weight="700" font-size="12" font-family="Manrope,sans-serif">ÉTAT</text><text x="600" y="48" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Services non marchands</text><rect x="20" y="300" width="160" height="55" rx="10" fill="#5b8db8" opacity="0.1" stroke="#5b8db8"/><text x="100" y="325" text-anchor="middle" fill="#5b8db8" font-weight="700" font-size="12" font-family="Manrope,sans-serif">BANQUES</text><text x="100" y="343" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Épargne · Crédit</text><rect x="520" y="300" width="160" height="55" rx="10" fill="#87a99b" opacity="0.15" stroke="#87a99b"/><text x="600" y="325" text-anchor="middle" fill="#477565" font-weight="700" font-size="12" font-family="Manrope,sans-serif">RESTE DU MONDE</text><text x="600" y="343" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Import · Export</text><line x1="170" y1="45" x2="250" y2="148" stroke="#5b8db8" stroke-width="1.5" marker-end="url(#ahe)"/><text x="190" y="85" fill="#5b8db8" font-size="9" font-family="DM Sans,sans-serif">Travail</text><line x1="250" y1="155" x2="170" y2="50" stroke="#ef6a5b" stroke-width="1.5" stroke-dasharray="4 3"/><text x="185" y="115" fill="#ef6a5b" font-size="9" font-family="DM Sans,sans-serif">Salaires</text><line x1="450" y1="150" x2="525" y2="50" stroke="#5b8db8" stroke-width="1.5" marker-end="url(#ahe)"/><text x="500" y="85" fill="#5b8db8" font-size="9" font-family="DM Sans,sans-serif">Impôts</text><line x1="525" y1="55" x2="450" y2="155" stroke="#e8b74f" stroke-width="1.5" stroke-dasharray="4 3"/><text x="475" y="120" fill="#9a6c2a" font-size="9" font-family="DM Sans,sans-serif">Subventions</text><line x1="170" y1="310" x2="255" y2="210" stroke="#5b8db8" stroke-width="1.5" marker-end="url(#ahe)"/><text x="195" y="270" fill="#5b8db8" font-size="9" font-family="DM Sans,sans-serif">Crédits</text><line x1="450" y1="205" x2="530" y2="305" stroke="#5b8db8" stroke-width="1.5" marker-end="url(#ahe)"/><text x="500" y="265" fill="#5b8db8" font-size="9" font-family="DM Sans,sans-serif">Exportations</text><text x="350" y="375" text-anchor="middle" fill="#65747b" font-size="10" font-style="italic" font-family="DM Sans,sans-serif">Flux réels (biens, travail) et flux monétaires (salaires, prix, impôts)</text></svg></div>`,

    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>Du chiffre d’affaires à la valeur ajoutée</b></div><svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Décomposition de la valeur ajoutée"><rect x="50" y="30" width="260" height="80" rx="12" fill="#5b8db8" opacity="0.12" stroke="#5b8db8" stroke-width="1.5"/><text x="180" y="58" text-anchor="middle" fill="#5b8db8" font-weight="800" font-size="14" font-family="Manrope,sans-serif">PRODUCTION</text><text x="180" y="78" text-anchor="middle" fill="#65747b" font-size="11" font-family="DM Sans,sans-serif">Chiffre d’affaires</text><text x="180" y="96" text-anchor="middle" fill="#5b8db8" font-weight="700" font-size="13" font-family="Manrope,sans-serif">200 000 €</text><text x="340" y="75" text-anchor="middle" fill="#132b38" font-weight="800" font-size="22" font-family="Manrope,sans-serif">−</text><rect x="370" y="30" width="180" height="80" rx="12" fill="#ef6a5b" opacity="0.1" stroke="#ef6a5b" stroke-width="1.5"/><text x="460" y="55" text-anchor="middle" fill="#ef6a5b" font-weight="800" font-size="13" font-family="Manrope,sans-serif">CONSOMMATIONS</text><text x="460" y="72" text-anchor="middle" fill="#ef6a5b" font-weight="700" font-size="12" font-family="Manrope,sans-serif">INTERMÉDIAIRES</text><text x="460" y="96" text-anchor="middle" fill="#ef6a5b" font-weight="700" font-size="13" font-family="Manrope,sans-serif">80 000 €</text><text x="580" y="75" text-anchor="middle" fill="#132b38" font-weight="800" font-size="22" font-family="Manrope,sans-serif">=</text><rect x="600" y="25" width="90" height="90" rx="12" fill="#132b38"/><text x="645" y="60" text-anchor="middle" fill="#fff" font-weight="800" font-size="11" font-family="Manrope,sans-serif">VALEUR</text><text x="645" y="76" text-anchor="middle" fill="#fff" font-weight="800" font-size="11" font-family="Manrope,sans-serif">AJOUTÉE</text><text x="645" y="100" text-anchor="middle" fill="#e8b74f" font-weight="800" font-size="14" font-family="Manrope,sans-serif">120 000 €</text><text x="350" y="150" text-anchor="middle" fill="#132b38" font-weight="800" font-size="12" font-family="Manrope,sans-serif">Répartition de la VA</text><rect x="50" y="165" width="120" height="40" rx="7" fill="#f2f5f2" stroke="#dfe2dc"/><text x="110" y="190" text-anchor="middle" fill="#132b38" font-weight="700" font-size="10" font-family="Manrope,sans-serif">Salariés</text><rect x="190" y="165" width="120" height="40" rx="7" fill="#f2f5f2" stroke="#dfe2dc"/><text x="250" y="190" text-anchor="middle" fill="#132b38" font-weight="700" font-size="10" font-family="Manrope,sans-serif">État (impôts)</text><rect x="330" y="165" width="120" height="40" rx="7" fill="#f2f5f2" stroke="#dfe2dc"/><text x="390" y="190" text-anchor="middle" fill="#132b38" font-weight="700" font-size="10" font-family="Manrope,sans-serif">Prêteurs</text><rect x="470" y="165" width="180" height="40" rx="7" fill="#fff7e7" stroke="#e8b74f"/><text x="560" y="190" text-anchor="middle" fill="#9a6c2a" font-weight="700" font-size="10" font-family="Manrope,sans-serif">Entreprise (autofinancement)</text></svg></div>`,

    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>Formation du revenu disponible</b></div><svg viewBox="0 0 700 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Calcul du revenu disponible"><defs><marker id="ahrd" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto"><path d="M0,0 L7,2.5 L0,5" fill="#132b38"/></marker></defs><rect x="20" y="50" width="140" height="80" rx="10" fill="#5b8db8" opacity="0.1" stroke="#5b8db8" stroke-width="1.5"/><text x="90" y="78" text-anchor="middle" fill="#5b8db8" font-weight="800" font-size="12" font-family="Manrope,sans-serif">REVENUS</text><text x="90" y="94" text-anchor="middle" fill="#5b8db8" font-weight="700" font-size="11" font-family="Manrope,sans-serif">PRIMAIRES</text><text x="90" y="116" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Salaires, revenus</text><text x="90" y="128" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">du patrimoine, mixtes</text><line x1="162" y1="90" x2="190" y2="90" stroke="#132b38" stroke-width="2" marker-end="url(#ahrd)"/><text x="215" y="78" text-anchor="middle" fill="#477565" font-weight="800" font-size="18" font-family="Manrope,sans-serif">+</text><rect x="240" y="50" width="120" height="80" rx="10" fill="#87a99b" opacity="0.15" stroke="#87a99b" stroke-width="1.5"/><text x="300" y="78" text-anchor="middle" fill="#477565" font-weight="800" font-size="11" font-family="Manrope,sans-serif">PRESTATIONS</text><text x="300" y="94" text-anchor="middle" fill="#477565" font-weight="700" font-size="11" font-family="Manrope,sans-serif">SOCIALES</text><text x="300" y="116" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Allocations,</text><text x="300" y="128" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">pensions, aides</text><text x="385" y="78" text-anchor="middle" fill="#ef6a5b" font-weight="800" font-size="18" font-family="Manrope,sans-serif">−</text><rect x="410" y="50" width="120" height="80" rx="10" fill="#ef6a5b" opacity="0.1" stroke="#ef6a5b" stroke-width="1.5"/><text x="470" y="78" text-anchor="middle" fill="#ef6a5b" font-weight="800" font-size="11" font-family="Manrope,sans-serif">PRÉLÈVEMENTS</text><text x="470" y="94" text-anchor="middle" fill="#ef6a5b" font-weight="700" font-size="11" font-family="Manrope,sans-serif">OBLIGATOIRES</text><text x="470" y="116" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Impôts, cotisations,</text><text x="470" y="128" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">CSG</text><text x="555" y="78" text-anchor="middle" fill="#132b38" font-weight="800" font-size="18" font-family="Manrope,sans-serif">=</text><rect x="575" y="40" width="110" height="100" rx="12" fill="#132b38"/><text x="630" y="74" text-anchor="middle" fill="#fff" font-weight="800" font-size="11" font-family="Manrope,sans-serif">REVENU</text><text x="630" y="92" text-anchor="middle" fill="#fff" font-weight="800" font-size="11" font-family="Manrope,sans-serif">DISPONIBLE</text><text x="630" y="120" text-anchor="middle" fill="#e8b74f" font-size="10" font-family="DM Sans,sans-serif">Consommation</text><text x="630" y="134" text-anchor="middle" fill="#e8b74f" font-size="10" font-family="DM Sans,sans-serif">ou Épargne</text><text x="350" y="185" text-anchor="middle" fill="#65747b" font-size="10" font-style="italic" font-family="DM Sans,sans-serif">Pouvoir d’achat = revenu disponible corrigé de l’inflation (IPC)</text></svg></div>`,

    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>Les modes de financement</b></div><svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Arbre des modes de financement"><rect x="250" y="10" width="200" height="44" rx="10" fill="#132b38"/><text x="350" y="38" text-anchor="middle" fill="#fff" font-weight="800" font-size="13" font-family="Manrope,sans-serif">FINANCEMENT</text><line x1="280" y1="54" x2="150" y2="85" stroke="#dfe2dc" stroke-width="2"/><line x1="420" y1="54" x2="530" y2="85" stroke="#dfe2dc" stroke-width="2"/><rect x="50" y="85" width="200" height="40" rx="9" fill="#e8b74f" opacity="0.12" stroke="#e8b74f"/><text x="150" y="110" text-anchor="middle" fill="#9a6c2a" font-weight="800" font-size="12" font-family="Manrope,sans-serif">INTERNE</text><rect x="430" y="85" width="200" height="40" rx="9" fill="#5b8db8" opacity="0.1" stroke="#5b8db8"/><text x="530" y="110" text-anchor="middle" fill="#5b8db8" font-weight="800" font-size="12" font-family="Manrope,sans-serif">EXTERNE</text><line x1="150" y1="125" x2="150" y2="155" stroke="#dfe2dc" stroke-width="1.5"/><rect x="60" y="155" width="180" height="50" rx="8" fill="#fff7e7" stroke="#e8b74f"/><text x="150" y="178" text-anchor="middle" fill="#9a6c2a" font-weight="700" font-size="11" font-family="Manrope,sans-serif">Autofinancement</text><text x="150" y="196" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Bénéfices non distribués</text><line x1="460" y1="125" x2="380" y2="155" stroke="#dfe2dc" stroke-width="1.5"/><line x1="600" y1="125" x2="600" y2="155" stroke="#dfe2dc" stroke-width="1.5"/><rect x="300" y="155" width="160" height="50" rx="8" fill="#5b8db8" opacity="0.08" stroke="#5b8db8"/><text x="380" y="175" text-anchor="middle" fill="#5b8db8" font-weight="700" font-size="11" font-family="Manrope,sans-serif">Indirect (banque)</text><text x="380" y="193" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Crédit bancaire</text><rect x="510" y="155" width="170" height="50" rx="8" fill="#ef6a5b" opacity="0.08" stroke="#ef6a5b"/><text x="595" y="175" text-anchor="middle" fill="#ef6a5b" font-weight="700" font-size="11" font-family="Manrope,sans-serif">Direct (marché)</text><text x="595" y="193" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Actions · Obligations</text><rect x="100" y="230" width="500" height="50" rx="9" fill="#f2f5f2" stroke="#dfe2dc"/><text x="350" y="252" text-anchor="middle" fill="#132b38" font-weight="700" font-size="11" font-family="Manrope,sans-serif">3 critères de choix</text><text x="200" y="272" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Rendement</text><text x="350" y="272" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Risque</text><text x="500" y="272" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Liquidité</text></svg></div>`,

    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>L’équilibre offre / demande</b></div><svg viewBox="0 0 700 350" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Courbes offre et demande avec prix d’équilibre"><line x1="100" y1="30" x2="100" y2="290" stroke="#132b38" stroke-width="2"/><line x1="100" y1="290" x2="620" y2="290" stroke="#132b38" stroke-width="2"/><text x="60" y="160" text-anchor="middle" fill="#132b38" font-weight="700" font-size="12" font-family="Manrope,sans-serif" transform="rotate(-90 60 160)">Prix (P)</text><text x="360" y="320" text-anchor="middle" fill="#132b38" font-weight="700" font-size="12" font-family="Manrope,sans-serif">Quantité (Q)</text><path d="M120,60 Q350,140 580,270" fill="none" stroke="#5b8db8" stroke-width="2.5"/><text x="585" y="260" fill="#5b8db8" font-weight="800" font-size="13" font-family="Manrope,sans-serif">Offre</text><path d="M120,260 Q350,180 580,50" fill="none" stroke="#ef6a5b" stroke-width="2.5"/><text x="585" y="55" fill="#ef6a5b" font-weight="800" font-size="13" font-family="Manrope,sans-serif">Demande</text><circle cx="350" cy="165" r="6" fill="#132b38"/><line x1="100" y1="165" x2="345" y2="165" stroke="#132b38" stroke-width="1" stroke-dasharray="4 3"/><line x1="350" y1="165" x2="350" y2="290" stroke="#132b38" stroke-width="1" stroke-dasharray="4 3"/><text x="78" y="170" text-anchor="end" fill="#132b38" font-weight="700" font-size="11" font-family="DM Sans,sans-serif">P*</text><text x="350" y="308" text-anchor="middle" fill="#132b38" font-weight="700" font-size="11" font-family="DM Sans,sans-serif">Q*</text><rect x="365" y="142" width="180" height="44" rx="8" fill="#132b38"/><text x="455" y="161" text-anchor="middle" fill="#fff" font-weight="700" font-size="11" font-family="Manrope,sans-serif">Point d’équilibre</text><text x="455" y="178" text-anchor="middle" fill="#b4c2c6" font-size="9" font-family="DM Sans,sans-serif">Offre = Demande → P* et Q*</text><rect x="100" y="330" width="520" height="20" rx="5" fill="#f2f5f2"/><text x="350" y="345" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Défaillances : externalités · biens publics · asymétrie d’information · pouvoir de marché</text></svg></div>`,

    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>Les trois fonctions de l’État (Musgrave)</b></div><svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Trois fonctions économiques de l’État selon Musgrave"><rect x="30" y="10" width="200" height="200" rx="12" fill="#5b8db8" opacity="0.1" stroke="#5b8db8" stroke-width="1.5"/><text x="130" y="40" text-anchor="middle" fill="#5b8db8" font-weight="800" font-size="14" font-family="Manrope,sans-serif">ALLOCATION</text><rect x="55" y="55" width="150" height="28" rx="6" fill="#5b8db8" opacity="0.15"/><text x="130" y="74" text-anchor="middle" fill="#5b8db8" font-weight="700" font-size="10" font-family="DM Sans,sans-serif">Biens collectifs</text><g fill="#485c64" font-size="10" font-family="DM Sans,sans-serif"><text x="50" y="105">Produire / financer ce que</text><text x="50" y="120">le marché ne fournit pas</text><text x="50" y="142">• Éducation, justice</text><text x="50" y="160">• Infrastructure</text><text x="50" y="178">• Défense, éclairage</text><text x="50" y="200" fill="#5b8db8" font-weight="700">→ Corrige les défaillances</text></g><rect x="250" y="10" width="200" height="200" rx="12" fill="#ef6a5b" opacity="0.08" stroke="#ef6a5b" stroke-width="1.5"/><text x="350" y="40" text-anchor="middle" fill="#ef6a5b" font-weight="800" font-size="14" font-family="Manrope,sans-serif">REDISTRIBUTION</text><rect x="275" y="55" width="150" height="28" rx="6" fill="#ef6a5b" opacity="0.12"/><text x="350" y="74" text-anchor="middle" fill="#ef6a5b" font-weight="700" font-size="10" font-family="DM Sans,sans-serif">Justice sociale</text><g fill="#485c64" font-size="10" font-family="DM Sans,sans-serif"><text x="270" y="105">Réduire les inégalités</text><text x="270" y="120">de revenus</text><text x="270" y="142">• Impôt progressif</text><text x="270" y="160">• Prestations sociales</text><text x="270" y="178">• Minima sociaux</text><text x="270" y="200" fill="#ef6a5b" font-weight="700">→ Corrige les inégalités</text></g><rect x="470" y="10" width="200" height="200" rx="12" fill="#e8b74f" opacity="0.1" stroke="#e8b74f" stroke-width="1.5"/><text x="570" y="40" text-anchor="middle" fill="#9a6c2a" font-weight="800" font-size="14" font-family="Manrope,sans-serif">STABILISATION</text><rect x="495" y="55" width="150" height="28" rx="6" fill="#e8b74f" opacity="0.15"/><text x="570" y="74" text-anchor="middle" fill="#9a6c2a" font-weight="700" font-size="10" font-family="DM Sans,sans-serif">Conjoncture</text><g fill="#485c64" font-size="10" font-family="DM Sans,sans-serif"><text x="490" y="105">Atténuer les fluctuations</text><text x="490" y="120">(chômage, inflation)</text><text x="490" y="142">• Politique budgétaire</text><text x="490" y="160">• Politique monétaire</text><text x="490" y="178">• Politiques structurelles</text><text x="490" y="200" fill="#9a6c2a" font-weight="700">→ Lisse les cycles</text></g><rect x="100" y="225" width="500" height="30" rx="7" fill="#132b38"/><text x="350" y="245" text-anchor="middle" fill="#fff" font-weight="700" font-size="11" font-family="DM Sans,sans-serif">Financement : prélèvements obligatoires → budget → dette publique si déficit</text></svg></div>`,

    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>Chômage conjoncturel et structurel</b></div><svg viewBox="0 0 700 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparaison chômage conjoncturel et structurel"><rect x="30" y="10" width="300" height="170" rx="12" fill="#5b8db8" opacity="0.08" stroke="#5b8db8" stroke-width="1.5"/><text x="180" y="38" text-anchor="middle" fill="#5b8db8" font-weight="800" font-size="14" font-family="Manrope,sans-serif">CHÔMAGE CONJONCTUREL</text><g fill="#485c64" font-size="11" font-family="DM Sans,sans-serif"><text x="50" y="62">Lié au ralentissement de l’activité</text><text x="50" y="85">• Baisse de la demande</text><text x="50" y="105">• Temporaire / cyclique</text><text x="50" y="130" fill="#5b8db8" font-weight="700">Réponse :</text><text x="50" y="148">Politique de relance budgétaire</text><text x="50" y="166">ou monétaire (court terme)</text></g><rect x="370" y="10" width="300" height="170" rx="12" fill="#ef6a5b" opacity="0.06" stroke="#ef6a5b" stroke-width="1.5"/><text x="520" y="38" text-anchor="middle" fill="#ef6a5b" font-weight="800" font-size="14" font-family="Manrope,sans-serif">CHÔMAGE STRUCTUREL</text><g fill="#485c64" font-size="11" font-family="DM Sans,sans-serif"><text x="390" y="62">Lié aux structures du marché</text><text x="390" y="85">• Inadéquation compétences / emplois</text><text x="390" y="105">• Persistant même en croissance</text><text x="390" y="130" fill="#ef6a5b" font-weight="700">Réponse :</text><text x="390" y="148">Formation, flexibilité, réforme</text><text x="390" y="166">du marché du travail (long terme)</text></g><rect x="100" y="195" width="500" height="28" rx="7" fill="#f2f5f2" stroke="#dfe2dc"/><text x="350" y="214" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Politiques passives (indemnisation) + Politiques actives (formation, aides à l’embauche)</text></svg></div>`,

    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>Libre-échange et protectionnisme</b></div><svg viewBox="0 0 700 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Libre-échange versus protectionnisme"><rect x="30" y="10" width="300" height="185" rx="12" fill="#87a99b" opacity="0.12" stroke="#87a99b" stroke-width="1.5"/><text x="180" y="38" text-anchor="middle" fill="#477565" font-weight="800" font-size="14" font-family="Manrope,sans-serif">LIBRE-ÉCHANGE</text><g fill="#485c64" font-size="11" font-family="DM Sans,sans-serif"><text x="50" y="65">✓ Prix plus bas (concurrence)</text><text x="50" y="87">✓ Choix et variété pour le consommateur</text><text x="50" y="109">✓ Spécialisation (avantage comparatif)</text><text x="50" y="131">✓ Innovation par la concurrence</text><text x="50" y="160" fill="#ef6a5b">✗ Ajustements sectoriels douloureux</text><text x="50" y="182" fill="#ef6a5b">✗ Gains inégalement répartis</text></g><rect x="370" y="10" width="300" height="185" rx="12" fill="#ef6a5b" opacity="0.06" stroke="#ef6a5b" stroke-width="1.5"/><text x="520" y="38" text-anchor="middle" fill="#ef6a5b" font-weight="800" font-size="14" font-family="Manrope,sans-serif">PROTECTIONNISME</text><g fill="#485c64" font-size="11" font-family="DM Sans,sans-serif"><text x="390" y="65">✓ Protège l’emploi national</text><text x="390" y="87">✓ Industrie naissante</text><text x="390" y="109">✓ Souveraineté économique</text><text x="390" y="131">Instruments : droits de douane,</text><text x="390" y="148">quotas, normes, subventions</text><text x="390" y="175" fill="#ef6a5b">✗ Hausse des prix, représailles</text></g><rect x="180" y="210" width="340" height="32" rx="8" fill="#132b38"/><text x="350" y="231" text-anchor="middle" fill="#fff" font-weight="700" font-size="11" font-family="DM Sans,sans-serif">Ricardo : avantage comparatif → gains mutuels</text></svg></div>`,

    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>Les trois piliers du développement durable</b></div><svg viewBox="0 0 700 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Trois piliers du développement durable"><rect x="200" y="10" width="300" height="44" rx="10" fill="#132b38"/><text x="350" y="37" text-anchor="middle" fill="#fff" font-weight="800" font-size="13" font-family="Manrope,sans-serif">DÉVELOPPEMENT DURABLE</text><line x1="270" y1="54" x2="130" y2="84" stroke="#dfe2dc" stroke-width="2"/><line x1="350" y1="54" x2="350" y2="84" stroke="#dfe2dc" stroke-width="2"/><line x1="430" y1="54" x2="570" y2="84" stroke="#dfe2dc" stroke-width="2"/><rect x="20" y="84" width="220" height="140" rx="11" fill="#87a99b" opacity="0.12" stroke="#87a99b" stroke-width="1.5"/><text x="130" y="112" text-anchor="middle" fill="#477565" font-weight="800" font-size="13" font-family="Manrope,sans-serif">ENVIRONNEMENTAL</text><g fill="#485c64" font-size="10" font-family="DM Sans,sans-serif"><text x="40" y="135">Préserver les ressources</text><text x="40" y="152">et les écosystèmes</text><text x="40" y="175">• Taxe carbone</text><text x="40" y="192">• Normes d’émission</text><text x="40" y="209">• Quotas échangeables</text></g><rect x="250" y="84" width="200" height="140" rx="11" fill="#5b8db8" opacity="0.1" stroke="#5b8db8" stroke-width="1.5"/><text x="350" y="112" text-anchor="middle" fill="#5b8db8" font-weight="800" font-size="13" font-family="Manrope,sans-serif">ÉCONOMIQUE</text><g fill="#485c64" font-size="10" font-family="DM Sans,sans-serif"><text x="270" y="135">Croissance soutenable</text><text x="270" y="152">et innovation</text><text x="270" y="175">• Productivité / PIB réel</text><text x="270" y="192">• Innovation</text><text x="270" y="209">• IDH vs PIB</text></g><rect x="460" y="84" width="220" height="140" rx="11" fill="#ef6a5b" opacity="0.08" stroke="#ef6a5b" stroke-width="1.5"/><text x="570" y="112" text-anchor="middle" fill="#ef6a5b" font-weight="800" font-size="13" font-family="Manrope,sans-serif">SOCIAL</text><g fill="#485c64" font-size="10" font-family="DM Sans,sans-serif"><text x="480" y="135">Réduire les inégalités</text><text x="480" y="152">et améliorer le bien-être</text><text x="480" y="175">• Éducation, santé</text><text x="480" y="192">• Conditions de travail</text><text x="480" y="209">• Cohésion sociale</text></g><rect x="120" y="245" width="460" height="32" rx="8" fill="#fff7e7" stroke="#e8b74f"/><text x="350" y="266" text-anchor="middle" fill="#9a6c2a" font-weight="700" font-size="10" font-family="DM Sans,sans-serif">Internaliser les externalités : taxe · norme · quota · subvention → modifier les comportements</text></svg></div>`,
  ],
  sgn: [
    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>De l’individu à l’acteur</b></div><svg viewBox="0 0 700 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Progression de l’individu à l’acteur dans l’organisation"><defs><marker id="ahs" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#5b8db8"/></marker></defs><rect x="20" y="80" width="130" height="90" rx="11" fill="#ef6a5b" opacity="0.1" stroke="#ef6a5b" stroke-width="1.5"/><text x="85" y="110" text-anchor="middle" fill="#ef6a5b" font-weight="800" font-size="13" font-family="Manrope,sans-serif">INDIVIDU</text><text x="85" y="130" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Personnalité</text><text x="85" y="145" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Émotions</text><text x="85" y="160" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Perception</text><line x1="152" y1="125" x2="188" y2="125" stroke="#5b8db8" stroke-width="2" marker-end="url(#ahs)"/><rect x="190" y="70" width="140" height="110" rx="11" fill="#e8b74f" opacity="0.12" stroke="#e8b74f" stroke-width="1.5"/><text x="260" y="100" text-anchor="middle" fill="#9a6c2a" font-weight="800" font-size="13" font-family="Manrope,sans-serif">COMPÉTENCES</text><text x="260" y="120" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Connaissances</text><text x="260" y="135" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Savoir-faire</text><text x="260" y="150" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Savoir-être</text><text x="260" y="170" text-anchor="middle" fill="#9a6c2a" font-size="9" font-family="DM Sans,sans-serif">Individuelle + Collective</text><line x1="332" y1="125" x2="368" y2="125" stroke="#5b8db8" stroke-width="2" marker-end="url(#ahs)"/><rect x="370" y="70" width="140" height="110" rx="11" fill="#87a99b" opacity="0.15" stroke="#87a99b" stroke-width="1.5"/><text x="440" y="100" text-anchor="middle" fill="#477565" font-weight="800" font-size="13" font-family="Manrope,sans-serif">GROUPE</text><text x="440" y="120" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Normes</text><text x="440" y="135" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Rôles</text><text x="440" y="150" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Leadership</text><text x="440" y="170" text-anchor="middle" fill="#477565" font-size="9" font-family="DM Sans,sans-serif">Culture organisationnelle</text><line x1="512" y1="125" x2="548" y2="125" stroke="#5b8db8" stroke-width="2" marker-end="url(#ahs)"/><rect x="550" y="80" width="130" height="90" rx="11" fill="#132b38"/><text x="615" y="115" text-anchor="middle" fill="#fff" font-weight="800" font-size="14" font-family="Manrope,sans-serif">ACTEUR</text><text x="615" y="135" text-anchor="middle" fill="#b4c2c6" font-size="9" font-family="DM Sans,sans-serif">Interprète, adapte</text><text x="615" y="150" text-anchor="middle" fill="#b4c2c6" font-size="9" font-family="DM Sans,sans-serif">et fait évoluer</text><text x="615" y="165" text-anchor="middle" fill="#b4c2c6" font-size="9" font-family="DM Sans,sans-serif">les règles</text><path d="M615,170 Q615,230 85,230 Q50,230 50,170" fill="none" stroke="#ef6a5b" stroke-width="1" stroke-dasharray="4 3"/><text x="350" y="250" text-anchor="middle" fill="#ef6a5b" font-size="9" font-style="italic" font-family="DM Sans,sans-serif">L’acteur transforme aussi l’individu (boucle de rétroaction)</text></svg></div>`,

    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>De la donnée à la connaissance</b></div><svg viewBox="0 0 700 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Transformation donnée information connaissance et système d’information"><defs><marker id="ahsi" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#5b8db8"/></marker></defs><rect x="40" y="30" width="160" height="85" rx="11" fill="#f2f5f2" stroke="#dfe2dc" stroke-width="1.5"/><text x="120" y="58" text-anchor="middle" fill="#132b38" font-weight="800" font-size="14" font-family="Manrope,sans-serif">DONNÉE</text><text x="120" y="78" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Élément brut</text><text x="120" y="95" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Ex : « 150 »</text><line x1="202" y1="72" x2="248" y2="72" stroke="#5b8db8" stroke-width="2" marker-end="url(#ahsi)"/><text x="225" y="64" text-anchor="middle" fill="#5b8db8" font-size="8" font-family="DM Sans,sans-serif">Structurer</text><rect x="250" y="30" width="180" height="85" rx="11" fill="#5b8db8" opacity="0.1" stroke="#5b8db8" stroke-width="1.5"/><text x="340" y="58" text-anchor="middle" fill="#5b8db8" font-weight="800" font-size="14" font-family="Manrope,sans-serif">INFORMATION</text><text x="340" y="78" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Donnée contextualisée</text><text x="340" y="95" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Ex : « 150 ventes/jour »</text><line x1="432" y1="72" x2="478" y2="72" stroke="#5b8db8" stroke-width="2" marker-end="url(#ahsi)"/><text x="455" y="64" text-anchor="middle" fill="#5b8db8" font-size="8" font-family="DM Sans,sans-serif">S’approprier</text><rect x="480" y="30" width="180" height="85" rx="11" fill="#132b38"/><text x="570" y="58" text-anchor="middle" fill="#fff" font-weight="800" font-size="14" font-family="Manrope,sans-serif">CONNAISSANCE</text><text x="570" y="78" text-anchor="middle" fill="#b4c2c6" font-size="10" font-family="DM Sans,sans-serif">Capacité à agir</text><text x="570" y="95" text-anchor="middle" fill="#b4c2c6" font-size="10" font-family="DM Sans,sans-serif">Ex : « il faut réapprovisionner »</text><rect x="80" y="150" width="540" height="90" rx="12" fill="#e8b74f" opacity="0.08" stroke="#e8b74f" stroke-width="1.5"/><text x="350" y="177" text-anchor="middle" fill="#9a6c2a" font-weight="800" font-size="13" font-family="Manrope,sans-serif">SYSTÈME D’INFORMATION (SI)</text><rect x="110" y="195" width="120" height="30" rx="6" fill="#fff" stroke="#dfe2dc"/><text x="170" y="215" text-anchor="middle" fill="#132b38" font-weight="700" font-size="10" font-family="Manrope,sans-serif">Acteurs</text><rect x="250" y="195" width="120" height="30" rx="6" fill="#fff" stroke="#dfe2dc"/><text x="310" y="215" text-anchor="middle" fill="#132b38" font-weight="700" font-size="10" font-family="Manrope,sans-serif">Règles</text><rect x="390" y="195" width="120" height="30" rx="6" fill="#fff" stroke="#dfe2dc"/><text x="450" y="215" text-anchor="middle" fill="#132b38" font-weight="700" font-size="10" font-family="Manrope,sans-serif">Outils</text><text x="350" y="260" text-anchor="middle" fill="#65747b" font-size="10" font-style="italic" font-family="DM Sans,sans-serif">Le numérique facilite la collaboration mais exige des règles (traces, sécurité, surcharge)</text></svg></div>`,

    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>Les quatre formes de valeur et la performance</b></div><svg viewBox="0 0 700 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Quatre formes de valeur et mesure de la performance"><rect x="160" y="110" width="180" height="70" rx="12" fill="#132b38"/><text x="250" y="142" text-anchor="middle" fill="#fff" font-weight="800" font-size="13" font-family="Manrope,sans-serif">PERFORMANCE</text><text x="250" y="162" text-anchor="middle" fill="#b4c2c6" font-size="10" font-family="DM Sans,sans-serif">Multidimensionnelle</text><rect x="20" y="10" width="155" height="70" rx="10" fill="#5b8db8" opacity="0.1" stroke="#5b8db8" stroke-width="1.5"/><text x="97" y="35" text-anchor="middle" fill="#5b8db8" font-weight="800" font-size="12" font-family="Manrope,sans-serif">Valeur ajoutée</text><text x="97" y="55" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Production − CI</text><text x="97" y="70" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Richesse créée</text><line x1="160" y1="60" x2="175" y2="115" stroke="#5b8db8" stroke-width="1.5" stroke-dasharray="4 3"/><rect x="20" y="200" width="155" height="70" rx="10" fill="#e8b74f" opacity="0.12" stroke="#e8b74f" stroke-width="1.5"/><text x="97" y="225" text-anchor="middle" fill="#9a6c2a" font-weight="800" font-size="12" font-family="Manrope,sans-serif">Valeur financière</text><text x="97" y="245" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Rentabilité, cours</text><text x="97" y="260" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Actionnaires</text><line x1="160" y1="220" x2="175" y2="175" stroke="#e8b74f" stroke-width="1.5" stroke-dasharray="4 3"/><rect x="345" y="10" width="155" height="70" rx="10" fill="#ef6a5b" opacity="0.08" stroke="#ef6a5b" stroke-width="1.5"/><text x="422" y="35" text-anchor="middle" fill="#ef6a5b" font-weight="800" font-size="12" font-family="Manrope,sans-serif">Valeur perçue</text><text x="422" y="55" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Qualité, image, prix</text><text x="422" y="70" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Clients</text><line x1="345" y1="60" x2="330" y2="118" stroke="#ef6a5b" stroke-width="1.5" stroke-dasharray="4 3"/><rect x="345" y="200" width="155" height="70" rx="10" fill="#87a99b" opacity="0.15" stroke="#87a99b" stroke-width="1.5"/><text x="422" y="225" text-anchor="middle" fill="#477565" font-weight="800" font-size="12" font-family="Manrope,sans-serif">Valeur sociale</text><text x="422" y="245" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Conditions de travail</text><text x="422" y="260" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Salariés</text><line x1="345" y1="225" x2="328" y2="172" stroke="#87a99b" stroke-width="1.5" stroke-dasharray="4 3"/><rect x="530" y="80" width="150" height="55" rx="9" fill="#fff" stroke="#dfe2dc"/><text x="605" y="105" text-anchor="middle" fill="#132b38" font-weight="700" font-size="11" font-family="Manrope,sans-serif">EFFICACITÉ</text><text x="605" y="122" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Atteindre l’objectif</text><rect x="530" y="150" width="150" height="55" rx="9" fill="#fff" stroke="#dfe2dc"/><text x="605" y="175" text-anchor="middle" fill="#132b38" font-weight="700" font-size="11" font-family="Manrope,sans-serif">EFFICIENCE</text><text x="605" y="192" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Minimiser les ressources</text><text x="350" y="300" text-anchor="middle" fill="#65747b" font-size="10" font-style="italic" font-family="DM Sans,sans-serif">Le tableau de bord regroupe les indicateurs clés pour piloter la performance</text></svg></div>`,

    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>La matrice des risques</b></div><svg viewBox="0 0 700 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Matrice des risques probabilité gravité"><line x1="120" y1="30" x2="120" y2="270" stroke="#132b38" stroke-width="2"/><line x1="120" y1="270" x2="620" y2="270" stroke="#132b38" stroke-width="2"/><text x="60" y="155" text-anchor="middle" fill="#132b38" font-weight="700" font-size="12" font-family="Manrope,sans-serif" transform="rotate(-90 60 155)">PROBABILITÉ</text><text x="370" y="300" text-anchor="middle" fill="#132b38" font-weight="700" font-size="12" font-family="Manrope,sans-serif">GRAVITÉ</text><text x="90" y="58" text-anchor="end" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Forte</text><text x="90" y="160" text-anchor="end" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Moyenne</text><text x="90" y="265" text-anchor="end" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Faible</text><text x="200" y="288" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Faible</text><text x="370" y="288" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Moyenne</text><text x="560" y="288" text-anchor="end" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Forte</text><rect x="125" y="175" width="160" height="90" rx="10" fill="#87a99b" opacity="0.15"/><text x="205" y="220" text-anchor="middle" fill="#477565" font-weight="700" font-size="12" font-family="Manrope,sans-serif">ACCEPTABLE</text><text x="205" y="240" text-anchor="middle" fill="#477565" font-size="9" font-family="DM Sans,sans-serif">Surveiller</text><rect x="290" y="90" width="160" height="175" rx="10" fill="#e8b74f" opacity="0.15"/><rect x="125" y="35" width="160" height="135" rx="10" fill="#e8b74f" opacity="0.15"/><text x="370" y="180" text-anchor="middle" fill="#9a6c2a" font-weight="700" font-size="12" font-family="Manrope,sans-serif">MODÉRÉ</text><text x="370" y="200" text-anchor="middle" fill="#9a6c2a" font-size="9" font-family="DM Sans,sans-serif">Prévenir / Réduire</text><rect x="455" y="35" width="160" height="230" rx="10" fill="#ef6a5b" opacity="0.12"/><rect x="290" y="35" width="160" height="50" rx="10" fill="#ef6a5b" opacity="0.12"/><text x="535" y="150" text-anchor="middle" fill="#ef6a5b" font-weight="700" font-size="12" font-family="Manrope,sans-serif">CRITIQUE</text><text x="535" y="170" text-anchor="middle" fill="#ef6a5b" font-size="9" font-family="DM Sans,sans-serif">Transférer / Éviter</text><rect x="120" y="310" width="500" height="26" rx="6" fill="#f2f5f2" stroke="#dfe2dc"/><text x="370" y="328" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Réponses : éviter · prévenir · transférer (assurance) · accepter le risque résiduel</text></svg></div>`,
  ],
};
const profile = teachingProfiles[key];
const audience =
  key === 'cejm'
    ? {
        badge: 'BTS',
        label: 'Niveau post-bac',
        intro: 'Le cours croise économie, droit et management. Réponses argumentées et contextualisées.',
        simple: `Partez du problème concret de l’entreprise, choisissez les notions utiles, montrez les conséquences.`,
        exam: 'Une bonne réponse associe notion exacte, élément du dossier, explication et conclusion.',
        length: '15 à 20 lignes',
        steps: ['Définir la notion utile.', 'Citer une information du dossier.', `Expliquer l’effet pour l’entreprise.`, 'Conclure en répondant à la consigne.'],
      }
    : {
        badge: 'STMG',
        label: 'Niveau lycée',
        intro: `Notions introduites progressivement. Comprenez d’abord avec vos mots, puis utilisez le vocabulaire précis.`,
        simple: 'Cherchez qui agit, ce qui se passe, pourquoi, et quelle conséquence on peut en tirer.',
        exam: 'Une réponse courte peut être excellente si elle définit, utilise le document et explique clairement.',
        length: '8 à 12 lignes',
        steps: ['Répondre avec ses mots.', 'Utiliser les notions du cours.', 'Prendre un élément du document.', 'Rédiger une conclusion claire.'],
      };
program.themes.forEach((theme, index) => {
  const chapter = document.querySelector(`#${slug(index)}`);
  const stepComprends = chapter.querySelector('[data-step="comprends"] .step-body');
  const stepMemorise = chapter.querySelector('.step-memorise-body');
  const stepEntraine = chapter.querySelector('.step-entraine-body');
  const [, summary, notions, , question, answer] = theme;
  const [a, b, c] = notions;
  stepComprends.insertAdjacentHTML('afterbegin',
    `<div class="audience-banner"><span class="audience-badge">${audience.badge}</span><div><strong>${audience.label}</strong><p>${audience.intro}</p></div></div><section class="course-block detailed-lesson" aria-label="Support de cours"><div class="support-heading"><div><span>SUPPORT DE COURS</span><h4>${theme[0]}</h4></div><button class="print-course" type="button">Imprimer</button></div><p class="support-lead">${audience.simple}</p>${deepLessons[key][index]}${courseDiagrams[key]?.[index] || ''}</section><div class="simple-explanation"><span class="activity-label">L’IDÉE ESSENTIELLE</span><h4>En termes simples</h4><p>${audience.simple} Les mots clés : <strong>${notions.slice(0, 3).join(', ')}</strong>.</p></div>`
  );
  stepMemorise.innerHTML =
    `<div class="course-block"><span>DISTINCTIONS ESSENTIELLES</span><h4>Ne plus confondre</h4><div class="distinction"><div class="distinction-head"><b>${a}</b><b>${b}</b></div><div class="distinction-row"><div>Notion de départ : à définir et repérer.</div><div>Notion complémentaire : effets ou limites.</div></div></div><p>Test : inventez un exemple où <strong>${a}</strong> est présent mais pas <strong>${b}</strong>.</p></div>` +
    `<div class="method-sheet"><span class="activity-label">MÉTHODE · ${audience.badge}</span><h4>La réponse en ${profile.method.length} mouvements</h4><ol>${profile.method.map(s => `<li>${s}</li>`).join('')}</ol></div>` +
    `<div class="guided-answer"><span class="activity-label">RÉPONSE GUIDÉE</span><h4>Construire sa réponse</h4><div class="answer-frame">${audience.steps.map((s, si) => `<div><b>Étape ${si + 1}</b><span>${s}</span></div>`).join('')}</div></div>` +
    `<div class="mistakes"><span class="activity-label">ERREURS FRÉQUENTES</span><h4>Ce qui fait perdre des points</h4><ul>${profile.errors.map(e => `<li>${e}</li>`).join('')}<li>Écrire « on voit que » sans notion ni lien logique.</li></ul></div>` +
    `<div class="exam-expectation"><strong>Ce que le correcteur attend · ${audience.length}</strong><p>${audience.exam}</p></div>`;
  stepEntraine.innerHTML =
    `<div class="course-block"><span>LE MÉCANISME PAS À PAS</span><h4>Construire un raisonnement</h4><p><strong>${a}</strong> est le point d’entrée. Reliez-le à <strong>${b}</strong>, puis observez les effets sur <strong>${c}</strong>.</p><div class="mechanism"><div><b>01 · REPÉRER</b><span>Acteurs, décision et informations significatives.</span></div><div><b>02 · RELIER</b><span>${a} et ${b} expliquent le mécanisme.</span></div><div><b>03 · CONCLURE</b><span>Réponse explicite fondée sur le contexte.</span></div></div></div>` +
    `<div class="training-levels"><div class="training-card"><small>NIVEAU 1 · MÉMOIRE</small><h5>Restituer</h5><p>Définissez ${a}, puis citez trois notions sans regarder.</p><details><summary>Critère de réussite</summary><p>Définition précise et trois notions correctement nommées.</p></details></div><div class="training-card"><small>NIVEAU 2 · COMPRÉHENSION</small><h5>Expliquer</h5><p>Trois relations de cause à effet à partir de l’exemple.</p><details><summary>Critère de réussite</summary><p>Chaque flèche se lit avec « entraîne », « permet » ou « limite ».</p></details></div><div class="training-card"><small>NIVEAU 3 · TRANSFERT</small><h5>Argumenter</h5><p>${question}</p><details><summary>Corrigé raisonné</summary><p>${answer}</p></details></div></div>`;
  const levelDots = key === 'cejm' ? 3 : Math.min(3, 1 + Math.floor(index / (program.themes.length / 3)));
  chapter.querySelector('.chapter-title small').insertAdjacentHTML('beforeend',
    `<span class="difficulty" title="Niveau de difficulté">${[1, 2, 3].map(n => `<i class="${n <= levelDots ? 'on' : ''}"></i>`).join('')}</span>`
  );
});
// Remplace la simple liste issue du gabarit par des fiches de compétences
// pédagogiques, tout en conservant les libellés officiels du référentiel.
program.themes.forEach((theme, index) => {
  const chapter = document.querySelector(`#${slug(index)}`);
  const source = competencesSavoirs[key]?.[index];
  if (!chapter || !source) return;
  const box = chapter.querySelector('[data-step="comprends"] .objectives');
  if (box) {
    box.innerHTML = `<strong>COMPÉTENCES À ACQUÉRIR</strong><p class="objectives-intro">Ces capacités se vérifient dans une situation, pas par récitation. Chaque fiche explicite les concepts, la démarche et la preuve attendue.</p>${source.competences.map(c => competencePedagogy(c, theme[0], key === 'cejm' ? 'BTS' : 'STMG', index, key)).join('')}`;
  }
});
const progress = JSON.parse(localStorage.getItem('ecogest-progress') || '{}');
function getChapterPct(chapterKey) {
  const steps = progress[chapterKey] || {};
  const done = stepKeys.filter(sk => steps[sk]).length;
  return Math.round((done / stepKeys.length) * 100);
}
function updateProgressUI(chapterKey) {
  const pct = getChapterPct(chapterKey);
  document.querySelectorAll(`[data-pct-key="${chapterKey}"]`).forEach(el => {
    const span = el.querySelector('span') || el;
    if (el.classList.contains('chapter-pct')) {
      span.textContent = pct + '%';
      const arc = el.querySelector('.pct-arc');
      if (arc) arc.style.strokeDashoffset = 100.5 - (100.5 * pct / 100);
    } else {
      span.textContent = pct > 0 ? pct + '%' : '';
    }
  });
  const chapter = document.querySelector(`[data-pct-key="${chapterKey}"]`)?.closest('.chapter');
  if (chapter) {
    const steps = progress[chapterKey] || {};
    chapter.querySelectorAll('.step-tab').forEach(tab => {
      tab.classList.toggle('step-done', !!steps[tab.dataset.step]);
    });
  }
}
function markStepDone(chapterKey, stepKey) {
  if (!progress[chapterKey]) progress[chapterKey] = {};
  progress[chapterKey][stepKey] = true;
  localStorage.setItem('ecogest-progress', JSON.stringify(progress));
  updateProgressUI(chapterKey);
}
function switchStep(chapter, stepKey) {
  chapter.querySelectorAll('.step-tab').forEach(t => t.classList.toggle('active', t.dataset.step === stepKey));
  chapter.querySelectorAll('.step-panel').forEach(p => p.classList.toggle('active', p.dataset.step === stepKey));
  const sidebar = document.querySelector('#chapterNav');
  if (sidebar) {
    sidebar.querySelectorAll('.nav-step').forEach(s => s.classList.toggle('active', s.dataset.step === stepKey));
  }
}
function openChapter(chapter, goal) {
  const toggle = chapter.querySelector('.chapter-toggle');
  const content = chapter.querySelector('.chapter-content');
  const goalSel = chapter.querySelector('.goal-selector');
  chapter.classList.add('open');
  content.style.maxHeight = 'none';
  if (toggle) { toggle.textContent = '×'; toggle.setAttribute('aria-label', 'Fermer le chapitre'); }
  if (goal) {
    goalSel.style.display = 'none';
    chapter.querySelector('.step-nav').style.display = '';
    chapter.querySelectorAll('.step-panel').forEach(p => p.style.display = '');
    const targetStep = goal === 'revise' ? 'memorise' : goal === 'practice' ? 'entraine' : goal === 'test' ? 'teste' : 'comprends';
    switchStep(chapter, targetStep);
  }
}
document.querySelectorAll('.goal-btn').forEach(b =>
  b.addEventListener('click', e => {
    e.stopPropagation();
    const chapter = b.closest('.chapter');
    openChapter(chapter, b.dataset.goal);
  })
);
document.querySelectorAll('.step-tab').forEach(b =>
  b.addEventListener('click', e => {
    e.stopPropagation();
    switchStep(b.closest('.chapter'), b.dataset.step);
  })
);
document.querySelectorAll('.step-next').forEach(b =>
  b.addEventListener('click', e => {
    e.stopPropagation();
    const chapter = b.closest('.chapter');
    const currentPanel = b.closest('.step-panel');
    const chapterKey = chapter.querySelector('.chapter-pct')?.dataset.pctKey;
    if (chapterKey && currentPanel) markStepDone(chapterKey, currentPanel.dataset.step);
    switchStep(chapter, b.dataset.next);
  })
);
const requestedChapter = location.hash
  ? document.querySelector(location.hash)
  : (window.innerWidth > 600 ? document.querySelector('.chapter') : null);
if (requestedChapter) openChapter(requestedChapter);
document.querySelectorAll('.chapter-header').forEach(h =>
  h.addEventListener('click', () => {
    const chapter = h.parentElement;
    const toggle = h.querySelector('.chapter-toggle');
    const content = chapter.querySelector('.chapter-content');
    const isOpen = chapter.classList.contains('open');
    if (isOpen) {
      content.style.maxHeight = content.scrollHeight + 'px';
      requestAnimationFrame(() => { content.style.maxHeight = '0'; });
      chapter.classList.remove('open');
      toggle.textContent = '+';
      toggle.setAttribute('aria-label', 'Ouvrir le chapitre');
    } else {
      chapter.classList.add('open');
      content.style.maxHeight = content.scrollHeight + 'px';
      toggle.textContent = '×';
      toggle.setAttribute('aria-label', 'Fermer le chapitre');
      content.addEventListener('transitionend', () => {
        if (chapter.classList.contains('open')) content.style.maxHeight = 'none';
      }, { once: true });
    }
  })
);
Object.keys(progress).forEach(updateProgressUI);

const specificQuizzes = {
  cejm: [
    [
      ['Un flux monétaire correspond à :', 'Un mouvement d’argent entre deux agents économiques', 'Un transfert physique de marchandises', 'Une obligation juridique sans contrepartie', 'Le salaire est un flux monétaire versé en contrepartie du travail fourni.'],
      ['Une externalité négative se caractérise par :', 'Un coût subi par un tiers non impliqué dans l’échange', 'Une hausse du prix décidée par le vendeur', 'Un bénéfice involontaire pour le producteur', 'La pollution d’usine impose un coût aux riverains sans compensation par le marché.'],
      ['Les parties prenantes d’une entreprise incluent :', 'Salariés, clients, fournisseurs, actionnaires et collectivités', 'Uniquement les actionnaires et les dirigeants', 'Seulement les clients et les concurrents', 'Les parties prenantes sont tous les acteurs qui influencent ou sont affectés par les décisions de l’entreprise.'],
      [`Un contrat synallagmatique se caractérise par :`, `Des obligations réciproques entre les deux parties`, `Une obligation à la charge d’une seule partie`, `L’absence de contrepartie financière`, `Dans une vente, le vendeur s’oblige à livrer et l’acheteur à payer : les deux parties ont des obligations.`],
      [`La RSE signifie que l’entreprise :`, `Intègre volontairement des préoccupations sociales et environnementales`, `Se conforme uniquement aux réglementations en vigueur`, `Maximise le profit pour redistribuer aux actionnaires`, `La RSE va au-delà du strict respect de la loi en engageant l’entreprise envers la société et l’environnement.`],
    ],
    [
      ['Une politique conjoncturelle agit principalement sur :', 'La demande à court terme via le budget ou la monnaie', 'Les structures productives à long terme', 'La réglementation du commerce extérieur', 'Elle vise à stabiliser l’activité économique à court terme, par exemple en relançant la consommation.'],
      ['Un abus de position dominante suppose :', 'D’abord une position de puissance, puis son exploitation abusive', 'Une simple part de marché élevée', 'Un accord secret entre concurrents', 'La position dominante n’est pas interdite en soi ; c’est son exploitation abusive qui l’est.'],
      ['Le modèle PESTEL sert à :', 'Analyser le macro-environnement en classant les facteurs externes', 'Évaluer la rentabilité financière d’un projet', 'Comparer les forces et faiblesses internes', 'PESTEL identifie les opportunités et menaces politiques, économiques, socioculturelles, technologiques, écologiques et légales.'],
      [`La politique budgétaire de relance consiste à :`, `Augmenter les dépenses publiques ou réduire les impôts pour stimuler la demande`, `Augmenter les taux d’intérêt pour freiner l’inflation`, `Réduire les dépenses et augmenter les impôts`, `Elle vise à soutenir la consommation et l’investissement à court terme, au risque d’aggraver le déficit.`],
      [`Un brevet protège :`, `Une invention nouvelle, inventive et susceptible d’application industrielle`, `Toute idée originale sans formalité`, `Un signe distinctif permettant d’identifier un produit`, `Le brevet est limité à 20 ans et nécessite un dépôt ; la marque protège un signe distinctif, pas une invention.`],
    ],
    [
      ['Les coûts de transaction comprennent :', 'Les coûts de recherche, négociation et contrôle d’un échange', 'Uniquement le prix d’achat du bien', 'Les charges salariales de l’entreprise', 'Ils expliquent pourquoi une entreprise peut préférer produire elle-même plutôt que sous-traiter.'],
      ['La productivité mesure :', 'Le rapport entre la production obtenue et les ressources utilisées', 'Le chiffre d’affaires total de l’entreprise', 'Le nombre de salariés par unité produite', 'Une productivité élevée signifie produire plus avec moins de facteurs.'],
      ['La RSE consiste pour l’entreprise à :', 'Intégrer volontairement des préoccupations sociales et environnementales', 'Respecter uniquement les obligations légales', 'Maximiser le profit à court terme', 'La RSE va au-delà du cadre juridique en engageant l’entreprise sur des enjeux sociétaux.'],
      [`La combinaison productive désigne :`, `Le choix du dosage entre travail et capital pour produire`, `Le nombre total de salariés de l’entreprise`, `La somme des consommations intermédiaires`, `Automatiser revient à substituer du capital au travail, ce qui modifie la combinaison productive.`],
      [`L’autofinancement présente l’avantage de :`, `Préserver l’autonomie sans diluer le capital ni payer d’intérêts`, `Garantir des fonds illimités`, `Permettre une croissance toujours plus rapide que l’emprunt`, `Il dépend cependant des résultats passés et peut être insuffisant pour les investissements lourds.`],
    ],
    [
      ['Un effet de réseau signifie que :', 'La valeur du service augmente avec le nombre d’utilisateurs', 'Le réseau informatique est plus rapide', 'Les coûts diminuent quand le réseau s’étend', 'Plus une plateforme a d’utilisateurs, plus elle attire de nouveaux utilisateurs.'],
      ['Le RGPD exige que la collecte de données soit :', 'Fondée sur une finalité déterminée et une base légale', 'Autorisée par défaut si l’utilisateur ne refuse pas', 'Limitée aux entreprises de plus de 50 salariés', 'La minimisation, la limitation de durée et le consentement sont des principes centraux du RGPD.'],
      ['Un contrat électronique est soumis :', 'Aux règles générales du contrat et à des obligations spécifiques d’information', 'À aucune règle particulière', 'Uniquement au droit du pays du vendeur', 'Le droit impose une information claire, un double clic de confirmation et un accusé de réception.'],
    ],
    [
      ['Le lien de subordination juridique implique :', 'Le pouvoir de donner des ordres, contrôler et sanctionner', 'Une simple relation commerciale entre parties', 'L’égalité totale entre employeur et salarié', 'C’est le critère essentiel qui distingue le contrat de travail du contrat commercial.'],
      ['La GPEC vise à :', 'Anticiper les écarts entre compétences disponibles et besoins futurs', 'Réduire immédiatement la masse salariale', 'Remplacer les salariés par des machines', 'Elle permet d’adapter les emplois et compétences aux évolutions de l’environnement.'],
      ['Le télétravail modifie principalement :', 'Le contrôle, l’autonomie et les risques psychosociaux', 'Uniquement le lieu de travail sans autre conséquence', 'Le statut juridique du contrat de travail', 'Il nécessite des règles adaptées et un management fondé sur les objectifs.'],
      [`Le CDI est considéré comme :`, `La forme normale du contrat de travail`, `Un contrat réservé aux cadres`, `Un contrat à durée limitée renouvelable`, `Le CDD est l’exception : il ne peut être conclu que pour un motif prévu par la loi.`],
      [`Le dialogue social désigne :`, `L’ensemble des négociations et consultations entre employeurs et représentants des salariés`, `Les échanges commerciaux entre l’entreprise et ses clients`, `La communication marketing de l’entreprise`, `Il aboutit à des conventions et accords collectifs qui encadrent les conditions de travail.`],
    ],
    [
      ['Un avantage concurrentiel durable repose sur une ressource :', 'Rare, difficilement imitable et correctement organisée', 'Simplement disponible sur le marché', 'Coûteuse à acquérir', 'Une ressource accessible à tous ne suffit pas à se différencier durablement.'],
      ['La croissance externe se réalise par :', 'Le rachat ou la fusion avec une autre entreprise', 'Le recrutement progressif de nouveaux salariés', 'L’augmentation de la production interne', 'Elle offre rapidité et parts de marché immédiates mais comporte des risques d’intégration.'],
      ['L’internationalisation par alliance permet :', 'De partager risques, investissements et connaissance du marché', 'D’éliminer totalement la concurrence locale', 'De ne supporter aucun coût à l’étranger', 'L’alliance est adaptée quand les moyens financiers sont limités et le marché étranger mal connu.'],
      [`La domination par les coûts consiste à :`, `Proposer des prix inférieurs aux concurrents grâce à des coûts de production plus bas`, `Offrir un produit unique sur le marché`, `Copier la stratégie du leader`, `C’est l’une des deux stratégies génériques de Porter, l’autre étant la différenciation.`],
      [`Une alliance stratégique se distingue d’une fusion parce que :`, `Chaque partenaire conserve son indépendance juridique`, `Elle crée une seule entité`, `Elle élimine tout risque`, `L’alliance partage risques et ressources sans fusion des structures juridiques.`],
    ],
  ],
  droit: [
    [
      ['La règle de droit se distingue d’une règle morale parce qu’elle est :', 'Générale, impersonnelle et assortie d’une sanction étatique', 'Applicable uniquement aux professionnels', 'Fondée sur la conscience individuelle', 'La règle de droit s’impose à tous et son non-respect peut être sanctionné par l’autorité publique.'],
      ['Dans la hiérarchie des normes, un décret doit respecter :', 'La Constitution, les traités, les lois et les règlements supérieurs', 'Uniquement la volonté du gouvernement', 'Les décisions des tribunaux de première instance', 'Chaque norme inférieure doit être conforme aux normes qui lui sont supérieures.'],
      ['La jurisprudence désigne :', 'L’ensemble des décisions par lesquelles les juridictions interprètent le droit', 'Les lois votées par le Parlement', 'Les règlements adoptés par le gouvernement', 'Elle complète et précise la loi par l’interprétation qu’en font les juges.'],
      [`La QPC (question prioritaire de constitutionnalité) permet :`, `À tout justiciable de contester la conformité d'une loi à la Constitution`, `Au gouvernement de modifier la Constitution`, `Au juge de réécrire la loi`, `Introduite en 2008, la QPC renforce le contrôle de constitutionnalité a posteriori devant le Conseil constitutionnel.`],
      [`L'ordre public désigne :`, `Les règles auxquelles les individus ne peuvent déroger par convention`, `L'intervention de la police dans les conflits`, `Le classement hiérarchique des tribunaux`, `Un contrat contraire à l'ordre public est nul : certaines règles s'imposent quelles que soient les volontés des parties.`],
    ],
    [
      ['La Cour de cassation a pour rôle de :', 'Vérifier la correcte application du droit sans rejuger les faits', 'Rejuger l’ensemble du litige en fait et en droit', 'Arbitrer les conflits entre particuliers', 'Elle contrôle le droit ; les faits relèvent des juges du fond.'],
      ['La charge de la preuve pèse en principe sur :', 'Celui qui réclame l’exécution d’une obligation', 'Le juge qui tranche le litige', 'Le défendeur qui conteste la demande', 'C’est au demandeur de prouver ce qu’il allègue (article 1353 du Code civil).'],
      ['La médiation se distingue du procès parce qu’elle :', 'Repose sur un accord amiable facilité par un tiers neutre', 'Impose une décision obligatoire aux parties', 'N’est possible qu’en matière pénale', 'La médiation est un mode alternatif de règlement plus rapide et confidentiel.'],
      [`Un acte juridique se distingue d'un fait juridique parce que :`, `Ses effets de droit sont recherchés volontairement par les parties`, `Il ne produit aucun effet juridique`, `Il est toujours oral`, `Un contrat est un acte juridique (effets voulus) ; un accident est un fait juridique (effets non recherchés).`],
      [`La preuve électronique est admise à condition de :`, `Garantir l'intégrité du document et l'identification de l'auteur`, `Être imprimée sur papier`, `Être validée par un notaire`, `La signature électronique a la même valeur que la signature manuscrite si elle répond aux exigences légales.`],
    ],
    [
      ['La personnalité juridique confère :', 'L’aptitude à être titulaire de droits et d’obligations', 'Uniquement le droit de vote', 'La capacité d’exercer tous les actes sans restriction', 'Elle s’acquiert à la naissance pour les personnes physiques et à l’immatriculation pour les morales.'],
      ['Un mineur peut :', 'Accomplir seul les actes de la vie courante', 'Vendre un bien immobilier sans autorisation', 'Conclure un contrat de travail à temps plein à 14 ans', 'Sa capacité d’exercice est limitée ; les actes graves nécessitent la représentation légale.'],
      ['Une personne morale peut :', 'Contracter, posséder un patrimoine et agir en justice', 'Exercer uniquement des activités commerciales', 'Se marier et voter', 'L’association, la société ou la collectivité ont une personnalité juridique distincte de leurs membres.'],
      [`La capacité d'exercice permet de :`, `Exercer soi-même ses droits et accomplir des actes juridiques`, `Avoir des droits sans pouvoir les utiliser`, `Acquérir la personnalité juridique`, `Un mineur a la capacité de jouissance (avoir des droits) mais une capacité d'exercice limitée.`],
      [`Le patrimoine d'une société est :`, `Distinct de celui de ses associés, ce qui protège les biens personnels`, `Confondu avec celui du dirigeant`, `Inexistant jusqu'à la première vente`, `Cette séparation est un avantage majeur de la création d'une personne morale.`],
    ],
    [
      ['Le droit de propriété permet à son titulaire de :', 'User, jouir et disposer de la chose de manière exclusive', 'Occuper un bien sans limite ni restriction', 'Ignorer les servitudes et les règles d’urbanisme', 'L’usus, le fructus et l’abusus sont les trois attributs du droit de propriété.'],
      ['Le droit à l’image impose :', 'D’obtenir l’autorisation de la personne avant toute diffusion identifiable', 'De ne jamais photographier dans un lieu public', 'De payer systématiquement la personne photographiée', 'Publier une photo identifiable sans consentement constitue une atteinte au droit à l’image.'],
      ['Un brevet protège :', 'Une invention nouvelle, inventive et susceptible d’application industrielle', 'Toute idée originale même non concrétisée', 'Un signe distinctif apposé sur un produit', 'Le brevet confère un monopole temporaire d’exploitation en échange de la divulgation de l’invention.'],
    ],
    [
      ['Un contrat valide exige :', 'Consentement libre, capacité des parties et contenu licite et certain', 'Uniquement la signature des deux parties', 'L’intervention obligatoire d’un notaire', 'L’absence d’un de ces éléments peut entraîner la nullité du contrat.'],
      ['La force obligatoire du contrat signifie que :', 'Les parties doivent exécuter ce qui a été convenu', 'Le juge peut modifier librement les clauses', 'Une partie peut se retirer à tout moment sans motif', 'Le contrat tient lieu de loi entre les parties qui l’ont conclu.'],
      ['En cas d’inexécution, le créancier peut demander :', 'L’exécution forcée, la résolution ou des dommages-intérêts', 'Uniquement l’annulation du contrat', 'La peine d’emprisonnement du débiteur', 'Plusieurs remèdes coexistent ; le choix dépend de la nature et de la gravité de l’inexécution.'],
    ],
    [
      ['La responsabilité civile vise principalement à :', 'Réparer le dommage subi par la victime', 'Punir l’auteur d’une infraction', 'Prévenir tout risque futur', 'Contrairement à la responsabilité pénale, elle cherche l’indemnisation, non la sanction.'],
      ['La responsabilité du fait des choses suppose :', 'Un dommage causé par une chose dont on a la garde', 'Une faute intentionnelle du gardien', 'Que la chose soit nécessairement dangereuse', 'Le gardien est responsable sans qu’il soit nécessaire de prouver sa faute.'],
      ['Le lien de causalité peut être rompu par :', 'La force majeure, la faute de la victime ou le fait d’un tiers', 'La simple bonne foi de l’auteur', 'L’existence d’une assurance', 'Ces causes d’exonération démontrent que le dommage n’est pas imputable au défendeur.'],
    ],
    [
      ['Le CDD ne peut être utilisé que pour :', 'Un emploi temporaire correspondant à un motif précis prévu par la loi', 'N’importe quel poste si le salarié est d’accord', 'Remplacer durablement un poste permanent', 'Le CDD ne peut pourvoir un emploi lié à l’activité normale et permanente de l’entreprise.'],
      ['Un licenciement doit être fondé sur :', 'Une cause réelle et sérieuse et respecter une procédure', 'La seule volonté de l’employeur', 'Un accord écrit du salarié', 'L’absence de cause réelle et sérieuse rend le licenciement sans cause, ouvrant droit à indemnisation.'],
      ['Une convention collective peut :', 'Accorder des droits plus favorables que la loi aux salariés', 'Supprimer le salaire minimum légal', 'S’appliquer sans aucune négociation', 'Elle résulte d’une négociation collective et ne peut déroger à la loi que dans un sens plus favorable.'],
    ],
    [
      ['La liberté d’entreprendre permet de :', 'Créer, gérer et cesser librement une activité dans le cadre légal', 'Exercer n’importe quelle activité sans réglementation', 'Ignorer les règles de concurrence', 'Cette liberté constitutionnelle s’exerce dans les limites fixées par la loi.'],
      ['La concurrence déloyale suppose :', 'Un comportement fautif causant un préjudice à un concurrent', 'Une simple concurrence sur les prix', 'Un accord entre entreprises rivales', 'Le dénigrement, la confusion et le parasitisme sont des formes de concurrence déloyale.'],
      ['Le choix entre entreprise individuelle et société dépend de :', 'Du projet, du risque accepté, des besoins de financement et du régime social', 'Uniquement du montant du capital disponible', 'De l’obligation légale pour toute activité', 'Chaque forme juridique présente des avantages et inconvénients en termes de responsabilité et de fiscalité.'],
    ],
  ],
  economie: [
    [
      ['Le coût d’opportunité représente :', 'La valeur de la meilleure alternative à laquelle on renonce', 'Le prix d’achat d’un bien sur le marché', 'Le coût total de production d’un service', 'Choisir, c’est renoncer : le coût d’opportunité mesure ce renoncement.'],
      ['La rareté en économie signifie que :', 'Les ressources sont limitées face à des besoins illimités', 'Certains biens n’existent pas en quantité suffisante', 'Les prix sont toujours élevés', 'C’est le problème fondamental qui oblige les agents à faire des choix.'],
      ['Le circuit économique représente :', 'Les flux réels et monétaires entre les agents économiques', 'Le parcours d’un produit dans l’usine', 'Le trajet des marchandises entre pays', 'Il visualise les interdépendances entre ménages, entreprises, administrations et banques.'],
    ],
    [
      ['La valeur ajoutée se calcule en faisant :', 'Production − consommations intermédiaires', 'Chiffre d’affaires − charges de personnel', 'Bénéfice net + impôts', 'Elle mesure la richesse réellement créée par l’entreprise lors du processus de production.'],
      ['Le PIB est critiqué parce qu’il ne mesure pas :', 'Les inégalités, le travail domestique et les dégradations environnementales', 'La production des entreprises privées', 'Les échanges commerciaux internationaux', 'Le PIB est un indicateur de production, pas de bien-être ni de soutenabilité.'],
      ['La redistribution des revenus se fait par :', 'Les prélèvements obligatoires et les prestations sociales', 'La seule négociation salariale', 'Les bénéfices distribués aux actionnaires', 'Elle corrige les inégalités de revenus primaires en opérant des transferts.'],
    ],
    [
      ['Le pouvoir d’achat dépend de :', 'L’évolution du revenu disponible par rapport à celle des prix', 'Uniquement du salaire brut', 'Du taux de croissance du PIB', 'Si les prix augmentent plus vite que le revenu, le pouvoir d’achat diminue.'],
      ['La propension à épargner augmente généralement quand :', 'Le revenu s’élève et que l’incertitude économique croît', 'Les prix baissent fortement', 'Le taux de chômage diminue à zéro', 'Un revenu plus élevé et un motif de précaution poussent les ménages à épargner davantage.'],
      ['Le revenu disponible s’obtient en :', 'Ajoutant les prestations sociales aux revenus primaires puis en retirant les prélèvements', 'Multipliant le salaire par le nombre d’heures travaillées', 'Divisant le PIB par la population', 'C’est le revenu effectivement utilisable pour consommer ou épargner.'],
    ],
    [
      ['L’autofinancement correspond à :', 'Un financement par les ressources propres de l’entreprise', 'Un emprunt bancaire à taux zéro', 'Une subvention de l’État', 'L’entreprise utilise ses bénéfices non distribués pour financer ses investissements.'],
      ['Une obligation se distingue d’une action parce qu’elle :', 'Est un titre de dette avec remboursement et intérêts', 'Donne un droit de vote en assemblée générale', 'Ne peut être émise que par l’État', 'L’obligataire est créancier, l’actionnaire est propriétaire.'],
      ['Le financement indirect passe par :', 'Un intermédiaire bancaire qui collecte l’épargne et accorde des crédits', 'L’émission de titres sur le marché financier', 'Le recours à l’épargne personnelle du dirigeant', 'La banque transforme les dépôts en crédits, jouant un rôle d’intermédiation.'],
    ],
    [
      ['L’élasticité-prix de la demande mesure :', 'La sensibilité de la demande à une variation du prix', 'Le prix maximum accepté par le consommateur', 'La quantité offerte pour un prix donné', 'Une forte élasticité signifie qu’une hausse de prix réduit fortement la demande.'],
      ['Un oligopole se caractérise par :', 'Un petit nombre d’offreurs face à de nombreux demandeurs', 'Un seul vendeur sur le marché', 'L’absence totale de barrières à l’entrée', 'Les quelques entreprises en présence sont interdépendantes dans leurs décisions.'],
      ['Une asymétrie d’information existe quand :', 'Une partie à l’échange dispose de plus d’informations que l’autre', 'Les prix sont fixés par l’État', 'Tous les acteurs ont le même niveau d’information', 'Elle peut provoquer sélection adverse et aléa moral, faussant le fonctionnement du marché.'],
    ],
    [
      ['La fonction de stabilisation de l’État consiste à :', 'Agir sur l’activité pour limiter les fluctuations conjoncturelles', 'Fournir des biens collectifs non rentables', 'Corriger la répartition des revenus', 'Elle vise à maintenir la croissance, l’emploi et la stabilité des prix.'],
      ['Le déficit public se distingue de la dette publique parce que :', 'Le déficit est un flux annuel, la dette est un stock accumulé', 'Le déficit concerne les ménages, la dette concerne l’État', 'La dette diminue quand le déficit augmente', 'Chaque année de déficit ajoute un montant supplémentaire à la dette existante.'],
      ['Une politique budgétaire de relance implique :', 'Une hausse des dépenses publiques ou une baisse des impôts', 'Une réduction des dépenses pour équilibrer le budget', 'Une hausse des taux d’intérêt par la banque centrale', 'Elle soutient la demande globale en augmentant le pouvoir d’achat ou les commandes publiques.'],
    ],
    [
      ['Le taux de chômage mesure :', 'La part des chômeurs dans la population active', 'Le nombre total de personnes sans emploi', 'Le pourcentage de postes vacants', 'La population active comprend les actifs occupés et les chômeurs au sens du BIT.'],
      ['Une politique active de l’emploi vise à :', 'Faciliter le retour à l’emploi par la formation ou l’accompagnement', 'Indemniser les chômeurs sans condition', 'Interdire les licenciements économiques', 'Elle agit sur l’offre de travail en améliorant l’employabilité et l’appariement.'],
      ['Le capital humain désigne :', 'L’ensemble des compétences, savoirs et expériences des individus', 'Les machines et équipements de l’entreprise', 'Le capital social de la société', 'Investir dans l’éducation et la formation enrichit le capital humain et la productivité.'],
    ],
    [
      ['L’avantage comparatif explique que :', 'Un pays se spécialise là où son coût relatif est le plus faible', 'Seuls les pays les plus productifs peuvent exporter', 'Le commerce ne profite qu’aux pays riches', 'Même un pays moins productif partout a intérêt à se spécialiser.'],
      ['Le protectionnisme peut se justifier pour :', 'Protéger une industrie naissante ou sécuriser un approvisionnement', 'Éliminer définitivement toute concurrence étrangère', 'Baisser les prix au consommateur', 'L’argument de l’industrie dans l’enfance est le plus classique en économie.'],
      ['Le libre-échange favorise :', 'La baisse des prix, la variété et la spécialisation', 'L’autosuffisance de chaque pays', 'L’augmentation systématique des salaires', 'Il élargit les débouchés mais peut créer des ajustements sectoriels douloureux.'],
    ],
    [
      ['La croissance intensive repose sur :', 'Les gains de productivité obtenus par l’innovation et le progrès technique', 'L’augmentation de la quantité de facteurs utilisés', 'La hausse des prix de vente', 'Elle permet de produire plus avec autant ou moins de ressources.'],
      ['Le développement durable articule :', 'Les dimensions économique, sociale et environnementale', 'Uniquement la croissance du PIB', 'La protection de l’environnement sans considération économique', 'Il répond aux besoins du présent sans compromettre ceux des générations futures.'],
      ['Une taxe carbone vise à :', 'Internaliser le coût environnemental dans le prix des produits polluants', 'Subventionner les énergies fossiles', 'Réduire les impôts sur les entreprises', 'En augmentant le prix relatif des biens polluants, elle incite à modifier les comportements.'],
    ],
  ],
  sgn: [
    [
      ['La perception influence le comportement parce que :', 'Chaque individu filtre les informations selon son expérience et ses attentes', 'Tous les individus perçoivent la même réalité', 'La perception est uniquement liée à l’intelligence', 'Deux personnes peuvent interpréter un même message très différemment selon leur cadre de référence.'],
      ['La compétence se définit comme :', 'La combinaison de savoirs, savoir-faire et savoir-être mobilisés en situation', 'Un diplôme obtenu lors de la formation initiale', 'L’ancienneté dans un poste', 'Elle se révèle dans l’action et s’enrichit par l’expérience et la formation.'],
      ['La culture organisationnelle influence :', 'Les comportements, les normes de travail et le sentiment d’appartenance', 'Uniquement la stratégie commerciale', 'Le prix des produits vendus', 'Elle façonne les pratiques partagées, les valeurs et les rituels qui lient les membres du groupe.'],
    ],
    [
      ['La différence entre donnée et information est que :', 'L’information est une donnée interprétée dans un contexte', 'La donnée est toujours chiffrée, l’information toujours textuelle', 'Il n’y a aucune différence', 'Un chiffre brut devient information quand il est structuré et utilisé pour décider.'],
      ['Un système d’information comprend :', 'Des personnes, des procédures, des données et des outils techniques', 'Uniquement des logiciels et des ordinateurs', 'Seulement les bases de données', 'La composante humaine et organisationnelle est aussi essentielle que la composante technique.'],
      ['Le travail collaboratif numérique nécessite :', 'Des règles de partage, une formation des utilisateurs et une animation managériale', 'Uniquement un outil performant', 'Que tous travaillent au même endroit', 'Sans organisation ni confiance, le numérique peut créer surcharge et perte de responsabilité.'],
    ],
    [
      ['L’efficience se distingue de l’efficacité parce qu’elle :', 'Rapporte le résultat aux ressources consommées pour l’obtenir', 'Mesure uniquement l’atteinte de l’objectif', 'Ne concerne que la dimension financière', 'On peut être efficace sans être efficient si l’on consomme trop de ressources.'],
      ['La valeur perçue par le client dépend de :', 'L’écart entre les bénéfices attendus et les sacrifices consentis', 'Uniquement du prix le plus bas', 'Du coût de production du bien', 'Qualité, image, service et prix contribuent tous à la valeur perçue.'],
      ['Un tableau de bord doit combiner :', 'Des indicateurs financiers, commerciaux, sociaux et environnementaux', 'Uniquement le chiffre d’affaires et le bénéfice', 'Des données brutes sans interprétation', 'La performance est multidimensionnelle ; un seul indicateur donne une vision partielle.'],
    ],
    [
      ['L’actualisation permet de :', 'Comparer des flux monétaires situés à des moments différents', 'Mettre à jour un logiciel de gestion', 'Accélérer un processus de production', 'Un euro aujourd’hui vaut plus qu’un euro demain en raison du coût du temps.'],
      ['La veille informationnelle sert à :', 'Anticiper les évolutions de l’environnement pour réduire l’incertitude', 'Surveiller les salariés pendant leur travail', 'Archiver les documents comptables', 'Elle alimente la décision en captant les signaux faibles du marché et de la concurrence.'],
      ['Face au risque, une organisation peut :', 'L’identifier, le prévenir, le transférer ou l’accepter selon son coût', 'Toujours l’éliminer complètement', 'L’ignorer si la probabilité est faible', 'Le transfert (assurance) et la prévention sont les réponses les plus courantes.'],
    ],
  ],
};
window.specificQuizzes = specificQuizzes;
document.querySelectorAll('.page-quiz .option').forEach((b) =>
  b.addEventListener('click', () => {
    const item = b.closest('.quiz-item');
    if (item && item.dataset.answered) return;
    if (item) item.dataset.answered = 'true';
    const container = item || b.closest('.page-quiz');
    container.querySelectorAll('.option').forEach((x) => {
      x.disabled = true;
      if (x.dataset.good === 'true') x.classList.add('correct');
    });
    if (b.dataset.good === 'false') b.classList.add('wrong');
    const fb = container.querySelector('.quiz-explanation, .page-feedback');
    if (fb) fb.style.display = 'block';
  }),
);
document.querySelectorAll('.print-course').forEach((button) =>
  button.addEventListener('click', () => {
    const chapter = button.closest('.chapter');
    chapter.classList.add('printing');
    window.print();
    chapter.classList.remove('printing');
  }),
);
const examData = exams[key];
if (examData) {
  document.querySelector('#chapterNav').insertAdjacentHTML(
    'beforeend',
    '<a href="#examen" class="exam-nav-link">⚡ Épreuve blanche</a>',
  );
  document.querySelector('#chapters').insertAdjacentHTML(
    'afterend',
    `<section class="exam-blanc" id="examen"><div class="exam-blanc-card"><div class="exam-blanc-intro"><div class="subject-kicker">ÉPREUVE BLANCHE</div><h2>${examData.title}<br><span>${examData.subtitle}</span></h2><p>${examData.desc}</p><div class="exam-blanc-meta"><span>⏱ ${examData.duration}</span><span>◫ ${examData.qcount} questions</span><span>◎ ${examData.level}</span></div><button class="button primary" id="startExamBlanc">Lancer l’épreuve <span>→</span></button></div><div class="exam-blanc-missions">${examData.missions.map((m) => `<article><span>PARTIE ${String(m.num).padStart(2, '0')}</span><h3>${m.title}</h3><p>${m.summary}</p><b>${m.time}</b></article>`).join('')}</div></div><div class="exam-blanc-content" id="examBlancContent">${examData.missions.map((m) => `<div class="exam-blanc-mission"><div class="exam-mission-header"><span>PARTIE ${m.num}</span><h3>${m.title}</h3></div>${m.items.map((q) => `<div class="exam-blanc-question"><h4>${q[0]}</h4><div class="exam-situation"><strong>Situation</strong><p>${q[1]}</p></div><div class="exam-consigne"><strong>Travail demandé</strong><p>${q[2]}</p></div><button class="correction-button">Afficher le corrigé</button><div class="full-correction"><p>${q[3]}</p></div></div>`).join('')}</div>`).join('')}</div></section>`,
  );
  const examContent = document.getElementById('examBlancContent');
  examContent.style.display = 'none';
  document.getElementById('startExamBlanc').addEventListener('click', function () {
    const hidden = examContent.style.display === 'none';
    examContent.style.display = hidden ? 'block' : 'none';
    this.innerHTML = hidden
      ? 'Masquer l’épreuve'
      : 'Lancer l’épreuve <span>→</span>';
  });
}
const expansionStyles = document.createElement('link');
expansionStyles.rel = 'stylesheet';
expansionStyles.href = 'course-expansion.css';
document.head.appendChild(expansionStyles);
const expansionScript = document.createElement('script');
expansionScript.src = 'course-expansion.js';
document.body.appendChild(expansionScript);
const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) {
        document
          .querySelectorAll('.chapter-nav a')
          .forEach((a) =>
            a.classList.toggle('active', a.getAttribute('href') === `#${e.target.id}`),
          );
      }
    }),
  { rootMargin: '-25% 0px -65%' },
);
document.querySelectorAll('.chapter').forEach((c) => observer.observe(c));

const menuBtn = document.getElementById('menuButton');
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    const links = document.querySelector('.nav-links');
    links.classList.toggle('mobile');
  });
}

const backBtn = document.getElementById('backToTop');
if (backBtn) {
  window.addEventListener('scroll', () => {
    backBtn.classList.toggle('visible', window.scrollY > 600);
  }, { passive: true });
  backBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
