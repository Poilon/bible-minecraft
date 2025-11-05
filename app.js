let currentCategory = 'all';
let searchTerm = '';

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
            <div class="item-icon">${item.icon}</div>
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
                                <div class="recipe-slot">${ing ? getIngredientEmoji(ing) : ''}</div>
                            `).join('')}
                        </div>
                        <div class="recipe-arrow">⬇️</div>
                        <div class="recipe-result">
                            <div class="result-item">
                                <div class="result-icon">${item.icon}</div>
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
            <div class="modal-icon">${item.icon}</div>
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
