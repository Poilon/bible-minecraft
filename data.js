const minecraftItems = [
    {
        id: "dirt",
        name: "Terre",
        icon: "🟫",
        category: "blocks",
        description: "Bloc de terre commun trouvé partout dans le monde. Peut être transformé en chemin avec une pelle.",
        properties: ["Peut être labouré avec une houe", "Se transforme en herbe naturellement", "Gravité: Non"],
        obtention: "Minage, trouvable naturellement",
        recipes: []
    },
    {
        id: "grass_block",
        name: "Bloc d'herbe",
        icon: "🟩",
        category: "blocks",
        description: "Bloc de terre recouvert d'herbe. Source de terre et de graines.",
        properties: ["Devient de la terre si couvert", "Spawn de la végétation", "Gravité: Non"],
        obtention: "Minage avec Silk Touch",
        recipes: []
    },
    {
        id: "stone",
        name: "Pierre",
        icon: "⬜",
        category: "blocks",
        description: "Bloc de pierre obtenu en minant de la roche avec une pioche.",
        properties: ["Résistance: Moyenne", "Outil: Pioche", "Gravité: Non"],
        obtention: "Minage de cobblestone dans un fourneau",
        recipes: []
    },
    {
        id: "cobblestone",
        name: "Roche",
        icon: "🪨",
        category: "blocks",
        description: "Pierre brute obtenue en minant de la pierre.",
        properties: ["Résistance: Moyenne", "Outil: Pioche", "Matériau de craft commun"],
        obtention: "Minage de pierre",
        recipes: [
            {ingredients: ["pierre", "pierre", "pierre", "pierre", "bâton", "pierre", "pierre", "pierre", "pierre"], result: "Fourneau"}
        ]
    },
    {
        id: "oak_log",
        name: "Bûche de chêne",
        icon: "🪵",
        category: "blocks",
        description: "Bois de base obtenu des arbres. Essentiel pour le craft.",
        properties: ["Peut brûler", "Source de planches", "Gravité: Non"],
        obtention: "Abattage d'arbres",
        recipes: [
            {ingredients: ["bûche"], result: "4x Planches de chêne"}
        ]
    },
    {
        id: "oak_planks",
        name: "Planches de chêne",
        icon: "🟫",
        category: "blocks",
        description: "Planches de bois, matériau de construction de base.",
        properties: ["Matériau de craft", "Combustible", "Résistance: Faible"],
        obtention: "Craft avec des bûches",
        recipes: [
            {ingredients: ["planches", "", "", "planches", "", "", "", "", ""], result: "Bâtons x4"},
            {ingredients: ["planches", "planches", "", "planches", "planches", "", "", "", ""], result: "Table de craft"},
            {ingredients: ["planches", "planches", "planches", "", "planches", "", "", "planches", ""], result: "Coffre"}
        ]
    },
    {
        id: "crafting_table",
        name: "Table de craft",
        icon: "🔨",
        category: "blocks",
        description: "Table permettant l'accès à la grille de craft 3x3.",
        properties: ["Essentiel pour progresser", "Combustible", "Portable"],
        obtention: "Craft avec 4 planches",
        recipes: []
    },
    {
        id: "furnace",
        name: "Fourneau",
        icon: "🔥",
        category: "blocks",
        description: "Permet de cuire des objets et de fondre des minerais.",
        properties: ["Nécessite du combustible", "Résistance: Haute", "Émet de la lumière quand actif"],
        obtention: "Craft avec 8 roches",
        recipes: []
    },
    {
        id: "chest",
        name: "Coffre",
        icon: "📦",
        category: "blocks",
        description: "Conteneur de stockage avec 27 emplacements.",
        properties: ["27 slots de stockage", "Peut se combiner en double coffre", "Peut être verrouillé"],
        obtention: "Craft avec 8 planches",
        recipes: []
    },
    {
        id: "bed",
        name: "Lit",
        icon: "🛏️",
        category: "decorations",
        description: "Permet de dormir et de définir un point de réapparition.",
        properties: ["Définit le spawn", "Passe la nuit", "Plusieurs couleurs disponibles"],
        obtention: "Craft avec 3 planches et 3 laines",
        recipes: [
            {ingredients: ["laine", "laine", "laine", "planches", "planches", "planches", "", "", ""], result: "Lit"}
        ]
    },
    {
        id: "torch",
        name: "Torche",
        icon: "🔦",
        category: "decorations",
        description: "Source de lumière portable. Niveau de lumière: 14.",
        properties: ["Niveau de lumière: 14", "Empêche le spawn de mobs", "Peut fondre la neige"],
        obtention: "Craft avec charbon et bâton",
        recipes: [
            {ingredients: ["charbon", "", "", "bâton", "", "", "", "", ""], result: "4x Torches"}
        ]
    },
    {
        id: "stick",
        name: "Bâton",
        icon: "🦯",
        category: "items",
        description: "Matériau de craft essentiel pour les outils et armes.",
        properties: ["Combustible faible", "Craft d'outils", "Très commun"],
        obtention: "Craft avec 2 planches",
        recipes: []
    },
    {
        id: "coal",
        name: "Charbon",
        icon: "⚫",
        category: "items",
        description: "Combustible et matériau de craft. Trouvé dans les minerais de charbon.",
        properties: ["Combustible efficace", "Craft de torches", "Trouvé en profondeur"],
        obtention: "Minage de minerai de charbon",
        recipes: []
    },
    {
        id: "iron_ore",
        name: "Minerai de fer",
        icon: "🪨",
        category: "blocks",
        description: "Minerai contenant du fer brut. Doit être fondu.",
        properties: ["Nécessite pioche en pierre minimum", "Trouvé jusqu'à Y=72", "Donne du fer brut"],
        obtention: "Minage en profondeur",
        recipes: []
    },
    {
        id: "iron_ingot",
        name: "Lingot de fer",
        icon: "🔩",
        category: "items",
        description: "Lingot de fer obtenu par fonte. Matériau très utile.",
        properties: ["Craft d'outils niveau 2", "Craft d'armure", "Très polyvalent"],
        obtention: "Fonte de fer brut ou minerai",
        recipes: [
            {ingredients: ["fer", "fer", "fer", "", "fer", "", "", "fer", ""], result: "Seau"},
            {ingredients: ["fer", "fer", "fer", "", "bâton", "", "", "bâton", ""], result: "Pioche en fer"}
        ]
    },
    {
        id: "gold_ore",
        name: "Minerai d'or",
        icon: "🟡",
        category: "blocks",
        description: "Minerai rare contenant de l'or brut.",
        properties: ["Nécessite pioche en fer minimum", "Rare", "Trouvé en profondeur"],
        obtention: "Minage profond",
        recipes: []
    },
    {
        id: "gold_ingot",
        name: "Lingot d'or",
        icon: "🟨",
        category: "items",
        description: "Lingot d'or précieux. Outils rapides mais fragiles.",
        properties: ["Enchantabilité élevée", "Durabilité faible", "Utilisé pour piglins"],
        obtention: "Fonte d'or brut ou minerai",
        recipes: [
            {ingredients: ["or", "or", "or", "or", "or", "or", "or", "or", "or"], result: "Bloc d'or"}
        ]
    },
    {
        id: "diamond_ore",
        name: "Minerai de diamant",
        icon: "💎",
        category: "blocks",
        description: "Minerai très rare contenant des diamants.",
        properties: ["Nécessite pioche en fer minimum", "Très rare", "Trouvé sous Y=16"],
        obtention: "Minage très profond",
        recipes: []
    },
    {
        id: "diamond",
        name: "Diamant",
        icon: "💎",
        category: "items",
        description: "Gemme très rare utilisée pour l'équipement de haut niveau.",
        properties: ["Très rare", "Meilleurs outils", "Nécessaire pour le Nether"],
        obtention: "Minage de minerai de diamant",
        recipes: [
            {ingredients: ["diamant", "diamant", "diamant", "", "bâton", "", "", "bâton", ""], result: "Pioche en diamant"}
        ]
    },
    {
        id: "emerald",
        name: "Émeraude",
        icon: "🟢",
        category: "items",
        description: "Gemme rare utilisée pour le commerce avec les villageois.",
        properties: ["Très rare", "Monnaie d'échange", "Trouvé dans les montagnes"],
        obtention: "Minage, commerce",
        recipes: []
    },
    {
        id: "redstone",
        name: "Poudre de redstone",
        icon: "🔴",
        category: "redstone",
        description: "Minerai permettant de créer des circuits électriques.",
        properties: ["Crée des circuits", "15 niveaux de puissance", "Émet une faible lumière"],
        obtention: "Minage de minerai de redstone",
        recipes: [
            {ingredients: ["redstone", "redstone", "redstone", "redstone", "fer", "redstone", "redstone", "redstone", "redstone"], result: "Boussole"}
        ]
    },
    {
        id: "lapis_lazuli",
        name: "Lapis-lazuli",
        icon: "🔵",
        category: "items",
        description: "Minerai bleu utilisé pour les enchantements et la teinture.",
        properties: ["Nécessaire pour enchanter", "Colorant bleu", "Trouvé en profondeur"],
        obtention: "Minage de minerai de lapis",
        recipes: []
    },
    {
        id: "wooden_pickaxe",
        name: "Pioche en bois",
        icon: "⛏️",
        category: "tools",
        description: "Première pioche craftable. Permet de miner la pierre.",
        properties: ["Durabilité: 59", "Vitesse: Lente", "Mine: Pierre, charbon"],
        obtention: "Craft avec planches et bâtons",
        recipes: [
            {ingredients: ["planches", "planches", "planches", "", "bâton", "", "", "bâton", ""], result: "Pioche en bois"}
        ]
    },
    {
        id: "stone_pickaxe",
        name: "Pioche en pierre",
        icon: "⛏️",
        category: "tools",
        description: "Pioche permettant de miner le fer et autres minerais.",
        properties: ["Durabilité: 131", "Vitesse: Moyenne", "Mine: Fer, lapis, etc."],
        obtention: "Craft avec roche et bâtons",
        recipes: [
            {ingredients: ["roche", "roche", "roche", "", "bâton", "", "", "bâton", ""], result: "Pioche en pierre"}
        ]
    },
    {
        id: "iron_pickaxe",
        name: "Pioche en fer",
        icon: "⛏️",
        category: "tools",
        description: "Pioche solide permettant de miner diamants et or.",
        properties: ["Durabilité: 250", "Vitesse: Rapide", "Mine: Diamant, or, redstone"],
        obtention: "Craft avec fer et bâtons",
        recipes: []
    },
    {
        id: "diamond_pickaxe",
        name: "Pioche en diamant",
        icon: "⛏️",
        category: "tools",
        description: "Une des meilleures pioches. Mine obsidienne et ancient debris.",
        properties: ["Durabilité: 1561", "Vitesse: Très rapide", "Mine: Obsidienne"],
        obtention: "Craft avec diamants et bâtons",
        recipes: []
    },
    {
        id: "wooden_axe",
        name: "Hache en bois",
        icon: "🪓",
        category: "tools",
        description: "Hache de base pour couper le bois rapidement.",
        properties: ["Durabilité: 59", "Efficace sur bois", "Arme faible"],
        obtention: "Craft avec planches et bâtons",
        recipes: [
            {ingredients: ["planches", "planches", "", "planches", "bâton", "", "", "bâton", ""], result: "Hache en bois"}
        ]
    },
    {
        id: "iron_axe",
        name: "Hache en fer",
        icon: "🪓",
        category: "tools",
        description: "Hache efficace pour le bois et arme décente.",
        properties: ["Durabilité: 250", "Dégâts: 9", "Coupe rapide"],
        obtention: "Craft avec fer et bâtons",
        recipes: [
            {ingredients: ["fer", "fer", "", "fer", "bâton", "", "", "bâton", ""], result: "Hache en fer"}
        ]
    },
    {
        id: "wooden_shovel",
        name: "Pelle en bois",
        icon: "🥄",
        category: "tools",
        description: "Pelle de base pour creuser terre, sable et gravier.",
        properties: ["Durabilité: 59", "Crée des chemins", "Efficace sur terre"],
        obtention: "Craft avec planches et bâtons",
        recipes: [
            {ingredients: ["planches", "", "", "bâton", "", "", "bâton", "", ""], result: "Pelle en bois"}
        ]
    },
    {
        id: "iron_shovel",
        name: "Pelle en fer",
        icon: "🥄",
        category: "tools",
        description: "Pelle solide et rapide.",
        properties: ["Durabilité: 250", "Vitesse: Rapide", "Polyvalente"],
        obtention: "Craft avec fer et bâtons",
        recipes: [
            {ingredients: ["fer", "", "", "bâton", "", "", "bâton", "", ""], result: "Pelle en fer"}
        ]
    },
    {
        id: "wooden_hoe",
        name: "Houe en bois",
        icon: "🔱",
        category: "tools",
        description: "Outil pour labourer la terre en vue de l'agriculture.",
        properties: ["Durabilité: 59", "Laboure la terre", "Nécessaire pour fermes"],
        obtention: "Craft avec planches et bâtons",
        recipes: [
            {ingredients: ["planches", "planches", "", "", "bâton", "", "", "bâton", ""], result: "Houe en bois"}
        ]
    },
    {
        id: "wooden_sword",
        name: "Épée en bois",
        icon: "🗡️",
        category: "weapons",
        description: "Première arme craftable pour le combat.",
        properties: ["Durabilité: 59", "Dégâts: 4", "Vitesse d'attaque: Rapide"],
        obtention: "Craft avec planches et bâton",
        recipes: [
            {ingredients: ["planches", "", "", "planches", "", "", "bâton", "", ""], result: "Épée en bois"}
        ]
    },
    {
        id: "stone_sword",
        name: "Épée en pierre",
        icon: "🗡️",
        category: "weapons",
        description: "Épée solide du début de partie.",
        properties: ["Durabilité: 131", "Dégâts: 5", "Bon rapport qualité/prix"],
        obtention: "Craft avec roche et bâton",
        recipes: [
            {ingredients: ["roche", "", "", "roche", "", "", "bâton", "", ""], result: "Épée en pierre"}
        ]
    },
    {
        id: "iron_sword",
        name: "Épée en fer",
        icon: "🗡️",
        category: "weapons",
        description: "Épée de qualité moyenne-haute.",
        properties: ["Durabilité: 250", "Dégâts: 6", "Fiable"],
        obtention: "Craft avec fer et bâton",
        recipes: [
            {ingredients: ["fer", "", "", "fer", "", "", "bâton", "", ""], result: "Épée en fer"}
        ]
    },
    {
        id: "diamond_sword",
        name: "Épée en diamant",
        icon: "🗡️",
        category: "weapons",
        description: "Une des meilleures épées du jeu.",
        properties: ["Durabilité: 1561", "Dégâts: 7", "Peut recevoir des enchantements puissants"],
        obtention: "Craft avec diamants et bâton",
        recipes: [
            {ingredients: ["diamant", "", "", "diamant", "", "", "bâton", "", ""], result: "Épée en diamant"}
        ]
    },
    {
        id: "bow",
        name: "Arc",
        icon: "🏹",
        category: "weapons",
        description: "Arme à distance nécessitant des flèches.",
        properties: ["Durabilité: 384", "Portée: ~30 blocs", "Nécessite des flèches"],
        obtention: "Craft avec bâtons et ficelle",
        recipes: [
            {ingredients: ["", "bâton", "ficelle", "bâton", "", "ficelle", "", "bâton", "ficelle"], result: "Arc"}
        ]
    },
    {
        id: "arrow",
        name: "Flèche",
        icon: "➡️",
        category: "weapons",
        description: "Munition pour l'arc et l'arbalète.",
        properties: ["Dégâts: Variables", "Peut être enchantée", "Récupérable"],
        obtention: "Craft ou drop de squelettes",
        recipes: [
            {ingredients: ["silex", "", "", "bâton", "", "", "plume", "", ""], result: "4x Flèches"}
        ]
    },
    {
        id: "leather_helmet",
        name: "Casque en cuir",
        icon: "🪖",
        category: "armor",
        description: "Protection de tête de base.",
        properties: ["Protection: 1", "Durabilité: 55", "Teignable"],
        obtention: "Craft avec cuir",
        recipes: [
            {ingredients: ["cuir", "cuir", "cuir", "cuir", "", "cuir", "", "", ""], result: "Casque en cuir"}
        ]
    },
    {
        id: "iron_helmet",
        name: "Casque en fer",
        icon: "🪖",
        category: "armor",
        description: "Casque solide en fer.",
        properties: ["Protection: 2", "Durabilité: 165", "Bonne défense"],
        obtention: "Craft avec fer",
        recipes: [
            {ingredients: ["fer", "fer", "fer", "fer", "", "fer", "", "", ""], result: "Casque en fer"}
        ]
    },
    {
        id: "diamond_helmet",
        name: "Casque en diamant",
        icon: "🪖",
        category: "armor",
        description: "Casque de très haute protection.",
        properties: ["Protection: 3", "Durabilité: 363", "Excellente défense"],
        obtention: "Craft avec diamants",
        recipes: [
            {ingredients: ["diamant", "diamant", "diamant", "diamant", "", "diamant", "", "", ""], result: "Casque en diamant"}
        ]
    },
    {
        id: "leather_chestplate",
        name: "Plastron en cuir",
        icon: "🦺",
        category: "armor",
        description: "Protection du torse de base.",
        properties: ["Protection: 3", "Durabilité: 80", "Teignable"],
        obtention: "Craft avec cuir",
        recipes: [
            {ingredients: ["cuir", "", "cuir", "cuir", "cuir", "cuir", "cuir", "cuir", "cuir"], result: "Plastron en cuir"}
        ]
    },
    {
        id: "iron_chestplate",
        name: "Plastron en fer",
        icon: "🦺",
        category: "armor",
        description: "Armure de torse solide.",
        properties: ["Protection: 6", "Durabilité: 240", "Protection importante"],
        obtention: "Craft avec fer",
        recipes: [
            {ingredients: ["fer", "", "fer", "fer", "fer", "fer", "fer", "fer", "fer"], result: "Plastron en fer"}
        ]
    },
    {
        id: "leather_leggings",
        name: "Jambières en cuir",
        icon: "👖",
        category: "armor",
        description: "Protection des jambes de base.",
        properties: ["Protection: 2", "Durabilité: 75", "Teignable"],
        obtention: "Craft avec cuir",
        recipes: [
            {ingredients: ["cuir", "cuir", "cuir", "cuir", "", "cuir", "cuir", "", "cuir"], result: "Jambières en cuir"}
        ]
    },
    {
        id: "iron_leggings",
        name: "Jambières en fer",
        icon: "👖",
        category: "armor",
        description: "Protection solide des jambes.",
        properties: ["Protection: 5", "Durabilité: 225", "Bonne protection"],
        obtention: "Craft avec fer",
        recipes: [
            {ingredients: ["fer", "fer", "fer", "fer", "", "fer", "fer", "", "fer"], result: "Jambières en fer"}
        ]
    },
    {
        id: "leather_boots",
        name: "Bottes en cuir",
        icon: "👢",
        category: "armor",
        description: "Protection des pieds de base.",
        properties: ["Protection: 1", "Durabilité: 65", "Teignable"],
        obtention: "Craft avec cuir",
        recipes: [
            {ingredients: ["cuir", "", "cuir", "cuir", "", "cuir", "", "", ""], result: "Bottes en cuir"}
        ]
    },
    {
        id: "iron_boots",
        name: "Bottes en fer",
        icon: "👢",
        category: "armor",
        description: "Bottes solides en fer.",
        properties: ["Protection: 2", "Durabilité: 195", "Fiables"],
        obtention: "Craft avec fer",
        recipes: [
            {ingredients: ["fer", "", "fer", "fer", "", "fer", "", "", ""], result: "Bottes en fer"}
        ]
    },
    {
        id: "shield",
        name: "Bouclier",
        icon: "🛡️",
        category: "weapons",
        description: "Bloque les attaques et projectiles.",
        properties: ["Durabilité: 336", "Bloque 100% des dégâts", "Personnalisable avec bannières"],
        obtention: "Craft avec planches et fer",
        recipes: [
            {ingredients: ["planches", "fer", "planches", "planches", "planches", "planches", "", "planches", ""], result: "Bouclier"}
        ]
    },
    {
        id: "bucket",
        name: "Seau",
        icon: "🪣",
        category: "items",
        description: "Contient de l'eau, de la lave ou du lait.",
        properties: ["Transporte liquides", "Durabilité: Infinie", "Multiplesusages"],
        obtention: "Craft avec fer",
        recipes: []
    },
    {
        id: "water_bucket",
        name: "Seau d'eau",
        icon: "💧",
        category: "items",
        description: "Seau rempli d'eau. Source infinie si bien utilisé.",
        properties: ["Place de l'eau", "Éteint le feu", "Crée des sources infinies"],
        obtention: "Clic droit sur l'eau avec seau",
        recipes: []
    },
    {
        id: "lava_bucket",
        name: "Seau de lave",
        icon: "🌋",
        category: "items",
        description: "Seau de lave. Combustible puissant et dangereux.",
        properties: ["Place de la lave", "Combustible longue durée", "Très dangereux"],
        obtention: "Clic droit sur lave avec seau",
        recipes: []
    },
    {
        id: "milk_bucket",
        name: "Seau de lait",
        icon: "🥛",
        category: "food",
        description: "Retire tous les effets de statut.",
        properties: ["Retire les effets", "Non empilable", "Obtenu des vaches"],
        obtention: "Clic droit sur vache avec seau",
        recipes: []
    },
    {
        id: "apple",
        name: "Pomme",
        icon: "🍎",
        category: "food",
        description: "Fruit restaurent 4 points de faim.",
        properties: ["Faim: +4", "Saturation: +2.4", "Drop des chênes"],
        obtention: "Drop des feuilles de chêne",
        recipes: []
    },
    {
        id: "golden_apple",
        name: "Pomme dorée",
        icon: "🍏",
        category: "food",
        description: "Pomme enchantée donnant régénération et absorption.",
        properties: ["Faim: +4", "Régénération II (5s)", "Absorption (2 min)"],
        obtention: "Craft avec pomme et or",
        recipes: [
            {ingredients: ["or", "or", "or", "or", "pomme", "or", "or", "or", "or"], result: "Pomme dorée"}
        ]
    },
    {
        id: "bread",
        name: "Pain",
        icon: "🍞",
        category: "food",
        description: "Nourriture de base craftable.",
        properties: ["Faim: +5", "Saturation: +6", "Facile à produire"],
        obtention: "Craft avec blé",
        recipes: [
            {ingredients: ["blé", "blé", "blé", "", "", "", "", "", ""], result: "Pain"}
        ]
    },
    {
        id: "cooked_beef",
        name: "Steak",
        icon: "🥩",
        category: "food",
        description: "Excellente source de nourriture.",
        properties: ["Faim: +8", "Saturation: +12.8", "Une des meilleures nourritures"],
        obtention: "Cuisson de bœuf cru",
        recipes: []
    },
    {
        id: "cooked_porkchop",
        name: "Côtelette de porc cuite",
        icon: "🍖",
        category: "food",
        description: "Très bonne nourriture.",
        properties: ["Faim: +8", "Saturation: +12.8", "Drop des cochons"],
        obtention: "Cuisson de porc cru",
        recipes: []
    },
    {
        id: "cooked_chicken",
        name: "Poulet cuit",
        icon: "🍗",
        category: "food",
        description: "Bonne source de nourriture.",
        properties: ["Faim: +6", "Saturation: +7.2", "Drop des poulets"],
        obtention: "Cuisson de poulet cru",
        recipes: []
    },
    {
        id: "cake",
        name: "Gâteau",
        icon: "🎂",
        category: "food",
        description: "Gâteau posable donnant 7 portions.",
        properties: ["7 portions", "Faim totale: +14", "Décoratif"],
        obtention: "Craft complexe",
        recipes: [
            {ingredients: ["lait", "lait", "lait", "sucre", "œuf", "sucre", "blé", "blé", "blé"], result: "Gâteau"}
        ]
    },
    {
        id: "cookie",
        name: "Cookie",
        icon: "🍪",
        category: "food",
        description: "Petit snack sucré.",
        properties: ["Faim: +2", "Saturation: +0.4", "Craft en masse"],
        obtention: "Craft avec blé et cacao",
        recipes: [
            {ingredients: ["blé", "cacao", "blé", "", "", "", "", "", ""], result: "8x Cookies"}
        ]
    },
    {
        id: "wheat",
        name: "Blé",
        icon: "🌾",
        category: "items",
        description: "Récolte agricole de base.",
        properties: ["Agriculture", "Élevage", "Craft de pain"],
        obtention: "Récolte de cultures",
        recipes: []
    },
    {
        id: "seeds",
        name: "Graines",
        icon: "🌱",
        category: "items",
        description: "Plante du blé.",
        properties: ["Cultive du blé", "Drop de l'herbe", "Nourrit les poulets"],
        obtention: "Casser de l'herbe",
        recipes: []
    },
    {
        id: "bone_meal",
        name: "Poudre d'os",
        icon: "🦴",
        category: "items",
        description: "Engrais instantané pour les plantes.",
        properties: ["Accélère la croissance", "Fait pousser l'herbe", "Craft avec os"],
        obtention: "Craft avec os",
        recipes: [
            {ingredients: ["os", "", "", "", "", "", "", "", ""], result: "3x Poudre d'os"}
        ]
    },
    {
        id: "compass",
        name: "Boussole",
        icon: "🧭",
        category: "items",
        description: "Pointe vers le point de spawn du monde.",
        properties: ["Pointe vers le spawn", "Craft de carte", "Ne fonctionne pas au Nether"],
        obtention: "Craft avec fer et redstone",
        recipes: []
    },
    {
        id: "clock",
        name: "Horloge",
        icon: "🕐",
        category: "items",
        description: "Indique l'heure dans le monde.",
        properties: ["Montre l'heure", "Fonctionne dans l'inventaire", "Ne fonctionne pas au Nether"],
        obtention: "Craft avec or et redstone",
        recipes: [
            {ingredients: ["", "or", "", "or", "redstone", "or", "", "or", ""], result: "Horloge"}
        ]
    },
    {
        id: "map",
        name: "Carte",
        icon: "🗺️",
        category: "items",
        description: "Affiche le terrain exploré.",
        properties: ["Cartographie", "Plusieurs niveaux de zoom", "Peut être clonée"],
        obtention: "Craft avec papier et boussole",
        recipes: [
            {ingredients: ["papier", "papier", "papier", "papier", "boussole", "papier", "papier", "papier", "papier"], result: "Carte"}
        ]
    },
    {
        id: "paper",
        name: "Papier",
        icon: "📄",
        category: "items",
        description: "Matériau de craft pour livres et cartes.",
        properties: ["Craft de livres", "Craft de cartes", "Craft de feux d'artifice"],
        obtention: "Craft avec canne à sucre",
        recipes: [
            {ingredients: ["canne", "canne", "canne", "", "", "", "", "", ""], result: "3x Papier"}
        ]
    },
    {
        id: "book",
        name: "Livre",
        icon: "📖",
        category: "items",
        description: "Utilisé pour les enchantements et l'écriture.",
        properties: ["Craft de bibliothèque", "Peut être écrit", "Nécessaire pour enchanter"],
        obtention: "Craft avec papier et cuir",
        recipes: [
            {ingredients: ["papier", "", "", "papier", "", "", "papier", "", ""], result: "Livre"}
        ]
    },
    {
        id: "bookshelf",
        name: "Bibliothèque",
        icon: "📚",
        category: "decorations",
        description: "Améliore la table d'enchantement.",
        properties: ["Nécessaire pour enchantements max", "Décoratif", "Drop 3 livres"],
        obtention: "Craft avec planches et livres",
        recipes: [
            {ingredients: ["planches", "planches", "planches", "livre", "livre", "livre", "planches", "planches", "planches"], result: "Bibliothèque"}
        ]
    },
    {
        id: "enchanting_table",
        name: "Table d'enchantement",
        icon: "✨",
        category: "blocks",
        description: "Permet d'enchanter outils, armes et armures.",
        properties: ["Nécessite lapis", "Max niveau 30", "Nécessite bibliothèques pour max"],
        obtention: "Craft avec obsidienne, diamants et livre",
        recipes: [
            {ingredients: ["", "livre", "", "diamant", "obsidienne", "diamant", "obsidienne", "obsidienne", "obsidienne"], result: "Table d'enchantement"}
        ]
    },
    {
        id: "anvil",
        name: "Enclume",
        icon: "🗜️",
        category: "blocks",
        description: "Répare et renomme objets. Combine enchantements.",
        properties: ["Réparation", "Renommage", "Coût en XP"],
        obtention: "Craft avec blocs de fer et lingots",
        recipes: [
            {ingredients: ["fer_bloc", "fer_bloc", "fer_bloc", "", "fer", "", "fer", "fer", "fer"], result: "Enclume"}
        ]
    },
    {
        id: "brewing_stand",
        name: "Alambic",
        icon: "⚗️",
        category: "blocks",
        description: "Permet de créer des potions.",
        properties: ["Craft de potions", "Nécessite Blaze Rod", "Jusqu'à 3 potions simultanées"],
        obtention: "Craft avec Blaze Rod et roche",
        recipes: [
            {ingredients: ["", "blaze_rod", "", "roche", "roche", "roche", "", "", ""], result: "Alambic"}
        ]
    },
    {
        id: "glass",
        name: "Verre",
        icon: "🪟",
        category: "blocks",
        description: "Bloc transparent. Ne peut être récupéré sans Silk Touch.",
        properties: ["Transparent", "Fragile", "Teignable"],
        obtention: "Fonte de sable",
        recipes: [
            {ingredients: ["verre", "verre", "verre", "verre", "verre", "verre", "", "", ""], result: "16x Vitres"}
        ]
    },
    {
        id: "glass_pane",
        name: "Vitre",
        icon: "▫️",
        category: "blocks",
        description: "Version fine du verre.",
        properties: ["Transparent", "16 pour 6 verres", "Se connecte automatiquement"],
        obtention: "Craft avec verre",
        recipes: []
    },
    {
        id: "door_wood",
        name: "Porte en bois",
        icon: "🚪",
        category: "decorations",
        description: "Porte ouvrable par les joueurs et villageois.",
        properties: ["Ouvrable par mobs en difficulté difficile", "Redstone compatible", "Combustible"],
        obtention: "Craft avec planches",
        recipes: [
            {ingredients: ["planches", "planches", "", "planches", "planches", "", "planches", "planches", ""], result: "3x Portes"}
        ]
    },
    {
        id: "door_iron",
        name: "Porte en fer",
        icon: "🚪",
        category: "redstone",
        description: "Porte nécessitant redstone pour ouvrir.",
        properties: ["Sécurisée", "Nécessite redstone", "Ne brûle pas"],
        obtention: "Craft avec fer",
        recipes: [
            {ingredients: ["fer", "fer", "", "fer", "fer", "", "fer", "fer", ""], result: "3x Portes en fer"}
        ]
    },
    {
        id: "trapdoor",
        name: "Trappe",
        icon: "⬜",
        category: "decorations",
        description: "Porte horizontale ouvrable.",
        properties: ["Horizontale", "Plusieurs matériaux", "Redstone compatible"],
        obtention: "Craft avec planches",
        recipes: [
            {ingredients: ["planches", "planches", "planches", "planches", "planches", "planches", "", "", ""], result: "2x Trappes"}
        ]
    },
    {
        id: "fence",
        name: "Barrière",
        icon: "🚧",
        category: "decorations",
        description: "Barrière de 1.5 blocs de haut.",
        properties: ["1.5 blocs de haut", "Se connecte", "Plusieurs types de bois"],
        obtention: "Craft avec bâtons et planches",
        recipes: [
            {ingredients: ["bâton", "planches", "bâton", "bâton", "planches", "bâton", "", "", ""], result: "3x Barrières"}
        ]
    },
    {
        id: "ladder",
        name: "Échelle",
        icon: "🪜",
        category: "decorations",
        description: "Permet de grimper verticalement.",
        properties: ["Escalade", "Posable sur murs", "Combustible"],
        obtention: "Craft avec bâtons",
        recipes: [
            {ingredients: ["bâton", "", "bâton", "bâton", "bâton", "bâton", "bâton", "", "bâton"], result: "3x Échelles"}
        ]
    },
    {
        id: "sign",
        name: "Panneau",
        icon: "🪧",
        category: "decorations",
        description: "Affiche du texte. 4 lignes disponibles.",
        properties: ["4 lignes de texte", "Éditable", "Plusieurs bois"],
        obtention: "Craft avec planches et bâton",
        recipes: [
            {ingredients: ["planches", "planches", "planches", "planches", "planches", "planches", "", "bâton", ""], result: "3x Panneaux"}
        ]
    },
    {
        id: "tnt",
        name: "TNT",
        icon: "🧨",
        category: "redstone",
        description: "Explosif activable par redstone ou feu.",
        properties: ["Rayon: 4 blocs", "Destructeur", "Activable de plusieurs façons"],
        obtention: "Craft avec sable et poudre",
        recipes: [
            {ingredients: ["poudre", "sable", "poudre", "sable", "poudre", "sable", "poudre", "sable", "poudre"], result: "TNT"}
        ]
    },
    {
        id: "lever",
        name: "Levier",
        icon: "🎚️",
        category: "redstone",
        description: "Interrupteur redstone manuel.",
        properties: ["On/Off permanent", "Signal fort", "Posable partout"],
        obtention: "Craft avec bâton et roche",
        recipes: [
            {ingredients: ["bâton", "", "", "roche", "", "", "", "", ""], result: "Levier"}
        ]
    },
    {
        id: "button_stone",
        name: "Bouton en pierre",
        icon: "⏺️",
        category: "redstone",
        description: "Bouton temporaire (1 seconde).",
        properties: ["Durée: 1s", "Signal fort", "Activable par flèches"],
        obtention: "Craft avec pierre",
        recipes: [
            {ingredients: ["pierre", "", "", "", "", "", "", "", ""], result: "Bouton"}
        ]
    },
    {
        id: "pressure_plate",
        name: "Plaque de pression",
        icon: "⏹️",
        category: "redstone",
        description: "Active quand marché dessus.",
        properties: ["Activation par entités", "Plusieurs types", "Signal faible"],
        obtention: "Craft avec planches ou pierre",
        recipes: [
            {ingredients: ["planches", "planches", "", "", "", "", "", "", ""], result: "Plaque de pression"}
        ]
    },
    {
        id: "redstone_torch",
        name: "Torche de redstone",
        icon: "🔴",
        category: "redstone",
        description: "Source de signal redstone. Inverseur.",
        properties: ["Signal permanent", "Inverseur", "Peut burn-out"],
        obtention: "Craft avec redstone et bâton",
        recipes: [
            {ingredients: ["redstone", "", "", "bâton", "", "", "", "", ""], result: "Torche de redstone"}
        ]
    },
    {
        id: "redstone_repeater",
        name: "Répéteur",
        icon: "➡️",
        category: "redstone",
        description: "Répète et retarde le signal redstone.",
        properties: ["Délai ajustable", "Diode", "Nécessaire pour circuits"],
        obtention: "Craft avec redstone, torches et pierre",
        recipes: [
            {ingredients: ["torche_rs", "redstone", "torche_rs", "pierre", "pierre", "pierre", "", "", ""], result: "Répéteur"}
        ]
    },
    {
        id: "redstone_comparator",
        name: "Comparateur",
        icon: "🔺",
        category: "redstone",
        description: "Compare les signaux redstone.",
        properties: ["2 modes", "Mesure conteneurs", "Circuits avancés"],
        obtention: "Craft avec redstone, quartz et torches",
        recipes: [
            {ingredients: ["", "torche_rs", "", "torche_rs", "quartz", "torche_rs", "pierre", "pierre", "pierre"], result: "Comparateur"}
        ]
    },
    {
        id: "piston",
        name: "Piston",
        icon: "🔲",
        category: "redstone",
        description: "Pousse les blocs quand activé.",
        properties: ["Pousse jusqu'à 12 blocs", "Activable par redstone", "Nombreuses utilisations"],
        obtention: "Craft avec planches, roche, fer et redstone",
        recipes: [
            {ingredients: ["planches", "planches", "planches", "roche", "fer", "roche", "roche", "redstone", "roche"], result: "Piston"}
        ]
    },
    {
        id: "sticky_piston",
        name: "Piston collant",
        icon: "🟢",
        category: "redstone",
        description: "Piston qui tire aussi les blocs.",
        properties: ["Pousse et tire", "Nécessite slime", "Essentiel pour machines"],
        obtention: "Craft de piston avec slime",
        recipes: [
            {ingredients: ["slime", "", "", "piston", "", "", "", "", ""], result: "Piston collant"}
        ]
    },
    {
        id: "dispenser",
        name: "Distributeur",
        icon: "📤",
        category: "redstone",
        description: "Distribue/utilise objets automatiquement.",
        properties: ["Active objets", "9 slots", "Nombreuses utilisations"],
        obtention: "Craft avec roche, arc et redstone",
        recipes: [
            {ingredients: ["roche", "roche", "roche", "roche", "arc", "roche", "roche", "redstone", "roche"], result: "Distributeur"}
        ]
    },
    {
        id: "dropper",
        name: "Largueur",
        icon: "📥",
        category: "redstone",
        description: "Lâche des objets (ne les active pas).",
        properties: ["Drop objets", "Transfert vers conteneurs", "Plus simple que distributeur"],
        obtention: "Craft avec roche et redstone",
        recipes: [
            {ingredients: ["roche", "roche", "roche", "roche", "", "roche", "roche", "redstone", "roche"], result: "Largueur"}
        ]
    },
    {
        id: "hopper",
        name: "Entonnoir",
        icon: "⬇️",
        category: "redstone",
        description: "Transfère automatiquement objets entre conteneurs.",
        properties: ["Collecte objets", "Transfert automatique", "Essentiel pour fermes"],
        obtention: "Craft avec fer et coffre",
        recipes: [
            {ingredients: ["fer", "", "fer", "fer", "coffre", "fer", "", "fer", ""], result: "Entonnoir"}
        ]
    },
    {
        id: "observer",
        name: "Observateur",
        icon: "👁️",
        category: "redstone",
        description: "Détecte les changements de blocs.",
        properties: ["Détecte updates", "Signal court", "Fermes automatiques"],
        obtention: "Craft avec roche, redstone et quartz",
        recipes: [
            {ingredients: ["roche", "roche", "roche", "redstone", "redstone", "quartz", "roche", "roche", "roche"], result: "Observateur"}
        ]
    },
    {
        id: "note_block",
        name: "Bloc musical",
        icon: "🎵",
        category: "redstone",
        description: "Produit des notes de musique.",
        properties: ["25 notes", "16 instruments", "Activable par redstone"],
        obtention: "Craft avec planches et redstone",
        recipes: [
            {ingredients: ["planches", "planches", "planches", "planches", "redstone", "planches", "planches", "planches", "planches"], result: "Bloc musical"}
        ]
    },
    {
        id: "jukebox",
        name: "Jukebox",
        icon: "📻",
        category: "decorations",
        description: "Joue des disques de musique.",
        properties: ["Lit les disques", "13 disques différents", "Redstone détectable"],
        obtention: "Craft avec planches et diamant",
        recipes: [
            {ingredients: ["planches", "planches", "planches", "planches", "diamant", "planches", "planches", "planches", "planches"], result: "Jukebox"}
        ]
    },
    {
        id: "ender_chest",
        name: "Coffre de l'Ender",
        icon: "💜",
        category: "blocks",
        description: "Stockage partagé entre tous les coffres Ender.",
        properties: ["Inventaire partagé", "27 slots", "Nécessite pioche diamant"],
        obtention: "Craft avec obsidienne et œil de l'Ender",
        recipes: [
            {ingredients: ["obsidienne", "obsidienne", "obsidienne", "obsidienne", "œil_ender", "obsidienne", "obsidienne", "obsidienne", "obsidienne"], result: "Coffre de l'Ender"}
        ]
    },
    {
        id: "ender_pearl",
        name: "Perle de l'Ender",
        icon: "🟣",
        category: "items",
        description: "Permet de se téléporter. Drop des Endermen.",
        properties: ["Téléportation", "5 HP de dégâts", "Craft œil de l'Ender"],
        obtention: "Drop des Endermen",
        recipes: []
    },
    {
        id: "eye_of_ender",
        name: "Œil de l'Ender",
        icon: "👁️",
        category: "items",
        description: "Trouve le portail de l'End. Active le portail.",
        properties: ["Trouve strongholds", "Active portail End", "12 nécessaires"],
        obtention: "Craft avec perle Ender et poudre de Blaze",
        recipes: [
            {ingredients: ["perle_ender", "poudre_blaze", "", "", "", "", "", "", ""], result: "Œil de l'Ender"}
        ]
    },
    {
        id: "shulker_box",
        name: "Boîte de Shulker",
        icon: "📦",
        category: "blocks",
        description: "Coffre portable gardant son contenu.",
        properties: ["Garde objets quand cassée", "27 slots", "Teignable"],
        obtention: "Craft avec carapace Shulker et coffre",
        recipes: [
            {ingredients: ["carapace_shulker", "", "", "coffre", "", "", "carapace_shulker", "", ""], result: "Boîte de Shulker"}
        ]
    },
    {
        id: "elytra",
        name: "Élytres",
        icon: "🪂",
        category: "items",
        description: "Ailes permettant de planer.",
        properties: ["Vol plané", "Durabilité: 432", "Réparable avec membrane phantom"],
        obtention: "Trouvées dans les vaisseaux de l'End",
        recipes: []
    },
    {
        id: "totem",
        name: "Totem d'immortalité",
        icon: "🗿",
        category: "items",
        description: "Empêche une mort en donnant des effets.",
        properties: ["Sauve de la mort", "Usage unique", "Drop des Evokers"],
        obtention: "Drop des Evokers dans les manoirs",
        recipes: []
    },
    {
        id: "beacon",
        name: "Balise",
        icon: "💡",
        category: "blocks",
        description: "Donne des effets dans une zone. Nécessite pyramide.",
        properties: ["Effets de zone", "Nécessite pyramide", "6 effets disponibles"],
        obtention: "Craft avec verre, obsidienne et étoile du Nether",
        recipes: [
            {ingredients: ["verre", "verre", "verre", "verre", "étoile_nether", "verre", "obsidienne", "obsidienne", "obsidienne"], result: "Balise"}
        ]
    },
    {
        id: "netherite_ingot",
        name: "Lingot de Netherite",
        icon: "⬛",
        category: "items",
        description: "Matériau le plus rare et puissant du jeu.",
        properties: ["Ne brûle pas dans lave", "Améliore équipement diamant", "Très rare"],
        obtention: "Craft avec débris antiques et or",
        recipes: [
            {ingredients: ["débris", "débris", "débris", "débris", "or", "or", "or", "or", ""], result: "Lingot de Netherite"}
        ]
    },
    {
        id: "conduit",
        name: "Conduit",
        icon: "🔱",
        category: "blocks",
        description: "Donne respiration aquatique et vision dans l'eau.",
        properties: ["Effets aquatiques", "Nécessite structure", "Attaque mobs hostiles"],
        obtention: "Craft avec coquille nautile et cœur de la mer",
        recipes: [
            {ingredients: ["coquille", "coquille", "coquille", "coquille", "cœur_mer", "coquille", "coquille", "coquille", "coquille"], result: "Conduit"}
        ]
    },
    {
        id: "copper_axe",
        name: "Hache en cuivre",
        icon: "🪓",
        category: "tools",
        description: "Hache en cuivre, plus durable que la pierre mais moins que le fer",
        properties: ["Durabilité: 131", "Efficacité: pierre+", "Enchantable"],
        obtention: "Craft avec lingots de cuivre et bâtons",
        recipes: [{ingredients: ["cuivre", "cuivre", "", "cuivre", "bâton", "", "", "bâton", ""], result: "Hache en cuivre"}]
    },
    {
        id: "copper_pickaxe",
        name: "Pioche en cuivre",
        icon: "⛏️",
        category: "tools",
        description: "Pioche en cuivre, mine plus vite que la pierre",
        properties: ["Durabilité: 131", "Efficacité: pierre+", "Enchantable"],
        obtention: "Craft avec lingots de cuivre et bâtons",
        recipes: [{ingredients: ["cuivre", "cuivre", "cuivre", "", "bâton", "", "", "bâton", ""], result: "Pioche en cuivre"}]
    },
    {
        id: "copper_shovel",
        name: "Pelle en cuivre",
        icon: "🥄",
        category: "tools",
        description: "Pelle en cuivre pour creuser",
        properties: ["Durabilité: 131", "Efficacité: pierre+", "Enchantable"],
        obtention: "Craft avec lingot de cuivre et bâtons",
        recipes: [{ingredients: ["cuivre", "", "", "bâton", "", "", "bâton", "", ""], result: "Pelle en cuivre"}]
    },
    {
        id: "copper_hoe",
        name: "Houe en cuivre",
        icon: "🔱",
        category: "tools",
        description: "Houe en cuivre pour labourer",
        properties: ["Durabilité: 131", "Efficacité: pierre+", "Enchantable"],
        obtention: "Craft avec lingots de cuivre et bâtons",
        recipes: [{ingredients: ["cuivre", "cuivre", "", "", "bâton", "", "", "bâton", ""], result: "Houe en cuivre"}]
    },
    {
        id: "copper_sword",
        name: "Épée en cuivre",
        icon: "⚔️",
        category: "weapons",
        description: "Épée en cuivre, dégâts équivalents à la pierre",
        properties: ["Dégâts: 5", "Durabilité: 131", "Enchantable"],
        obtention: "Craft avec lingots de cuivre et bâton",
        recipes: [{ingredients: ["cuivre", "", "", "cuivre", "", "", "bâton", "", ""], result: "Épée en cuivre"}]
    },
    {
        id: "copper_helmet",
        name: "Casque en cuivre",
        icon: "🪖",
        category: "armor",
        description: "Casque en cuivre, protection entre cuir et fer",
        properties: ["Armor: 2", "Durabilité: 77", "Enchantable"],
        obtention: "Craft avec lingots de cuivre",
        recipes: [{ingredients: ["cuivre", "cuivre", "cuivre", "cuivre", "", "cuivre", "", "", ""], result: "Casque en cuivre"}]
    },
    {
        id: "copper_chestplate",
        name: "Plastron en cuivre",
        icon: "🦺",
        category: "armor",
        description: "Plastron en cuivre, protection entre cuir et fer",
        properties: ["Armor: 5", "Durabilité: 112", "Enchantable"],
        obtention: "Craft avec lingots de cuivre",
        recipes: [{ingredients: ["cuivre", "", "cuivre", "cuivre", "cuivre", "cuivre", "cuivre", "cuivre", "cuivre"], result: "Plastron en cuivre"}]
    },
    {
        id: "copper_leggings",
        name: "Jambières en cuivre",
        icon: "👖",
        category: "armor",
        description: "Jambières en cuivre, protection entre cuir et fer",
        properties: ["Armor: 4", "Durabilité: 105", "Enchantable"],
        obtention: "Craft avec lingots de cuivre",
        recipes: [{ingredients: ["cuivre", "cuivre", "cuivre", "cuivre", "", "cuivre", "cuivre", "", "cuivre"], result: "Jambières en cuivre"}]
    },
    {
        id: "copper_boots",
        name: "Bottes en cuivre",
        icon: "👢",
        category: "armor",
        description: "Bottes en cuivre, protection entre cuir et fer",
        properties: ["Armor: 1", "Durabilité: 91", "Enchantable"],
        obtention: "Craft avec lingots de cuivre",
        recipes: [{ingredients: ["cuivre", "", "cuivre", "cuivre", "", "cuivre", "", "", ""], result: "Bottes en cuivre"}]
    },
    {
        id: "netherite_helmet",
        name: "Casque en netherite",
        icon: "🪖",
        category: "armor",
        description: "Casque en netherite, la meilleure protection",
        properties: ["Armor: 3", "Toughness: 3", "Knockback resistance: 0.1", "Résistant au feu"],
        obtention: "Upgrade de casque diamant avec netherite",
        recipes: []
    },
    {
        id: "netherite_chestplate",
        name: "Plastron en netherite",
        icon: "🦺",
        category: "armor",
        description: "Plastron en netherite, la meilleure protection",
        properties: ["Armor: 8", "Toughness: 3", "Knockback resistance: 0.1", "Résistant au feu"],
        obtention: "Upgrade de plastron diamant avec netherite",
        recipes: []
    },
    {
        id: "netherite_leggings",
        name: "Jambières en netherite",
        icon: "👖",
        category: "armor",
        description: "Jambières en netherite, la meilleure protection",
        properties: ["Armor: 6", "Toughness: 3", "Knockback resistance: 0.1", "Résistant au feu"],
        obtention: "Upgrade de jambières diamant avec netherite",
        recipes: []
    },
    {
        id: "netherite_boots",
        name: "Bottes en netherite",
        icon: "👢",
        category: "armor",
        description: "Bottes en netherite, la meilleure protection",
        properties: ["Armor: 3", "Toughness: 3", "Knockback resistance: 0.1", "Résistant au feu"],
        obtention: "Upgrade de bottes diamant avec netherite",
        recipes: []
    },
    {
        id: "netherite_axe",
        name: "Hache en netherite",
        icon: "🪓",
        category: "tools",
        description: "Hache en netherite, la plus puissante",
        properties: ["Durabilité: 2031", "Efficacité maximale", "Résistant au feu"],
        obtention: "Upgrade de hache diamant avec netherite",
        recipes: []
    },
    {
        id: "netherite_pickaxe",
        name: "Pioche en netherite",
        icon: "⛏️",
        category: "tools",
        description: "Pioche en netherite, la plus puissante",
        properties: ["Durabilité: 2031", "Efficacité maximale", "Résistant au feu"],
        obtention: "Upgrade de pioche diamant avec netherite",
        recipes: []
    },
    {
        id: "netherite_shovel",
        name: "Pelle en netherite",
        icon: "🥄",
        category: "tools",
        description: "Pelle en netherite, la plus puissante",
        properties: ["Durabilité: 2031", "Efficacité maximale", "Résistant au feu"],
        obtention: "Upgrade de pelle diamant avec netherite",
        recipes: []
    },
    {
        id: "netherite_hoe",
        name: "Houe en netherite",
        icon: "🔱",
        category: "tools",
        description: "Houe en netherite, la plus puissante",
        properties: ["Durabilité: 2031", "Efficacité maximale", "Résistant au feu"],
        obtention: "Upgrade de houe diamant avec netherite",
        recipes: []
    },
    {
        id: "netherite_sword",
        name: "Épée en netherite",
        icon: "⚔️",
        category: "weapons",
        description: "Épée en netherite, la plus puissante",
        properties: ["Dégâts: 8", "Durabilité: 2031", "Résistant au feu"],
        obtention: "Upgrade d'épée diamant avec netherite",
        recipes: []
    },
    {
        id: "ancient_debris",
        name: "Débris antiques",
        icon: "🔸",
        category: "items",
        description: "Minerai rare du Nether pour créer la netherite",
        properties: ["Résistant aux explosions", "Très rare", "Y: 8-22 dans le Nether"],
        obtention: "Minage profond dans le Nether",
        recipes: []
    },
    {
        id: "netherite_scrap",
        name: "Fragment de netherite",
        icon: "🔹",
        category: "items",
        description: "Fragment obtenu en fondant les débris antiques",
        properties: ["Matériau de craft", "Résistant au feu"],
        obtention: "Fonte des débris antiques",
        recipes: []
    },
    {
        id: "copper_ore",
        name: "Minerai de cuivre",
        icon: "🟫",
        category: "blocks",
        description: "Minerai de cuivre trouvé dans l'overworld",
        properties: ["Y: 0-96", "Fréquent", "Fondable"],
        obtention: "Minage",
        recipes: []
    },
    {
        id: "deepslate_copper_ore",
        name: "Minerai de cuivre d'ardoise",
        icon: "⬛",
        category: "blocks",
        description: "Minerai de cuivre dans l'ardoise profonde",
        properties: ["Y: 0-16", "Plus dur à miner"],
        obtention: "Minage profond",
        recipes: []
    },
    {
        id: "raw_copper",
        name: "Cuivre brut",
        icon: "🟤",
        category: "items",
        description: "Cuivre brut obtenu par minage",
        properties: ["Matériau de base", "Fondable"],
        obtention: "Minage de minerai de cuivre",
        recipes: []
    },
    {
        id: "copper_ingot",
        name: "Lingot de cuivre",
        icon: "🟠",
        category: "items",
        description: "Lingot de cuivre obtenu par fonte",
        properties: ["Matériau de craft", "Oxydable"],
        obtention: "Fonte du cuivre brut",
        recipes: []
    },
    {
        id: "crossbow",
        name: "Arbalète",
        icon: "🏹",
        category: "weapons",
        description: "Arme à distance plus puissante que l'arc",
        properties: ["Dégâts: 9", "Durabilité: 326", "Rechargeable"],
        obtention: "Craft avec bâtons, fer et ficelle",
        recipes: [{ingredients: ["bâton", "fer", "bâton", "ficelle", "crochet", "ficelle", "", "bâton", ""], result: "Arbalète"}]
    },
    {
        id: "trident",
        name: "Trident",
        icon: "🔱",
        category: "weapons",
        description: "Arme de mêlée et distance des noyés",
        properties: ["Dégâts: 9", "Durabilité: 250", "Lançable"],
        obtention: "Drop rare des Noyés",
        recipes: []
    },
    {
        id: "chainmail_helmet",
        name: "Casque en mailles",
        icon: "🪖",
        category: "armor",
        description: "Casque en mailles, protection moyenne",
        properties: ["Armor: 2", "Durabilité: 165", "Non craftable"],
        obtention: "Loot de coffres ou commerce",
        recipes: []
    },
    {
        id: "chainmail_chestplate",
        name: "Plastron en mailles",
        icon: "🦺",
        category: "armor",
        description: "Plastron en mailles, protection moyenne",
        properties: ["Armor: 5", "Durabilité: 240", "Non craftable"],
        obtention: "Loot de coffres ou commerce",
        recipes: []
    },
    {
        id: "chainmail_leggings",
        name: "Jambières en mailles",
        icon: "👖",
        category: "armor",
        description: "Jambières en mailles, protection moyenne",
        properties: ["Armor: 4", "Durabilité: 225", "Non craftable"],
        obtention: "Loot de coffres ou commerce",
        recipes: []
    },
    {
        id: "chainmail_boots",
        name: "Bottes en mailles",
        icon: "👢",
        category: "armor",
        description: "Bottes en mailles, protection moyenne",
        properties: ["Armor: 1", "Durabilité: 195", "Non craftable"],
        obtention: "Loot de coffres ou commerce",
        recipes: []
    },
    {
        id: "turtle_helmet",
        name: "Carapace de tortue",
        icon: "🐢",
        category: "armor",
        description: "Casque fait d'écailles de tortue",
        properties: ["Armor: 2", "Respiration aquatique +10s", "Durabilité: 275"],
        obtention: "Craft avec 5 écailles de tortue",
        recipes: [{ingredients: ["écaille", "écaille", "écaille", "écaille", "", "écaille", "", "", ""], result: "Carapace de tortue"}]
    },
    {
        id: "spyglass",
        name: "Longue-vue",
        icon: "🔭",
        category: "tools",
        description: "Permet de voir au loin avec zoom",
        properties: ["Zoom x10", "Vision longue distance"],
        obtention: "Craft avec éclat d'améthyste et cuivre",
        recipes: [{ingredients: ["", "améthyste", "", "", "cuivre", "", "", "cuivre", ""], result: "Longue-vue"}]
    },
    {
        id: "brush",
        name: "Pinceau",
        icon: "🖌️",
        category: "tools",
        description: "Outil pour l'archéologie",
        properties: ["Archéologie", "Sable suspect", "Gravier suspect"],
        obtention: "Craft avec plume, cuivre et bâton",
        recipes: [{ingredients: ["", "", "plume", "", "cuivre", "", "bâton", "", ""], result: "Pinceau"}]
    },
    {
        id: "lightning_rod",
        name: "Paratonnerre",
        icon: "⚡",
        category: "redstone",
        description: "Attire et redirige la foudre",
        properties: ["Attire foudre dans 128 blocs", "Signal redstone", "Protection"],
        obtention: "Craft avec 3 lingots de cuivre",
        recipes: [{ingredients: ["", "cuivre", "", "", "cuivre", "", "", "cuivre", ""], result: "Paratonnerre"}]
    },
    {
        id: "white_wool",
        name: "Laine blanche",
        icon: "⬜",
        category: "blocks",
        description: "Laine de couleur blanche",
        properties: ["Inflammable", "Colorable", "Isolation sonore"],
        obtention: "Moutons ou craft avec ficelle",
        recipes: []
    },
    {
        id: "orange_wool",
        name: "Laine orange",
        icon: "🟧",
        category: "blocks",
        description: "Laine de couleur orange",
        properties: ["Inflammable", "Colorée", "Isolation sonore"],
        obtention: "Teinture de laine blanche",
        recipes: [{ingredients: ["laine_blanche", "teinture_orange", "", "", "", "", "", "", ""], result: "Laine orange"}]
    },
    {
        id: "magenta_wool",
        name: "Laine magenta",
        icon: "🟪",
        category: "blocks",
        description: "Laine de couleur magenta",
        properties: ["Inflammable", "Colorée", "Isolation sonore"],
        obtention: "Teinture de laine blanche",
        recipes: [{ingredients: ["laine_blanche", "teinture_magenta", "", "", "", "", "", "", ""], result: "Laine magenta"}]
    },
    {
        id: "light_blue_wool",
        name: "Laine bleu clair",
        icon: "🔵",
        category: "blocks",
        description: "Laine de couleur bleu clair",
        properties: ["Inflammable", "Colorée", "Isolation sonore"],
        obtention: "Teinture de laine blanche",
        recipes: [{ingredients: ["laine_blanche", "teinture_bleu_clair", "", "", "", "", "", "", ""], result: "Laine bleu clair"}]
    },
    {
        id: "yellow_wool",
        name: "Laine jaune",
        icon: "🟨",
        category: "blocks",
        description: "Laine de couleur jaune",
        properties: ["Inflammable", "Colorée", "Isolation sonore"],
        obtention: "Teinture de laine blanche",
        recipes: [{ingredients: ["laine_blanche", "teinture_jaune", "", "", "", "", "", "", ""], result: "Laine jaune"}]
    },
    {
        id: "lime_wool",
        name: "Laine vert clair",
        icon: "🟩",
        category: "blocks",
        description: "Laine de couleur vert clair",
        properties: ["Inflammable", "Colorée", "Isolation sonore"],
        obtention: "Teinture de laine blanche",
        recipes: [{ingredients: ["laine_blanche", "teinture_vert_clair", "", "", "", "", "", "", ""], result: "Laine vert clair"}]
    },
    {
        id: "pink_wool",
        name: "Laine rose",
        icon: "🌸",
        category: "blocks",
        description: "Laine de couleur rose",
        properties: ["Inflammable", "Colorée", "Isolation sonore"],
        obtention: "Teinture de laine blanche",
        recipes: [{ingredients: ["laine_blanche", "teinture_rose", "", "", "", "", "", "", ""], result: "Laine rose"}]
    },
    {
        id: "gray_wool",
        name: "Laine grise",
        icon: "◼️",
        category: "blocks",
        description: "Laine de couleur grise",
        properties: ["Inflammable", "Colorée", "Isolation sonore"],
        obtention: "Teinture de laine blanche",
        recipes: [{ingredients: ["laine_blanche", "teinture_grise", "", "", "", "", "", "", ""], result: "Laine grise"}]
    },
    {
        id: "light_gray_wool",
        name: "Laine gris clair",
        icon: "◻️",
        category: "blocks",
        description: "Laine de couleur gris clair",
        properties: ["Inflammable", "Colorée", "Isolation sonore"],
        obtention: "Teinture de laine blanche",
        recipes: [{ingredients: ["laine_blanche", "teinture_gris_clair", "", "", "", "", "", "", ""], result: "Laine gris clair"}]
    },
    {
        id: "cyan_wool",
        name: "Laine cyan",
        icon: "🔷",
        category: "blocks",
        description: "Laine de couleur cyan",
        properties: ["Inflammable", "Colorée", "Isolation sonore"],
        obtention: "Teinture de laine blanche",
        recipes: [{ingredients: ["laine_blanche", "teinture_cyan", "", "", "", "", "", "", ""], result: "Laine cyan"}]
    },
    {
        id: "purple_wool",
        name: "Laine violette",
        icon: "🟣",
        category: "blocks",
        description: "Laine de couleur violette",
        properties: ["Inflammable", "Colorée", "Isolation sonore"],
        obtention: "Teinture de laine blanche",
        recipes: [{ingredients: ["laine_blanche", "teinture_violette", "", "", "", "", "", "", ""], result: "Laine violette"}]
    },
    {
        id: "blue_wool",
        name: "Laine bleue",
        icon: "🔵",
        category: "blocks",
        description: "Laine de couleur bleue",
        properties: ["Inflammable", "Colorée", "Isolation sonore"],
        obtention: "Teinture de laine blanche",
        recipes: [{ingredients: ["laine_blanche", "teinture_bleue", "", "", "", "", "", "", ""], result: "Laine bleue"}]
    },
    {
        id: "brown_wool",
        name: "Laine marron",
        icon: "🟤",
        category: "blocks",
        description: "Laine de couleur marron",
        properties: ["Inflammable", "Colorée", "Isolation sonore"],
        obtention: "Teinture de laine blanche",
        recipes: [{ingredients: ["laine_blanche", "teinture_marron", "", "", "", "", "", "", ""], result: "Laine marron"}]
    },
    {
        id: "green_wool",
        name: "Laine verte",
        icon: "🟢",
        category: "blocks",
        description: "Laine de couleur verte",
        properties: ["Inflammable", "Colorée", "Isolation sonore"],
        obtention: "Teinture de laine blanche",
        recipes: [{ingredients: ["laine_blanche", "teinture_verte", "", "", "", "", "", "", ""], result: "Laine verte"}]
    },
    {
        id: "red_wool",
        name: "Laine rouge",
        icon: "🟥",
        category: "blocks",
        description: "Laine de couleur rouge",
        properties: ["Inflammable", "Colorée", "Isolation sonore"],
        obtention: "Teinture de laine blanche",
        recipes: [{ingredients: ["laine_blanche", "teinture_rouge", "", "", "", "", "", "", ""], result: "Laine rouge"}]
    },
    {
        id: "black_wool",
        name: "Laine noire",
        icon: "⬛",
        category: "blocks",
        description: "Laine de couleur noire",
        properties: ["Inflammable", "Colorée", "Isolation sonore"],
        obtention: "Teinture de laine blanche",
        recipes: [{ingredients: ["laine_blanche", "teinture_noire", "", "", "", "", "", "", ""], result: "Laine noire"}]
    },
    {
        id: "potion_healing",
        name: "Potion de soin",
        icon: "🧪",
        category: "food",
        description: "Restaure 4 points de vie instantanément",
        properties: ["Instantané", "Curatif", "Buvable"],
        obtention: "Alchimie avec pastèque scintillante",
        recipes: []
    },
    {
        id: "potion_fire_resistance",
        name: "Potion de résistance au feu",
        icon: "🔥",
        category: "food",
        description: "Immunité aux dégâts de feu et lave (3 min)",
        properties: ["Durée: 3min", "Immunité feu", "Buvable"],
        obtention: "Alchimie avec crème de magma",
        recipes: []
    },
    {
        id: "potion_regeneration",
        name: "Potion de régénération",
        icon: "💚",
        category: "food",
        description: "Régénère la vie lentement (45s)",
        properties: ["Durée: 45s", "Régénération", "Buvable"],
        obtention: "Alchimie avec larme de ghast",
        recipes: []
    },
    {
        id: "potion_strength",
        name: "Potion de force",
        icon: "💪",
        category: "food",
        description: "Augmente les dégâts de mêlée (3 min)",
        properties: ["Durée: 3min", "+3 dégâts", "Buvable"],
        obtention: "Alchimie avec poudre de blaze",
        recipes: []
    },
    {
        id: "potion_swiftness",
        name: "Potion de rapidité",
        icon: "💨",
        category: "food",
        description: "Augmente la vitesse de déplacement (3 min)",
        properties: ["Durée: 3min", "+20% vitesse", "Buvable"],
        obtention: "Alchimie avec sucre",
        recipes: []
    },
    {
        id: "potion_night_vision",
        name: "Potion de vision nocturne",
        icon: "👁️",
        category: "food",
        description: "Vision parfaite dans l'obscurité (3 min)",
        properties: ["Durée: 3min", "Vision nocturne", "Buvable"],
        obtention: "Alchimie avec carotte dorée",
        recipes: []
    },
    {
        id: "potion_water_breathing",
        name: "Potion de respiration aquatique",
        icon: "🌊",
        category: "food",
        description: "Respiration sous l'eau (3 min)",
        properties: ["Durée: 3min", "Respiration aquatique", "Buvable"],
        obtention: "Alchimie avec poisson-globe",
        recipes: []
    },
    {
        id: "potion_leaping",
        name: "Potion de saut",
        icon: "🦘",
        category: "food",
        description: "Augmente la hauteur de saut (3 min)",
        properties: ["Durée: 3min", "+0.5 blocs saut", "Buvable"],
        obtention: "Alchimie avec patte de lapin",
        recipes: []
    },
    {
        id: "potion_slow_falling",
        name: "Potion de chute lente",
        icon: "🪂",
        category: "food",
        description: "Ralentit la chute et réduit les dégâts (1:30)",
        properties: ["Durée: 1min30", "Chute lente", "Buvable"],
        obtention: "Alchimie avec membrane de phantom",
        recipes: []
    },
    {
        id: "spruce_planks",
        name: "Planches de sapin",
        icon: "🟫",
        category: "blocks",
        description: "Planches de bois de sapin",
        properties: ["Inflammable", "Matériau de base", "Couleur foncée"],
        obtention: "Craft avec bûche de sapin",
        recipes: [{ingredients: ["bûche_sapin"], result: "4x Planches de sapin"}]
    },
    {
        id: "birch_planks",
        name: "Planches de bouleau",
        icon: "🟫",
        category: "blocks",
        description: "Planches de bois de bouleau",
        properties: ["Inflammable", "Matériau de base", "Couleur claire"],
        obtention: "Craft avec bûche de bouleau",
        recipes: [{ingredients: ["bûche_bouleau"], result: "4x Planches de bouleau"}]
    },
    {
        id: "jungle_planks",
        name: "Planches d'acajou",
        icon: "🟫",
        category: "blocks",
        description: "Planches de bois d'acajou",
        properties: ["Inflammable", "Matériau de base", "Couleur rouge"],
        obtention: "Craft avec bûche d'acajou",
        recipes: [{ingredients: ["bûche_acajou"], result: "4x Planches d'acajou"}]
    },
    {
        id: "acacia_planks",
        name: "Planches d'acacia",
        icon: "🟫",
        category: "blocks",
        description: "Planches de bois d'acacia",
        properties: ["Inflammable", "Matériau de base", "Couleur orange"],
        obtention: "Craft avec bûche d'acacia",
        recipes: [{ingredients: ["bûche_acacia"], result: "4x Planches d'acacia"}]
    },
    {
        id: "dark_oak_planks",
        name: "Planches de chêne noir",
        icon: "🟫",
        category: "blocks",
        description: "Planches de bois de chêne noir",
        properties: ["Inflammable", "Matériau de base", "Couleur sombre"],
        obtention: "Craft avec bûche de chêne noir",
        recipes: [{ingredients: ["bûche_chêne_noir"], result: "4x Planches de chêne noir"}]
    },
    {
        id: "mangrove_planks",
        name: "Planches de palétuvier",
        icon: "🟫",
        category: "blocks",
        description: "Planches de bois de palétuvier",
        properties: ["Inflammable", "Matériau de base", "Couleur rouge"],
        obtention: "Craft avec bûche de palétuvier",
        recipes: [{ingredients: ["bûche_palétuvier"], result: "4x Planches de palétuvier"}]
    },
    {
        id: "cherry_planks",
        name: "Planches de cerisier",
        icon: "🌸",
        category: "blocks",
        description: "Planches de bois de cerisier rose",
        properties: ["Inflammable", "Matériau de base", "Couleur rose"],
        obtention: "Craft avec bûche de cerisier",
        recipes: [{ingredients: ["bûche_cerisier"], result: "4x Planches de cerisier"}]
    },
    {
        id: "bamboo_planks",
        name: "Planches de bambou",
        icon: "🎋",
        category: "blocks",
        description: "Planches de bambou",
        properties: ["Inflammable", "Matériau de base", "Couleur jaune"],
        obtention: "Craft avec bloc de bambou",
        recipes: [{ingredients: ["bloc_bambou"], result: "2x Planches de bambou"}]
    },
    {
        id: "crimson_planks",
        name: "Planches carmin",
        icon: "🔴",
        category: "blocks",
        description: "Planches de champignon carmin du Nether",
        properties: ["Ignifuge", "Matériau de base", "Couleur rouge"],
        obtention: "Craft avec tige carmin",
        recipes: [{ingredients: ["tige_carmin"], result: "4x Planches carmin"}]
    },
    {
        id: "warped_planks",
        name: "Planches biscornues",
        icon: "🔵",
        category: "blocks",
        description: "Planches de champignon biscornu du Nether",
        properties: ["Ignifuge", "Matériau de base", "Couleur cyan"],
        obtention: "Craft avec tige biscornue",
        recipes: [{ingredients: ["tige_biscornue"], result: "4x Planches biscornues"}]
    }
];
