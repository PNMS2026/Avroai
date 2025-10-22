// API Base URL - uses config.js for environment detection
// Make sure config.js is loaded before this file in HTML
const API_URL = typeof window.API_URL !== 'undefined' ? window.API_URL : '/api';

// DOM Elements
const addToolForm = document.getElementById('addToolForm');
const addCategoryForm = document.getElementById('addCategoryForm');
const toolCategory = document.getElementById('toolCategory');
const editToolCategory = document.getElementById('editToolCategory');
const categoriesList = document.getElementById('categoriesList');
const toolsList = document.getElementById('toolsList');
const adminSearchInput = document.getElementById('adminSearchInput');
const editModal = document.getElementById('editModal');
const closeModal = document.getElementById('closeModal');
const cancelEdit = document.getElementById('cancelEdit');
const editToolForm = document.getElementById('editToolForm');
const toast = document.getElementById('toast');

// State
let allTools = [];
let allCategories = [];
let editingToolId = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadCategories();
    loadTools();
    setupEventListeners();
});

// Setup Event Listeners
function setupEventListeners() {
    if (addToolForm) {
        addToolForm.addEventListener('submit', handleAddTool);
    }
    
    if (addCategoryForm) {
        addCategoryForm.addEventListener('submit', handleAddCategory);
    }
    
    if (adminSearchInput) {
        adminSearchInput.addEventListener('input', filterTools);
    }
    
    if (closeModal) {
        closeModal.addEventListener('click', hideEditModal);
    }
    
    if (cancelEdit) {
        cancelEdit.addEventListener('click', hideEditModal);
    }
    
    if (editToolForm) {
        editToolForm.addEventListener('submit', handleEditTool);
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === editModal) {
            hideEditModal();
        }
    });
}

// Load Categories
async function loadCategories() {
    try {
        const response = await fetch(`${API_URL}/categories`);
        allCategories = await response.json();
        
        updateCategorySelects();
        displayCategoriesList();
    } catch (error) {
        console.error('Error loading categories:', error);
        showToast('Error loading categories', 'error');
    }
}

// Update Category Selects
function updateCategorySelects() {
    const selects = [toolCategory, editToolCategory];
    
    selects.forEach(select => {
        if (!select) return;
        
        const currentValue = select.value;
        select.innerHTML = '<option value="">Select a category</option>';
        
        allCategories.forEach(category => {
            const option = document.createElement('option');
            option.value = category.name;
            option.textContent = category.name;
            select.appendChild(option);
        });
        
        if (currentValue) {
            select.value = currentValue;
        }
    });
}

// Display Categories List
function displayCategoriesList() {
    if (!categoriesList) return;
    
    categoriesList.innerHTML = '';
    
    if (allCategories.length === 0) {
        categoriesList.innerHTML = '<p style="color: var(--text-light); font-size: 14px;">No categories yet</p>';
        return;
    }
    
    allCategories.forEach(category => {
        const tag = document.createElement('div');
        tag.className = 'category-tag';
        tag.innerHTML = `
            ${category.name}
            <button class="delete-btn" onclick="deleteCategory('${category._id}', '${category.name}')" title="Delete category">×</button>
        `;
        categoriesList.appendChild(tag);
    });
}

// Load Tools
async function loadTools() {
    try {
        const response = await fetch(`${API_URL}/tools`);
        allTools = await response.json();
        displayTools(allTools);
    } catch (error) {
        console.error('Error loading tools:', error);
        showToast('Error loading tools', 'error');
    }
}

// Display Tools
function displayTools(tools) {
    if (!toolsList) return;
    
    toolsList.innerHTML = '';
    
    if (tools.length === 0) {
        toolsList.innerHTML = '<p style="text-align: center; color: var(--text-light); padding: 40px;">No tools found</p>';
        return;
    }
    
    tools.forEach(tool => {
        const item = createToolItem(tool);
        toolsList.appendChild(item);
    });
}

// Create Tool Item
function createToolItem(tool) {
    const item = document.createElement('div');
    item.className = 'tool-item';
    
    item.innerHTML = `
        <img src="${tool.logo}" alt="${tool.name}" class="tool-item-logo" onerror="this.src='https://via.placeholder.com/48'">
        <div class="tool-item-info">
            <div class="tool-item-name">${tool.name}</div>
            <div class="tool-item-category">${tool.category}</div>
        </div>
        <div class="tool-item-actions">
            <button class="btn btn-edit" onclick="editTool('${tool._id}')">Edit</button>
            <button class="btn btn-danger" onclick="deleteTool('${tool._id}', '${tool.name}')">Delete</button>
        </div>
    `;
    
    return item;
}

