// API Base URL - uses config.js for environment detection
// Make sure config.js is loaded before this file in HTML
const API_URL = typeof window.API_URL !== 'undefined' ? window.API_URL : '/api';

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const categoryFilter = document.getElementById('categoryFilter');
const toolsGrid = document.getElementById('toolsGrid');
const loadingSpinner = document.getElementById('loadingSpinner');
const noResults = document.getElementById('noResults');
const sectionTitle = document.getElementById('sectionTitle');
const toolCount = document.getElementById('toolCount');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');

// State
let allTools = [];
let currentFilter = '';
let currentSearch = '';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadCategories();
    loadTools();
    setupEventListeners();
});

// Setup Event Listeners
function setupEventListeners() {
    if (searchBtn) {
        searchBtn.addEventListener('click', handleSearch);
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
    }
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', handleCategoryChange);
    }

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
}

// Toggle Mobile Menu
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

// Load Categories
async function loadCategories() {
    if (!categoryFilter) return;
    
    try {
        const response = await fetch(`${API_URL}/categories`);
        const categories = await response.json();
        
        categoryFilter.innerHTML = '<option value="">All Categories</option>';
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category.name;
            option.textContent = category.name;
            categoryFilter.appendChild(option);
        });
    } catch (error) {
        console.error('Error loading categories:', error);
    }
}

// Load Tools
async function loadTools(category = '', search = '') {
    if (!toolsGrid) return;
    
    showLoading();
    
    try {
        let url = `${API_URL}/tools`;
        
        if (search) {
            url = `${API_URL}/tools/search?q=${encodeURIComponent(search)}`;
        } else if (category) {
            url = `${API_URL}/tools?category=${encodeURIComponent(category)}`;
        }
        
        const response = await fetch(url);
        allTools = await response.json();
        
        displayTools(allTools);
        updateHeader(category, search);
    } catch (error) {
        console.error('Error loading tools:', error);
        hideLoading();
        showNoResults();
    }
}

// Display Tools
function displayTools(tools) {
    hideLoading();
    
    if (!toolsGrid) return;
    
    if (tools.length === 0) {
        showNoResults();
        return;
    }
    
    hideNoResults();
    toolsGrid.innerHTML = '';
    
    tools.forEach(tool => {
        const card = createToolCard(tool);
        toolsGrid.appendChild(card);
    });
}

// Create Tool Card
function createToolCard(tool) {
    const card = document.createElement('div');
    card.className = 'tool-card';
    
    card.innerHTML = `
        <div class="tool-header">
            <img src="${tool.logo}" alt="${tool.name}" class="tool-logo" onerror="this.src='https://via.placeholder.com/56'">
            <div class="tool-info">
                <h3 class="tool-name">${tool.name}</h3>
                <span class="tool-category">${tool.category}</span>
            </div>
        </div>
        <p class="tool-description">${tool.description}</p>
        <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="try-now-btn">Try Now</a>
    `;
    
    return card;
}

// Handle Search
function handleSearch() {
    if (!searchInput) return;
    
    currentSearch = searchInput.value.trim();
    currentFilter = '';
    
    if (categoryFilter) {
        categoryFilter.value = '';
    }
    
    loadTools('', currentSearch);
}

// Handle Category Change
function handleCategoryChange() {
    if (!categoryFilter) return;
    
    currentFilter = categoryFilter.value;
    currentSearch = '';
    
    if (searchInput) {
        searchInput.value = '';
    }
    
    loadTools(currentFilter, '');
}

// Update Header
function updateHeader(category, search) {
    if (!sectionTitle || !toolCount) return;
    
    if (search) {
        sectionTitle.textContent = `Search Results for "${search}"`;
    } else if (category) {
        sectionTitle.textContent = `${category} Tools`;
    } else {
        sectionTitle.textContent = 'All AI Tools';
    }
    
    toolCount.textContent = `${allTools.length} tool${allTools.length !== 1 ? 's' : ''} found`;
}

// Show/Hide Loading
function showLoading() {
    if (loadingSpinner) loadingSpinner.style.display = 'block';
    if (toolsGrid) toolsGrid.style.display = 'none';
    if (noResults) noResults.style.display = 'none';
}

function hideLoading() {
    if (loadingSpinner) loadingSpinner.style.display = 'none';
    if (toolsGrid) toolsGrid.style.display = 'grid';
}

// Show/Hide No Results
function showNoResults() {
    if (noResults) noResults.style.display = 'block';
    if (toolsGrid) toolsGrid.innerHTML = '';
    if (toolCount) toolCount.textContent = '0 tools found';
}

function hideNoResults() {
    if (noResults) noResults.style.display = 'none';
}

