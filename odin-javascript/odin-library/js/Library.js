import { Book } from "./Book.js";
import { LocalDBManager } from "./db/LocalDB.js"

// Initialize databases
const localDb  = new LocalDBManager('Library');
let library = [];

// Retrieve any books stored locally
const bookData = localDb.retrieve();

// Library Module. Since we only need a single library throughout our application!
export const Library = (() => {
    let id = library.length;

    const generateID = () => id++;
    
    const store = (book) => {
        if (!book instanceof Book) {
            throw('Passed data is not an instance of Book');
        }

        library.push(book);
        syncDB();
    }
    
    const remove = (id) => {
        library = library.filter(book => (book.id !== id));
        syncDB();
    }

    // Returns our in-memory db, bcz it contains objects of book type & is faster than localDB
    const getBooks = () => library;

    // Method to sync changes to the localDb
    const syncDB = () => localDb.save(library);

    return { generateID, store, remove, getBooks, syncDB };
})();

// This needs to be down here because Book class depends on Library
// We can't pass library until it has initialized
if (bookData.length) {
    bookData.forEach(data => {
        const book = new Book(data, Library);
        library.push(book);
    });
}