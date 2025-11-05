let currentCategory = 'all';
let searchTerm = '';

function getItemTexture(itemId) {
    const gifItems = ['compass', 'clock'];
    
    const textureMap = {
        'dirt': 'Dirt',
        'grass_block': 'Grass_Block',
        'stone': 'Stone',
        'cobblestone': 'Cobblestone',
        'oak_log': 'Oak_Log',
        'oak_planks': 'Oak_Planks',
        'crafting_table': 'Crafting_Table',
        'furnace': 'Furnace',
        'chest': 'Chest',
        'bed': 'Red_Bed',
        'torch': 'Torch',
        'stick': 'Stick',
        'coal': 'Coal',
        'iron_ore': 'Iron_Ore',
        'iron_ingot': 'Iron_Ingot',
        'gold_ore': 'Gold_Ore',
        'gold_ingot': 'Gold_Ingot',
        'diamond_ore': 'Diamond_Ore',
        'diamond': 'Diamond',
        'emerald': 'Emerald',
        'redstone': 'Redstone',
        'lapis_lazuli': 'Lapis_Lazuli',
        'wooden_pickaxe': 'Wooden_Pickaxe',
        'stone_pickaxe': 'Stone_Pickaxe',
        'iron_pickaxe': 'Iron_Pickaxe',
        'diamond_pickaxe': 'Diamond_Pickaxe',
        'wooden_axe': 'Wooden_Axe',
        'iron_axe': 'Iron_Axe',
        'wooden_shovel': 'Wooden_Shovel',
        'iron_shovel': 'Iron_Shovel',
        'wooden_hoe': 'Wooden_Hoe',
        'wooden_sword': 'Wooden_Sword',
        'stone_sword': 'Stone_Sword',
        'iron_sword': 'Iron_Sword',
        'diamond_sword': 'Diamond_Sword',
        'bow': 'Bow',
        'arrow': 'Arrow',
        'leather_helmet': 'Leather_Cap',
        'iron_helmet': 'Iron_Helmet',
        'diamond_helmet': 'Diamond_Helmet',
        'leather_chestplate': 'Leather_Tunic',
        'iron_chestplate': 'Iron_Chestplate',
        'leather_leggings': 'Leather_Pants',
        'iron_leggings': 'Iron_Leggings',
        'leather_boots': 'Leather_Boots',
        'iron_boots': 'Iron_Boots',
        'shield': 'Shield',
        'bucket': 'Bucket',
        'water_bucket': 'Water_Bucket',
        'lava_bucket': 'Lava_Bucket',
        'milk_bucket': 'Milk_Bucket',
        'apple': 'Apple',
        'golden_apple': 'Golden_Apple',
        'bread': 'Bread',
        'cooked_beef': 'Cooked_Beef',
        'cooked_porkchop': 'Cooked_Porkchop',
        'cooked_chicken': 'Cooked_Chicken',
        'cake': 'Cake',
        'cookie': 'Cookie',
        'wheat': 'Wheat',
        'seeds': 'Wheat_Seeds',
        'bone_meal': 'Bone_Meal',
        'compass': 'Compass',
        'clock': 'Clock',
        'map': 'Map',
        'paper': 'Paper',
        'book': 'Book',
        'bookshelf': 'Bookshelf',
        'enchanting_table': 'Enchanting_Table',
        'anvil': 'Anvil',
        'brewing_stand': 'Brewing_Stand',
        'glass': 'Glass',
        'glass_pane': 'Glass_Pane',
        'door_wood': 'Oak_Door',
        'door_iron': 'Iron_Door',
        'trapdoor': 'Oak_Trapdoor',
        'fence': 'Oak_Fence',
        'ladder': 'Ladder',
        'sign': 'Oak_Sign',
        'tnt': 'TNT',
        'lever': 'Lever',
        'button_stone': 'Stone_Button',
        'pressure_plate': 'Oak_Pressure_Plate',
        'redstone_torch': 'Redstone_Torch',
        'redstone_repeater': 'Redstone_Repeater',
        'redstone_comparator': 'Redstone_Comparator',
        'piston': 'Piston',
        'sticky_piston': 'Sticky_Piston',
        'dispenser': 'Dispenser',
        'dropper': 'Dropper',
        'hopper': 'Hopper',
        'observer': 'Observer',
        'note_block': 'Note_Block',
        'jukebox': 'Jukebox',
        'ender_chest': 'Ender_Chest',
        'ender_pearl': 'Ender_Pearl',
        'eye_of_ender': 'Eye_of_Ender',
        'shulker_box': 'Shulker_Box',
        'elytra': 'Elytra',
        'totem': 'Totem_of_Undying',
        'beacon': 'Beacon',
        'netherite_ingot': 'Netherite_Ingot',
        'conduit': 'Conduit',
        'copper_axe': 'Copper_Axe',
        'copper_pickaxe': 'Copper_Pickaxe',
        'copper_shovel': 'Copper_Shovel',
        'copper_hoe': 'Copper_Hoe',
        'copper_sword': 'Copper_Sword',
        'copper_helmet': 'Copper_Helmet',
        'copper_chestplate': 'Copper_Chestplate',
        'copper_leggings': 'Copper_Leggings',
        'copper_boots': 'Copper_Boots',
        'netherite_helmet': 'Netherite_Helmet',
        'netherite_chestplate': 'Netherite_Chestplate',
        'netherite_leggings': 'Netherite_Leggings',
        'netherite_boots': 'Netherite_Boots',
        'netherite_axe': 'Netherite_Axe',
        'netherite_pickaxe': 'Netherite_Pickaxe',
        'netherite_shovel': 'Netherite_Shovel',
        'netherite_hoe': 'Netherite_Hoe',
        'netherite_sword': 'Netherite_Sword',
        'ancient_debris': 'Ancient_Debris',
        'netherite_scrap': 'Netherite_Scrap',
        'copper_ore': 'Copper_Ore',
        'deepslate_copper_ore': 'Deepslate_Copper_Ore',
        'raw_copper': 'Raw_Copper',
        'copper_ingot': 'Copper_Ingot',
        'crossbow': 'Crossbow',
        'trident': 'Trident',
        'chainmail_helmet': 'Chainmail_Helmet',
        'chainmail_chestplate': 'Chainmail_Chestplate',
        'chainmail_leggings': 'Chainmail_Leggings',
        'chainmail_boots': 'Chainmail_Boots',
        'turtle_helmet': 'Turtle_Shell',
        'spyglass': 'Spyglass',
        'brush': 'Brush',
        'lightning_rod': 'Lightning_Rod',
        'white_wool': 'White_Wool',
        'orange_wool': 'Orange_Wool',
        'magenta_wool': 'Magenta_Wool',
        'light_blue_wool': 'Light_Blue_Wool',
        'yellow_wool': 'Yellow_Wool',
        'lime_wool': 'Lime_Wool',
        'pink_wool': 'Pink_Wool',
        'gray_wool': 'Gray_Wool',
        'light_gray_wool': 'Light_Gray_Wool',
        'cyan_wool': 'Cyan_Wool',
        'purple_wool': 'Purple_Wool',
        'blue_wool': 'Blue_Wool',
        'brown_wool': 'Brown_Wool',
        'green_wool': 'Green_Wool',
        'red_wool': 'Red_Wool',
        'black_wool': 'Black_Wool',
        'potion_healing': 'Potion_of_Healing',
        'potion_fire_resistance': 'Potion_of_Fire_Resistance',
        'potion_regeneration': 'Potion_of_Regeneration',
        'potion_strength': 'Potion_of_Strength',
        'potion_swiftness': 'Potion_of_Swiftness',
        'potion_night_vision': 'Potion_of_Night_Vision',
        'potion_water_breathing': 'Potion_of_Water_Breathing',
        'potion_leaping': 'Potion_of_Leaping',
        'potion_slow_falling': 'Potion_of_Slow_Falling',
        'spruce_planks': 'Spruce_Planks',
        'birch_planks': 'Birch_Planks',
        'jungle_planks': 'Jungle_Planks',
        'acacia_planks': 'Acacia_Planks',
        'dark_oak_planks': 'Dark_Oak_Planks',
        'mangrove_planks': 'Mangrove_Planks',
        'cherry_planks': 'Cherry_Planks',
        'bamboo_planks': 'Bamboo_Planks',
        'crimson_planks': 'Crimson_Planks',
        'warped_planks': 'Warped_Planks'
    };
    
    const textureName = textureMap[itemId] || itemId;
    const extension = gifItems.includes(itemId) ? 'gif' : 'png';
    return `https://minecraft.wiki/images/Invicon_${textureName}.${extension}`;
}

