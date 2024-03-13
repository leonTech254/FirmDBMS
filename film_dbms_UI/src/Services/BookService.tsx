import Book from "../Models/Book";

export default class BookService {
    baseURL: string = "http://localhost:8080/api/books/";

    constructor() {}

    async getAllBooks(): Promise<Book[]> {
        try {
            const response = await fetch(this.baseURL);
            if (!response.ok) {
                throw new Error('Failed to fetch books');
            }
            const data: Book[] = await response.json();
            return data;
        } catch (error) {
            console.error('Error getting books:', error);
            return [];
        }
    }

    async addBook(newBook: Book): Promise<Book | null> {
        try {
            const response = await fetch(this.baseURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newBook)
            });
            if (!response.ok) {
                throw new Error('Failed to add book');
            }
            const data: Book = await response.json();
            return data;
        } catch (error) {
            console.error('Error adding book:', error);
            return null;
        }
    }

    async updateBook(updatedBook: Book): Promise<Book | null> {
        try {
            const response = await fetch(this.baseURL + updatedBook.id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedBook)
            });
            if (!response.ok) {
                throw new Error('Failed to update book');
            }
            const data: Book = await response.json();
            return data;
        } catch (error) {
            console.error('Error updating book:', error);
            return null;
        }
    }

    async deleteBook(id: number): Promise<boolean> {
        try {
            const response = await fetch(this.baseURL + id, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error('Failed to delete book');
            }
            return true;
        } catch (error) {
            console.error('Error deleting book:', error);
            return false;
        }
    }
}