// Filter Tools
function filterTools() {
    if (!adminSearchInput) return;
    
    const query = adminSearchInput.value.toLowerCase();
    
    if (!query) {
        displayTools(allTools);
        return;
    }
    
    const filtered = allTools.filter(tool => 
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        tool.category.toLowerCase().includes(query)
    );
    
    displayTools(filtered);
}

// Handle Add Tool
async function handleAddTool(e) {
    e.preventDefault();
    
    const toolData = {
        name: document.getElementById('toolName').value,
        description: document.getElementById('toolDescription').value,
        category: document.getElementById('toolCategory').value,
        logo: document.getElementById('toolLogo').value,
        url: document.getElementById('toolUrl').value
    };
    
    try {
        const response = await fetch(`${API_URL}/tools`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(toolData)
        });
        
        if (response.ok) {
            showToast('Tool added successfully!', 'success');
            addToolForm.reset();
            loadTools();
        } else {
            const error = await response.json();
            showToast(error.message || 'Error adding tool', 'error');
        }
    } catch (error) {
        console.error('Error adding tool:', error);
        showToast('Error adding tool', 'error');
    }
}

// Handle Add Category
async function handleAddCategory(e) {
    e.preventDefault();
    
    const categoryName = document.getElementById('categoryName').value;
    
    try {
        const response = await fetch(`${API_URL}/categories`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: categoryName })
        });
        
        if (response.ok) {
            showToast('Category added successfully!', 'success');
            addCategoryForm.reset();
            loadCategories();
        } else {
            const error = await response.json();
            showToast(error.message || 'Error adding category', 'error');
        }
    } catch (error) {
        console.error('Error adding category:', error);
        showToast('Error adding category', 'error');
    }
}

// Edit Tool
function editTool(id) {
    const tool = allTools.find(t => t._id === id);
    if (!tool) return;
    
    editingToolId = id;
    
    document.getElementById('editToolId').value = id;
    document.getElementById('editToolName').value = tool.name;
    document.getElementById('editToolDescription').value = tool.description;
    document.getElementById('editToolCategory').value = tool.category;
    document.getElementById('editToolLogo').value = tool.logo;
    document.getElementById('editToolUrl').value = tool.url;
    
    showEditModal();
}

// Handle Edit Tool
async function handleEditTool(e) {
    e.preventDefault();
    
    const toolData = {
        name: document.getElementById('editToolName').value,
        description: document.getElementById('editToolDescription').value,
        category: document.getElementById('editToolCategory').value,
        logo: document.getElementById('editToolLogo').value,
        url: document.getElementById('editToolUrl').value
    };
    
    try {
        const response = await fetch(`${API_URL}/tools/${editingToolId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(toolData)
        });
        
        if (response.ok) {
            showToast('Tool updated successfully!', 'success');
            hideEditModal();
            loadTools();
        } else {
            const error = await response.json();
            showToast(error.message || 'Error updating tool', 'error');
        }
    } catch (error) {
        console.error('Error updating tool:', error);
        showToast('Error updating tool', 'error');
    }
}

// Delete Tool
async function deleteTool(id, name) {
    if (!confirm(`Are you sure you want to delete "${name}"?`)) {
        return;
    }
    
    try {
        const response = await fetch(`${API_URL}/tools/${id}`, {
            method: 'DELETE'
        });
        
        if (response.ok) {
            showToast('Tool deleted successfully!', 'success');
            loadTools();
        } else {
            const error = await response.json();
            showToast(error.message || 'Error deleting tool', 'error');
        }
    } catch (error) {
        console.error('Error deleting tool:', error);
        showToast('Error deleting tool', 'error');
    }
}

// Delete Category
async function deleteCategory(id, name) {
    if (!confirm(`Are you sure you want to delete the category "${name}"?`)) {
        return;
    }
    
    try {
        const response = await fetch(`${API_URL}/categories/${id}`, {
            method: 'DELETE'
        });
        
        if (response.ok) {
            showToast('Category deleted successfully!', 'success');
            loadCategories();
        } else {
            const error = await response.json();
            showToast(error.message || 'Error deleting category', 'error');
        }
    } catch (error) {
        console.error('Error deleting category:', error);
        showToast('Error deleting category', 'error');
    }
}

// Show/Hide Edit Modal
function showEditModal() {
    if (editModal) {
        editModal.classList.add('active');
    }
}

function hideEditModal() {
    if (editModal) {
        editModal.classList.remove('active');
    }
    editingToolId = null;
}

// Show Toast
function showToast(message, type = 'success') {
    if (!toast) return;
    
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Make functions global for inline onclick handlers
window.editTool = editTool;
window.deleteTool = deleteTool;
window.deleteCategory = deleteCategory;

