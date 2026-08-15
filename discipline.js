const programs = {
  cejm: {
    label: 'BTS · Culture économique, juridique et managériale',
    short: 'CEJM',
    intro:
      'Comprendre les défis de l’entreprise en croisant systématiquement économie, droit et management. Un parcours contextualisé conforme aux six thèmes du référentiel BTS.',
    color: 'coral',
    themes: [
      [
        'L’intégration de l’entreprise dans son environnement',
        'Agents économiques, marchés, contrats, finalités et parties prenantes.',
        [
          'Agents économiques',
          'Marché et prix',
          'Externalités',
          'Formation du contrat',
          'Parties prenantes',
          'Performance',
        ],
        'Une microbrasserie locale négocie avec une banque, emploie huit salariés et vend via des distributeurs. Cartographier ses échanges permet d’identifier les flux réels, monétaires et les rapports de pouvoir.',
        'Montrer comment le marché coordonne-t-il les décisions de l’entreprise.',
        'L’offre et la demande contribuent à former un prix qui transmet une information. Mais asymétries d’information et externalités peuvent empêcher une allocation efficace.',
      ],
      [
        'La régulation de l’activité économique',
        'Rôle de l’État, politiques économiques, concurrence et innovation.',
        [
          'Allocation et redistribution',
          'Croissance, chômage, inflation',
          'Politiques conjoncturelles',
          'Droit de la concurrence',
          'Brevets et marques',
          'PESTEL',
        ],
        'Une aide à la décarbonation réduit le coût d’un nouvel équipement. Elle soutient l’investissement à court terme et transforme durablement l’appareil productif.',
        'Une coopération de R&D entre concurrents est-elle nécessairement illicite ?',
        'Non. Il faut caractériser ses effets sur la concurrence puis vérifier une éventuelle exemption liée au progrès économique, au bénéfice des utilisateurs et au caractère indispensable de l’accord.',
      ],
      [
        'L’organisation de l’activité de l’entreprise',
        'Production, transaction, financement, RSE et structures.',
        [
          'Facteurs de production',
          'Productivité',
          'Coûts de transaction',
          'Financement interne/externe',
          'Responsabilité sociétale',
          'Structures organisationnelles',
        ],
        'L’automatisation substitue du capital au travail : elle peut accroître productivité et qualité, mais augmente les coûts fixes et exige de nouvelles compétences.',
        'Faut-il produire un composant ou le sous-traiter ?',
        'Comparer coût de production et coût de transaction, qualité, maîtrise du savoir-faire, flexibilité, dépendance et risques. La solution la moins chère n’est pas toujours la plus stratégique.',
      ],
      [
        'L’impact du numérique sur la vie de l’entreprise',
        'Données, plateformes, contrats électroniques et SI.',
        [
          'Système d’information',
          'Données personnelles',
          'RGPD',
          'Contrat électronique',
          'Plateformes',
          'Effets de réseau',
        ],
        'Une marketplace bénéficie d’effets de réseau : plus les vendeurs sont nombreux, plus elle attire d’acheteurs, ce qui attire à nouveau des vendeurs.',
        'L’entreprise peut-elle collecter toute donnée utile à son activité ?',
        'Non. La collecte suppose une finalité déterminée, une base légale, la minimisation des données, une durée limitée, la sécurité et le respect des droits des personnes.',
      ],
      [
        'Les mutations du travail',
        'Emploi, contrats, protection, compétences et conditions de travail.',
        [
          'Marché du travail',
          'Contrat de travail',
          'Pouvoir de direction',
          'Formation professionnelle',
          'GPEC',
          'Qualité de vie au travail',
        ],
        'Le télétravail modifie le contrôle, l’autonomie et les risques psychosociaux. Il nécessite des règles, des outils adaptés et un management fondé sur les objectifs.',
        'Comment reconnaître un contrat de travail ?',
        'Il repose sur une prestation, une rémunération et surtout un lien de subordination juridique : pouvoir de donner des ordres, contrôler et sanctionner.',
      ],
      [
        'Les choix stratégiques de l’entreprise',
        'Diagnostic, orientations, croissance et internationalisation.',
        [
          'Diagnostic externe/interne',
          'Ressources et compétences',
          'Domaines stratégiques',
          'Spécialisation/diversification',
          'Croissance',
          'Internationalisation',
        ],
        'Une PME au savoir-faire rare mais aux moyens financiers limités peut s’internationaliser par alliance afin de partager risques, investissements et connaissance du marché.',
        'Une ressource constitue-t-elle toujours un avantage concurrentiel ?',
        'Non. Elle doit être pertinente, rare, difficile à imiter et correctement organisée. Une machine accessible à tous ne suffit généralement pas à différencier durablement l’entreprise.',
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
        'Qu’est-ce que le droit ?',
        'Fonctions, règle de droit, sources et hiérarchie.',
        [
          'Règle de droit',
          'Sources nationales',
          'Sources européennes',
          'Jurisprudence',
          'Hiérarchie des normes',
        ],
        'Un règlement intérieur ne peut contredire une loi : une norme inférieure doit respecter les normes qui lui sont supérieures.',
        'Pourquoi le droit doit-il évoluer ?',
        'Il accompagne les transformations sociales, économiques et technologiques tout en maintenant sécurité juridique et protection des libertés.',
      ],
      [
        'Comment le droit permet-il de régler un litige ?',
        'Litige, preuve, juridictions et procès équitable.',
        ['Prétention', 'Preuve', 'Compétence', 'Premier degré', 'Appel', 'Cassation'],
        'Un consommateur réclame réparation à un professionnel. Il faut identifier les prétentions, les moyens de preuve et la juridiction compétente.',
        'La Cour de cassation rejuge-t-elle les faits ?',
        'Non. Elle contrôle la correcte application du droit par les juges du fond ; elle rejette le pourvoi ou casse la décision.',
      ],
      [
        'Qui peut faire valoir ses droits ?',
        'Personnalité juridique, capacité et patrimoine.',
        ['Personne physique', 'Personne morale', 'Capacité', 'Patrimoine', 'Représentation'],
        'Une association déclarée acquiert une personnalité distincte de ses membres : elle peut contracter, posséder un patrimoine et agir en justice.',
        'Un mineur a-t-il des droits ?',
        'Oui, il a la personnalité juridique mais sa capacité d’exercice est limitée ; ses représentants accomplissent en principe les actes juridiques.',
      ],
      [
        'Quels droits sont reconnus aux personnes ?',
        'Droits patrimoniaux, extrapatrimoniaux et numérique.',
        [
          'Droit de propriété',
          'Vie privée',
          'Droit à l’image',
          'Données personnelles',
          'Propriété intellectuelle',
        ],
        'Publier la photo identifiable d’un élève suppose en principe son autorisation, indépendamment du fait que la photo ait été prise dans un lieu accessible.',
        'Propriété et droit au respect de la vie privée sont-ils absolus ?',
        'Non. Leur exercice connaît des limites légales et doit parfois être concilié avec d’autres droits fondamentaux.',
      ],
      [
        'Quel est le rôle du contrat ?',
        'Formation, exécution, inexécution et consommation.',
        [
          'Consentement',
          'Capacité',
          'Contenu licite',
          'Force obligatoire',
          'Bonne foi',
          'Sanctions',
        ],
        'Un abonnement en ligne avec une case précochée pose la question d’un consentement libre et éclairé et des règles protectrices du consommateur.',
        'Que peut demander le créancier en cas d’inexécution ?',
        'Selon la situation : exception d’inexécution, exécution forcée, réduction du prix, résolution et/ou dommages-intérêts.',
      ],
      [
        'Qu’est-ce qu’être responsable ?',
        'Responsabilités civile et pénale, dommage et réparation.',
        ['Faute', 'Dommage', 'Lien causal', 'Fait des choses', 'Fait d’autrui', 'Exonération'],
        'Un chariot mal entretenu blesse un client : il faut identifier le dommage, le fait générateur et le lien de causalité avant de conclure.',
        'La responsabilité civile vise-t-elle à punir ?',
        'Son objectif principal est la réparation du dommage. La responsabilité pénale sanctionne une infraction au nom de la société.',
      ],
      [
        'Comment le droit encadre-t-il le travail salarié ?',
        'Contrat, libertés, rupture et conflits.',
        [
          'Lien de subordination',
          'CDI et CDD',
          'Pouvoir de l’employeur',
          'Licenciement',
          'Grève',
          'Négociation collective',
        ],
        'Une clause de mobilité doit être justifiée, proportionnée et définir précisément sa zone géographique pour ne pas porter une atteinte excessive au salarié.',
        'Tout licenciement est-il possible avec une indemnité ?',
        'Non. Il doit reposer sur une cause réelle et sérieuse et respecter une procédure ; certains motifs sont illicites ou discriminatoires.',
      ],
      [
        'Dans quel cadre et comment entreprendre ?',
        'Liberté d’entreprendre, structures et concurrence.',
        [
          'Entreprise individuelle',
          'Société',
          'Responsabilité',
          'Immatriculation',
          'Concurrence déloyale',
          'Pratiques anticoncurrentielles',
        ],
        'Le choix entre entreprise individuelle et société dépend du projet, du nombre d’associés, des besoins financiers, du régime social et du risque accepté.',
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
        ['Besoins', 'Biens et services', 'Rareté', 'Coût d’opportunité', 'Agents économiques'],
        'Consacrer un budget à un ordinateur signifie renoncer à d’autres consommations : ce renoncement constitue un coût d’opportunité.',
        'Pourquoi les agents doivent-ils effectuer des choix ?',
        'Leurs ressources sont limitées alors que leurs besoins sont nombreux ; ils arbitrent sous contrainte.',
      ],
      [
        'Création et répartition de la richesse',
        'Production, valeur ajoutée, PIB et revenus.',
        ['Production marchande', 'Valeur ajoutée', 'PIB', 'Revenus primaires', 'Redistribution'],
        'Avec 300 000 € de production et 120 000 € de consommations intermédiaires, l’entreprise crée 180 000 € de valeur ajoutée.',
        'Le PIB mesure-t-il parfaitement le bien-être ?',
        'Non : activités domestiques, inégalités, qualité environnementale et dimensions non marchandes sont imparfaitement reflétées.',
      ],
      [
        'L’affectation du revenu des ménages',
        'Consommation, épargne et pouvoir d’achat.',
        ['Revenu disponible', 'Consommation', 'Épargne', 'Propension', 'Pouvoir d’achat'],
        'Si le revenu nominal progresse de 3 % et les prix de 5 %, le pouvoir d’achat diminue approximativement.',
        'Pourquoi un ménage épargne-t-il ?',
        'Précaution, projet futur, constitution d’un patrimoine ou recherche de rendement ; le revenu et les taux influencent l’arbitrage.',
      ],
      [
        'Le financement de l’activité économique',
        'Capacités, besoins, banques et marchés.',
        ['Autofinancement', 'Crédit', 'Actions', 'Obligations', 'Financement direct/indirect'],
        'Une émission d’actions apporte des fonds propres sans remboursement prévu, mais dilue potentiellement le contrôle et les bénéfices.',
        'Crédit bancaire et obligation sont-ils identiques ?',
        'Non. Le crédit relève d’un intermédiaire bancaire ; l’obligation est un titre de dette émis sur le marché.',
      ],
      [
        'La concurrence sur les marchés',
        'Structures, pouvoir de marché et défaillances.',
        ['Offre et demande', 'Élasticité', 'Concurrence', 'Oligopole', 'Externalité', 'Asymétrie'],
        'Une plateforme dominante profite d’effets de réseau qui renforcent les barrières à l’entrée et son pouvoir de marché.',
        'Un marché concurrentiel est-il toujours efficace ?',
        'Non, notamment en présence d’externalités, biens publics ou asymétries d’information.',
      ],
      [
        'L’intervention de l’État',
        'Fonctions, budget et politiques économiques.',
        [
          'Allocation',
          'Redistribution',
          'Stabilisation',
          'Prélèvements',
          'Dépenses publiques',
          'Déficit',
        ],
        'Une baisse temporaire d’impôt peut soutenir la demande ; un investissement éducatif agit davantage sur la croissance potentielle.',
        'Déficit et dette sont-ils synonymes ?',
        'Non. Le déficit est un flux annuel ; la dette est un stock accumulé de financements passés.',
      ],
      [
        'L’État, l’emploi et le chômage',
        'Marché du travail, politiques et transformations.',
        [
          'Population active',
          'Taux de chômage',
          'Coût du travail',
          'Capital humain',
          'Politiques actives/passives',
        ],
        'Une formation de reconversion améliore l’appariement entre compétences offertes et emplois disponibles.',
        'Toute baisse du chômage signifie-t-elle plus d’emplois ?',
        'Pas nécessairement : une sortie de la population active peut aussi réduire le taux de chômage.',
      ],
      [
        'Le commerce international',
        'Échanges, spécialisation, firmes et protectionnisme.',
        [
          'Avantage comparatif',
          'Libre-échange',
          'Protectionnisme',
          'Taux de change',
          'Chaîne de valeur',
        ],
        'Même moins productif dans tous les domaines, un pays peut se spécialiser là où son désavantage relatif est le plus faible.',
        'Quels sont les effets ambivalents du libre-échange ?',
        'Prix et variété, spécialisation et débouchés ; mais aussi ajustements sectoriels, dépendances et répartition inégale des gains.',
      ],
      [
        'Croissance et développement durable',
        'Sources, limites et transition écologique.',
        [
          'Croissance extensive/intensive',
          'Productivité',
          'Innovation',
          'Externalités',
          'Développement durable',
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
      'Observer les organisations, manipuler l’information et évaluer la performance à travers les quatre thèmes du programme de première.',
    themes: [
      [
        'De l’individu à l’acteur',
        'Comportements, compétences, activité et relations.',
        [
          'Personnalité',
          'Émotion',
          'Perception',
          'Compétence',
          'Groupe',
          'Culture organisationnelle',
        ],
        'Deux salariés interprètent différemment un même message selon leur expérience et leur perception ; le management doit réduire les ambiguïtés.',
        'Comment l’individu devient-il acteur ?',
        'En mobilisant ses compétences, en interagissant avec le groupe et en adoptant ou en faisant évoluer les règles et la culture de l’organisation.',
      ],
      [
        'Numérique et intelligence collective',
        'Donnée, information, collaboration et SI.',
        [
          'Donnée/information/connaissance',
          'Système d’information',
          'Processus',
          'Travail collaboratif',
          'Réseaux sociaux',
          'Traces numériques',
        ],
        'Un tableau de ventes devient une information lorsqu’il est structuré et interprété pour décider d’un réapprovisionnement.',
        'Le numérique garantit-il la collaboration ?',
        'Non. Il offre des outils, mais règles de partage, confiance, qualité des données et animation restent déterminantes.',
      ],
      [
        'Création de valeur et performance',
        'Valeurs, indicateurs et tableaux de bord.',
        [
          'Valeur ajoutée',
          'Valeur financière',
          'Valeur perçue',
          'Valeur sociale',
          'Efficacité',
          'Efficience',
        ],
        'Une organisation peut atteindre son objectif commercial tout en consommant trop de ressources : elle est efficace mais peu efficiente.',
        'Pourquoi combiner plusieurs indicateurs ?',
        'Parce que la performance est multidimensionnelle et que l’amélioration d’une dimension peut dégrader une autre.',
      ],
      [
        'Temps et risque',
        'Prévision, actualisation, qualité et décision.',
        [
          'Horizon de décision',
          'Veille',
          'Actualisation',
          'Probabilité',
          'Risque',
          'Gestion de projet',
        ],
        'Lancer trop tard un produit réduit le risque technique mais augmente le risque concurrentiel : décider revient à arbitrer entre plusieurs risques.',
        'Peut-on supprimer tout risque ?',
        'Non. On peut l’identifier, l’évaluer, le prévenir, le transférer ou l’accepter selon son niveau et le coût du traitement.',
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
            'SolaireTech, PME de 45 salariés, conçoit et installe des panneaux photovoltaïques pour les professionnels. Le marché progresse de 20 % par an grâce aux obligations réglementaires sur les bâtiments neufs. Un concurrent chinois propose des panneaux 40 % moins chers mais dont l’empreinte carbone est trois fois supérieure.',
            'Réalisez un diagnostic du macro-environnement de SolaireTech en mobilisant le modèle PESTEL.',
            'Politique : obligation d’installation, soutien public à la transition. Économique : croissance du marché, pression concurrentielle sur les prix. Socioculturel : sensibilité croissante au développement durable. Technologique : évolution rapide du rendement des cellules. Écologique : bilan carbone des panneaux comme critère de choix. Légal : normes de construction, réglementation des marchés publics. La réglementation constitue une opportunité majeure ; la concurrence par les prix est la menace principale.',
          ],
          [
            '1.2 · Parties prenantes',
            'Les clients institutionnels exigent un bilan carbone favorable. Les salariés demandent une revalorisation salariale face à l’inflation. Les actionnaires souhaitent maintenir la marge. Un fournisseur stratégique de cellules annonce une hausse de 15 %.',
            'Identifiez les parties prenantes, leurs attentes et les tensions possibles.',
            'Clients : qualité environnementale et prix compétitif. Salariés : rémunération et conditions de travail. Actionnaires : rentabilité et croissance. Fournisseur : prix couvrant ses coûts. La tension oppose la hausse des coûts et la pression sur les prix. La direction doit arbitrer entre ces intérêts divergents, ce qui illustre le caractère systémique de l’entreprise.',
          ],
          [
            '1.3 · Politique publique',
            'L’État lance un crédit d’impôt de 30 % pour les installations de panneaux européens et finance un programme de formation aux métiers du solaire.',
            'Montrez comment ces mesures combinent politiques conjoncturelle et structurelle.',
            'Le crédit d’impôt est une mesure budgétaire conjoncturelle : il soutient immédiatement la demande. Le programme de formation est structurel : il agit sur l’offre de travail qualifié et la productivité à long terme. Ensemble, elles corrigent une défaillance de marché (externalité positive insuffisamment valorisée) et poursuivent allocation, redistribution et stabilisation.',
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
            'SolaireTech hésite entre fabriquer ses propres onduleurs (investissement de 800 000 €, réduction du coût unitaire de 18 %) et les acheter auprès d’un fournisseur allemand fiable dont les délais s’allongent.',
            'Analysez ce choix en mobilisant facteurs de production et coûts de transaction.',
            'Internaliser mobilise du capital et de nouvelles compétences. L’intégration supprime les coûts de transaction (recherche, négociation, contrôle, risque de rupture). Externaliser maintient flexibilité et expertise, mais expose à la dépendance. Le choix dépend du volume, de la maîtrise technologique et de la capacité de financement.',
          ],
          [
            '2.2 · Système d’information',
            'SolaireTech déploie un logiciel de suivi connecté qui remonte en temps réel la production de chaque installation. Les données permettent la maintenance prédictive.',
            'Montrez comment ce SI crée de la valeur pour SolaireTech et ses clients.',
            'Pour SolaireTech : anticipation des pannes, démonstration de performance, services à valeur ajoutée. Pour les clients : visibilité sur le rendement, réduction des arrêts. Le SI transforme des données brutes en informations décisionnelles, créant un avantage concurrentiel fondé sur le service.',
          ],
          [
            '2.3 · Données personnelles',
            'Le logiciel collecte localisation, consommation énergétique et horaires d’activité de chaque site. Un client s’interroge sur l’utilisation de ces données.',
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
            'La clause de mobilité « France entière » est trop vaste ; la jurisprudence exige une zone géographique précise. La clause de non-concurrence sans contrepartie financière est nulle : une indemnité compensatrice, une limitation dans le temps, l’espace et l’activité sont cumulativement requises.',
          ],
          [
            '3.2 · Compétences',
            'L’évolution technologique exige de nouvelles qualifications en domotique et en gestion de données. Cinq salariés risquent de ne plus maîtriser les équipements dans deux ans.',
            'Proposez une démarche de GPEC adaptée.',
            'Diagnostiquer les compétences présentes, identifier les besoins futurs, mesurer l’écart, puis agir : formation professionnelle, tutorat interne, recrutement ciblé ou mobilité. L’enjeu est de transformer la contrainte technologique en montée en compétences.',
          ],
          [
            '3.3 · Choix stratégique',
            'Trois options : a) croissance interne par recrutement, b) rachat d’un concurrent régional (400 000 €), c) alliance avec un fabricant espagnol pour le marché ibérique.',
            'Comparez les trois modalités de croissance et recommandez la plus adaptée.',
            'Interne : maîtrise totale mais lenteur. Externe : rapidité, parts de marché immédiates, mais coût et risques d’intégration. Conjointe : partage des risques et des connaissances du marché espagnol, sans supporter seule les coûts. Au regard de la capacité financière limitée et de l’ambition internationale, l’alliance paraît la plus cohérente.',
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
            'Un utilisateur de GreenMove, entreprise de location de trottinettes électriques en libre-service, est blessé lorsque le frein de sa trottinette lâche en descente. Il subit une fracture du poignet et un arrêt de travail de trois semaines. GreenMove confie l’entretien à la société MaintenPlus, qui avait vérifié l’engin deux jours avant.',
            'Identifiez les conditions de la responsabilité civile et déterminez si GreenMove peut être tenue pour responsable.',
            'Le dommage est corporel, certain et personnel. Le fait générateur relève de la responsabilité du fait des choses : GreenMove est gardienne de la trottinette. Le lien de causalité relie le frein défectueux à la chute. GreenMove ne peut s’exonérer en invoquant le contrat avec MaintenPlus, qui n’est ni force majeure ni fait d’un tiers exclusif. Elle reste responsable vis-à-vis de la victime.',
          ],
          [
            '1.2 · Exonération',
            'GreenMove affirme que l’utilisateur roulait à vitesse excessive sur un trottoir mouillé, en contradiction avec les conditions d’utilisation.',
            'Discutez les possibilités d’exonération de GreenMove.',
            'La faute de la victime peut atténuer la responsabilité. Vitesse excessive et sol glissant constituent une imprudence. L’exonération totale exigerait que la faute présente les caractères de la force majeure (imprévisibilité, irrésistibilité, extériorité), ce qui est peu probable ici. Une exonération partielle est plus vraisemblable : le juge répartit la charge du dommage.',
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
            'Kévin, chargé de maintenance, a été embauché en CDD pour « accroissement temporaire d’activité ». Son contrat a été renouvelé trois fois en vingt mois sur un poste permanent.',
            'Analysez la régularité du recours au CDD et les conséquences pour Kévin.',
            'Le CDD ne peut pourvoir durablement un emploi lié à l’activité normale. Un renouvellement sur vingt mois pour un poste permanent contredit le motif de recours. Kévin peut demander la requalification en CDI devant le conseil de prud’hommes, avec une indemnité au moins égale à un mois de salaire.',
          ],
          [
            '2.2 · Pouvoir de direction',
            'GreenMove installe une application de géolocalisation permanente sur le téléphone professionnel de Kévin sans l’en informer.',
            'Ce dispositif de contrôle est-il licite ?',
            'L’employeur peut contrôler l’activité, mais toute restriction aux libertés doit être justifiée et proportionnée. Le salarié doit être préalablement informé des dispositifs de surveillance. L’absence d’information rend la géolocalisation inopposable. La surveillance permanente pourrait être jugée disproportionnée si une vérification ponctuelle suffisait.',
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
            'L’inscription sur l’application GreenMove s’effectue en faisant défiler les conditions générales sans case à cocher. Une clause prévoit que « GreenMove décline toute responsabilité en cas de dommage, quelle qu’en soit la cause ».',
            'Discutez la validité de cette clause.',
            'Un contrat suppose un consentement libre et éclairé. L’absence de case de validation pose la question de la preuve du consentement. Une clause exonératoire totale crée un déséquilibre significatif : elle peut être qualifiée de clause abusive et réputée non écrite. Le consommateur bénéficie de protections d’ordre public.',
          ],
          [
            '3.2 · Droit de rétractation',
            'Un utilisateur souscrit un abonnement mensuel « Premium » depuis l’application et souhaite se rétracter le lendemain.',
            'Précisez si l’utilisateur peut se rétracter.',
            'Le contrat est conclu à distance avec un consommateur : le droit de rétractation de quatorze jours s’applique en principe. Certaines exceptions existent pour les services pleinement exécutés avant la fin du délai avec accord exprès. Si l’abonnement n’a pas encore été utilisé, la rétractation devrait être possible. Le professionnel doit informer clairement du droit et de ses exceptions.',
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
            'Caractérisez la structure de ce marché et montrez comment l’évolution des prix influence les comportements.',
            'Structure oligopolistique : un petit nombre d’offreurs détient une large part de marché. La baisse du prix moyen stimule la demande (élasticité-prix). La concurrence incite les producteurs à innover et à comprimer les coûts. Les économies d’échelle renforcent la position des leaders.',
          ],
          [
            '1.2 · Défaillances',
            'Document 2 — La production de batteries au lithium génère des rejets polluants non intégrés au prix du vélo. Les consommateurs ne disposent pas toujours d’informations fiables sur la durée de vie réelle de la batterie.',
            'Identifiez les défaillances de marché et expliquez leurs conséquences.',
            'Externalité négative : la pollution est un coût supporté par la collectivité, non reflété dans le prix, d’où une surproduction par rapport à l’optimum. Asymétrie d’information : le producteur connaît la durée réelle mieux que l’acheteur, ce qui fausse le choix et fragilise la confiance.',
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
            '2.1 · Fonctions de l’État',
            'Document 3 — L’État accorde un bonus de 400 € pour l’achat d’un VAE aux ménages dont le revenu fiscal est inférieur à 15 400 €. Le secteur du cycle emploie 12 000 personnes (+15 % sur trois ans). Le déficit public atteint 5,2 % du PIB.',
            'Présentez les fonctions économiques mobilisées par le bonus et analysez leurs effets.',
            'Allocation : orienter la consommation vers un mode moins polluant en corrigeant l’externalité. Redistribution : cibler les ménages modestes réduit l’inégalité d’accès. Stabilisation : la dépense soutient indirectement la demande et l’emploi dans la filière.',
          ],
          [
            '2.2 · Limites',
            'Document 4 — 70 % des VAE vendus sont assemblés à partir de composants importés d’Asie. Le coût budgétaire atteint 95 millions d’euros par an.',
            'Discutez les limites de cette politique.',
            'Le bonus profite en partie aux producteurs étrangers : l’effet multiplicateur national est limité. Le coût aggrave le déficit. Un effet d’aubaine existe pour des ménages qui auraient acheté sans aide. La mesure conjoncturelle ne transforme pas l’appareil productif : elle doit être complétée par des mesures structurelles.',
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
            'Document 5 — La France exporte des vélos haut de gamme vers l’Allemagne et la Belgique, mais importe 80 % de ses composants de Chine et de Taïwan où les coûts de production sont inférieurs.',
            'Expliquez, en mobilisant l’avantage comparatif, pourquoi la France à la fois importe et exporte.',
            'L’avantage comparatif repose sur les coûts relatifs. La France dispose d’un avantage dans la conception haut de gamme (savoir-faire, image, proximité européenne). La Chine dispose d’un avantage dans les composants standardisés (coût du travail, économies d’échelle). La chaîne de valeur se fragmente géographiquement selon ces avantages.',
          ],
          [
            '3.2 · Protectionnisme',
            'Document 6 — L’Union européenne envisage un droit de douane de 25 % sur les batteries de vélos importées afin de protéger les investissements dans les « gigafactories » européennes.',
            'Discutez les avantages et les inconvénients de cette mesure.',
            'Avantages : protéger une industrie naissante, sécuriser la chaîne d’approvisionnement, maintenir l’emploi européen. Inconvénients : hausse du prix pour le consommateur, risque de représailles commerciales, moindre pression concurrentielle, renchérissement pour les assembleurs dépendants des composants importés.',
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
            'NaturaBio fabrique des cosmétiques biologiques. L’arrivée d’Amira, nouvelle responsable de production, modifie les procédures qualité. Marc, technicien depuis huit ans, perçoit les nouvelles consignes comme une remise en cause de son expertise. Lucie, recrutée récemment, y voit une opportunité d’apprentissage.',
            'Montrez comment les facteurs individuels expliquent les réactions différentes de Marc et Lucie.',
            'Personnalité, expérience et perception influencent le comportement. Marc filtre les consignes à travers ses habitudes et y lit une menace pour son statut : sa perception est défensive. Lucie, sans ancienneté, perçoit le changement comme un enrichissement. Les émotions (frustration vs curiosité) orientent l’engagement. Un même message produit des réactions opposées selon le cadre de référence.',
          ],
          [
            '1.2 · Devenir acteur',
            'Amira organise une réunion où chaque technicien propose une amélioration. Marc suggère un contrôle visuel qu’il pratiquait déjà. La direction intègre sa proposition au protocole.',
            'Expliquez comment Marc passe du statut d’individu à celui d’acteur.',
            'Marc devient acteur en mobilisant sa compétence au service d’un objectif collectif. Sa contribution est reconnue et intégrée aux règles communes. L’interaction avec le groupe transforme la résistance en participation. L’individu devient acteur lorsqu’il influence les décisions et s’approprie les normes du groupe.',
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
            '2.1 · Système d’information',
            'NaturaBio installe un logiciel de gestion des stocks partagé entre production, achats et expédition. Des erreurs de saisie provoquent la commande de 200 kg de beurre de karité au lieu de 20 kg.',
            'Analysez le rôle du SI et identifiez les causes du dysfonctionnement.',
            'Le SI collecte, stocke, traite et diffuse l’information utile à la décision. Il inclut personnes, procédures et outils. L’erreur vient d’une donnée mal saisie : donnée brute incorrecte → information fausse → décision erronée. Les causes sont humaines (formation insuffisante, absence de double vérification) et organisationnelles (aucune règle de validation).',
          ],
          [
            '2.2 · Travail collaboratif',
            'L’équipe propose un processus de validation croisée : chaque commande est vérifiée par un second service. Un espace collaboratif en ligne centralise les fiches produits.',
            'Montrez les conditions pour que le numérique favorise réellement l’intelligence collective.',
            'Le travail collaboratif suppose coordination, partage et responsabilité commune. Les conditions : qualité et actualisation des données, règles d’accès claires, formation des utilisateurs, confiance entre les services et animation managériale. Sans elles, le numérique crée surcharge, doublons ou perte de responsabilité.',
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
            'Résultats de NaturaBio : chiffre d’affaires 1,2 M€ (+18 %), résultat net 95 000 € (+12 %), satisfaction client 72 % (–8 points), absentéisme 9,5 % (+3 points), consommation d’eau +22 % malgré un label bio affiché.',
            'Montrez que la performance ne se réduit pas à sa dimension financière et proposez des indicateurs complémentaires.',
            'La performance financière progresse, mais la valeur perçue recule (satisfaction –8 points), la valeur sociale se dégrade (absentéisme +3 points) et l’engagement environnemental est fragilisé (+22 % d’eau). L’efficacité commerciale ne garantit pas l’efficience. Un tableau de bord devrait combiner indicateurs financiers, commerciaux, sociaux et environnementaux. Améliorer un axe en dégradant les autres n’est pas soutenable.',
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
  .map((t, i) => `<a href="#${slug(i)}">${i + 1}. ${t[0]}</a>`)
  .join('');
document.querySelector('#chapters').innerHTML = program.themes
  .map(
    (t, i) =>
      `<article class="chapter" id="${slug(i)}"><header class="chapter-header"><div class="chapter-num">${String(i + 1).padStart(2, '0')}</div><div class="chapter-title"><small>THÈME ${i + 1}</small><h3>${t[0]}</h3><p>${t[1]}</p></div><button class="chapter-toggle" aria-label="Ouvrir le chapitre">+</button></header><div class="chapter-content"><div class="objectives"><strong>OBJECTIFS D'APPRENTISSAGE</strong><ul><li>Définir et distinguer les notions essentielles du thème.</li><li>Expliquer un mécanisme en mobilisant le vocabulaire adapté.</li><li>Analyser une situation et construire une réponse argumentée.</li></ul></div><div class="course-block"><span>COURS</span><h4>Comprendre l’essentiel</h4><p>${t[1]} Ce thème ne consiste pas à réciter une définition : il faut repérer les acteurs, mettre en évidence les relations de cause à effet et conclure à partir du contexte étudié.</p><div class="notions-grid">${t[2].map((n, j) => `<div class="notion"><b>${n}</b><span>${j % 2 ? 'Mécanisme à identifier et à relier à la situation.' : 'Notion à définir précisément avant toute application.'}</span></div>`).join('')}</div></div><div class="course-block"><span>EXEMPLE ANALYSÉ</span><h4>Du concept à la situation</h4><div class="worked-example"><strong>Situation</strong><p>${t[3]}</p></div></div><div class="activity-tabs"><button class="active" data-panel="quiz">Quiz</button><button data-panel="case">Étude de cas</button><button data-panel="memo">À retenir</button></div><div class="activity-panel active page-quiz" data-content="quiz"><span class="activity-label">VÉRIFICATION RAPIDE</span><h4>${t[4]}</h4><button class="option" data-good="false">A · Oui, dans toutes les situations.</button><button class="option" data-good="true">B · Cela exige une analyse du contexte et des mécanismes.</button><button class="option" data-good="false">C · Aucune notion du cours n’est nécessaire.</button><p class="page-feedback">La bonne démarche consiste à définir, analyser les éléments du cas puis justifier une conclusion nuancée.</p></div><div class="activity-panel" data-content="case"><span class="activity-label">ÉTUDE DE CAS · NIVEAU EXAMEN</span><h4>${t[4]}</h4><p><strong>Travail demandé :</strong> rédigez une réponse structurée de 10 à 15 lignes. Commencez par les notions, exploitez deux éléments de la situation et concluez explicitement.</p><button class="reveal-answer">Afficher le corrigé guidé</button><div class="study-answer"><strong>Proposition de corrigé</strong><p>${t[5]}</p><p><em>Méthode :</em> notion → mécanisme → éléments du cas → conclusion.</p></div></div><div class="activity-panel" data-content="memo"><span class="activity-label">MÉMORISATION ACTIVE</span><h4>La fiche en trois actions</h4><ol><li>Récitez les notions sans regarder.</li><li>Expliquez l’exemple à voix haute.</li><li>Reformulez la correction en moins de trois phrases.</li></ol></div><p class="source-note">Contenu structuré à partir du référentiel officiel fourni dans le dépôt.</p></div></article>`,
  )
  .join('');
const deepLessons = {
  cejm: [
    `<h5>1. L’entreprise au cœur des échanges</h5><p>Une entreprise ne fonctionne jamais seule. Elle achète du travail aux ménages, recherche des financements auprès des banques, verse des prélèvements aux administrations et échange avec clients et fournisseurs. Ces opérations forment des <strong>flux réels</strong> — travail, biens, services — auxquels correspondent généralement des <strong>flux monétaires</strong>. Cartographier ces échanges permet de comprendre de qui l’entreprise dépend et sur qui elle exerce une influence.</p><h5>2. Le marché et ses imperfections</h5><p>Sur un marché, l’offre rencontre la demande et contribue à la formation du prix. Une hausse du prix tend à encourager l’offre et à freiner la demande, toutes choses égales par ailleurs. Cette coordination reste imparfaite : une barrière à l’entrée protège les acteurs installés, une asymétrie d’information avantage la partie la mieux informée et une externalité fait supporter à un tiers un coût ou un bénéfice non intégré au prix. Le contrat sécurise alors les échanges en fixant obligations, prix, durée et sanctions.</p><h5>3. Finalités et parties prenantes</h5><p>La finalité économique — assurer la pérennité — coexiste avec des finalités sociales et sociétales. Les attentes peuvent diverger : les associés recherchent une rémunération, les salariés de bonnes conditions de travail, les clients de la qualité et l’État le respect des règles. La performance est donc globale : financière, commerciale, sociale et environnementale.</p>`,
    `<h5>1. Pourquoi réguler ?</h5><p>Le marché ne produit pas spontanément tous les résultats souhaitables. L’État assure une fonction d’<strong>allocation</strong> lorsqu’il finance les biens collectifs, de <strong>redistribution</strong> lorsqu’il corrige les inégalités et de <strong>stabilisation</strong> lorsqu’il agit contre chômage ou inflation. Une politique conjoncturelle agit à court terme sur la demande ; une politique structurelle transforme durablement les capacités productives, par exemple par l’éducation ou l’innovation.</p><h5>2. La concurrence encadrée par le droit</h5><p>Une entente est prohibée lorsqu’elle a pour objet ou effet de fausser la concurrence : fixation des prix, partage de marché ou limitation de la production. Un abus de position dominante suppose d’abord une position de puissance économique, puis son exploitation abusive. Le brevet protège une invention nouvelle, inventive et susceptible d’application industrielle ; la marque protège un signe distinctif. Ces droits encouragent l’innovation mais restent limités dans le temps ou dans leur usage.</p><h5>3. Lire le macro-environnement</h5><p>Le modèle PESTEL classe les facteurs politiques, économiques, socioculturels, technologiques, écologiques et légaux. Il ne suffit pas de les lister : il faut montrer en quoi chacun constitue une opportunité ou une menace pour l’entreprise étudiée.</p>`,
    `<h5>1. Organiser la production</h5><p>Produire consiste à combiner travail, capital et ressources naturelles. La <strong>productivité</strong> rapporte une production à la quantité de facteur utilisée. Si 10 salariés réalisent 1 000 unités, la productivité physique moyenne est de 100 unités par salarié. Une automatisation peut augmenter la productivité et la régularité, mais accroît les coûts fixes, le besoin de financement et la dépendance technologique.</p><h5>2. Faire ou faire faire</h5><p>L’entreprise compare le coût de réalisation interne au prix du prestataire, mais aussi les <strong>coûts de transaction</strong> : rechercher un partenaire, négocier, contrôler et faire respecter le contrat. Internaliser protège un savoir-faire ; externaliser apporte flexibilité et expertise, au prix d’une possible dépendance.</p><h5>3. Financer et structurer</h5><p>L’autofinancement préserve l’autonomie mais dépend des résultats passés. L’emprunt ne dilue pas le capital, mais crée intérêts et remboursement. L’augmentation de capital renforce les fonds propres, tout en partageant pouvoir et bénéfices. La structure organisationnelle répartit ensuite tâches, autorité et coordination.</p>`,
    `<h5>1. De la donnée à la décision</h5><p>Une donnée est un élément brut. Elle devient information lorsqu’elle est organisée et interprétée dans un contexte, puis connaissance lorsqu’un acteur se l’approprie pour agir. Le système d’information réunit personnes, procédures, matériels, logiciels et données afin de collecter, stocker, traiter et diffuser l’information utile.</p><h5>2. Une économie de plateforme</h5><p>Une plateforme met en relation plusieurs catégories d’utilisateurs. Les effets de réseau sont directs si la valeur augmente avec le nombre d’utilisateurs semblables, indirects lorsqu’un groupe attire l’autre. Cette dynamique peut conduire à une forte concentration et à une dépendance des entreprises utilisatrices.</p><h5>3. Protéger les personnes</h5><p>Le RGPD impose une finalité déterminée, une base légale, la minimisation, une durée de conservation limitée et la sécurité. Une entreprise ne peut donc pas collecter une donnée simplement parce qu’elle pourrait être utile un jour. Le contrat électronique conserve les conditions générales de validité et ajoute des obligations d’information et de confirmation.</p>`,
    `<h5>1. Le marché du travail</h5><p>L’offre de travail provient des personnes qui souhaitent travailler ; la demande émane des employeurs. Leur rencontre dépend du salaire, des qualifications, de la localisation et de la conjoncture. Un chômage peut persister malgré des postes vacants lorsque compétences offertes et recherchées ne correspondent pas.</p><h5>2. La relation salariale</h5><p>Le contrat de travail associe une prestation, une rémunération et un lien de subordination. Ce dernier donne à l’employeur le pouvoir de diriger, contrôler et sanctionner, mais ce pouvoir est limité par les libertés fondamentales et le principe de proportionnalité. Toute restriction doit être justifiée par la tâche à accomplir.</p><h5>3. Manager les compétences</h5><p>Une compétence combine savoirs, savoir-faire et comportements mobilisés dans une situation. La gestion prévisionnelle compare ressources disponibles et besoins futurs, puis agit par recrutement, formation, mobilité ou transmission. Le numérique transforme les métiers davantage qu’il ne remplace mécaniquement tous les emplois.</p>`,
    `<h5>1. Du diagnostic à la stratégie</h5><p>Le diagnostic externe repère opportunités et menaces ; le diagnostic interne évalue ressources et compétences. Une ressource n’est stratégique que si elle contribue à la valeur et reste rare ou difficile à imiter. Une compétence distinctive est une capacité collective maîtrisée mieux que les concurrents.</p><h5>2. Les choix de domaine</h5><p>La spécialisation concentre les ressources et renforce l’expertise, mais expose au recul d’un seul marché. La diversification répartit les risques et crée des synergies, tout en augmentant complexité et besoins financiers. Domination par les coûts et différenciation sont des avantages concurrentiels qui nécessitent des organisations cohérentes.</p><h5>3. Les voies de croissance</h5><p>La croissance interne développe les moyens propres : elle est maîtrisée mais progressive. La croissance externe acquiert une organisation existante : elle est rapide mais coûteuse et délicate à intégrer. La croissance conjointe partage ressources et risques entre partenaires, avec un risque de conflit ou de perte d’autonomie.</p>`,
  ],
  droit: [
    `<h5>La règle de droit</h5><p>Le droit organise la vie sociale, protège les personnes et pacifie les conflits. Sa règle est générale, impersonnelle et obligatoire. Elle se distingue de la morale : une conduite peut être moralement désapprouvée sans être juridiquement sanctionnée. Constitution, traités, droit européen, lois et règlements s’insèrent dans une hiérarchie ; une norme inférieure doit respecter la norme supérieure.</p><h5>Le rôle du juge</h5><p>La jurisprudence désigne les décisions rendues par les juridictions. Le juge interprète les textes pour les appliquer à des situations concrètes. Il ne crée pas une règle générale comme le législateur, mais ses interprétations orientent fortement les solutions futures.</p><h5>Les sources du droit</h5><p>Les règles de droit proviennent de plusieurs sources organisées en une <strong>hiérarchie des normes</strong>. Au sommet, la <strong>Constitution</strong> fixe les principes fondamentaux. Les <strong>traités internationaux</strong> et le <strong>droit de l’Union européenne</strong> (règlements, directives) s’imposent au droit national dans leur domaine. La <strong>loi</strong>, votée par le Parlement, et le <strong>règlement</strong> (décrets, arrêtés), édicté par le pouvoir exécutif, forment le droit écrit. La <strong>coutume</strong> et les <strong>usages professionnels</strong> complètent ponctuellement ces sources. Chaque norme inférieure doit respecter les normes supérieures : c’est le principe de constitutionnalité et de légalité.</p>`,
    `<h5>Du désaccord au litige</h5><p>Le litige naît lorsqu’une prétention se heurte à la résistance d’une autre personne. Chaque partie invoque des faits et des règles, appelés moyens. La preuve doit être loyale et admissible ; sa charge pèse en principe sur celui qui réclame l’exécution d’une obligation.</p><h5>L’organisation judiciaire</h5><p>La compétence d’attribution détermine la catégorie de juridiction ; la compétence territoriale désigne le lieu. L’appel permet un nouvel examen en fait et en droit. La Cour de cassation ne constitue pas un troisième degré : elle vérifie l’application de la règle de droit.</p><h5>Les modes alternatifs de règlement</h5><p>Les parties peuvent régler leur différend sans recourir au juge. La <strong>médiation</strong> fait intervenir un tiers impartial qui aide les parties à trouver elles-mêmes un accord. La <strong>conciliation</strong> est similaire, mais le conciliateur peut proposer une solution. L’<strong>arbitrage</strong> confie le litige à un ou plusieurs arbitres dont la sentence s’impose aux parties. Ces modes présentent des avantages : rapidité, confidentialité et maîtrise du processus. Ils sont encouragés par le législateur et parfois obligatoires en préalable à la saisine du juge pour les litiges de faible montant.</p>`,
    `<h5>Personnalité et capacité</h5><p>La personnalité juridique est l’aptitude à être titulaire de droits et d’obligations. La personne physique l’acquiert à la naissance, si elle naît vivante et viable. Une personne morale la reçoit selon les formalités propres à sa forme. La capacité de jouissance permet d’avoir un droit ; la capacité d’exercice permet de l’exercer soi-même.</p><h5>Le patrimoine</h5><p>Le patrimoine regroupe actif et passif évaluables en argent. Celui d’une société est distinct de celui des associés, ce qui explique notamment la séparation des dettes.</p><h5>Naissance et disparition de la personnalité</h5><p>La personnalité juridique de la <strong>personne physique</strong> commence à la naissance, à condition que l’enfant naisse vivant et viable ; elle s’éteint au décès. La <strong>personne morale</strong> acquiert la personnalité par l’accomplissement de formalités : immatriculation au registre du commerce pour les sociétés, déclaration en préfecture pour les associations. Elle disparaît à la dissolution, suivie de la liquidation. La <strong>représentation</strong> organise l’exercice des droits d’une personne par une autre : parents pour le mineur, tuteur pour le majeur protégé, dirigeant pour la société.</p>`,
    `<h5>Droits patrimoniaux et extrapatrimoniaux</h5><p>Les droits patrimoniaux ont une valeur pécuniaire et sont en principe cessibles, transmissibles et saisissables. Les droits extrapatrimoniaux, comme la vie privée, sont attachés à la personne. Le droit de propriété comporte usage, perception des fruits et disposition, dans les limites de la loi.</p><h5>Identité numérique</h5><p>Droit à l’image et protection des données ne se confondent pas. Une photo identifiable est une donnée personnelle, mais sa diffusion peut aussi porter atteinte au droit à l’image. La personne dispose notamment de droits d’accès, rectification et effacement sous conditions.</p><h5>La propriété intellectuelle</h5><p>La <strong>propriété intellectuelle</strong> protège les créations de l’esprit. Le <strong>droit d’auteur</strong> protège les œuvres originales (textes, musiques, logiciels) dès leur création, sans formalité. Le <strong>brevet</strong> protège une invention nouvelle, inventive et susceptible d’application industrielle, pour une durée de vingt ans. La <strong>marque</strong> protège un signe distinctif (nom, logo) permettant d’identifier un produit ou un service. À l’ère numérique, la contrefaçon se développe et la protection des créations impose une vigilance accrue, notamment sur les plateformes en ligne.</p>`,
    `<h5>Former un contrat valable</h5><p>Un contrat suppose un consentement libre et éclairé, la capacité de contracter et un contenu licite et certain. L’erreur, le dol ou la violence peuvent vicier le consentement. Une fois valablement formé, le contrat a force obligatoire et doit être exécuté de bonne foi.</p><h5>Réagir à l’inexécution</h5><p>Le créancier peut suspendre sa propre obligation, demander l’exécution forcée, une réduction du prix, la résolution et/ou des dommages-intérêts selon les conditions. En droit de la consommation, l’information précontractuelle et le droit de rétractation corrigent le déséquilibre entre professionnel et consommateur.</p><h5>Le contrat de consommation</h5><p>Le droit de la consommation corrige le déséquilibre entre le <strong>professionnel</strong>, présumé mieux informé, et le <strong>consommateur</strong>. Le professionnel a une <strong>obligation d’information précontractuelle</strong> sur les caractéristiques essentielles, le prix et les conditions de vente. Pour les contrats conclus à distance ou hors établissement, le consommateur bénéficie d’un <strong>droit de rétractation</strong> de quatorze jours. Les <strong>clauses abusives</strong>, qui créent un déséquilibre significatif au détriment du consommateur, sont réputées non écrites. Le contrat électronique obéit aux mêmes conditions de validité mais impose des étapes de confirmation spécifiques.</p>`,
    `<h5>Les conditions de la responsabilité civile</h5><p>Réparer suppose un dommage certain, personnel et légitime, un fait générateur et un lien de causalité. Le fait générateur peut être une faute, le fait d’une chose ou le fait d’autrui. La victime doit établir les conditions selon le régime applicable.</p><h5>Civil ou pénal ?</h5><p>La responsabilité civile répare ; la responsabilité pénale sanctionne une infraction. Un même événement peut déclencher les deux. Force majeure, faute de la victime ou fait d’un tiers peuvent exonérer totalement ou partiellement selon leur rôle causal.</p><h5>Les régimes spéciaux de responsabilité</h5><p>Outre la responsabilité pour faute, le droit prévoit des régimes de responsabilité sans faute. La <strong>responsabilité du fait des choses</strong> pèse sur le gardien d’une chose qui cause un dommage : il est présumé responsable sans que la victime ait à prouver une faute. La <strong>responsabilité du fait d’autrui</strong> s’applique aux parents pour leurs enfants mineurs, à l’employeur pour ses salariés ou à l’artisan pour ses apprentis. La <strong>responsabilité du fait des produits défectueux</strong> permet à la victime d’un produit défectueux d’obtenir réparation du producteur. Ces régimes facilitent l’indemnisation en allégeant la charge de la preuve.</p>`,
    `<h5>Le contrat de travail</h5><p>Le lien de subordination distingue le salarié du travailleur indépendant. Le CDI est la forme normale ; le CDD ne peut répondre qu’à un besoin temporaire prévu par la loi et doit respecter un formalisme strict.</p><h5>Pouvoirs et libertés</h5><p>L’employeur dirige, contrôle et sanctionne, mais toute restriction aux libertés doit être justifiée et proportionnée. Un licenciement exige une cause réelle et sérieuse et une procédure. Le droit de grève est une cessation collective et concertée du travail en appui de revendications professionnelles.</p><h5>La négociation collective</h5><p>Au-delà du contrat individuel, les conditions de travail sont encadrées par la <strong>négociation collective</strong> entre employeurs et syndicats représentatifs. La <strong>convention collective</strong> couvre l’ensemble des conditions de travail d’une branche professionnelle ; l’<strong>accord d’entreprise</strong> adapte ces règles au niveau local. Depuis les ordonnances de 2017, l’accord d’entreprise peut prévaloir sur l’accord de branche dans plusieurs domaines (durée du travail, rémunération variable). Les <strong>représentants du personnel</strong> — élus au comité social et économique (CSE) — assurent l’expression collective des salariés et participent aux consultations obligatoires.</p>`,
    `<h5>Choisir un cadre juridique</h5><p>Le choix dépend du nombre de porteurs, du besoin de capitaux, de la gouvernance, de la protection du patrimoine et du régime social. L’entreprise individuelle est simple et sans personnalité distincte ; la société crée une personne morale après immatriculation.</p><h5>La liberté sous contrôle</h5><p>La liberté d’entreprendre et la liberté de concurrence n’autorisent ni confusion, ni dénigrement, ni désorganisation, ni parasitisme. Le droit sanctionne aussi ententes anticoncurrentielles et abus de domination afin de préserver le fonctionnement du marché.</p><h5>L’entrepreneur face au risque</h5><p>Le choix du statut juridique détermine l’étendue de la responsabilité de l’entrepreneur. En <strong>entreprise individuelle</strong>, le patrimoine professionnel et personnel étaient historiquement confondus ; depuis 2022, le patrimoine personnel est protégé par défaut. En <strong>société</strong> (SARL, SAS, SA), la responsabilité est en principe limitée aux apports. La <strong>procédure de sauvegarde</strong> intervient avant la cessation de paiements pour réorganiser l’entreprise. Le <strong>redressement judiciaire</strong> vise à poursuivre l’activité et apurer les dettes. La <strong>liquidation judiciaire</strong> met fin à l’activité lorsque le redressement est impossible.</p>`,
  ],
  economie: [
    `<h5>1. Le problème de la rareté</h5><p>Les besoins humains sont en pratique illimités — se nourrir, se loger, se déplacer, se divertir —, alors que les ressources disponibles (temps, revenu, matières premières, travail) sont limitées. Cette <strong>rareté</strong> oblige chaque individu et chaque société à faire des choix. Tout choix implique un <strong>coût d’opportunité</strong> : la meilleure alternative à laquelle on renonce. Un ménage qui consacre 800 € à un smartphone renonce par exemple à un week-end ou à de l’épargne. Ce raisonnement en termes d’arbitrage est au cœur de la démarche économique.</p><h5>2. Les agents et le circuit économique</h5><p>L’activité économique met en relation cinq catégories d’<strong>agents</strong>. Les <strong>ménages</strong> consomment et offrent leur travail. Les <strong>entreprises</strong> produisent des biens et services marchands. Les <strong>administrations publiques</strong> fournissent des services non marchands financés par les prélèvements obligatoires. Les <strong>institutions financières</strong> collectent l’épargne et accordent des crédits. Le <strong>reste du monde</strong> regroupe les agents extérieurs avec lesquels le pays échange. Ces agents effectuent des opérations — production, consommation, investissement, épargne, exportation — qui forment un <strong>circuit économique</strong> où circulent des flux réels (biens, travail) et des flux monétaires (salaires, prix, impôts).</p><h5>3. L’échange et la spécialisation</h5><p>L’échange permet à chacun de se procurer ce qu’il ne produit pas lui-même. La <strong>division du travail</strong> accroît la productivité en permettant à chaque agent de se concentrer sur ce qu’il fait le mieux. Un boulanger et un maraîcher ont intérêt à échanger pain contre légumes plutôt qu’à tout produire seuls. Cette logique s’applique aussi entre pays et entre entreprises. L’échange s’appuie sur le <strong>marché</strong>, lieu de rencontre entre offre et demande où se forme un prix, mais aussi sur des institutions qui fixent des règles et garantissent la confiance.</p>`,
    `<h5>1. De la production à la valeur ajoutée</h5><p>Produire, c’est créer des biens ou des services en combinant des facteurs de production. La <strong>production marchande</strong> est vendue à un prix couvrant au moins son coût ; la <strong>production non marchande</strong> (éducation publique, justice) est fournie gratuitement ou quasi gratuitement. Pour mesurer la richesse réellement créée, on calcule la <strong>valeur ajoutée</strong> : production − consommations intermédiaires. Si une boulangerie vend pour 200 000 € de pain et achète 80 000 € de farine, énergie et emballage, sa valeur ajoutée est de 120 000 €. Ce sont ces 120 000 € qui rémunèrent le travail, l’État, les prêteurs et l’entreprise elle-même.</p><h5>2. Le PIB et ses limites</h5><p>Le <strong>produit intérieur brut</strong> additionne les valeurs ajoutées de toutes les unités de production résidant sur le territoire pendant un an. C’est l’indicateur de référence de la richesse nationale. Cependant, le PIB ne comptabilise ni le travail domestique, ni le bénévolat, ni les dégradations environnementales. Il ne dit rien de la répartition des revenus : un PIB élevé peut coexister avec de fortes inégalités. Pour comparer dans le temps, on distingue le PIB <strong>nominal</strong> (en euros courants) du PIB <strong>réel</strong> (en volume, corrigé de l’inflation), qui seul reflète une évolution des quantités produites.</p><h5>3. Le partage des revenus</h5><p>La valeur ajoutée est répartie entre plusieurs bénéficiaires. Les <strong>revenus primaires</strong> rémunèrent la participation à la production : salaires pour le travail, intérêts et dividendes pour le capital, revenus mixtes pour les indépendants. La <strong>redistribution</strong> corrige ensuite cette répartition initiale : l’État prélève cotisations et impôts, puis verse des <strong>prestations sociales</strong> (allocations, pensions, indemnités). Le <strong>revenu disponible</strong> obtenu est ce que le ménage peut effectivement consommer ou épargner. L’évolution du partage entre travail et capital fait l’objet de débats économiques récurrents.</p>`,
    `<h5>1. La formation du revenu disponible</h5><p>Le <strong>revenu disponible</strong> est la somme dont un ménage dispose réellement pour consommer ou épargner. Il se calcule ainsi : revenus primaires (salaires, revenus du patrimoine, revenus mixtes) + prestations sociales reçues − prélèvements obligatoires directs (impôt sur le revenu, CSG, cotisations). Par exemple, un salarié percevant 2 400 € net, recevant 200 € d’allocations et payant 150 € d’impôt direct dispose de 2 450 € de revenu disponible. Cette grandeur est essentielle pour analyser le niveau de vie et les comportements de consommation.</p><h5>2. Consommation et pouvoir d’achat</h5><p>La <strong>consommation</strong> représente l’utilisation de biens et services pour satisfaire un besoin. Elle dépend principalement du revenu, mais aussi des prix, du crédit, des anticipations et de facteurs sociologiques (effet d’imitation, normes sociales). Le <strong>pouvoir d’achat</strong> mesure la quantité de biens et services qu’un revenu permet d’acquérir. Il n’augmente que si le revenu progresse plus vite que les prix. Si un salaire augmente de 2 % et l’inflation atteint 3 %, le pouvoir d’achat diminue d’environ 1 %. L’<strong>indice des prix à la consommation</strong> (IPC) sert de référence pour cette mesure.</p><h5>3. L’épargne et ses déterminants</h5><p>L’<strong>épargne</strong> est la part du revenu disponible non consommée. Le <strong>taux d’épargne</strong> rapporte l’épargne au revenu disponible. Les motifs d’épargne sont variés : <strong>précaution</strong> (faire face à un imprévu), <strong>projet</strong> (achat immobilier, études), <strong>transmission</strong> (patrimoine) ou <strong>rendement</strong> (placements financiers). L’épargne peut être financière (livret, assurance-vie, actions) ou non financière (investissement immobilier). Le niveau des taux d’intérêt, la confiance dans l’avenir et la fiscalité influencent le choix entre consommation immédiate et épargne.</p>`,
    `<h5>1. Capacité et besoin de financement</h5><p>Tout agent économique qui investit compare son épargne à sa dépense d’investissement. Si l’épargne excède l’investissement, il est en <strong>capacité de financement</strong> et peut prêter le surplus. S’il investit davantage qu’il n’épargne, il est en <strong>besoin de financement</strong> et doit trouver des ressources extérieures. En France, les ménages sont globalement en capacité de financement, tandis que les entreprises et l’État sont structurellement en besoin. Le système financier organise la rencontre entre agents en capacité et agents en besoin.</p><h5>2. Financement direct et indirect</h5><p>Le <strong>financement interne</strong> (autofinancement) utilise les bénéfices non distribués de l’entreprise. Le <strong>financement externe</strong> fait appel à des tiers et prend deux formes. Le financement <strong>indirect</strong> passe par un intermédiaire, principalement la banque, qui collecte des dépôts et accorde des crédits ; elle réalise aussi de la <strong>création monétaire</strong> en prêtant au-delà des dépôts. Le financement <strong>direct</strong> met en relation épargnants et emprunteurs sur le marché des capitaux, via des <strong>actions</strong> (titres de propriété) ou des <strong>obligations</strong> (titres de dette). Chaque mode présente des avantages et des contraintes en termes de coût, de risque et de contrôle.</p><h5>3. Les choix de placement</h5><p>Trois critères guident les décisions financières : le <strong>rendement</strong> (gain espéré), le <strong>risque</strong> (possibilité de perte) et la <strong>liquidité</strong> (facilité à récupérer son argent). En règle générale, un placement plus risqué offre un rendement potentiel plus élevé, et un placement très liquide rapporte moins. Un livret d’épargne est très liquide et peu risqué mais faiblement rémunéré ; une action peut rapporter davantage mais sa valeur fluctue. La <strong>diversification</strong> — répartir ses placements sur plusieurs supports — permet de réduire le risque global sans sacrifier tout le rendement.</p>`,
    `<h5>1. Le mécanisme de l’offre et de la demande</h5><p>Sur un marché, la <strong>demande</strong> exprime les quantités que les acheteurs souhaitent acquérir à chaque niveau de prix : elle décroît généralement quand le prix augmente. L’<strong>offre</strong> exprime les quantités que les vendeurs sont prêts à proposer : elle croît généralement avec le prix. Le <strong>prix d’équilibre</strong> est celui pour lequel offre et demande coïncident. L’<strong>élasticité-prix de la demande</strong> mesure la sensibilité de la demande à une variation de prix : si une hausse de 10 % du prix réduit la demande de 20 %, l’élasticité vaut −2. Plus la demande est élastique, plus le consommateur réagit au prix.</p><h5>2. Les structures de marché</h5><p>La <strong>concurrence pure et parfaite</strong> suppose un grand nombre d’offreurs et de demandeurs, un produit homogène, une information transparente et la libre entrée. Ces conditions sont rarement réunies. En <strong>monopole</strong>, un seul offreur fixe les prix ; en <strong>oligopole</strong>, quelques entreprises dominent et leurs décisions sont interdépendantes. Le <strong>pouvoir de marché</strong> désigne la capacité d’une entreprise à fixer un prix supérieur au coût marginal. Il est renforcé par les <strong>barrières à l’entrée</strong> — brevets, investissements lourds, effets de réseau — qui limitent l’arrivée de nouveaux concurrents.</p><h5>3. Les défaillances de marché</h5><p>Le marché ne produit pas toujours un résultat optimal pour la collectivité. Une <strong>externalité</strong> apparaît lorsqu’une activité affecte un tiers sans compensation : la pollution est une externalité négative, la vaccination une externalité positive. Un <strong>bien public</strong> (éclairage urbain, défense) est non rival et non excluable : le marché ne le produit pas spontanément. L’<strong>asymétrie d’information</strong> avantage l’une des parties (le vendeur connaît mieux le produit que l’acheteur). Ces défaillances justifient l’<strong>intervention publique</strong> : taxes, normes, subventions ou production directe par l’État.</p>`,
    `<h5>1. Les trois fonctions économiques de l’État</h5><p>L’État intervient dans l’économie selon trois grandes fonctions identifiées par l’économiste Musgrave. La fonction d’<strong>allocation</strong> consiste à produire ou financer des biens et services que le marché ne fournit pas efficacement (infrastructure, éducation, justice). La fonction de <strong>redistribution</strong> vise à réduire les inégalités de revenus par les prélèvements progressifs et les prestations sociales. La fonction de <strong>stabilisation</strong> cherche à atténuer les fluctuations économiques — récession, inflation, chômage — par des politiques conjoncturelles adaptées.</p><h5>2. Le budget et les finances publiques</h5><p>Le <strong>budget de l’État</strong> retrace l’ensemble des recettes (impôts directs et indirects, cotisations) et des dépenses (fonctionnement, investissement, transferts) sur une année. Le <strong>solde budgétaire</strong> est la différence entre recettes et dépenses. Lorsqu’il est négatif, on parle de <strong>déficit</strong>. L’accumulation des déficits financés par l’emprunt constitue la <strong>dette publique</strong>, souvent exprimée en pourcentage du PIB. Un niveau élevé de dette accroît la charge d’intérêts et peut limiter les marges de manœuvre futures, mais l’appréciation de sa soutenabilité dépend aussi de la croissance et des taux d’intérêt.</p><h5>3. Les politiques économiques</h5><p>Les <strong>politiques conjoncturelles</strong> agissent à court terme sur la demande globale. Une <strong>politique budgétaire</strong> de relance augmente les dépenses ou réduit les impôts pour soutenir l’activité, au risque d’aggraver le déficit. Une <strong>politique monétaire</strong> expansionniste abaisse les taux d’intérêt pour faciliter le crédit et l’investissement. Les <strong>politiques structurelles</strong> visent à transformer durablement les capacités productives : réforme de l’éducation, investissement dans la recherche, réglementation du marché du travail. Toute politique présente des effets attendus et des effets pervers qu’il convient d’identifier et de mettre en balance.</p>`,
    `<h5>1. Le marché du travail</h5><p>Le marché du travail confronte l’<strong>offre de travail</strong> (les personnes qui souhaitent travailler) et la <strong>demande de travail</strong> (les emplois proposés par les employeurs). La <strong>population active</strong> regroupe les personnes en emploi et les chômeurs. Le <strong>taux d’activité</strong> rapporte la population active à la population en âge de travailler. Le <strong>taux d’emploi</strong> mesure la proportion de personnes effectivement en emploi. Ces indicateurs permettent de distinguer les situations où le chômage baisse parce que des emplois sont créés de celles où des personnes sortent simplement de la population active.</p><h5>2. Les formes et la mesure du chômage</h5><p>Le <strong>chômage</strong> au sens du BIT concerne toute personne sans emploi, disponible et en recherche active. Le <strong>taux de chômage</strong> rapporte les chômeurs à la population active. Le <strong>chômage conjoncturel</strong> résulte d’un ralentissement de l’activité économique : la demande de biens diminue, les entreprises réduisent leurs effectifs. Le <strong>chômage structurel</strong> persiste même en période de croissance, en raison d’inadéquations entre les compétences offertes et recherchées, de rigidités du marché ou de mutations technologiques. Un même pays peut connaître les deux simultanément.</p><h5>3. Les politiques de l’emploi</h5><p>Les <strong>politiques passives</strong> (indemnisation du chômage) assurent un revenu de remplacement et soutiennent la consommation. Les <strong>politiques actives</strong> visent à favoriser le retour à l’emploi : formation professionnelle, aides à l’embauche, accompagnement personnalisé, contrats aidés. D’autres leviers agissent sur le <strong>coût du travail</strong> (allègements de cotisations sur les bas salaires) ou sur la <strong>flexibilité</strong> du marché (faciliter les transitions entre emplois). L’investissement en <strong>capital humain</strong> — éducation, formation continue — améliore l’appariement et la productivité à long terme, mais ses effets ne se manifestent qu’avec un décalage temporel.</p>`,
    `<h5>1. L’avantage comparatif et la spécialisation</h5><p>Le commerce international repose sur le principe de l’<strong>avantage comparatif</strong>, formulé par Ricardo : chaque pays a intérêt à se spécialiser dans les productions pour lesquelles son coût relatif est le plus faible, même s’il est moins productif que ses partenaires dans tous les domaines. Un pays qui produit du vin à un coût relatif inférieur au textile a intérêt à exporter du vin et importer du textile. La spécialisation accroît la production globale et permet à chaque partenaire de consommer davantage qu’en autarcie.</p><h5>2. Le libre-échange et ses effets</h5><p>Le <strong>libre-échange</strong> consiste à supprimer les obstacles aux échanges commerciaux entre pays. Il élargit les débouchés pour les producteurs, offre plus de choix et des prix plus bas aux consommateurs, et stimule l’innovation par la concurrence. Cependant, ses gains sont <strong>inégalement répartis</strong> : certains secteurs et travailleurs sont exposés à une concurrence accrue qui peut entraîner des pertes d’emplois et des restructurations. Les organisations internationales (OMC) encadrent les échanges par des règles multilatérales, tandis que les accords régionaux (UE, Mercosur) créent des zones préférentielles.</p><h5>3. Le protectionnisme et ses instruments</h5><p>Le <strong>protectionnisme</strong> vise à protéger les productions nationales de la concurrence étrangère. Ses principaux instruments sont les <strong>droits de douane</strong> (taxes à l’importation qui renchérissent les produits étrangers), les <strong>quotas</strong> (limitations quantitatives) et les <strong>barrières non tarifaires</strong> (normes techniques, sanitaires, subventions). L’argument de l’<strong>industrie naissante</strong> justifie une protection temporaire le temps qu’un secteur atteigne une taille compétitive. Mais le protectionnisme comporte des risques : hausse des prix pour les consommateurs, représailles commerciales et perte d’efficacité globale.</p>`,
    `<h5>1. Les sources de la croissance</h5><p>La <strong>croissance économique</strong> désigne l’augmentation durable de la production, mesurée par le taux de variation du PIB réel. La croissance <strong>extensive</strong> résulte de l’accumulation des facteurs de production (plus de travailleurs, plus de machines). La croissance <strong>intensive</strong> provient des gains de <strong>productivité</strong>, c’est-à-dire d’une utilisation plus efficace des facteurs, notamment grâce à l’<strong>innovation</strong> (nouveaux produits, nouveaux procédés) et au <strong>progrès technique</strong>. Le résidu de Solow désigne la part de la croissance non expliquée par l’augmentation quantitative des facteurs.</p><h5>2. Croissance et développement</h5><p>La <strong>croissance</strong> est un phénomène quantitatif ; le <strong>développement</strong> est un processus qualitatif qui englobe l’amélioration des conditions de vie, l’accès à l’éducation et à la santé, la réduction des inégalités. L’<strong>IDH</strong> (indice de développement humain) combine espérance de vie, niveau d’éducation et revenu par habitant pour donner une image plus complète qu’un simple PIB. Un pays peut connaître une croissance forte sans que le développement suive, si les richesses restent concentrées ou si les indicateurs sociaux stagnent.</p><h5>3. Vers une croissance soutenable</h5><p>La croissance peut dégrader l’environnement par l’épuisement des ressources, la pollution et le changement climatique. Le <strong>développement durable</strong> vise à concilier efficacité économique, équité sociale et préservation de l’environnement. Plusieurs instruments permettent d’<strong>internaliser les externalités</strong> : la <strong>taxe</strong> (taxe carbone) augmente le coût de la pollution, la <strong>norme</strong> fixe un seuil d’émission, le <strong>quota échangeable</strong> crée un marché de droits à polluer, la <strong>subvention</strong> encourage les comportements vertueux. Chaque instrument présente des avantages et des limites en termes d’efficacité et de justice redistributive.</p>`,
  ],
  sgn: [
    `<h5>1. Comprendre le comportement individuel</h5><p>Le comportement d’un individu dans une organisation dépend de plusieurs facteurs psychologiques. La <strong>personnalité</strong> regroupe les traits stables qui caractérisent une personne (extraversion, ouverture, conscience). Les <strong>émotions</strong> — joie, colère, peur, surprise — influencent la prise de décision et les relations interpersonnelles. La <strong>perception</strong> est le processus par lequel chacun sélectionne, organise et interprète les informations reçues : deux personnes peuvent percevoir différemment un même message selon leur expérience et leur cadre de référence. L’<strong>attitude</strong> prédispose à réagir favorablement ou défavorablement face à une situation.</p><h5>2. La compétence au cœur de l’activité</h5><p>La <strong>compétence</strong> ne se réduit pas à un savoir théorique. Elle combine trois dimensions : les <strong>connaissances</strong> (savoirs), les <strong>savoir-faire</strong> (capacités pratiques) et les <strong>savoir-être</strong> (comportements adaptés à la situation). On distingue la compétence <strong>individuelle</strong>, propre à une personne, de la compétence <strong>collective</strong>, qui émerge de la coopération au sein d’une équipe. C’est en <strong>situation professionnelle</strong> que la compétence se manifeste : un diplôme atteste des connaissances, mais c’est la capacité à les mobiliser face à un problème concret qui fait la compétence.</p><h5>3. Le groupe et la culture organisationnelle</h5><p>Un <strong>groupe</strong> réunit des individus partageant un objectif commun, des <strong>normes</strong> (règles de conduite implicites ou explicites) et des <strong>rôles</strong> (fonctions attendues de chacun). Le <strong>leadership</strong> — capacité à orienter et mobiliser le groupe — peut être formel (désigné) ou informel (reconnu par les pairs). La <strong>culture organisationnelle</strong> est l’ensemble des valeurs, croyances et pratiques partagées au sein de l’organisation. L’individu devient <strong>acteur</strong> lorsqu’il ne se contente pas de subir les règles mais les interprète, les adapte et contribue activement à la réalisation des objectifs collectifs.</p>`,
    `<h5>1. De la donnée à la connaissance</h5><p>Une <strong>donnée</strong> est un élément brut, sans contexte : un chiffre, un nom, une date. Elle devient <strong>information</strong> lorsqu’elle est organisée, contextualisée et porteuse de sens — par exemple, un tableau de ventes mensuel permet de repérer une tendance. L’information se transforme en <strong>connaissance</strong> lorsqu’un acteur se l’approprie et peut l’utiliser pour agir et décider. Cette chaîne donnée → information → connaissance est fondamentale : la valeur ne réside pas dans la donnée brute, mais dans la capacité de l’organisation à la transformer en aide à la décision.</p><h5>2. Le système d’information</h5><p>Le <strong>système d’information</strong> (SI) réunit les <strong>acteurs</strong> (utilisateurs, gestionnaires), les <strong>règles</strong> (procédures, droits d’accès), les <strong>outils</strong> (logiciels, réseaux, bases de données) et les <strong>données</strong> nécessaires pour collecter, stocker, traiter et diffuser l’information. Le SI ne se réduit pas à l’informatique : il inclut aussi les procédures humaines et organisationnelles. Un <strong>processus</strong> est une suite coordonnée d’activités aboutissant à un résultat : traitement d’une commande, recrutement, gestion de stock. Le SI supporte ces processus en automatisant certaines tâches et en facilitant la circulation de l’information.</p><h5>3. Numérique et travail collaboratif</h5><p>Les outils numériques — messageries, plateformes collaboratives, réseaux sociaux d’entreprise, espaces de stockage partagés — facilitent le <strong>travail collaboratif</strong> en permettant l’échange instantané, le partage de documents et la co-construction à distance. L’<strong>intelligence collective</strong> émerge lorsque la collaboration produit un résultat supérieur à la somme des contributions individuelles. Cependant, le numérique présente des <strong>risques</strong> : surcharge informationnelle, dépendance technologique, menaces sur la sécurité des données, <strong>traces numériques</strong> involontaires et exclusion des personnes peu à l’aise avec les outils. L’organisation doit encadrer les usages pour en tirer le meilleur parti.</p>`,
    `<h5>1. Les différentes formes de valeur</h5><p>La notion de valeur est multidimensionnelle dans une organisation. La <strong>valeur ajoutée</strong> mesure la richesse effectivement créée par l’activité (production − consommations intermédiaires). La <strong>valeur financière</strong> intéresse les apporteurs de capitaux : elle s’évalue par la rentabilité, le cours de l’action ou la capacité à générer des flux de trésorerie. La <strong>valeur perçue</strong> dépend du jugement du client sur l’utilité du produit, sa qualité, son image et son rapport qualité-prix. La <strong>valeur sociale</strong> concerne les conditions de travail, la formation, l’insertion et le développement humain au sein de l’organisation.</p><h5>2. Mesurer la performance</h5><p>La <strong>performance</strong> exprime la capacité d’une organisation à atteindre ses objectifs. Elle ne se limite pas aux résultats financiers : elle est <strong>multidimensionnelle</strong>. Un <strong>indicateur</strong> est une donnée chiffrée qui permet de suivre un objectif — chiffre d’affaires, taux de satisfaction client, taux d’absentéisme, empreinte carbone. Un <strong>tableau de bord</strong> regroupe un ensemble d’indicateurs clés, présentés de manière synthétique, pour piloter l’activité et prendre des décisions. Le choix des indicateurs dépend des objectifs de l’organisation et de ses parties prenantes.</p><h5>3. Efficacité et efficience</h5><p>L’<strong>efficacité</strong> désigne le degré d’atteinte des objectifs : une organisation est efficace si elle réalise ce qu’elle s’est fixé. L’<strong>efficience</strong> compare les résultats obtenus aux ressources consommées : une organisation est efficiente si elle atteint ses objectifs en utilisant le minimum de moyens. Une campagne publicitaire qui atteint ses objectifs de notoriété mais à un coût disproportionné est efficace mais peu efficiente. Ces deux notions ne sont pas toujours compatibles : la recherche d’efficience à tout prix peut nuire à la qualité du service, et inversement. Toute évaluation de la performance doit croiser les points de vue des différentes <strong>parties prenantes</strong>.</p>`,
    `<h5>1. La dimension temporelle de la décision</h5><p>Toute décision s’inscrit dans le temps et engage l’avenir. Une décision de <strong>court terme</strong> (achat de fournitures) est facilement réversible ; une décision de <strong>long terme</strong> (investissement, recrutement) engage l’organisation durablement et coûte cher à modifier. L’<strong>horizon de décision</strong> détermine les informations à collecter et les outils à mobiliser. Une action immédiate peut produire des effets pendant des années. La <strong>veille</strong> — surveillance continue de l’environnement (concurrentiel, technologique, réglementaire) — fournit les signaux qui permettent d’anticiper les changements et de réagir à temps.</p><h5>2. Identifier et évaluer les risques</h5><p>Un <strong>risque</strong> est un événement incertain qui, s’il se réalise, peut avoir des conséquences négatives sur l’organisation. Il se caractérise par sa <strong>probabilité</strong> d’occurrence et sa <strong>gravité</strong> (impact en cas de réalisation). On distingue plusieurs catégories : risque financier, commercial, technologique, juridique, humain, environnemental. Une <strong>matrice de risques</strong> croise probabilité et gravité pour hiérarchiser les menaces et concentrer les efforts sur les plus critiques. L’incertitude, contrairement au risque, ne peut pas être chiffrée par une probabilité — elle requiert prudence et adaptabilité.</p><h5>3. Les outils de gestion du temps et du risque</h5><p>Face au risque, l’organisation peut <strong>éviter</strong> l’activité risquée, <strong>prévenir</strong> en réduisant la probabilité, <strong>transférer</strong> (assurance, sous-traitance) ou <strong>accepter</strong> le risque résiduel. La <strong>prévision</strong> et les <strong>scénarios</strong> aident à se préparer à plusieurs futurs possibles. L’<strong>actualisation</strong> permet de comparer des sommes disponibles à des dates différentes : un euro aujourd’hui vaut plus qu’un euro demain, car il peut être placé. La <strong>gestion de projet</strong> (planification, jalons, suivi) structure l’action dans le temps et coordonne les ressources pour maîtriser délais, coûts et qualité.</p>`,
  ],
};
const teachingProfiles = {
  cejm: {
    question:
      'Quelle décision l’entreprise doit-elle prendre et quelles dimensions faut-il croiser ?',
    method: [
      'Identifier le problème de l’entreprise.',
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
      'Quel mécanisme explique la situation et quels indicateurs permettent de l’observer ?',
    method: [
      'Définir la notion centrale.',
      'Repérer acteurs, flux et variables.',
      'Dérouler les causes et les effets.',
      'Exploiter et interpréter les données.',
      'Conclure avec une limite.',
    ],
    errors: [
      'Confondre corrélation et causalité.',
      'Citer un chiffre sans l’interpréter.',
      'Présenter un mécanisme comme automatique.',
    ],
  },
  sgn: {
    question:
      'Comment l’organisation transforme-t-elle ses ressources pour atteindre ses objectifs ?',
    method: [
      'Identifier organisation, finalité et acteurs.',
      'Sélectionner données et notions.',
      'Calculer si nécessaire.',
      'Interpréter selon l’objectif.',
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
    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>Le circuit des échanges de l'entreprise</b></div><svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circuit des échanges entre l'entreprise et ses partenaires"><defs><marker id="ah1" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#5b8db8"/></marker><marker id="ah1r" markerWidth="8" markerHeight="6" refX="0" refY="3" orient="auto"><path d="M8,0 L0,3 L8,6" fill="#ef6a5b"/></marker></defs><rect x="250" y="140" width="200" height="80" rx="14" fill="#132b38"/><text x="350" y="175" text-anchor="middle" fill="#fff" font-weight="800" font-size="16" font-family="Manrope,sans-serif">ENTREPRISE</text><text x="350" y="198" text-anchor="middle" fill="#b4c2c6" font-size="11" font-family="DM Sans,sans-serif">Production de biens/services</text><rect x="20" y="20" width="140" height="56" rx="10" fill="#f2f5f2" stroke="#dfe2dc"/><text x="90" y="45" text-anchor="middle" fill="#132b38" font-weight="700" font-size="13" font-family="Manrope,sans-serif">Ménages</text><text x="90" y="62" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Travail / Consommation</text><rect x="540" y="20" width="140" height="56" rx="10" fill="#f2f5f2" stroke="#dfe2dc"/><text x="610" y="45" text-anchor="middle" fill="#132b38" font-weight="700" font-size="13" font-family="Manrope,sans-serif">Banques</text><text x="610" y="62" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Crédit / Épargne</text><rect x="20" y="290" width="140" height="56" rx="10" fill="#f2f5f2" stroke="#dfe2dc"/><text x="90" y="315" text-anchor="middle" fill="#132b38" font-weight="700" font-size="13" font-family="Manrope,sans-serif">Fournisseurs</text><text x="90" y="332" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Matières / Services</text><rect x="540" y="290" width="140" height="56" rx="10" fill="#f2f5f2" stroke="#dfe2dc"/><text x="610" y="315" text-anchor="middle" fill="#132b38" font-weight="700" font-size="13" font-family="Manrope,sans-serif">État</text><text x="610" y="332" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Impôts / Services publics</text><rect x="280" y="310" width="140" height="46" rx="10" fill="#fff7e7" stroke="#e8b74f"/><text x="350" y="337" text-anchor="middle" fill="#9a6c2a" font-weight="700" font-size="12" font-family="Manrope,sans-serif">Clients</text><line x1="160" y1="55" x2="248" y2="152" stroke="#5b8db8" stroke-width="2" marker-end="url(#ah1)"/><text x="165" y="95" fill="#5b8db8" font-size="9" font-weight="600" font-family="DM Sans,sans-serif">Travail</text><line x1="248" y1="168" x2="160" y2="70" stroke="#ef6a5b" stroke-width="2" marker-end="url(#ah1r)"/><text x="165" y="115" fill="#ef6a5b" font-size="9" font-weight="600" font-family="DM Sans,sans-serif">Salaires</text><line x1="452" y1="155" x2="538" y2="60" stroke="#5b8db8" stroke-width="2" marker-end="url(#ah1)"/><text x="535" y="95" text-anchor="end" fill="#5b8db8" font-size="9" font-weight="600" font-family="DM Sans,sans-serif">Remboursements</text><line x1="538" y1="68" x2="452" y2="162" stroke="#ef6a5b" stroke-width="2" marker-end="url(#ah1r)"/><text x="535" y="115" text-anchor="end" fill="#ef6a5b" font-size="9" font-weight="600" font-family="DM Sans,sans-serif">Crédits</text><line x1="160" y1="310" x2="248" y2="215" stroke="#5b8db8" stroke-width="2" marker-end="url(#ah1)"/><text x="165" y="260" fill="#5b8db8" font-size="9" font-weight="600" font-family="DM Sans,sans-serif">Biens/Services</text><line x1="248" y1="210" x2="160" y2="300" stroke="#ef6a5b" stroke-width="2" marker-end="url(#ah1r)"/><text x="165" y="278" fill="#ef6a5b" font-size="9" font-weight="600" font-family="DM Sans,sans-serif">Paiements</text><line x1="452" y1="215" x2="538" y2="300" stroke="#ef6a5b" stroke-width="2" marker-end="url(#ah1)"/><text x="535" y="278" text-anchor="end" fill="#ef6a5b" font-size="9" font-weight="600" font-family="DM Sans,sans-serif">Impôts</text><line x1="538" y1="295" x2="452" y2="210" stroke="#5b8db8" stroke-width="2" marker-end="url(#ah1r)"/><text x="535" y="260" text-anchor="end" fill="#5b8db8" font-size="9" font-weight="600" font-family="DM Sans,sans-serif">Infrastructures</text><line x1="350" y1="222" x2="350" y2="307" stroke="#e8b74f" stroke-width="2" marker-end="url(#ah1)"/><text x="365" y="270" fill="#9a6c2a" font-size="9" font-family="DM Sans,sans-serif">Produits</text><rect x="580" y="155" width="110" height="50" rx="8" fill="#fff" stroke="#dfe2dc"/><text x="635" y="176" text-anchor="middle" fill="#5b8db8" font-weight="700" font-size="10" font-family="DM Sans,sans-serif">Flux réels →</text><text x="635" y="193" text-anchor="middle" fill="#ef6a5b" font-weight="700" font-size="10" font-family="DM Sans,sans-serif">← Flux monétaires</text></svg></div>`,

    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>Le modèle PESTEL</b></div><svg viewBox="0 0 700 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Modèle PESTEL : 6 dimensions du macro-environnement"><rect x="250" y="160" width="200" height="80" rx="14" fill="#132b38"/><text x="350" y="195" text-anchor="middle" fill="#fff" font-weight="800" font-size="15" font-family="Manrope,sans-serif">ENTREPRISE</text><text x="350" y="215" text-anchor="middle" fill="#b4c2c6" font-size="10" font-family="DM Sans,sans-serif">Macro-environnement</text><g><rect x="10" y="0" width="190" height="68" rx="10" fill="#ef6a5b" opacity="0.12" stroke="#ef6a5b" stroke-width="1.5"/><text x="105" y="24" text-anchor="middle" fill="#ef6a5b" font-weight="800" font-size="12" font-family="Manrope,sans-serif">P — Politique</text><text x="105" y="42" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Stabilité, fiscalité,</text><text x="105" y="56" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">subventions, politique publique</text><line x1="200" y1="50" x2="250" y2="165" stroke="#ef6a5b" stroke-width="1.5" stroke-dasharray="4 3"/></g><g><rect x="250" y="0" width="190" height="68" rx="10" fill="#e8b74f" opacity="0.15" stroke="#e8b74f" stroke-width="1.5"/><text x="345" y="24" text-anchor="middle" fill="#9a6c2a" font-weight="800" font-size="12" font-family="Manrope,sans-serif">E — Économique</text><text x="345" y="42" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Croissance, inflation,</text><text x="345" y="56" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">taux de change, pouvoir d'achat</text><line x1="345" y1="68" x2="345" y2="158" stroke="#e8b74f" stroke-width="1.5" stroke-dasharray="4 3"/></g><g><rect x="500" y="0" width="190" height="68" rx="10" fill="#87a99b" opacity="0.18" stroke="#87a99b" stroke-width="1.5"/><text x="595" y="24" text-anchor="middle" fill="#477565" font-weight="800" font-size="12" font-family="Manrope,sans-serif">S — Socioculturel</text><text x="595" y="42" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Démographie, modes de vie,</text><text x="595" y="56" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">valeurs, niveau d'éducation</text><line x1="500" y1="50" x2="450" y2="168" stroke="#87a99b" stroke-width="1.5" stroke-dasharray="4 3"/></g><g><rect x="10" y="340" width="190" height="68" rx="10" fill="#5b8db8" opacity="0.12" stroke="#5b8db8" stroke-width="1.5"/><text x="105" y="364" text-anchor="middle" fill="#5b8db8" font-weight="800" font-size="12" font-family="Manrope,sans-serif">T — Technologique</text><text x="105" y="382" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Innovation, R&D, brevets,</text><text x="105" y="396" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">transfert de technologie</text><line x1="200" y1="355" x2="255" y2="240" stroke="#5b8db8" stroke-width="1.5" stroke-dasharray="4 3"/></g><g><rect x="250" y="340" width="190" height="68" rx="10" fill="#87a99b" opacity="0.25" stroke="#55806f" stroke-width="1.5"/><text x="345" y="364" text-anchor="middle" fill="#477565" font-weight="800" font-size="12" font-family="Manrope,sans-serif">E — Écologique</text><text x="345" y="382" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Normes environnementales,</text><text x="345" y="396" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">climat, ressources naturelles</text><line x1="345" y1="340" x2="345" y2="242" stroke="#55806f" stroke-width="1.5" stroke-dasharray="4 3"/></g><g><rect x="500" y="340" width="190" height="68" rx="10" fill="#ef6a5b" opacity="0.08" stroke="#c2543f" stroke-width="1.5"/><text x="595" y="364" text-anchor="middle" fill="#c2543f" font-weight="800" font-size="12" font-family="Manrope,sans-serif">L — Légal</text><text x="595" y="382" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Droit du travail, normes,</text><text x="595" y="396" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">réglementation sectorielle</text><line x1="500" y1="358" x2="450" y2="235" stroke="#c2543f" stroke-width="1.5" stroke-dasharray="4 3"/></g><text x="350" y="290" text-anchor="middle" fill="#65747b" font-size="10" font-style="italic" font-family="DM Sans,sans-serif">Chaque facteur = opportunité ou menace à qualifier</text></svg></div>`,

    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>Faire ou faire faire : l'arbitrage</b></div><svg viewBox="0 0 700 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparaison internaliser versus externaliser"><text x="350" y="28" text-anchor="middle" fill="#132b38" font-weight="800" font-size="14" font-family="Manrope,sans-serif">L'entreprise doit-elle produire elle-même ou sous-traiter ?</text><line x1="350" y1="42" x2="350" y2="75" stroke="#dfe2dc" stroke-width="2"/><line x1="175" y1="75" x2="525" y2="75" stroke="#dfe2dc" stroke-width="2"/><line x1="175" y1="75" x2="175" y2="95" stroke="#dfe2dc" stroke-width="2"/><line x1="525" y1="75" x2="525" y2="95" stroke="#dfe2dc" stroke-width="2"/><rect x="50" y="95" width="250" height="210" rx="12" fill="#132b38" opacity="0.04" stroke="#132b38" stroke-width="1.5"/><text x="175" y="122" text-anchor="middle" fill="#132b38" font-weight="800" font-size="14" font-family="Manrope,sans-serif">INTERNALISER</text><text x="175" y="140" text-anchor="middle" fill="#477565" font-weight="700" font-size="10" font-family="DM Sans,sans-serif">Produire soi-même</text><g fill="#485c64" font-size="11" font-family="DM Sans,sans-serif"><text x="75" y="168">✓ Maîtrise du savoir-faire</text><text x="75" y="190">✓ Contrôle qualité direct</text><text x="75" y="212">✓ Indépendance</text><text x="75" y="234">✓ Protège l'avantage concurrentiel</text><text x="75" y="264" fill="#ef6a5b">✗ Coûts fixes élevés</text><text x="75" y="286" fill="#ef6a5b">✗ Rigidité, investissements lourds</text></g><rect x="400" y="95" width="250" height="210" rx="12" fill="#5b8db8" opacity="0.06" stroke="#5b8db8" stroke-width="1.5"/><text x="525" y="122" text-anchor="middle" fill="#5b8db8" font-weight="800" font-size="14" font-family="Manrope,sans-serif">EXTERNALISER</text><text x="525" y="140" text-anchor="middle" fill="#5b8db8" font-weight="700" font-size="10" font-family="DM Sans,sans-serif">Confier à un prestataire</text><g fill="#485c64" font-size="11" font-family="DM Sans,sans-serif"><text x="425" y="168">✓ Flexibilité</text><text x="425" y="190">✓ Expertise externe</text><text x="425" y="212">✓ Coûts variables</text><text x="425" y="234">✓ Recentrage sur le cœur de métier</text><text x="425" y="264" fill="#ef6a5b">✗ Coûts de transaction</text><text x="425" y="286" fill="#ef6a5b">✗ Dépendance / perte de contrôle</text></g></svg></div>`,

    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>De la donnée à la décision</b></div><svg viewBox="0 0 700 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chaîne donnée information connaissance décision"><defs><marker id="ahf" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#5b8db8"/></marker></defs><rect x="20" y="50" width="130" height="90" rx="12" fill="#f2f5f2" stroke="#dfe2dc" stroke-width="1.5"/><text x="85" y="82" text-anchor="middle" fill="#132b38" font-weight="800" font-size="14" font-family="Manrope,sans-serif">DONNÉE</text><text x="85" y="100" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Élément brut</text><text x="85" y="116" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">sans contexte</text><line x1="152" y1="95" x2="188" y2="95" stroke="#5b8db8" stroke-width="2" marker-end="url(#ahf)"/><rect x="190" y="50" width="140" height="90" rx="12" fill="#5b8db8" opacity="0.1" stroke="#5b8db8" stroke-width="1.5"/><text x="260" y="82" text-anchor="middle" fill="#5b8db8" font-weight="800" font-size="14" font-family="Manrope,sans-serif">INFORMATION</text><text x="260" y="100" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Donnée organisée</text><text x="260" y="116" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">et contextualisée</text><line x1="332" y1="95" x2="368" y2="95" stroke="#5b8db8" stroke-width="2" marker-end="url(#ahf)"/><rect x="370" y="50" width="140" height="90" rx="12" fill="#e8b74f" opacity="0.15" stroke="#e8b74f" stroke-width="1.5"/><text x="440" y="82" text-anchor="middle" fill="#9a6c2a" font-weight="800" font-size="14" font-family="Manrope,sans-serif">CONNAISSANCE</text><text x="440" y="100" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Information appropriée</text><text x="440" y="116" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">par un acteur</text><line x1="512" y1="95" x2="548" y2="95" stroke="#5b8db8" stroke-width="2" marker-end="url(#ahf)"/><rect x="550" y="50" width="130" height="90" rx="12" fill="#132b38"/><text x="615" y="82" text-anchor="middle" fill="#fff" font-weight="800" font-size="14" font-family="Manrope,sans-serif">DÉCISION</text><text x="615" y="100" text-anchor="middle" fill="#b4c2c6" font-size="10" font-family="DM Sans,sans-serif">Action fondée</text><text x="615" y="116" text-anchor="middle" fill="#b4c2c6" font-size="10" font-family="DM Sans,sans-serif">sur la connaissance</text><text x="140" y="170" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Structuration</text><text x="320" y="170" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Appropriation</text><text x="500" y="170" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Exploitation</text><text x="350" y="195" text-anchor="middle" fill="#65747b" font-size="10" font-style="italic" font-family="DM Sans,sans-serif">Le SI organise cette chaîne — le RGPD encadre la collecte et l'usage</text></svg></div>`,

    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>La relation de travail</b></div><svg viewBox="0 0 700 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Structure de la relation de travail salarié"><rect x="225" y="10" width="250" height="60" rx="12" fill="#132b38"/><text x="350" y="40" text-anchor="middle" fill="#fff" font-weight="800" font-size="15" font-family="Manrope,sans-serif">CONTRAT DE TRAVAIL</text><text x="350" y="58" text-anchor="middle" fill="#b4c2c6" font-size="10" font-family="DM Sans,sans-serif">Prestation + Rémunération + Subordination</text><line x1="125" y1="70" x2="125" y2="110" stroke="#dfe2dc" stroke-width="2"/><line x1="350" y1="70" x2="350" y2="110" stroke="#dfe2dc" stroke-width="2"/><line x1="575" y1="70" x2="575" y2="110" stroke="#dfe2dc" stroke-width="2"/><rect x="25" y="110" width="200" height="80" rx="10" fill="#ef6a5b" opacity="0.1" stroke="#ef6a5b" stroke-width="1.5"/><text x="125" y="138" text-anchor="middle" fill="#ef6a5b" font-weight="800" font-size="12" font-family="Manrope,sans-serif">EMPLOYEUR</text><text x="125" y="156" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Pouvoir de direction</text><text x="125" y="172" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Contrôle et sanction</text><rect x="260" y="110" width="180" height="80" rx="10" fill="#5b8db8" opacity="0.1" stroke="#5b8db8" stroke-width="1.5"/><text x="350" y="138" text-anchor="middle" fill="#5b8db8" font-weight="800" font-size="12" font-family="Manrope,sans-serif">SALARIÉ</text><text x="350" y="156" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Prestation de travail</text><text x="350" y="172" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Droits et libertés</text><rect x="475" y="110" width="200" height="80" rx="10" fill="#e8b74f" opacity="0.12" stroke="#e8b74f" stroke-width="1.5"/><text x="575" y="138" text-anchor="middle" fill="#9a6c2a" font-weight="800" font-size="12" font-family="Manrope,sans-serif">SUBORDINATION</text><text x="575" y="156" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Ordres, contrôle,</text><text x="575" y="172" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">sanctions = critère clé</text><rect x="25" y="220" width="200" height="70" rx="9" fill="#fff" stroke="#dfe2dc"/><text x="125" y="247" text-anchor="middle" fill="#132b38" font-weight="700" font-size="11" font-family="Manrope,sans-serif">CDI</text><text x="125" y="265" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Forme normale du contrat</text><rect x="250" y="220" width="200" height="70" rx="9" fill="#fff" stroke="#dfe2dc"/><text x="350" y="247" text-anchor="middle" fill="#132b38" font-weight="700" font-size="11" font-family="Manrope,sans-serif">CDD</text><text x="350" y="265" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Besoin temporaire uniquement</text><rect x="475" y="220" width="200" height="70" rx="9" fill="#fff" stroke="#dfe2dc"/><text x="575" y="247" text-anchor="middle" fill="#132b38" font-weight="700" font-size="11" font-family="Manrope,sans-serif">GPEC</text><text x="575" y="265" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Anticiper les besoins futurs</text></svg></div>`,

    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>Le diagnostic stratégique</b></div><svg viewBox="0 0 700 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Matrice diagnostic stratégique interne et externe"><text x="350" y="26" text-anchor="middle" fill="#132b38" font-weight="800" font-size="14" font-family="Manrope,sans-serif">DIAGNOSTIC STRATÉGIQUE</text><text x="178" y="58" text-anchor="middle" fill="#477565" font-weight="800" font-size="11" font-family="Manrope,sans-serif">POSITIF</text><text x="528" y="58" text-anchor="middle" fill="#ef6a5b" font-weight="800" font-size="11" font-family="Manrope,sans-serif">NÉGATIF</text><text x="32" y="135" fill="#5b8db8" font-weight="800" font-size="11" font-family="Manrope,sans-serif" transform="rotate(-90 32 135)">INTERNE</text><text x="32" y="270" fill="#e8b74f" font-weight="800" font-size="11" font-family="Manrope,sans-serif" transform="rotate(-90 32 270)">EXTERNE</text><rect x="55" y="70" width="290" height="100" rx="12" fill="#dfebe5" stroke="#87a99b" stroke-width="1.5"/><text x="200" y="98" text-anchor="middle" fill="#477565" font-weight="800" font-size="14" font-family="Manrope,sans-serif">FORCES</text><text x="200" y="118" text-anchor="middle" fill="#52646b" font-size="11" font-family="DM Sans,sans-serif">Ressources rares, compétences</text><text x="200" y="136" text-anchor="middle" fill="#52646b" font-size="11" font-family="DM Sans,sans-serif">distinctives, savoir-faire</text><text x="200" y="154" text-anchor="middle" fill="#52646b" font-size="11" font-family="DM Sans,sans-serif">→ Avantage concurrentiel durable</text><rect x="355" y="70" width="290" height="100" rx="12" fill="#f9ded9" stroke="#ef6a5b" stroke-width="1.5"/><text x="500" y="98" text-anchor="middle" fill="#ef6a5b" font-weight="800" font-size="14" font-family="Manrope,sans-serif">FAIBLESSES</text><text x="500" y="118" text-anchor="middle" fill="#52646b" font-size="11" font-family="DM Sans,sans-serif">Ressources manquantes,</text><text x="500" y="136" text-anchor="middle" fill="#52646b" font-size="11" font-family="DM Sans,sans-serif">rigidités, lacunes</text><text x="500" y="154" text-anchor="middle" fill="#52646b" font-size="11" font-family="DM Sans,sans-serif">→ Vulnérabilités à corriger</text><rect x="55" y="180" width="290" height="100" rx="12" fill="#fff7e7" stroke="#e8b74f" stroke-width="1.5"/><text x="200" y="208" text-anchor="middle" fill="#9a6c2a" font-weight="800" font-size="14" font-family="Manrope,sans-serif">OPPORTUNITÉS</text><text x="200" y="228" text-anchor="middle" fill="#52646b" font-size="11" font-family="DM Sans,sans-serif">Marché en croissance,</text><text x="200" y="246" text-anchor="middle" fill="#52646b" font-size="11" font-family="DM Sans,sans-serif">innovation, réglementation</text><text x="200" y="264" text-anchor="middle" fill="#52646b" font-size="11" font-family="DM Sans,sans-serif">→ Potentiel à exploiter</text><rect x="355" y="180" width="290" height="100" rx="12" fill="#f2f5f2" stroke="#65747b" stroke-width="1.5"/><text x="500" y="208" text-anchor="middle" fill="#65747b" font-weight="800" font-size="14" font-family="Manrope,sans-serif">MENACES</text><text x="500" y="228" text-anchor="middle" fill="#52646b" font-size="11" font-family="DM Sans,sans-serif">Concurrence, évolution</text><text x="500" y="246" text-anchor="middle" fill="#52646b" font-size="11" font-family="DM Sans,sans-serif">technologique, crise</text><text x="500" y="264" text-anchor="middle" fill="#52646b" font-size="11" font-family="DM Sans,sans-serif">→ Risques à anticiper</text><rect x="130" y="298" width="440" height="36" rx="8" fill="#132b38"/><text x="350" y="320" text-anchor="middle" fill="#fff" font-weight="700" font-size="11" font-family="DM Sans,sans-serif">Spécialisation · Diversification · Croissance interne / externe / conjointe</text></svg></div>`,
  ],
  droit: [
    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>La hiérarchie des normes</b></div><svg viewBox="0 0 700 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pyramide de Kelsen — hiérarchie des normes juridiques"><polygon points="350,15 590,310 110,310" fill="none" stroke="#dfe2dc" stroke-width="1.5"/><rect x="290" y="30" width="120" height="42" rx="8" fill="#132b38"/><text x="350" y="50" text-anchor="middle" fill="#fff" font-weight="800" font-size="11" font-family="Manrope,sans-serif">CONSTITUTION</text><text x="350" y="64" text-anchor="middle" fill="#b4c2c6" font-size="9" font-family="DM Sans,sans-serif">Norme suprême</text><rect x="255" y="88" width="190" height="42" rx="8" fill="#ef6a5b" opacity="0.15" stroke="#ef6a5b"/><text x="350" y="108" text-anchor="middle" fill="#ef6a5b" font-weight="700" font-size="11" font-family="Manrope,sans-serif">TRAITÉS INTERNATIONAUX</text><text x="350" y="122" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">UE · Conventions internationales</text><rect x="220" y="146" width="260" height="42" rx="8" fill="#5b8db8" opacity="0.1" stroke="#5b8db8"/><text x="350" y="166" text-anchor="middle" fill="#5b8db8" font-weight="700" font-size="11" font-family="Manrope,sans-serif">LOIS</text><text x="350" y="180" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Votées par le Parlement</text><rect x="185" y="204" width="330" height="42" rx="8" fill="#e8b74f" opacity="0.12" stroke="#e8b74f"/><text x="350" y="224" text-anchor="middle" fill="#9a6c2a" font-weight="700" font-size="11" font-family="Manrope,sans-serif">RÈGLEMENTS</text><text x="350" y="238" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Décrets · Arrêtés (pouvoir exécutif)</text><rect x="150" y="262" width="400" height="42" rx="8" fill="#87a99b" opacity="0.12" stroke="#87a99b"/><text x="350" y="282" text-anchor="middle" fill="#477565" font-weight="700" font-size="11" font-family="Manrope,sans-serif">CONVENTIONS COLLECTIVES · CONTRATS</text><text x="350" y="296" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Accords entre parties · Usages</text><text x="630" y="170" fill="#ef6a5b" font-weight="700" font-size="10" font-family="DM Sans,sans-serif">↑</text><text x="600" y="190" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Force</text><text x="595" y="205" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">décroissante</text><text x="350" y="340" text-anchor="middle" fill="#65747b" font-size="10" font-style="italic" font-family="DM Sans,sans-serif">Toute norme inférieure doit respecter les normes supérieures</text></svg></div>`,

    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>L'organisation judiciaire</b></div><svg viewBox="0 0 700 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Organisation des juridictions françaises"><rect x="245" y="5" width="210" height="50" rx="10" fill="#132b38"/><text x="350" y="28" text-anchor="middle" fill="#fff" font-weight="800" font-size="13" font-family="Manrope,sans-serif">COUR DE CASSATION</text><text x="350" y="45" text-anchor="middle" fill="#b4c2c6" font-size="10" font-family="DM Sans,sans-serif">Contrôle du droit (pas les faits)</text><line x1="280" y1="55" x2="180" y2="95" stroke="#dfe2dc" stroke-width="2"/><line x1="420" y1="55" x2="520" y2="95" stroke="#dfe2dc" stroke-width="2"/><rect x="65" y="95" width="225" height="45" rx="9" fill="#ef6a5b" opacity="0.1" stroke="#ef6a5b"/><text x="177" y="118" text-anchor="middle" fill="#ef6a5b" font-weight="700" font-size="12" font-family="Manrope,sans-serif">ORDRE JUDICIAIRE</text><text x="177" y="133" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Litiges entre personnes</text><rect x="410" y="95" width="225" height="45" rx="9" fill="#5b8db8" opacity="0.1" stroke="#5b8db8"/><text x="522" y="118" text-anchor="middle" fill="#5b8db8" font-weight="700" font-size="12" font-family="Manrope,sans-serif">ORDRE ADMINISTRATIF</text><text x="522" y="133" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Litiges avec l'administration</text><line x1="177" y1="140" x2="177" y2="170" stroke="#dfe2dc" stroke-width="1.5"/><rect x="80" y="170" width="195" height="40" rx="8" fill="#fff" stroke="#dfe2dc"/><text x="177" y="195" text-anchor="middle" fill="#132b38" font-weight="700" font-size="11" font-family="Manrope,sans-serif">COUR D'APPEL</text><text x="300" y="194" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">← 2ᵉ degré</text><line x1="120" y1="210" x2="120" y2="240" stroke="#dfe2dc" stroke-width="1.5"/><line x1="230" y1="210" x2="230" y2="240" stroke="#dfe2dc" stroke-width="1.5"/><rect x="25" y="240" width="190" height="40" rx="8" fill="#f2f5f2" stroke="#dfe2dc"/><text x="120" y="265" text-anchor="middle" fill="#132b38" font-weight="700" font-size="10" font-family="Manrope,sans-serif">TRIBUNAL JUDICIAIRE</text><rect x="230" y="240" width="100" height="40" rx="8" fill="#f2f5f2" stroke="#dfe2dc"/><text x="280" y="265" text-anchor="middle" fill="#132b38" font-weight="700" font-size="10" font-family="Manrope,sans-serif">PRUD'HOMMES</text><text x="300" y="295" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">← 1ᵉʳ degré</text><line x1="522" y1="140" x2="522" y2="170" stroke="#dfe2dc" stroke-width="1.5"/><rect x="425" y="170" width="195" height="40" rx="8" fill="#fff" stroke="#dfe2dc"/><text x="522" y="195" text-anchor="middle" fill="#132b38" font-weight="700" font-size="11" font-family="Manrope,sans-serif">COUR ADM. D'APPEL</text><line x1="522" y1="210" x2="522" y2="240" stroke="#dfe2dc" stroke-width="1.5"/><rect x="425" y="240" width="195" height="40" rx="8" fill="#f2f5f2" stroke="#dfe2dc"/><text x="522" y="265" text-anchor="middle" fill="#132b38" font-weight="700" font-size="10" font-family="Manrope,sans-serif">TRIBUNAL ADMINISTRATIF</text><rect x="170" y="310" width="360" height="25" rx="6" fill="#fff7e7" stroke="#e8b74f"/><text x="350" y="327" text-anchor="middle" fill="#9a6c2a" font-size="10" font-family="DM Sans,sans-serif">MODES ALTERNATIFS : médiation · conciliation · arbitrage</text></svg></div>`,

    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>Personnalité juridique et capacité</b></div><svg viewBox="0 0 700 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Personnalité juridique personne physique et morale"><rect x="200" y="10" width="300" height="50" rx="12" fill="#132b38"/><text x="350" y="35" text-anchor="middle" fill="#fff" font-weight="800" font-size="14" font-family="Manrope,sans-serif">PERSONNALITÉ JURIDIQUE</text><text x="350" y="52" text-anchor="middle" fill="#b4c2c6" font-size="10" font-family="DM Sans,sans-serif">Aptitude à avoir des droits et obligations</text><line x1="250" y1="60" x2="175" y2="90" stroke="#dfe2dc" stroke-width="2"/><line x1="450" y1="60" x2="525" y2="90" stroke="#dfe2dc" stroke-width="2"/><rect x="40" y="90" width="270" height="95" rx="11" fill="#ef6a5b" opacity="0.08" stroke="#ef6a5b" stroke-width="1.5"/><text x="175" y="115" text-anchor="middle" fill="#ef6a5b" font-weight="800" font-size="13" font-family="Manrope,sans-serif">PERSONNE PHYSIQUE</text><text x="175" y="135" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Naissance → Décès</text><text x="175" y="152" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Vivant et viable</text><text x="175" y="172" text-anchor="middle" fill="#485c64" font-size="10" font-family="DM Sans,sans-serif">Mineur = capacité limitée → représentant</text><rect x="390" y="90" width="270" height="95" rx="11" fill="#5b8db8" opacity="0.08" stroke="#5b8db8" stroke-width="1.5"/><text x="525" y="115" text-anchor="middle" fill="#5b8db8" font-weight="800" font-size="13" font-family="Manrope,sans-serif">PERSONNE MORALE</text><text x="525" y="135" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Immatriculation → Dissolution</text><text x="525" y="152" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Société, association, etc.</text><text x="525" y="172" text-anchor="middle" fill="#485c64" font-size="10" font-family="DM Sans,sans-serif">Patrimoine distinct des membres</text><rect x="130" y="210" width="200" height="40" rx="8" fill="#fff" stroke="#dfe2dc"/><text x="230" y="235" text-anchor="middle" fill="#132b38" font-weight="700" font-size="11" font-family="Manrope,sans-serif">Capacité de jouissance</text><text x="230" y="260" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Avoir un droit</text><rect x="370" y="210" width="200" height="40" rx="8" fill="#fff" stroke="#dfe2dc"/><text x="470" y="235" text-anchor="middle" fill="#132b38" font-weight="700" font-size="11" font-family="Manrope,sans-serif">Capacité d'exercice</text><text x="470" y="260" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Exercer soi-même ce droit</text></svg></div>`,

    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>Droits patrimoniaux et extrapatrimoniaux</b></div><svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Droits patrimoniaux versus extrapatrimoniaux"><rect x="30" y="10" width="300" height="230" rx="12" fill="#e8b74f" opacity="0.08" stroke="#e8b74f" stroke-width="1.5"/><text x="180" y="40" text-anchor="middle" fill="#9a6c2a" font-weight="800" font-size="14" font-family="Manrope,sans-serif">DROITS PATRIMONIAUX</text><text x="180" y="60" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Valeur pécuniaire</text><g fill="#485c64" font-size="11" font-family="DM Sans,sans-serif"><text x="55" y="90">• Cessibles (on peut les vendre)</text><text x="55" y="112">• Transmissibles (héritage)</text><text x="55" y="134">• Saisissables (par les créanciers)</text><text x="55" y="156">• Prescriptibles</text></g><rect x="55" y="175" width="250" height="48" rx="8" fill="#fff" stroke="#dfe2dc"/><text x="180" y="196" text-anchor="middle" fill="#132b38" font-weight="700" font-size="11" font-family="Manrope,sans-serif">Exemples</text><text x="180" y="214" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Propriété · Créances · Brevets</text><rect x="370" y="10" width="300" height="230" rx="12" fill="#5b8db8" opacity="0.08" stroke="#5b8db8" stroke-width="1.5"/><text x="520" y="40" text-anchor="middle" fill="#5b8db8" font-weight="800" font-size="14" font-family="Manrope,sans-serif">DROITS EXTRAPATRIMONIAUX</text><text x="520" y="60" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Attachés à la personne</text><g fill="#485c64" font-size="11" font-family="DM Sans,sans-serif"><text x="395" y="90">• Incessibles (on ne peut les vendre)</text><text x="395" y="112">• Intransmissibles</text><text x="395" y="134">• Insaisissables</text><text x="395" y="156">• Imprescriptibles</text></g><rect x="395" y="175" width="250" height="48" rx="8" fill="#fff" stroke="#dfe2dc"/><text x="520" y="196" text-anchor="middle" fill="#132b38" font-weight="700" font-size="11" font-family="Manrope,sans-serif">Exemples</text><text x="520" y="214" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Vie privée · Image · Données perso.</text></svg></div>`,

    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>Les conditions de validité du contrat</b></div><svg viewBox="0 0 700 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Trois conditions de validité du contrat et sanctions"><rect x="200" y="10" width="300" height="46" rx="10" fill="#132b38"/><text x="350" y="38" text-anchor="middle" fill="#fff" font-weight="800" font-size="14" font-family="Manrope,sans-serif">CONTRAT VALABLE</text><line x1="225" y1="56" x2="120" y2="86" stroke="#dfe2dc" stroke-width="2"/><line x1="350" y1="56" x2="350" y2="86" stroke="#dfe2dc" stroke-width="2"/><line x1="475" y1="56" x2="580" y2="86" stroke="#dfe2dc" stroke-width="2"/><rect x="20" y="86" width="200" height="90" rx="10" fill="#ef6a5b" opacity="0.1" stroke="#ef6a5b" stroke-width="1.5"/><text x="120" y="112" text-anchor="middle" fill="#ef6a5b" font-weight="800" font-size="12" font-family="Manrope,sans-serif">CONSENTEMENT</text><text x="120" y="132" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Libre et éclairé</text><text x="120" y="150" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Vices : erreur, dol, violence</text><text x="120" y="166" text-anchor="middle" fill="#ef6a5b" font-size="9" font-family="DM Sans,sans-serif">→ Nullité relative</text><rect x="250" y="86" width="200" height="90" rx="10" fill="#5b8db8" opacity="0.1" stroke="#5b8db8" stroke-width="1.5"/><text x="350" y="112" text-anchor="middle" fill="#5b8db8" font-weight="800" font-size="12" font-family="Manrope,sans-serif">CAPACITÉ</text><text x="350" y="132" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Aptitude à contracter</text><text x="350" y="150" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Mineur, majeur protégé</text><text x="350" y="166" text-anchor="middle" fill="#5b8db8" font-size="9" font-family="DM Sans,sans-serif">→ Nullité relative</text><rect x="480" y="86" width="200" height="90" rx="10" fill="#e8b74f" opacity="0.12" stroke="#e8b74f" stroke-width="1.5"/><text x="580" y="112" text-anchor="middle" fill="#9a6c2a" font-weight="800" font-size="12" font-family="Manrope,sans-serif">CONTENU</text><text x="580" y="132" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Licite et certain</text><text x="580" y="150" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Contrepartie non dérisoire</text><text x="580" y="166" text-anchor="middle" fill="#9a6c2a" font-size="9" font-family="DM Sans,sans-serif">→ Nullité absolue</text><rect x="100" y="200" width="500" height="60" rx="10" fill="#f2f5f2" stroke="#dfe2dc"/><text x="350" y="225" text-anchor="middle" fill="#132b38" font-weight="800" font-size="12" font-family="Manrope,sans-serif">En cas d'inexécution</text><text x="350" y="245" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Exception d'inexécution · Exécution forcée · Réduction de prix · Résolution · Dommages-intérêts</text></svg></div>`,

    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>Les conditions de la responsabilité civile</b></div><svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle de la responsabilité civile"><text x="350" y="25" text-anchor="middle" fill="#132b38" font-weight="800" font-size="14" font-family="Manrope,sans-serif">3 conditions cumulatives = RÉPARATION</text><polygon points="350,60 560,260 140,260" fill="none" stroke="#dfe2dc" stroke-width="1.5"/><circle cx="350" cy="70" r="35" fill="#ef6a5b" opacity="0.12" stroke="#ef6a5b" stroke-width="2"/><text x="350" y="66" text-anchor="middle" fill="#ef6a5b" font-weight="800" font-size="11" font-family="Manrope,sans-serif">DOMMAGE</text><text x="350" y="80" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Certain, personnel</text><circle cx="160" cy="250" r="35" fill="#5b8db8" opacity="0.12" stroke="#5b8db8" stroke-width="2"/><text x="160" y="246" text-anchor="middle" fill="#5b8db8" font-weight="800" font-size="10" font-family="Manrope,sans-serif">FAIT</text><text x="160" y="260" text-anchor="middle" fill="#5b8db8" font-weight="700" font-size="9" font-family="DM Sans,sans-serif">GÉNÉRATEUR</text><circle cx="540" cy="250" r="35" fill="#e8b74f" opacity="0.15" stroke="#e8b74f" stroke-width="2"/><text x="540" y="246" text-anchor="middle" fill="#9a6c2a" font-weight="800" font-size="10" font-family="Manrope,sans-serif">LIEN DE</text><text x="540" y="260" text-anchor="middle" fill="#9a6c2a" font-weight="700" font-size="9" font-family="Manrope,sans-serif">CAUSALITÉ</text><rect x="30" y="170" width="130" height="50" rx="8" fill="#fff" stroke="#dfe2dc"/><text x="95" y="190" text-anchor="middle" fill="#132b38" font-weight="700" font-size="10" font-family="Manrope,sans-serif">Faute</text><text x="95" y="208" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Art. 1240-1241</text><rect x="10" y="110" width="130" height="50" rx="8" fill="#fff" stroke="#dfe2dc"/><text x="75" y="130" text-anchor="middle" fill="#132b38" font-weight="700" font-size="10" font-family="Manrope,sans-serif">Fait des choses</text><text x="75" y="148" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Gardien présumé resp.</text><rect x="560" y="140" width="130" height="50" rx="8" fill="#fff" stroke="#dfe2dc"/><text x="625" y="160" text-anchor="middle" fill="#132b38" font-weight="700" font-size="10" font-family="Manrope,sans-serif">Fait d'autrui</text><text x="625" y="178" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Parents, employeur</text><rect x="220" y="275" width="260" height="22" rx="6" fill="#f2f5f2"/><text x="350" y="291" text-anchor="middle" fill="#477565" font-size="9" font-family="DM Sans,sans-serif">Exonération : force majeure · faute victime · fait tiers</text></svg></div>`,

    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>CDI et CDD : les deux formes du contrat de travail</b></div><svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparaison CDI et CDD"><rect x="30" y="10" width="300" height="195" rx="12" fill="#132b38" opacity="0.04" stroke="#132b38" stroke-width="1.5"/><text x="180" y="38" text-anchor="middle" fill="#132b38" font-weight="800" font-size="15" font-family="Manrope,sans-serif">CDI</text><text x="180" y="55" text-anchor="middle" fill="#477565" font-weight="700" font-size="10" font-family="DM Sans,sans-serif">Forme normale</text><g fill="#485c64" font-size="11" font-family="DM Sans,sans-serif"><text x="55" y="80">• Durée indéterminée</text><text x="55" y="100">• Pas de motif obligatoire</text><text x="55" y="120">• Rupture : démission, licenciement</text><text x="55" y="140">  ou rupture conventionnelle</text><text x="55" y="165">• Période d'essai encadrée</text><text x="55" y="190">• Pleine protection sociale</text></g><rect x="370" y="10" width="300" height="195" rx="12" fill="#ef6a5b" opacity="0.06" stroke="#ef6a5b" stroke-width="1.5"/><text x="520" y="38" text-anchor="middle" fill="#ef6a5b" font-weight="800" font-size="15" font-family="Manrope,sans-serif">CDD</text><text x="520" y="55" text-anchor="middle" fill="#ef6a5b" font-weight="700" font-size="10" font-family="DM Sans,sans-serif">Exception — motif obligatoire</text><g fill="#485c64" font-size="11" font-family="DM Sans,sans-serif"><text x="395" y="80">• Durée limitée (18 mois max gén.)</text><text x="395" y="100">• Motif : remplacement, surcroît…</text><text x="395" y="120">• Formalisme strict (écrit, motif)</text><text x="395" y="140">• Indemnité de précarité (10 %)</text><text x="395" y="165">• Renouvellement limité</text><text x="395" y="190">• Requalification possible en CDI</text></g></svg></div>`,

    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>Choisir son cadre juridique pour entreprendre</b></div><svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparaison entreprise individuelle et société"><rect x="200" y="5" width="300" height="40" rx="10" fill="#132b38"/><text x="350" y="30" text-anchor="middle" fill="#fff" font-weight="800" font-size="13" font-family="Manrope,sans-serif">CHOIX DU STATUT JURIDIQUE</text><line x1="250" y1="45" x2="170" y2="72" stroke="#dfe2dc" stroke-width="2"/><line x1="450" y1="45" x2="530" y2="72" stroke="#dfe2dc" stroke-width="2"/><rect x="20" y="72" width="300" height="110" rx="11" fill="#e8b74f" opacity="0.1" stroke="#e8b74f" stroke-width="1.5"/><text x="170" y="97" text-anchor="middle" fill="#9a6c2a" font-weight="800" font-size="13" font-family="Manrope,sans-serif">ENTREPRISE INDIVIDUELLE</text><g fill="#485c64" font-size="11" font-family="DM Sans,sans-serif"><text x="45" y="118">• Un seul exploitant</text><text x="45" y="138">• Création simple</text><text x="45" y="158">• Patrimoine personnel protégé (2022)</text><text x="45" y="178" fill="#65747b">→ Adapté aux petits projets</text></g><rect x="380" y="72" width="300" height="110" rx="11" fill="#5b8db8" opacity="0.08" stroke="#5b8db8" stroke-width="1.5"/><text x="530" y="97" text-anchor="middle" fill="#5b8db8" font-weight="800" font-size="13" font-family="Manrope,sans-serif">SOCIÉTÉ (SARL, SAS, SA)</text><g fill="#485c64" font-size="11" font-family="DM Sans,sans-serif"><text x="405" y="118">• Personne morale distincte</text><text x="405" y="138">• Responsabilité limitée aux apports</text><text x="405" y="158">• Immatriculation obligatoire</text><text x="405" y="178" fill="#65747b">→ Adapté aux projets ambitieux</text></g><rect x="100" y="205" width="500" height="45" rx="9" fill="#f2f5f2" stroke="#dfe2dc"/><text x="350" y="226" text-anchor="middle" fill="#132b38" font-weight="700" font-size="11" font-family="Manrope,sans-serif">Procédures collectives</text><text x="350" y="243" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Sauvegarde → Redressement judiciaire → Liquidation judiciaire</text></svg></div>`,
  ],
  economie: [
    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>Le circuit économique simplifié</b></div><svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circuit économique avec 5 agents"><defs><marker id="ahe" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto"><path d="M0,0 L7,2.5 L0,5" fill="#5b8db8"/></marker></defs><rect x="250" y="140" width="200" height="70" rx="13" fill="#132b38"/><text x="350" y="172" text-anchor="middle" fill="#fff" font-weight="800" font-size="14" font-family="Manrope,sans-serif">ENTREPRISES</text><text x="350" y="192" text-anchor="middle" fill="#b4c2c6" font-size="10" font-family="DM Sans,sans-serif">Production marchande</text><rect x="20" y="5" width="160" height="55" rx="10" fill="#ef6a5b" opacity="0.1" stroke="#ef6a5b"/><text x="100" y="30" text-anchor="middle" fill="#ef6a5b" font-weight="700" font-size="12" font-family="Manrope,sans-serif">MÉNAGES</text><text x="100" y="48" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Consommation · Travail</text><rect x="520" y="5" width="160" height="55" rx="10" fill="#e8b74f" opacity="0.12" stroke="#e8b74f"/><text x="600" y="30" text-anchor="middle" fill="#9a6c2a" font-weight="700" font-size="12" font-family="Manrope,sans-serif">ÉTAT</text><text x="600" y="48" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Services non marchands</text><rect x="20" y="300" width="160" height="55" rx="10" fill="#5b8db8" opacity="0.1" stroke="#5b8db8"/><text x="100" y="325" text-anchor="middle" fill="#5b8db8" font-weight="700" font-size="12" font-family="Manrope,sans-serif">BANQUES</text><text x="100" y="343" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Épargne · Crédit</text><rect x="520" y="300" width="160" height="55" rx="10" fill="#87a99b" opacity="0.15" stroke="#87a99b"/><text x="600" y="325" text-anchor="middle" fill="#477565" font-weight="700" font-size="12" font-family="Manrope,sans-serif">RESTE DU MONDE</text><text x="600" y="343" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Import · Export</text><line x1="170" y1="45" x2="250" y2="148" stroke="#5b8db8" stroke-width="1.5" marker-end="url(#ahe)"/><text x="190" y="85" fill="#5b8db8" font-size="9" font-family="DM Sans,sans-serif">Travail</text><line x1="250" y1="155" x2="170" y2="50" stroke="#ef6a5b" stroke-width="1.5" stroke-dasharray="4 3"/><text x="185" y="115" fill="#ef6a5b" font-size="9" font-family="DM Sans,sans-serif">Salaires</text><line x1="450" y1="150" x2="525" y2="50" stroke="#5b8db8" stroke-width="1.5" marker-end="url(#ahe)"/><text x="500" y="85" fill="#5b8db8" font-size="9" font-family="DM Sans,sans-serif">Impôts</text><line x1="525" y1="55" x2="450" y2="155" stroke="#e8b74f" stroke-width="1.5" stroke-dasharray="4 3"/><text x="475" y="120" fill="#9a6c2a" font-size="9" font-family="DM Sans,sans-serif">Subventions</text><line x1="170" y1="310" x2="255" y2="210" stroke="#5b8db8" stroke-width="1.5" marker-end="url(#ahe)"/><text x="195" y="270" fill="#5b8db8" font-size="9" font-family="DM Sans,sans-serif">Crédits</text><line x1="450" y1="205" x2="530" y2="305" stroke="#5b8db8" stroke-width="1.5" marker-end="url(#ahe)"/><text x="500" y="265" fill="#5b8db8" font-size="9" font-family="DM Sans,sans-serif">Exportations</text><text x="350" y="375" text-anchor="middle" fill="#65747b" font-size="10" font-style="italic" font-family="DM Sans,sans-serif">Flux réels (biens, travail) et flux monétaires (salaires, prix, impôts)</text></svg></div>`,

    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>Du chiffre d'affaires à la valeur ajoutée</b></div><svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Décomposition de la valeur ajoutée"><rect x="50" y="30" width="260" height="80" rx="12" fill="#5b8db8" opacity="0.12" stroke="#5b8db8" stroke-width="1.5"/><text x="180" y="58" text-anchor="middle" fill="#5b8db8" font-weight="800" font-size="14" font-family="Manrope,sans-serif">PRODUCTION</text><text x="180" y="78" text-anchor="middle" fill="#65747b" font-size="11" font-family="DM Sans,sans-serif">Chiffre d'affaires</text><text x="180" y="96" text-anchor="middle" fill="#5b8db8" font-weight="700" font-size="13" font-family="Manrope,sans-serif">200 000 €</text><text x="340" y="75" text-anchor="middle" fill="#132b38" font-weight="800" font-size="22" font-family="Manrope,sans-serif">−</text><rect x="370" y="30" width="180" height="80" rx="12" fill="#ef6a5b" opacity="0.1" stroke="#ef6a5b" stroke-width="1.5"/><text x="460" y="55" text-anchor="middle" fill="#ef6a5b" font-weight="800" font-size="13" font-family="Manrope,sans-serif">CONSOMMATIONS</text><text x="460" y="72" text-anchor="middle" fill="#ef6a5b" font-weight="700" font-size="12" font-family="Manrope,sans-serif">INTERMÉDIAIRES</text><text x="460" y="96" text-anchor="middle" fill="#ef6a5b" font-weight="700" font-size="13" font-family="Manrope,sans-serif">80 000 €</text><text x="580" y="75" text-anchor="middle" fill="#132b38" font-weight="800" font-size="22" font-family="Manrope,sans-serif">=</text><rect x="600" y="25" width="90" height="90" rx="12" fill="#132b38"/><text x="645" y="60" text-anchor="middle" fill="#fff" font-weight="800" font-size="11" font-family="Manrope,sans-serif">VALEUR</text><text x="645" y="76" text-anchor="middle" fill="#fff" font-weight="800" font-size="11" font-family="Manrope,sans-serif">AJOUTÉE</text><text x="645" y="100" text-anchor="middle" fill="#e8b74f" font-weight="800" font-size="14" font-family="Manrope,sans-serif">120 000 €</text><text x="350" y="150" text-anchor="middle" fill="#132b38" font-weight="800" font-size="12" font-family="Manrope,sans-serif">Répartition de la VA</text><rect x="50" y="165" width="120" height="40" rx="7" fill="#f2f5f2" stroke="#dfe2dc"/><text x="110" y="190" text-anchor="middle" fill="#132b38" font-weight="700" font-size="10" font-family="Manrope,sans-serif">Salariés</text><rect x="190" y="165" width="120" height="40" rx="7" fill="#f2f5f2" stroke="#dfe2dc"/><text x="250" y="190" text-anchor="middle" fill="#132b38" font-weight="700" font-size="10" font-family="Manrope,sans-serif">État (impôts)</text><rect x="330" y="165" width="120" height="40" rx="7" fill="#f2f5f2" stroke="#dfe2dc"/><text x="390" y="190" text-anchor="middle" fill="#132b38" font-weight="700" font-size="10" font-family="Manrope,sans-serif">Prêteurs</text><rect x="470" y="165" width="180" height="40" rx="7" fill="#fff7e7" stroke="#e8b74f"/><text x="560" y="190" text-anchor="middle" fill="#9a6c2a" font-weight="700" font-size="10" font-family="Manrope,sans-serif">Entreprise (autofinancement)</text></svg></div>`,

    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>Formation du revenu disponible</b></div><svg viewBox="0 0 700 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Calcul du revenu disponible"><defs><marker id="ahrd" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto"><path d="M0,0 L7,2.5 L0,5" fill="#132b38"/></marker></defs><rect x="20" y="50" width="140" height="80" rx="10" fill="#5b8db8" opacity="0.1" stroke="#5b8db8" stroke-width="1.5"/><text x="90" y="78" text-anchor="middle" fill="#5b8db8" font-weight="800" font-size="12" font-family="Manrope,sans-serif">REVENUS</text><text x="90" y="94" text-anchor="middle" fill="#5b8db8" font-weight="700" font-size="11" font-family="Manrope,sans-serif">PRIMAIRES</text><text x="90" y="116" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Salaires, revenus</text><text x="90" y="128" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">du patrimoine, mixtes</text><line x1="162" y1="90" x2="190" y2="90" stroke="#132b38" stroke-width="2" marker-end="url(#ahrd)"/><text x="215" y="78" text-anchor="middle" fill="#477565" font-weight="800" font-size="18" font-family="Manrope,sans-serif">+</text><rect x="240" y="50" width="120" height="80" rx="10" fill="#87a99b" opacity="0.15" stroke="#87a99b" stroke-width="1.5"/><text x="300" y="78" text-anchor="middle" fill="#477565" font-weight="800" font-size="11" font-family="Manrope,sans-serif">PRESTATIONS</text><text x="300" y="94" text-anchor="middle" fill="#477565" font-weight="700" font-size="11" font-family="Manrope,sans-serif">SOCIALES</text><text x="300" y="116" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Allocations,</text><text x="300" y="128" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">pensions, aides</text><text x="385" y="78" text-anchor="middle" fill="#ef6a5b" font-weight="800" font-size="18" font-family="Manrope,sans-serif">−</text><rect x="410" y="50" width="120" height="80" rx="10" fill="#ef6a5b" opacity="0.1" stroke="#ef6a5b" stroke-width="1.5"/><text x="470" y="78" text-anchor="middle" fill="#ef6a5b" font-weight="800" font-size="11" font-family="Manrope,sans-serif">PRÉLÈVEMENTS</text><text x="470" y="94" text-anchor="middle" fill="#ef6a5b" font-weight="700" font-size="11" font-family="Manrope,sans-serif">OBLIGATOIRES</text><text x="470" y="116" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Impôts, cotisations,</text><text x="470" y="128" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">CSG</text><text x="555" y="78" text-anchor="middle" fill="#132b38" font-weight="800" font-size="18" font-family="Manrope,sans-serif">=</text><rect x="575" y="40" width="110" height="100" rx="12" fill="#132b38"/><text x="630" y="74" text-anchor="middle" fill="#fff" font-weight="800" font-size="11" font-family="Manrope,sans-serif">REVENU</text><text x="630" y="92" text-anchor="middle" fill="#fff" font-weight="800" font-size="11" font-family="Manrope,sans-serif">DISPONIBLE</text><text x="630" y="120" text-anchor="middle" fill="#e8b74f" font-size="10" font-family="DM Sans,sans-serif">Consommation</text><text x="630" y="134" text-anchor="middle" fill="#e8b74f" font-size="10" font-family="DM Sans,sans-serif">ou Épargne</text><text x="350" y="185" text-anchor="middle" fill="#65747b" font-size="10" font-style="italic" font-family="DM Sans,sans-serif">Pouvoir d'achat = revenu disponible corrigé de l'inflation (IPC)</text></svg></div>`,

    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>Les modes de financement</b></div><svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Arbre des modes de financement"><rect x="250" y="10" width="200" height="44" rx="10" fill="#132b38"/><text x="350" y="38" text-anchor="middle" fill="#fff" font-weight="800" font-size="13" font-family="Manrope,sans-serif">FINANCEMENT</text><line x1="280" y1="54" x2="150" y2="85" stroke="#dfe2dc" stroke-width="2"/><line x1="420" y1="54" x2="530" y2="85" stroke="#dfe2dc" stroke-width="2"/><rect x="50" y="85" width="200" height="40" rx="9" fill="#e8b74f" opacity="0.12" stroke="#e8b74f"/><text x="150" y="110" text-anchor="middle" fill="#9a6c2a" font-weight="800" font-size="12" font-family="Manrope,sans-serif">INTERNE</text><rect x="430" y="85" width="200" height="40" rx="9" fill="#5b8db8" opacity="0.1" stroke="#5b8db8"/><text x="530" y="110" text-anchor="middle" fill="#5b8db8" font-weight="800" font-size="12" font-family="Manrope,sans-serif">EXTERNE</text><line x1="150" y1="125" x2="150" y2="155" stroke="#dfe2dc" stroke-width="1.5"/><rect x="60" y="155" width="180" height="50" rx="8" fill="#fff7e7" stroke="#e8b74f"/><text x="150" y="178" text-anchor="middle" fill="#9a6c2a" font-weight="700" font-size="11" font-family="Manrope,sans-serif">Autofinancement</text><text x="150" y="196" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Bénéfices non distribués</text><line x1="460" y1="125" x2="380" y2="155" stroke="#dfe2dc" stroke-width="1.5"/><line x1="600" y1="125" x2="600" y2="155" stroke="#dfe2dc" stroke-width="1.5"/><rect x="300" y="155" width="160" height="50" rx="8" fill="#5b8db8" opacity="0.08" stroke="#5b8db8"/><text x="380" y="175" text-anchor="middle" fill="#5b8db8" font-weight="700" font-size="11" font-family="Manrope,sans-serif">Indirect (banque)</text><text x="380" y="193" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Crédit bancaire</text><rect x="510" y="155" width="170" height="50" rx="8" fill="#ef6a5b" opacity="0.08" stroke="#ef6a5b"/><text x="595" y="175" text-anchor="middle" fill="#ef6a5b" font-weight="700" font-size="11" font-family="Manrope,sans-serif">Direct (marché)</text><text x="595" y="193" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Actions · Obligations</text><rect x="100" y="230" width="500" height="50" rx="9" fill="#f2f5f2" stroke="#dfe2dc"/><text x="350" y="252" text-anchor="middle" fill="#132b38" font-weight="700" font-size="11" font-family="Manrope,sans-serif">3 critères de choix</text><text x="200" y="272" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Rendement</text><text x="350" y="272" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Risque</text><text x="500" y="272" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Liquidité</text></svg></div>`,

    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>L'équilibre offre / demande</b></div><svg viewBox="0 0 700 350" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Courbes offre et demande avec prix d'équilibre"><line x1="100" y1="30" x2="100" y2="290" stroke="#132b38" stroke-width="2"/><line x1="100" y1="290" x2="620" y2="290" stroke="#132b38" stroke-width="2"/><text x="60" y="160" text-anchor="middle" fill="#132b38" font-weight="700" font-size="12" font-family="Manrope,sans-serif" transform="rotate(-90 60 160)">Prix (P)</text><text x="360" y="320" text-anchor="middle" fill="#132b38" font-weight="700" font-size="12" font-family="Manrope,sans-serif">Quantité (Q)</text><path d="M120,60 Q350,140 580,270" fill="none" stroke="#5b8db8" stroke-width="2.5"/><text x="585" y="260" fill="#5b8db8" font-weight="800" font-size="13" font-family="Manrope,sans-serif">Offre</text><path d="M120,260 Q350,180 580,50" fill="none" stroke="#ef6a5b" stroke-width="2.5"/><text x="585" y="55" fill="#ef6a5b" font-weight="800" font-size="13" font-family="Manrope,sans-serif">Demande</text><circle cx="350" cy="165" r="6" fill="#132b38"/><line x1="100" y1="165" x2="345" y2="165" stroke="#132b38" stroke-width="1" stroke-dasharray="4 3"/><line x1="350" y1="165" x2="350" y2="290" stroke="#132b38" stroke-width="1" stroke-dasharray="4 3"/><text x="78" y="170" text-anchor="end" fill="#132b38" font-weight="700" font-size="11" font-family="DM Sans,sans-serif">P*</text><text x="350" y="308" text-anchor="middle" fill="#132b38" font-weight="700" font-size="11" font-family="DM Sans,sans-serif">Q*</text><rect x="365" y="142" width="180" height="44" rx="8" fill="#132b38"/><text x="455" y="161" text-anchor="middle" fill="#fff" font-weight="700" font-size="11" font-family="Manrope,sans-serif">Point d'équilibre</text><text x="455" y="178" text-anchor="middle" fill="#b4c2c6" font-size="9" font-family="DM Sans,sans-serif">Offre = Demande → P* et Q*</text><rect x="100" y="330" width="520" height="20" rx="5" fill="#f2f5f2"/><text x="350" y="345" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Défaillances : externalités · biens publics · asymétrie d'information · pouvoir de marché</text></svg></div>`,

    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>Les trois fonctions de l'État (Musgrave)</b></div><svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Trois fonctions économiques de l'État selon Musgrave"><rect x="30" y="10" width="200" height="200" rx="12" fill="#5b8db8" opacity="0.1" stroke="#5b8db8" stroke-width="1.5"/><text x="130" y="40" text-anchor="middle" fill="#5b8db8" font-weight="800" font-size="14" font-family="Manrope,sans-serif">ALLOCATION</text><rect x="55" y="55" width="150" height="28" rx="6" fill="#5b8db8" opacity="0.15"/><text x="130" y="74" text-anchor="middle" fill="#5b8db8" font-weight="700" font-size="10" font-family="DM Sans,sans-serif">Biens collectifs</text><g fill="#485c64" font-size="10" font-family="DM Sans,sans-serif"><text x="50" y="105">Produire / financer ce que</text><text x="50" y="120">le marché ne fournit pas</text><text x="50" y="142">• Éducation, justice</text><text x="50" y="160">• Infrastructure</text><text x="50" y="178">• Défense, éclairage</text><text x="50" y="200" fill="#5b8db8" font-weight="700">→ Corrige les défaillances</text></g><rect x="250" y="10" width="200" height="200" rx="12" fill="#ef6a5b" opacity="0.08" stroke="#ef6a5b" stroke-width="1.5"/><text x="350" y="40" text-anchor="middle" fill="#ef6a5b" font-weight="800" font-size="14" font-family="Manrope,sans-serif">REDISTRIBUTION</text><rect x="275" y="55" width="150" height="28" rx="6" fill="#ef6a5b" opacity="0.12"/><text x="350" y="74" text-anchor="middle" fill="#ef6a5b" font-weight="700" font-size="10" font-family="DM Sans,sans-serif">Justice sociale</text><g fill="#485c64" font-size="10" font-family="DM Sans,sans-serif"><text x="270" y="105">Réduire les inégalités</text><text x="270" y="120">de revenus</text><text x="270" y="142">• Impôt progressif</text><text x="270" y="160">• Prestations sociales</text><text x="270" y="178">• Minima sociaux</text><text x="270" y="200" fill="#ef6a5b" font-weight="700">→ Corrige les inégalités</text></g><rect x="470" y="10" width="200" height="200" rx="12" fill="#e8b74f" opacity="0.1" stroke="#e8b74f" stroke-width="1.5"/><text x="570" y="40" text-anchor="middle" fill="#9a6c2a" font-weight="800" font-size="14" font-family="Manrope,sans-serif">STABILISATION</text><rect x="495" y="55" width="150" height="28" rx="6" fill="#e8b74f" opacity="0.15"/><text x="570" y="74" text-anchor="middle" fill="#9a6c2a" font-weight="700" font-size="10" font-family="DM Sans,sans-serif">Conjoncture</text><g fill="#485c64" font-size="10" font-family="DM Sans,sans-serif"><text x="490" y="105">Atténuer les fluctuations</text><text x="490" y="120">(chômage, inflation)</text><text x="490" y="142">• Politique budgétaire</text><text x="490" y="160">• Politique monétaire</text><text x="490" y="178">• Politiques structurelles</text><text x="490" y="200" fill="#9a6c2a" font-weight="700">→ Lisse les cycles</text></g><rect x="100" y="225" width="500" height="30" rx="7" fill="#132b38"/><text x="350" y="245" text-anchor="middle" fill="#fff" font-weight="700" font-size="11" font-family="DM Sans,sans-serif">Financement : prélèvements obligatoires → budget → dette publique si déficit</text></svg></div>`,

    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>Chômage conjoncturel et structurel</b></div><svg viewBox="0 0 700 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparaison chômage conjoncturel et structurel"><rect x="30" y="10" width="300" height="170" rx="12" fill="#5b8db8" opacity="0.08" stroke="#5b8db8" stroke-width="1.5"/><text x="180" y="38" text-anchor="middle" fill="#5b8db8" font-weight="800" font-size="14" font-family="Manrope,sans-serif">CHÔMAGE CONJONCTUREL</text><g fill="#485c64" font-size="11" font-family="DM Sans,sans-serif"><text x="50" y="62">Lié au ralentissement de l'activité</text><text x="50" y="85">• Baisse de la demande</text><text x="50" y="105">• Temporaire / cyclique</text><text x="50" y="130" fill="#5b8db8" font-weight="700">Réponse :</text><text x="50" y="148">Politique de relance budgétaire</text><text x="50" y="166">ou monétaire (court terme)</text></g><rect x="370" y="10" width="300" height="170" rx="12" fill="#ef6a5b" opacity="0.06" stroke="#ef6a5b" stroke-width="1.5"/><text x="520" y="38" text-anchor="middle" fill="#ef6a5b" font-weight="800" font-size="14" font-family="Manrope,sans-serif">CHÔMAGE STRUCTUREL</text><g fill="#485c64" font-size="11" font-family="DM Sans,sans-serif"><text x="390" y="62">Lié aux structures du marché</text><text x="390" y="85">• Inadéquation compétences / emplois</text><text x="390" y="105">• Persistant même en croissance</text><text x="390" y="130" fill="#ef6a5b" font-weight="700">Réponse :</text><text x="390" y="148">Formation, flexibilité, réforme</text><text x="390" y="166">du marché du travail (long terme)</text></g><rect x="100" y="195" width="500" height="28" rx="7" fill="#f2f5f2" stroke="#dfe2dc"/><text x="350" y="214" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Politiques passives (indemnisation) + Politiques actives (formation, aides à l'embauche)</text></svg></div>`,

    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>Libre-échange et protectionnisme</b></div><svg viewBox="0 0 700 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Libre-échange versus protectionnisme"><rect x="30" y="10" width="300" height="185" rx="12" fill="#87a99b" opacity="0.12" stroke="#87a99b" stroke-width="1.5"/><text x="180" y="38" text-anchor="middle" fill="#477565" font-weight="800" font-size="14" font-family="Manrope,sans-serif">LIBRE-ÉCHANGE</text><g fill="#485c64" font-size="11" font-family="DM Sans,sans-serif"><text x="50" y="65">✓ Prix plus bas (concurrence)</text><text x="50" y="87">✓ Choix et variété pour le consommateur</text><text x="50" y="109">✓ Spécialisation (avantage comparatif)</text><text x="50" y="131">✓ Innovation par la concurrence</text><text x="50" y="160" fill="#ef6a5b">✗ Ajustements sectoriels douloureux</text><text x="50" y="182" fill="#ef6a5b">✗ Gains inégalement répartis</text></g><rect x="370" y="10" width="300" height="185" rx="12" fill="#ef6a5b" opacity="0.06" stroke="#ef6a5b" stroke-width="1.5"/><text x="520" y="38" text-anchor="middle" fill="#ef6a5b" font-weight="800" font-size="14" font-family="Manrope,sans-serif">PROTECTIONNISME</text><g fill="#485c64" font-size="11" font-family="DM Sans,sans-serif"><text x="390" y="65">✓ Protège l'emploi national</text><text x="390" y="87">✓ Industrie naissante</text><text x="390" y="109">✓ Souveraineté économique</text><text x="390" y="131">Instruments : droits de douane,</text><text x="390" y="148">quotas, normes, subventions</text><text x="390" y="175" fill="#ef6a5b">✗ Hausse des prix, représailles</text></g><rect x="180" y="210" width="340" height="32" rx="8" fill="#132b38"/><text x="350" y="231" text-anchor="middle" fill="#fff" font-weight="700" font-size="11" font-family="DM Sans,sans-serif">Ricardo : avantage comparatif → gains mutuels</text></svg></div>`,

    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>Les trois piliers du développement durable</b></div><svg viewBox="0 0 700 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Trois piliers du développement durable"><rect x="200" y="10" width="300" height="44" rx="10" fill="#132b38"/><text x="350" y="37" text-anchor="middle" fill="#fff" font-weight="800" font-size="13" font-family="Manrope,sans-serif">DÉVELOPPEMENT DURABLE</text><line x1="270" y1="54" x2="130" y2="84" stroke="#dfe2dc" stroke-width="2"/><line x1="350" y1="54" x2="350" y2="84" stroke="#dfe2dc" stroke-width="2"/><line x1="430" y1="54" x2="570" y2="84" stroke="#dfe2dc" stroke-width="2"/><rect x="20" y="84" width="220" height="140" rx="11" fill="#87a99b" opacity="0.12" stroke="#87a99b" stroke-width="1.5"/><text x="130" y="112" text-anchor="middle" fill="#477565" font-weight="800" font-size="13" font-family="Manrope,sans-serif">ENVIRONNEMENTAL</text><g fill="#485c64" font-size="10" font-family="DM Sans,sans-serif"><text x="40" y="135">Préserver les ressources</text><text x="40" y="152">et les écosystèmes</text><text x="40" y="175">• Taxe carbone</text><text x="40" y="192">• Normes d'émission</text><text x="40" y="209">• Quotas échangeables</text></g><rect x="250" y="84" width="200" height="140" rx="11" fill="#5b8db8" opacity="0.1" stroke="#5b8db8" stroke-width="1.5"/><text x="350" y="112" text-anchor="middle" fill="#5b8db8" font-weight="800" font-size="13" font-family="Manrope,sans-serif">ÉCONOMIQUE</text><g fill="#485c64" font-size="10" font-family="DM Sans,sans-serif"><text x="270" y="135">Croissance soutenable</text><text x="270" y="152">et innovation</text><text x="270" y="175">• Productivité / PIB réel</text><text x="270" y="192">• Innovation</text><text x="270" y="209">• IDH vs PIB</text></g><rect x="460" y="84" width="220" height="140" rx="11" fill="#ef6a5b" opacity="0.08" stroke="#ef6a5b" stroke-width="1.5"/><text x="570" y="112" text-anchor="middle" fill="#ef6a5b" font-weight="800" font-size="13" font-family="Manrope,sans-serif">SOCIAL</text><g fill="#485c64" font-size="10" font-family="DM Sans,sans-serif"><text x="480" y="135">Réduire les inégalités</text><text x="480" y="152">et améliorer le bien-être</text><text x="480" y="175">• Éducation, santé</text><text x="480" y="192">• Conditions de travail</text><text x="480" y="209">• Cohésion sociale</text></g><rect x="120" y="245" width="460" height="32" rx="8" fill="#fff7e7" stroke="#e8b74f"/><text x="350" y="266" text-anchor="middle" fill="#9a6c2a" font-weight="700" font-size="10" font-family="DM Sans,sans-serif">Internaliser les externalités : taxe · norme · quota · subvention → modifier les comportements</text></svg></div>`,
  ],
  sgn: [
    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>De l'individu à l'acteur</b></div><svg viewBox="0 0 700 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Progression de l'individu à l'acteur dans l'organisation"><defs><marker id="ahs" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#5b8db8"/></marker></defs><rect x="20" y="80" width="130" height="90" rx="11" fill="#ef6a5b" opacity="0.1" stroke="#ef6a5b" stroke-width="1.5"/><text x="85" y="110" text-anchor="middle" fill="#ef6a5b" font-weight="800" font-size="13" font-family="Manrope,sans-serif">INDIVIDU</text><text x="85" y="130" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Personnalité</text><text x="85" y="145" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Émotions</text><text x="85" y="160" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Perception</text><line x1="152" y1="125" x2="188" y2="125" stroke="#5b8db8" stroke-width="2" marker-end="url(#ahs)"/><rect x="190" y="70" width="140" height="110" rx="11" fill="#e8b74f" opacity="0.12" stroke="#e8b74f" stroke-width="1.5"/><text x="260" y="100" text-anchor="middle" fill="#9a6c2a" font-weight="800" font-size="13" font-family="Manrope,sans-serif">COMPÉTENCES</text><text x="260" y="120" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Connaissances</text><text x="260" y="135" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Savoir-faire</text><text x="260" y="150" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Savoir-être</text><text x="260" y="170" text-anchor="middle" fill="#9a6c2a" font-size="9" font-family="DM Sans,sans-serif">Individuelle + Collective</text><line x1="332" y1="125" x2="368" y2="125" stroke="#5b8db8" stroke-width="2" marker-end="url(#ahs)"/><rect x="370" y="70" width="140" height="110" rx="11" fill="#87a99b" opacity="0.15" stroke="#87a99b" stroke-width="1.5"/><text x="440" y="100" text-anchor="middle" fill="#477565" font-weight="800" font-size="13" font-family="Manrope,sans-serif">GROUPE</text><text x="440" y="120" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Normes</text><text x="440" y="135" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Rôles</text><text x="440" y="150" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Leadership</text><text x="440" y="170" text-anchor="middle" fill="#477565" font-size="9" font-family="DM Sans,sans-serif">Culture organisationnelle</text><line x1="512" y1="125" x2="548" y2="125" stroke="#5b8db8" stroke-width="2" marker-end="url(#ahs)"/><rect x="550" y="80" width="130" height="90" rx="11" fill="#132b38"/><text x="615" y="115" text-anchor="middle" fill="#fff" font-weight="800" font-size="14" font-family="Manrope,sans-serif">ACTEUR</text><text x="615" y="135" text-anchor="middle" fill="#b4c2c6" font-size="9" font-family="DM Sans,sans-serif">Interprète, adapte</text><text x="615" y="150" text-anchor="middle" fill="#b4c2c6" font-size="9" font-family="DM Sans,sans-serif">et fait évoluer</text><text x="615" y="165" text-anchor="middle" fill="#b4c2c6" font-size="9" font-family="DM Sans,sans-serif">les règles</text><path d="M615,170 Q615,230 85,230 Q50,230 50,170" fill="none" stroke="#ef6a5b" stroke-width="1" stroke-dasharray="4 3"/><text x="350" y="250" text-anchor="middle" fill="#ef6a5b" font-size="9" font-style="italic" font-family="DM Sans,sans-serif">L'acteur transforme aussi l'individu (boucle de rétroaction)</text></svg></div>`,

    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>De la donnée à la connaissance</b></div><svg viewBox="0 0 700 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Transformation donnée information connaissance et système d'information"><defs><marker id="ahsi" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#5b8db8"/></marker></defs><rect x="40" y="30" width="160" height="85" rx="11" fill="#f2f5f2" stroke="#dfe2dc" stroke-width="1.5"/><text x="120" y="58" text-anchor="middle" fill="#132b38" font-weight="800" font-size="14" font-family="Manrope,sans-serif">DONNÉE</text><text x="120" y="78" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Élément brut</text><text x="120" y="95" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Ex : « 150 »</text><line x1="202" y1="72" x2="248" y2="72" stroke="#5b8db8" stroke-width="2" marker-end="url(#ahsi)"/><text x="225" y="64" text-anchor="middle" fill="#5b8db8" font-size="8" font-family="DM Sans,sans-serif">Structurer</text><rect x="250" y="30" width="180" height="85" rx="11" fill="#5b8db8" opacity="0.1" stroke="#5b8db8" stroke-width="1.5"/><text x="340" y="58" text-anchor="middle" fill="#5b8db8" font-weight="800" font-size="14" font-family="Manrope,sans-serif">INFORMATION</text><text x="340" y="78" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Donnée contextualisée</text><text x="340" y="95" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Ex : « 150 ventes/jour »</text><line x1="432" y1="72" x2="478" y2="72" stroke="#5b8db8" stroke-width="2" marker-end="url(#ahsi)"/><text x="455" y="64" text-anchor="middle" fill="#5b8db8" font-size="8" font-family="DM Sans,sans-serif">S'approprier</text><rect x="480" y="30" width="180" height="85" rx="11" fill="#132b38"/><text x="570" y="58" text-anchor="middle" fill="#fff" font-weight="800" font-size="14" font-family="Manrope,sans-serif">CONNAISSANCE</text><text x="570" y="78" text-anchor="middle" fill="#b4c2c6" font-size="10" font-family="DM Sans,sans-serif">Capacité à agir</text><text x="570" y="95" text-anchor="middle" fill="#b4c2c6" font-size="10" font-family="DM Sans,sans-serif">Ex : « il faut réapprovisionner »</text><rect x="80" y="150" width="540" height="90" rx="12" fill="#e8b74f" opacity="0.08" stroke="#e8b74f" stroke-width="1.5"/><text x="350" y="177" text-anchor="middle" fill="#9a6c2a" font-weight="800" font-size="13" font-family="Manrope,sans-serif">SYSTÈME D'INFORMATION (SI)</text><rect x="110" y="195" width="120" height="30" rx="6" fill="#fff" stroke="#dfe2dc"/><text x="170" y="215" text-anchor="middle" fill="#132b38" font-weight="700" font-size="10" font-family="Manrope,sans-serif">Acteurs</text><rect x="250" y="195" width="120" height="30" rx="6" fill="#fff" stroke="#dfe2dc"/><text x="310" y="215" text-anchor="middle" fill="#132b38" font-weight="700" font-size="10" font-family="Manrope,sans-serif">Règles</text><rect x="390" y="195" width="120" height="30" rx="6" fill="#fff" stroke="#dfe2dc"/><text x="450" y="215" text-anchor="middle" fill="#132b38" font-weight="700" font-size="10" font-family="Manrope,sans-serif">Outils</text><text x="350" y="260" text-anchor="middle" fill="#65747b" font-size="10" font-style="italic" font-family="DM Sans,sans-serif">Le numérique facilite la collaboration mais exige des règles (traces, sécurité, surcharge)</text></svg></div>`,

    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>Les quatre formes de valeur et la performance</b></div><svg viewBox="0 0 700 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Quatre formes de valeur et mesure de la performance"><rect x="160" y="110" width="180" height="70" rx="12" fill="#132b38"/><text x="250" y="142" text-anchor="middle" fill="#fff" font-weight="800" font-size="13" font-family="Manrope,sans-serif">PERFORMANCE</text><text x="250" y="162" text-anchor="middle" fill="#b4c2c6" font-size="10" font-family="DM Sans,sans-serif">Multidimensionnelle</text><rect x="20" y="10" width="155" height="70" rx="10" fill="#5b8db8" opacity="0.1" stroke="#5b8db8" stroke-width="1.5"/><text x="97" y="35" text-anchor="middle" fill="#5b8db8" font-weight="800" font-size="12" font-family="Manrope,sans-serif">Valeur ajoutée</text><text x="97" y="55" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Production − CI</text><text x="97" y="70" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Richesse créée</text><line x1="160" y1="60" x2="175" y2="115" stroke="#5b8db8" stroke-width="1.5" stroke-dasharray="4 3"/><rect x="20" y="200" width="155" height="70" rx="10" fill="#e8b74f" opacity="0.12" stroke="#e8b74f" stroke-width="1.5"/><text x="97" y="225" text-anchor="middle" fill="#9a6c2a" font-weight="800" font-size="12" font-family="Manrope,sans-serif">Valeur financière</text><text x="97" y="245" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Rentabilité, cours</text><text x="97" y="260" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Actionnaires</text><line x1="160" y1="220" x2="175" y2="175" stroke="#e8b74f" stroke-width="1.5" stroke-dasharray="4 3"/><rect x="345" y="10" width="155" height="70" rx="10" fill="#ef6a5b" opacity="0.08" stroke="#ef6a5b" stroke-width="1.5"/><text x="422" y="35" text-anchor="middle" fill="#ef6a5b" font-weight="800" font-size="12" font-family="Manrope,sans-serif">Valeur perçue</text><text x="422" y="55" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Qualité, image, prix</text><text x="422" y="70" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Clients</text><line x1="345" y1="60" x2="330" y2="118" stroke="#ef6a5b" stroke-width="1.5" stroke-dasharray="4 3"/><rect x="345" y="200" width="155" height="70" rx="10" fill="#87a99b" opacity="0.15" stroke="#87a99b" stroke-width="1.5"/><text x="422" y="225" text-anchor="middle" fill="#477565" font-weight="800" font-size="12" font-family="Manrope,sans-serif">Valeur sociale</text><text x="422" y="245" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Conditions de travail</text><text x="422" y="260" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Salariés</text><line x1="345" y1="225" x2="328" y2="172" stroke="#87a99b" stroke-width="1.5" stroke-dasharray="4 3"/><rect x="530" y="80" width="150" height="55" rx="9" fill="#fff" stroke="#dfe2dc"/><text x="605" y="105" text-anchor="middle" fill="#132b38" font-weight="700" font-size="11" font-family="Manrope,sans-serif">EFFICACITÉ</text><text x="605" y="122" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Atteindre l'objectif</text><rect x="530" y="150" width="150" height="55" rx="9" fill="#fff" stroke="#dfe2dc"/><text x="605" y="175" text-anchor="middle" fill="#132b38" font-weight="700" font-size="11" font-family="Manrope,sans-serif">EFFICIENCE</text><text x="605" y="192" text-anchor="middle" fill="#65747b" font-size="9" font-family="DM Sans,sans-serif">Minimiser les ressources</text><text x="350" y="300" text-anchor="middle" fill="#65747b" font-size="10" font-style="italic" font-family="DM Sans,sans-serif">Le tableau de bord regroupe les indicateurs clés pour piloter la performance</text></svg></div>`,

    `<div class="course-diagram"><div class="diagram-label"><span>SCHÉMA DE SYNTHÈSE</span><b>La matrice des risques</b></div><svg viewBox="0 0 700 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Matrice des risques probabilité gravité"><line x1="120" y1="30" x2="120" y2="270" stroke="#132b38" stroke-width="2"/><line x1="120" y1="270" x2="620" y2="270" stroke="#132b38" stroke-width="2"/><text x="60" y="155" text-anchor="middle" fill="#132b38" font-weight="700" font-size="12" font-family="Manrope,sans-serif" transform="rotate(-90 60 155)">PROBABILITÉ</text><text x="370" y="300" text-anchor="middle" fill="#132b38" font-weight="700" font-size="12" font-family="Manrope,sans-serif">GRAVITÉ</text><text x="90" y="58" text-anchor="end" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Forte</text><text x="90" y="160" text-anchor="end" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Moyenne</text><text x="90" y="265" text-anchor="end" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Faible</text><text x="200" y="288" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Faible</text><text x="370" y="288" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Moyenne</text><text x="560" y="288" text-anchor="end" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Forte</text><rect x="125" y="175" width="160" height="90" rx="10" fill="#87a99b" opacity="0.15"/><text x="205" y="220" text-anchor="middle" fill="#477565" font-weight="700" font-size="12" font-family="Manrope,sans-serif">ACCEPTABLE</text><text x="205" y="240" text-anchor="middle" fill="#477565" font-size="9" font-family="DM Sans,sans-serif">Surveiller</text><rect x="290" y="90" width="160" height="175" rx="10" fill="#e8b74f" opacity="0.15"/><rect x="125" y="35" width="160" height="135" rx="10" fill="#e8b74f" opacity="0.15"/><text x="370" y="180" text-anchor="middle" fill="#9a6c2a" font-weight="700" font-size="12" font-family="Manrope,sans-serif">MODÉRÉ</text><text x="370" y="200" text-anchor="middle" fill="#9a6c2a" font-size="9" font-family="DM Sans,sans-serif">Prévenir / Réduire</text><rect x="455" y="35" width="160" height="230" rx="10" fill="#ef6a5b" opacity="0.12"/><rect x="290" y="35" width="160" height="50" rx="10" fill="#ef6a5b" opacity="0.12"/><text x="535" y="150" text-anchor="middle" fill="#ef6a5b" font-weight="700" font-size="12" font-family="Manrope,sans-serif">CRITIQUE</text><text x="535" y="170" text-anchor="middle" fill="#ef6a5b" font-size="9" font-family="DM Sans,sans-serif">Transférer / Éviter</text><rect x="120" y="310" width="500" height="26" rx="6" fill="#f2f5f2" stroke="#dfe2dc"/><text x="370" y="328" text-anchor="middle" fill="#65747b" font-size="10" font-family="DM Sans,sans-serif">Réponses : éviter · prévenir · transférer (assurance) · accepter le risque résiduel</text></svg></div>`,
  ],
};
const profile = teachingProfiles[key];
program.themes.forEach((theme, index) => {
  const chapter = document.querySelector(`#${slug(index)} .chapter-content`);
  const [, summary, notions, , question, answer] = theme;
  const [a, b, c] = notions;
  chapter
    .querySelector('.objectives')
    .insertAdjacentHTML(
      'beforebegin',
      `<div class="learning-path"><div><b>1</b><span>Se questionner</span></div><div><b>2</b><span>Comprendre</span></div><div><b>3</b><span>S'entraîner</span></div><div><b>4</b><span>Transférer</span></div></div><div class="diagnostic"><span class="activity-label">QUESTION DE DÉPART</span><h4>${profile.question}</h4><p>Formulez une première réponse en deux phrases avant de lire. Comparez-la ensuite à votre réponse finale pour rendre vos progrès visibles.</p></div>`,
    );
  chapter
    .querySelector('.activity-tabs')
    .insertAdjacentHTML(
      'beforebegin',
      `<div class="deep-course"><div class="course-block"><span>LE MÉCANISME PAS À PAS</span><h4>Construire un raisonnement, pas une récitation</h4><p><strong>${a}</strong> est le point d’entrée. Reliez-le à <strong>${b}</strong>, puis observez les effets sur <strong>${c}</strong>. Une réponse solide explique pourquoi une cause produit une conséquence et sous quelles conditions.</p><div class="mechanism"><div><b>01 · REPÉRER</b><span>Acteurs, décision et informations significatives.</span></div><div><b>02 · RELIER</b><span>${a} et ${b} expliquent le mécanisme.</span></div><div><b>03 · CONCLURE</b><span>Réponse explicite fondée sur le contexte.</span></div></div></div><div class="course-block"><span>DISTINCTIONS ESSENTIELLES</span><h4>Ne plus confondre les notions</h4><div class="distinction"><div class="distinction-head"><b>${a}</b><b>${b}</b></div><div class="distinction-row"><div>Notion de départ : à définir, caractériser et repérer.</div><div>Notion complémentaire : elle explique les effets ou les limites.</div></div></div><p>Test : inventez un exemple où <strong>${a}</strong> est présent mais pas <strong>${b}</strong>.</p></div><div class="method-sheet"><span class="activity-label">MÉTHODE DE RÉDACTION</span><h4>La réponse en cinq mouvements</h4><ol>${profile.method.map((s) => `<li>${s}</li>`).join('')}</ol></div><div class="mistakes"><span class="activity-label">ERREURS FRÉQUENTES</span><h4>Ce qui fait perdre des points</h4><ul>${profile.errors.map((e) => `<li>${e}</li>`).join('')}<li>Écrire « on voit que » sans notion ni lien logique.</li></ul></div><div class="course-block"><span>ENTRAÎNEMENT PROGRESSIF</span><h4>Trois niveaux pour installer la maîtrise</h4><div class="training-levels"><div class="training-card"><small>NIVEAU 1 · MÉMOIRE</small><h5>Restituer</h5><p>Définissez ${a}, puis citez trois notions sans regarder.</p><details><summary>Critère de réussite</summary><p>Une définition précise et trois notions correctement nommées.</p></details></div><div class="training-card"><small>NIVEAU 2 · COMPRÉHENSION</small><h5>Expliquer</h5><p>Construisez trois relations de cause à effet à partir de l’exemple.</p><details><summary>Critère de réussite</summary><p>Chaque flèche se lit avec « entraîne », « permet » ou « limite ».</p></details></div><div class="training-card"><small>NIVEAU 3 · TRANSFERT</small><h5>Argumenter</h5><p>${question}</p><details><summary>Corrigé raisonné</summary><p>${answer}</p></details></div></div></div><div class="mastery-check"><h4>Je maîtrise ce chapitre si…</h4><label><input type="checkbox"> je définis sans support ;</label><label><input type="checkbox"> j’explique avec un exemple nouveau ;</label><label><input type="checkbox"> je rédige en moins de 12 minutes.</label></div></div>`,
    );
});
program.themes.forEach((theme, index) => {
  const deep = document.querySelector(`#${slug(index)} .deep-course`);
  deep.insertAdjacentHTML(
    'afterbegin',
    `<section class="course-block detailed-lesson" aria-label="Support de cours"><div class="support-heading"><div><span>SUPPORT DE COURS · À LIRE ET À APPRENDRE</span><h4>${theme[0]}</h4></div><button class="print-course" type="button">Imprimer le cours</button></div><p class="support-lead">Ce support présente les connaissances à maîtriser, les explique progressivement et montre comment les utiliser dans une réponse.</p>${deepLessons[key][index]}${courseDiagrams[key]?.[index] || ''}</section>`,
  );
});
const audience =
  key === 'cejm'
    ? {
        badge: 'BTS',
        label: 'Niveau post-bac',
        intro:
          'Le cours croise économie, droit et management. Les réponses doivent être argumentées, contextualisées et rédigées avec le vocabulaire professionnel.',
        simple:
          'En termes simples : partez toujours du problème concret de l’entreprise, choisissez les notions utiles, puis montrez les conséquences de sa décision.',
        exam: 'À l’épreuve CEJM, une affirmation isolée ne rapporte que peu de points. Une bonne réponse associe notion exacte, élément du dossier, explication et conclusion.',
        length: '15 à 20 lignes pour une question d’analyse',
        steps: [
          'Je définis la notion utile.',
          'Je cite une information précise du dossier.',
          'J’explique ce qu’elle provoque pour l’entreprise.',
          'Je conclus en répondant exactement à la consigne.',
        ],
      }
    : {
        badge: 'STMG',
        label: 'Niveau lycée',
        intro:
          'Les notions sont introduites progressivement. Commencez par comprendre avec vos mots, puis apprenez la formulation précise attendue au baccalauréat.',
        simple:
          'En termes simples : cherchez qui agit, ce qui se passe, pourquoi cela se produit et quelle conséquence on peut en tirer.',
        exam: 'Au baccalauréat, une réponse courte peut être excellente si elle définit, utilise le document et explique clairement. Inutile d’employer des mots compliqués qui ne sont pas maîtrisés.',
        length: '8 à 12 lignes pour une réponse argumentée',
        steps: [
          'Je réponds d’abord avec mes mots.',
          'Je remplace les mots courants par les notions du cours.',
          'Je prends un élément concret du document.',
          'Je rédige une conclusion courte et claire.',
        ],
      };
program.themes.forEach((theme, index) => {
  const chapter = document.querySelector(`#${slug(index)} .chapter-content`),
    deep = chapter.querySelector('.deep-course'),
    notions = theme[2];
  chapter.insertAdjacentHTML(
    'afterbegin',
    `<div class="audience-banner"><span class="audience-badge">${audience.badge}</span><div><strong>${audience.label} · difficulté progressive</strong><p>${audience.intro}</p></div></div>`,
  );
  const support = deep.querySelector('.detailed-lesson'),
    banner = chapter.querySelector('.audience-banner');
  banner.insertAdjacentElement('afterend', support);
  support.insertAdjacentHTML(
    'afterend',
    `<div class="simple-explanation"><span class="activity-label">SI JE DEVAIS L'EXPLIQUER À UN CAMARADE</span><h4>L’idée essentielle</h4><p>${audience.simple} Dans ce chapitre, les mots indispensables sont <strong>${notions.slice(0, 3).join(', ')}</strong>.</p></div><div class="guided-answer"><span class="activity-label">RÉPONSE GUIDÉE</span><h4>Construire sa réponse sans se perdre</h4><div class="answer-frame">${audience.steps.map((s, i) => `<div><b>Étape ${i + 1}</b><span>${s}</span></div>`).join('')}</div></div><div class="exam-expectation"><strong>Ce que le correcteur attend · ${audience.length}</strong><p>${audience.exam}</p></div>`,
  );
  const levelDots =
    key === 'cejm' ? 3 : Math.min(3, 1 + Math.floor(index / (program.themes.length / 3)));
  chapter
    .closest('.chapter')
    .querySelector('.chapter-title small')
    .insertAdjacentHTML(
      'beforeend',
      `<span class="difficulty" title="Niveau de difficulté">${[1, 2, 3].map((n) => `<i class="${n <= levelDots ? 'on' : ''}"></i>`).join('')}</span>`,
    );
  chapter.insertAdjacentHTML(
    'beforeend',
    `<div class="chapter-status"><span>Progression enregistrée sur cet appareil</span><button class="mark-mastered" data-chapter-key="${key}-${index}">Marquer ce chapitre comme maîtrisé</button></div>`,
  );
});
const requestedChapter = location.hash
  ? document.querySelector(location.hash)
  : (window.innerWidth > 600 ? document.querySelector('.chapter') : null);
if (requestedChapter) {
  requestedChapter.classList.add('open');
  const toggle = requestedChapter.querySelector('.chapter-toggle');
  const content = requestedChapter.querySelector('.chapter-content');
  if (toggle) {
    toggle.textContent = '×';
    toggle.setAttribute('aria-label', 'Fermer le chapitre');
  }
  if (content) content.style.maxHeight = 'none';
}
document.querySelectorAll('.chapter-header').forEach((h) =>
  h.addEventListener('click', () => {
    const chapter = h.parentElement;
    const toggle = h.querySelector('.chapter-toggle');
    const content = chapter.querySelector('.chapter-content');
    const isOpen = chapter.classList.contains('open');

    if (isOpen) {
      content.style.maxHeight = content.scrollHeight + 'px';
      requestAnimationFrame(() => {
        content.style.maxHeight = '0';
      });
      chapter.classList.remove('open');
      toggle.textContent = '+';
      toggle.setAttribute('aria-label', 'Ouvrir le chapitre');
    } else {
      chapter.classList.add('open');
      content.style.maxHeight = content.scrollHeight + 'px';
      toggle.textContent = '×';
      toggle.setAttribute('aria-label', 'Fermer le chapitre');
      content.addEventListener(
        'transitionend',
        () => {
          if (chapter.classList.contains('open')) content.style.maxHeight = 'none';
        },
        { once: true },
      );
    }
  }),
);
document.querySelectorAll('.activity-tabs button').forEach((b) =>
  b.addEventListener('click', (e) => {
    const chapter = e.target.closest('.chapter-content');
    chapter.querySelectorAll('.activity-tabs button').forEach((x) => x.classList.remove('active'));
    chapter.querySelectorAll('.activity-panel').forEach((x) => x.classList.remove('active'));
    e.target.classList.add('active');
    chapter.querySelector(`[data-content="${e.target.dataset.panel}"]`).classList.add('active');
  }),
);
document.querySelectorAll('.reveal-answer').forEach((b) =>
  b.addEventListener('click', () => {
    const a = b.nextElementSibling;
    a.style.display = a.style.display === 'block' ? 'none' : 'block';
    b.textContent =
      a.style.display === 'block' ? 'Masquer le corrigé' : 'Afficher le corrigé guidé';
  }),
);
const specificQuizzes = {
  cejm: [
    [
      ['Un flux monétaire correspond à :', 'Un mouvement d’argent entre deux agents économiques', 'Un transfert physique de marchandises', 'Une obligation juridique sans contrepartie', 'Le salaire est un flux monétaire versé en contrepartie du travail fourni.'],
      ['Une externalité négative se caractérise par :', 'Un coût subi par un tiers non impliqué dans l’échange', 'Une hausse du prix décidée par le vendeur', 'Un bénéfice involontaire pour le producteur', 'La pollution d’usine impose un coût aux riverains sans compensation par le marché.'],
      ['Les parties prenantes d’une entreprise incluent :', 'Salariés, clients, fournisseurs, actionnaires et collectivités', 'Uniquement les actionnaires et les dirigeants', 'Seulement les clients et les concurrents', 'Les parties prenantes sont tous les acteurs qui influencent ou sont affectés par les décisions de l’entreprise.'],
    ],
    [
      ['Une politique conjoncturelle agit principalement sur :', 'La demande à court terme via le budget ou la monnaie', 'Les structures productives à long terme', 'La réglementation du commerce extérieur', 'Elle vise à stabiliser l’activité économique à court terme, par exemple en relançant la consommation.'],
      ['Un abus de position dominante suppose :', 'D’abord une position de puissance, puis son exploitation abusive', 'Une simple part de marché élevée', 'Un accord secret entre concurrents', 'La position dominante n’est pas interdite en soi ; c’est son exploitation abusive qui l’est.'],
      ['Le modèle PESTEL sert à :', 'Analyser le macro-environnement en classant les facteurs externes', 'Évaluer la rentabilité financière d’un projet', 'Comparer les forces et faiblesses internes', 'PESTEL identifie les opportunités et menaces politiques, économiques, socioculturelles, technologiques, écologiques et légales.'],
    ],
    [
      ['Les coûts de transaction comprennent :', 'Les coûts de recherche, négociation et contrôle d’un échange', 'Uniquement le prix d’achat du bien', 'Les charges salariales de l’entreprise', 'Ils expliquent pourquoi une entreprise peut préférer produire elle-même plutôt que sous-traiter.'],
      ['La productivité mesure :', 'Le rapport entre la production obtenue et les ressources utilisées', 'Le chiffre d’affaires total de l’entreprise', 'Le nombre de salariés par unité produite', 'Une productivité élevée signifie produire plus avec moins de facteurs.'],
      ['La RSE consiste pour l’entreprise à :', 'Intégrer volontairement des préoccupations sociales et environnementales', 'Respecter uniquement les obligations légales', 'Maximiser le profit à court terme', 'La RSE va au-delà du cadre juridique en engageant l’entreprise sur des enjeux sociétaux.'],
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
    ],
    [
      ['Un avantage concurrentiel durable repose sur une ressource :', 'Rare, difficilement imitable et correctement organisée', 'Simplement disponible sur le marché', 'Coûteuse à acquérir', 'Une ressource accessible à tous ne suffit pas à se différencier durablement.'],
      ['La croissance externe se réalise par :', 'Le rachat ou la fusion avec une autre entreprise', 'Le recrutement progressif de nouveaux salariés', 'L’augmentation de la production interne', 'Elle offre rapidité et parts de marché immédiates mais comporte des risques d’intégration.'],
      ['L’internationalisation par alliance permet :', 'De partager risques, investissements et connaissance du marché', 'D’éliminer totalement la concurrence locale', 'De ne supporter aucun coût à l’étranger', 'L’alliance est adaptée quand les moyens financiers sont limités et le marché étranger mal connu.'],
    ],
  ],
  droit: [
    [
      ['La règle de droit se distingue d’une règle morale parce qu’elle est :', 'Générale, impersonnelle et assortie d’une sanction étatique', 'Applicable uniquement aux professionnels', 'Fondée sur la conscience individuelle', 'La règle de droit s’impose à tous et son non-respect peut être sanctionné par l’autorité publique.'],
      ['Dans la hiérarchie des normes, un décret doit respecter :', 'La Constitution, les traités, les lois et les règlements supérieurs', 'Uniquement la volonté du gouvernement', 'Les décisions des tribunaux de première instance', 'Chaque norme inférieure doit être conforme aux normes qui lui sont supérieures.'],
      ['La jurisprudence désigne :', 'L’ensemble des décisions par lesquelles les juridictions interprètent le droit', 'Les lois votées par le Parlement', 'Les règlements adoptés par le gouvernement', 'Elle complète et précise la loi par l’interprétation qu’en font les juges.'],
    ],
    [
      ['La Cour de cassation a pour rôle de :', 'Vérifier la correcte application du droit sans rejuger les faits', 'Rejuger l’ensemble du litige en fait et en droit', 'Arbitrer les conflits entre particuliers', 'Elle contrôle le droit ; les faits relèvent des juges du fond.'],
      ['La charge de la preuve pèse en principe sur :', 'Celui qui réclame l’exécution d’une obligation', 'Le juge qui tranche le litige', 'Le défendeur qui conteste la demande', 'C’est au demandeur de prouver ce qu’il allègue (article 1353 du Code civil).'],
      ['La médiation se distingue du procès parce qu’elle :', 'Repose sur un accord amiable facilité par un tiers neutre', 'Impose une décision obligatoire aux parties', 'N’est possible qu’en matière pénale', 'La médiation est un mode alternatif de règlement plus rapide et confidentiel.'],
    ],
    [
      ['La personnalité juridique confère :', 'L’aptitude à être titulaire de droits et d’obligations', 'Uniquement le droit de vote', 'La capacité d’exercer tous les actes sans restriction', 'Elle s’acquiert à la naissance pour les personnes physiques et à l’immatriculation pour les morales.'],
      ['Un mineur peut :', 'Accomplir seul les actes de la vie courante', 'Vendre un bien immobilier sans autorisation', 'Conclure un contrat de travail à temps plein à 14 ans', 'Sa capacité d’exercice est limitée ; les actes graves nécessitent la représentation légale.'],
      ['Une personne morale peut :', 'Contracter, posséder un patrimoine et agir en justice', 'Exercer uniquement des activités commerciales', 'Se marier et voter', 'L’association, la société ou la collectivité ont une personnalité juridique distincte de leurs membres.'],
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
    if (item.dataset.answered) return;
    item.dataset.answered = 'true';
    item.querySelectorAll('.option').forEach((x) => {
      x.disabled = true;
      if (x.dataset.good === 'true') x.classList.add('correct');
    });
    if (b.dataset.good === 'false') b.classList.add('wrong');
    item.querySelector('.quiz-explanation').style.display = 'block';
  }),
);
const mastered = JSON.parse(localStorage.getItem('nexus-mastered-chapters') || '[]');
document.querySelectorAll('.mark-mastered').forEach((button) => {
  if (mastered.includes(button.dataset.chapterKey)) {
    button.classList.add('done');
    button.textContent = 'Chapitre maîtrisé ✓';
  }
  button.addEventListener('click', () => {
    const id = button.dataset.chapterKey,
      pos = mastered.indexOf(id);
    if (pos < 0) {
      mastered.push(id);
      button.classList.add('done');
      button.textContent = 'Chapitre maîtrisé ✓';
    } else {
      mastered.splice(pos, 1);
      button.classList.remove('done');
      button.textContent = 'Marquer ce chapitre comme maîtrisé';
    }
    localStorage.setItem('nexus-mastered-chapters', JSON.stringify(mastered));
  });
});
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
    `<section class="exam-blanc" id="examen"><div class="exam-blanc-card"><div class="exam-blanc-intro"><div class="subject-kicker">ÉPREUVE BLANCHE</div><h2>${examData.title}<br><span>${examData.subtitle}</span></h2><p>${examData.desc}</p><div class="exam-blanc-meta"><span>⏱ ${examData.duration}</span><span>◫ ${examData.qcount} questions</span><span>◎ ${examData.level}</span></div><button class="button primary" id="startExamBlanc">Lancer l'épreuve <span>→</span></button></div><div class="exam-blanc-missions">${examData.missions.map((m) => `<article><span>PARTIE ${String(m.num).padStart(2, '0')}</span><h3>${m.title}</h3><p>${m.summary}</p><b>${m.time}</b></article>`).join('')}</div></div><div class="exam-blanc-content" id="examBlancContent">${examData.missions.map((m) => `<div class="exam-blanc-mission"><div class="exam-mission-header"><span>PARTIE ${m.num}</span><h3>${m.title}</h3></div>${m.items.map((q) => `<div class="exam-blanc-question"><h4>${q[0]}</h4><div class="exam-situation"><strong>Situation</strong><p>${q[1]}</p></div><div class="exam-consigne"><strong>Travail demandé</strong><p>${q[2]}</p></div><button class="correction-button">Afficher le corrigé</button><div class="full-correction"><p>${q[3]}</p></div></div>`).join('')}</div>`).join('')}</div></section>`,
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
