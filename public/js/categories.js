// API Base URL
const API_URL = '/api';

// DOM Elements
const categoriesGrid = document.getElementById('categoriesGrid');
const loadingSpinner = document.getElementById('loadingSpinner');
const categoryToolsSection = document.getElementById('categoryToolsSection');
const categoryTitle = document.getElementById('categoryTitle');
const categoryToolsGrid = document.getElementById('categoryToolsGrid');
const clearCategoryBtn = document.getElementById('clearCategoryBtn');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');

// State
let allCategories = [];
let toolsByCategory = {};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadCategoriesWithCounts();
    setupEventListeners();
});

// Setup Event Listeners
function setupEventListeners() {
    if (clearCategoryBtn) {
        clearCategoryBtn.addEventListener('click', () => {
            showCategoriesView();
        });
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

// Load Categories with Tool Counts
async function loadCategoriesWithCounts() {
    showLoading();
    
    try {
        // Load categories
        const categoriesResponse = await fetch(`${API_URL}/categories`);
        allCategories = await categoriesResponse.json();
        
        // Load all tools
        const toolsResponse = await fetch(`${API_URL}/tools`);
        const allTools = await toolsResponse.json();
        
        // Count tools per category
        toolsByCategory = {};
        allCategories.forEach(category => {
            toolsByCategory[category.name] = allTools.filter(
                tool => tool.category === category.name
            );
        });
        
        displayCategories();
    } catch (error) {
        console.error('Error loading categories:', error);
        hideLoading();
    }
}

// Display Categories
function displayCategories() {
    hideLoading();
    
    if (!categoriesGrid) return;
    
    categoriesGrid.innerHTML = '';
    
    allCategories.forEach(category => {
        const count = toolsByCategory[category.name]?.length || 0;
        const card = createCategoryCard(category, count);
        categoriesGrid.appendChild(card);
    });
}

// Create Category Card
function createCategoryCard(category, count) {
    const card = document.createElement('div');
    card.className = 'category-card';
    
    card.innerHTML = `
        <h3>${category.name}</h3>
        <p class="category-count">${count} tool${count !== 1 ? 's' : ''}</p>
    `;
    
    card.addEventListener('click', () => {
        showCategoryTools(category.name);
    });
    
    return card;
}

// Show Category Tools
function showCategoryTools(categoryName) {
    const tools = toolsByCategory[categoryName] || [];
    
    // Hide categories grid
    document.querySelector('.categories-section').style.display = 'none';
    
    // Show category tools section
    if (categoryToolsSection) {
        categoryToolsSection.style.display = 'block';
    }
    
    // Update title
    if (categoryTitle) {
        categoryTitle.textContent = `${categoryName} Tools (${tools.length})`;
    }
    
    // Display tools
    if (categoryToolsGrid) {
        categoryToolsGrid.innerHTML = '';
        
        if (tools.length === 0) {
            categoryToolsGrid.innerHTML = '<p style="text-align: center; color: var(--text-light); grid-column: 1/-1;">No tools found in this category.</p>';
        } else {
            tools.forEach(tool => {
                const card = createToolCard(tool);
                categoryToolsGrid.appendChild(card);
            });
        }
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show Categories View
function showCategoriesView() {
    // Show categories grid
    document.querySelector('.categories-section').style.display = 'block';
    
    // Hide category tools section
    if (categoryToolsSection) {
        categoryToolsSection.style.display = 'none';
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

// Show/Hide Loading
function showLoading() {
    if (loadingSpinner) loadingSpinner.style.display = 'block';
    if (categoriesGrid) categoriesGrid.style.display = 'none';
}

function hideLoading() {
    if (loadingSpinner) loadingSpinner.style.display = 'none';
    if (categoriesGrid) categoriesGrid.style.display = 'grid';
}

