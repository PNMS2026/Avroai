// API Configuration
// Change this to your Railway backend URL after deployment
const API_CONFIG = {
    // Local development
    local: 'http://localhost:3000/api',
    
    // Production (Railway backend)
    production: 'https://avroai-production.up.railway.app/api',
    
    // Auto-detect environment
    getBaseURL: function() {
        // If running on localhost, use local API
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            return this.local;
        }
        // Otherwise use production API
        return this.production;
    }
};

// Export for use in other files (global for browser compatibility)
window.API_URL = API_CONFIG.getBaseURL();
const API_URL = window.API_URL;

// Debug: Log the API URL being used
console.log('🔧 API Configuration:');
console.log('   Environment:', window.location.hostname === 'localhost' ? 'LOCAL' : 'PRODUCTION');
console.log('   API URL:', window.API_URL);

