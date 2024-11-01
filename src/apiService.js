const API_URL = 'http://localhost:8080/admin-dashboard/assets'; // Update to your backend URL

const apiService = {
    async getTotalUsersCount() {
        try {
            const response = await fetch(`${API_URL}/count-assigned`);
            if (!response.ok) {
                throw new Error(`Error fetching total users count: ${response.statusText}`);
            }
            return await response.json();
        } catch (error) {
            throw new Error(error.message);
        }
    },
    async getTotalAssetsCount() {
        try {
            const response = await fetch(`${API_URL}/count`);
            if (!response.ok) {
                throw new Error(`Error fetching total assets count: ${response.statusText}`);
            }
            return await response.json();
        } catch (error) {
            throw new Error(error.message);
        }
    },
    async getAssignedAssetsCount() {
        try {
            const response = await fetch(`${API_URL}/count-assigned`);
            if (!response.ok) {
                throw new Error(`Error fetching assigned assets count: ${response.statusText}`);
            }
            return await response.json();
        } catch (error) {
            throw new Error(error.message);
        }
    },
    async getAssetsUnderMaintenanceCount() {
        try {
            const response = await fetch(`${API_URL}/count-in-maintenance`);
            if (!response.ok) {
                throw new Error(`Error fetching under maintenance assets count: ${response.statusText}`);
            }
            return await response.json();
        } catch (error) {
            throw new Error(error.message);
        }
    },
};

export default apiService;