function renderItems(items) {
    const grid = document.getElementById('itemsGrid');
    grid.innerHTML = '';

    const filteredItems = items.filter(item => {
        const matchesCategory = currentCategory === 'all' || item.category === currentCategory;
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            item.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (filteredItems.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #888; padding: 40px;">Aucun objet trouvé</p>';
        return;
    }

    filteredItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'item-card';
        card.innerHTML = `
            <div class="item-icon"><img src="${getItemTexture(item.id)}" alt="${item.name}" onerror="this.style.display='none'; this.nextSibling.style.display='inline'"><span style="display:none">${item.icon}</span></div>
            <div class="item-name">${item.name}</div>
            <div class="item-category">${getCategoryName(item.category)}</div>
        `;
        card.onclick = () => showModal(item);
        grid.appendChild(card);
    });
}

function getCategoryName(category) {
    const names = {
        'blocks': 'Blocs',
        'items': 'Objets',
        'tools': 'Outils',
        'weapons': 'Armes',
        'armor': 'Armures',
        'food': 'Nourriture',
        'redstone': 'Redstone',
        'decorations': 'Décorations'
    };
    return names[category] || category;
}

function showModal(item) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');
    
    let recipesHTML = '';
    if (item.recipes && item.recipes.length > 0) {
        recipesHTML = `
            <div class="modal-section">
                <h3 class="section-title">📝 RECETTES DE CRAFT</h3>
                ${item.recipes.map(recipe => `
                    <div class="recipe-container">
                        <div class="recipe-grid">
                            ${recipe.ingredients.map((ing, idx) => `
                                <div class="recipe-slot" title="${ing ? getIngredientName(ing) : ''}">
                                    ${ing ? `<img src="${getIngredientTexture(ing)}" alt="${getIngredientName(ing)}" onerror="this.style.display='none'; this.nextSibling.style.display='inline'"><span style="display:none">${getIngredientEmoji(ing)}</span>` : ''}
                                </div>
                            `).join('')}
                        </div>
                        <div class="recipe-arrow">⬇️</div>
                        <div class="recipe-result">
                            <div class="result-item">
                                <div class="result-icon"><img src="${getItemTexture(item.id)}" alt="${item.name}" onerror="this.style.display='none'; this.nextSibling.style.display='inline'"><span style="display:none">${item.icon}</span></div>
                                <div class="result-text">${recipe.result}</div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    let propertiesHTML = '';
    if (item.properties && item.properties.length > 0) {
        propertiesHTML = `
            <div class="modal-section">
                <h3 class="section-title">⚡ PROPRIÉTÉS</h3>
                <ul class="properties-list">
                    ${item.properties.map(prop => `<li>${prop}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    modalBody.innerHTML = `
        <div class="modal-header">
            <div class="modal-icon"><img src="${getItemTexture(item.id)}" alt="${item.name}" onerror="this.style.display='none'; this.nextSibling.style.display='inline'"><span style="display:none">${item.icon}</span></div>
            <h2 class="modal-title">${item.name}</h2>
            <p class="modal-category">${getCategoryName(item.category)}</p>
        </div>

        <div class="modal-section">
            <h3 class="section-title">📖 DESCRIPTION</h3>
            <p class="modal-description">${item.description}</p>
        </div>

        ${propertiesHTML}

        <div class="modal-section">
            <h3 class="section-title">🎯 OBTENTION</h3>
            <p class="modal-description">${item.obtention}</p>
        </div>

        ${recipesHTML}
    `;

    modal.style.display = 'block';
}

function getIngredientTexture(ingredient) {
    const gifIngredients = ['boussole', 'horloge'];
    
    const textureMap = {
        'planches': 'Oak_Planks',
        'bâton': 'Stick',
        'roche': 'Cobblestone',
        'pierre': 'Stone',
        'fer': 'Iron_Ingot',
        'or': 'Gold_Ingot',
        'diamant': 'Diamond',
        'charbon': 'Coal',
        'redstone': 'Redstone',
        'laine': 'White_Wool',
        'bûche': 'Oak_Log',
        'verre': 'Glass',
        'obsidienne': 'Obsidian',
        'livre': 'Book',
        'papier': 'Paper',
        'cuir': 'Leather',
        'ficelle': 'String',
        'silex': 'Flint',
        'plume': 'Feather',
        'blé': 'Wheat',
        'sucre': 'Sugar',
        'œuf': 'Egg',
        'lait': 'Milk_Bucket',
        'cacao': 'Cocoa_Beans',
        'os': 'Bone',
        'poudre': 'Gunpowder',
        'sable': 'Sand',
        'canne': 'Sugar_Cane',
        'boussole': 'Compass',
        'coffre': 'Chest',
        'arc': 'Bow',
        'piston': 'Piston',
        'slime': 'Slime_Ball',
        'quartz': 'Nether_Quartz',
        'torche_rs': 'Redstone_Torch',
        'blaze_rod': 'Blaze_Rod',
        'fer_bloc': 'Block_of_Iron',
        'perle_ender': 'Ender_Pearl',
        'poudre_blaze': 'Blaze_Powder',
        'œil_ender': 'Eye_of_Ender',
        'carapace_shulker': 'Shulker_Shell',
        'étoile_nether': 'Nether_Star',
        'débris': 'Ancient_Debris',
        'coquille': 'Nautilus_Shell',
        'cœur_mer': 'Heart_of_the_Sea',
        'pomme': 'Apple',
        'cuivre': 'Copper_Ingot',
        'améthyste': 'Amethyst_Shard',
        'crochet': 'Tripwire_Hook',
        'écaille': 'Scute',
        'laine_blanche': 'White_Wool',
        'teinture_orange': 'Orange_Dye',
        'teinture_magenta': 'Magenta_Dye',
        'teinture_bleu_clair': 'Light_Blue_Dye',
        'teinture_jaune': 'Yellow_Dye',
        'teinture_vert_clair': 'Lime_Dye',
        'teinture_rose': 'Pink_Dye',
        'teinture_grise': 'Gray_Dye',
        'teinture_gris_clair': 'Light_Gray_Dye',
        'teinture_cyan': 'Cyan_Dye',
        'teinture_violette': 'Purple_Dye',
        'teinture_bleue': 'Blue_Dye',
        'teinture_marron': 'Brown_Dye',
        'teinture_verte': 'Green_Dye',
        'teinture_rouge': 'Red_Dye',
        'teinture_noire': 'Black_Dye',
        'bûche_sapin': 'Spruce_Log',
        'bûche_bouleau': 'Birch_Log',
        'bûche_acajou': 'Jungle_Log',
        'bûche_acacia': 'Acacia_Log',
        'bûche_chêne_noir': 'Dark_Oak_Log',
        'bûche_palétuvier': 'Mangrove_Log',
        'bûche_cerisier': 'Cherry_Log',
        'bloc_bambou': 'Block_of_Bamboo',
        'tige_carmin': 'Crimson_Stem',
        'tige_biscornue': 'Warped_Stem'
    };
    
    const textureName = textureMap[ingredient] || ingredient;
    const extension = gifIngredients.includes(ingredient) ? 'gif' : 'png';
    return `https://minecraft.wiki/images/Invicon_${textureName}.${extension}`;
}

function getIngredientName(ingredient) {
    const nameMap = {
        'planches': 'Planches',
        'bâton': 'Bâton',
        'roche': 'Roche',
        'pierre': 'Pierre',
        'fer': 'Lingot de fer',
        'or': 'Lingot d\'or',
        'diamant': 'Diamant',
        'charbon': 'Charbon',
        'redstone': 'Poudre de redstone',
        'laine': 'Laine',
        'bûche': 'Bûche',
        'verre': 'Verre',
        'obsidienne': 'Obsidienne',
        'livre': 'Livre',
        'papier': 'Papier',
        'cuir': 'Cuir',
        'ficelle': 'Ficelle',
        'silex': 'Silex',
        'plume': 'Plume',
        'blé': 'Blé',
        'sucre': 'Sucre',
        'œuf': 'Œuf',
        'lait': 'Seau de lait',
        'cacao': 'Fèves de cacao',
        'os': 'Os',
        'poudre': 'Poudre à canon',
        'sable': 'Sable',
        'canne': 'Canne à sucre',
        'boussole': 'Boussole',
        'coffre': 'Coffre',
        'arc': 'Arc',
        'piston': 'Piston',
        'slime': 'Boule de slime',
        'quartz': 'Quartz du Nether',
        'torche_rs': 'Torche de redstone',
        'blaze_rod': 'Bâton de blaze',
        'fer_bloc': 'Bloc de fer',
        'perle_ender': 'Perle de l\'Ender',
        'poudre_blaze': 'Poudre de blaze',
        'œil_ender': 'Œil de l\'Ender',
        'carapace_shulker': 'Carapace de shulker',
        'étoile_nether': 'Étoile du Nether',
        'débris': 'Débris antiques',
        'coquille': 'Coquille de nautile',
        'cœur_mer': 'Cœur de la mer',
        'pomme': 'Pomme',
        'cuivre': 'Lingot de cuivre',
        'améthyste': 'Éclat d\'améthyste',
        'crochet': 'Crochet',
        'écaille': 'Écaille de tortue',
        'laine_blanche': 'Laine blanche',
        'teinture_orange': 'Teinture orange',
        'teinture_magenta': 'Teinture magenta',
        'teinture_bleu_clair': 'Teinture bleu clair',
        'teinture_jaune': 'Teinture jaune',
        'teinture_vert_clair': 'Teinture vert clair',
        'teinture_rose': 'Teinture rose',
        'teinture_grise': 'Teinture grise',
        'teinture_gris_clair': 'Teinture gris clair',
        'teinture_cyan': 'Teinture cyan',
        'teinture_violette': 'Teinture violette',
        'teinture_bleue': 'Teinture bleue',
        'teinture_marron': 'Teinture marron',
        'teinture_verte': 'Teinture verte',
        'teinture_rouge': 'Teinture rouge',
        'teinture_noire': 'Teinture noire',
        'bûche_sapin': 'Bûche de sapin',
        'bûche_bouleau': 'Bûche de bouleau',
        'bûche_acajou': 'Bûche d\'acajou',
        'bûche_acacia': 'Bûche d\'acacia',
        'bûche_chêne_noir': 'Bûche de chêne noir',
        'bûche_palétuvier': 'Bûche de palétuvier',
        'bûche_cerisier': 'Bûche de cerisier',
        'bloc_bambou': 'Bloc de bambou',
        'tige_carmin': 'Tige carmin',
        'tige_biscornue': 'Tige biscornue'
    };
    return nameMap[ingredient] || ingredient;
}

function getIngredientEmoji(ingredient) {
    const emojiMap = {
        'planches': '🟫',
        'bâton': '🦯',
        'roche': '🪨',
        'pierre': '⬜',
        'fer': '🔩',
        'or': '🟨',
        'diamant': '💎',
        'charbon': '⚫',
        'redstone': '🔴',
        'laine': '🧶',
        'bûche': '🪵',
        'verre': '🪟',
        'obsidienne': '⬛',
        'livre': '📖',
        'papier': '📄',
        'cuir': '🟤',
        'ficelle': '🧵',
        'silex': '⚫',
        'plume': '🪶',
        'blé': '🌾',
        'sucre': '🧂',
        'œuf': '🥚',
        'lait': '🥛',
        'cacao': '🟤',
        'os': '🦴',
        'poudre': '💥',
        'sable': '🟨',
        'canne': '🎋',
        'boussole': '🧭',
        'coffre': '📦',
        'arc': '🏹',
        'piston': '🔲',
        'slime': '🟢',
        'quartz': '⬜',
        'torche_rs': '🔴',
        'blaze_rod': '🔥',
        'fer_bloc': '⬜',
        'perle_ender': '🟣',
        'poudre_blaze': '🔥',
        'œil_ender': '👁️',
        'carapace_shulker': '💜',
        'étoile_nether': '⭐',
        'débris': '⬛',
        'coquille': '🐚',
        'cœur_mer': '💙',
        'pomme': '🍎'
    };
    return emojiMap[ingredient] || '❓';
}

document.querySelector('.close').onclick = function() {
    document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

document.getElementById('searchInput').addEventListener('input', (e) => {
    searchTerm = e.target.value;
    renderItems(minecraftItems);
});

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentCategory = e.target.dataset.category;
        renderItems(minecraftItems);
    });
});

renderItems(minecraftItems);
