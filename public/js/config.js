// API Configuration
// Change this to your Render backend URL after deployment
const API_CONFIG = {
    // Local development
    local: 'http://localhost:3000/api',
    
    // Production (Render backend)
    production: 'https://avroai.onrender.com/api',
    
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

// Export for use in other files
const API_URL = API_CONFIG.getBaseURL();

