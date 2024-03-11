import ContactModel from "../Models/ContactModel";

export class ContactService {
    baseURL: string = "http://localhost:8080/api/contacts/";

    constructor() { }

    async getAllContacts(): Promise<ContactModel[]> {
        try {
            const response = await fetch(this.baseURL);
            if (!response.ok) {
                throw new Error('Failed to fetch contacts');
            }
            const data: ContactModel[] = await response.json();
            return data;
        } catch (error) {
            console.error('Error getting contacts:', error);
            return [];
        }
    }

    async addContact(newContact: ContactModel): Promise<ContactModel> {
        try {
            const response = await fetch(this.baseURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newContact)
            });
            if (!response.ok) {
                throw new Error('Failed to add contact');
            }
            const data: ContactModel = await response.json();
            return data;
        } catch (error) {
            console.error('Error adding contact:', error);
            throw error;
        }
    }

    async updateContact(updatedContact: ContactModel): Promise<ContactModel> {
        try {
            const response = await fetch(`${this.baseURL}/${updatedContact.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedContact)
            });
            if (!response.ok) {
                throw new Error('Failed to update contact');
            }
            const data: ContactModel = await response.json();
            return data;
        } catch (error) {
            console.error('Error updating contact:', error);
            throw error;
        }
    }

    async deleteContact(id: number): Promise<void> {
        try {
            const response = await fetch(`${this.baseURL}/${id}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error('Failed to delete contact');
            }
        } catch (error) {
            console.error('Error deleting contact:', error);
            throw error;
        }
    }
}
