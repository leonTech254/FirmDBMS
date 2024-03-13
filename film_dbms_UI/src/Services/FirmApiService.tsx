import Firm from "../Models/Film";

export default class FirmService {
    baseURL: string = "http://localhost:8080/api/firm/";

    constructor() {}

    async getAllFirms(): Promise<Firm[]> {
        try {
            const response = await fetch(this.baseURL);
            if (!response.ok) {
                throw new Error('Failed to fetch firm');
            }
            const data: Firm[] = await response.json();
            return data;
        } catch (error) {
            console.error('Error getting firm:', error);
            return [];
        }
    }

    async addFirm(newFirm: Firm): Promise<Firm | null> {
        try {
            const response = await fetch(this.baseURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newFirm)
            });
            if (!response.ok) {
                throw new Error('Failed to add firm');
            }
            const data: Firm = await response.json();
            return data;
        } catch (error) {
            console.error('Error adding firm:', error);
            return null;
        }
    }

    async updateFirm(updatedFirm: Firm): Promise<Firm | null> {
        try {
            const response = await fetch(this.baseURL + updatedFirm.id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedFirm)
            });
            if (!response.ok) {
                throw new Error('Failed to update firm');
            }
            const data: Firm = await response.json();
            return data;
        } catch (error) {
            console.error('Error updating firm:', error);
            return null;
        }
    }

    async deleteFirm(id: number): Promise<boolean> {
        try {
            const response = await fetch(this.baseURL + id, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error('Failed to delete firm');
            }
            return true;
        } catch (error) {
            console.error('Error deleting firm:', error);
            return false;
        }
    }
}
