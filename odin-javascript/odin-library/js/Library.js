import { Book } from "./Book.js";
import { db } from "./db/DBManager.js";

// Library Module. Since we only need a single library throughout our application!
export const Library = (() => {
    // In-memory db
    let library = [];
    let id = library.length;

    const populateDB = () => {
        const books = db.retrieve();

        if (!books.length) return;

        books.forEach(bookData => {
            const book = new Book(bookData, Library);
            library.push(book);
        });
    }

    // TODO: Make sure the operations are only performed on data of type Book
    // In other words, make sure the passed data is an instance of Book class
    const generateID = () => id++;
    
    const add = (book) => {
        library.push(book);
        db.store(book);
    }
    
    const remove = (id) => {
        library = library.filter(book => (book.id !== id));
        db.update(library);
    }

    // Returns our in-memory db, bcz it contains objects of book type & is faster than localDB
    const getBooks = () => library;

    // Handles syncing our in-memory db with localDB
    const sync = () => db.update(library);

    return { generateID, add, remove, getBooks, sync, populateDB };
})();