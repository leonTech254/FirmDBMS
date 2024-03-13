import Swal from "sweetalert2";
import Firm from "../Models/Film";

export default class FirmService {
    baseURL: string = "http://localhost:8080/film_dbms/api/films";
    

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
             Swal.fire('Error', 'Error getting firms', 'error');
            console.error('Error getting firm:', error);
            return [];
        }
    }

    async addFirm(newFirm: Firm): Promise<null> {
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
            // const data: Firm = await response.json();
            Swal.fire('Success', 'Firm added successfully', 'success');
            return null;
        } catch (error) {
             Swal.fire('Error', 'Error adding firm', 'error');
            console.error('Error adding firm:', error);
            return null;
        }
    }

    async updateFirm(updatedFirm: Firm): Promise<Firm | null> {
        console.log(updatedFirm);
        try {
            const response = await fetch(this.baseURL , {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedFirm)
            });
            if (!response.ok) {
                 Swal.fire('Error', 'Error updating firm', 'error');
                throw new Error('Failed to update firm');
            }
            // const data: Firm = await response.json();
            Swal.fire('Success', 'Firm updated successfully', 'success');
            return null;
        } catch (error) {
              Swal.fire('Error', 'Error updating firm', 'error');
            console.error('Error updating firm:', error);
            return null;
        }
    }

    async deleteFirm(id: number): Promise<boolean> {
        try {
            const response = await fetch(`${this.baseURL}?id=${id}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error('Failed to delete firm');
            }
            Swal.fire('Success', 'Firm deleted successfully', 'success');
           
            return true;
        } catch (error) {
              Swal.fire('Error', 'Error deleting data', 'error');
            console.error('Error deleting firm:', error);
            return false;
        }
    }
    
}
