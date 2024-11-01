const API_URL = 'http://localhost:8080/admin-dashboard/assets'; // Update to your backend URL

const apiService = {
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
};

export default apiService;