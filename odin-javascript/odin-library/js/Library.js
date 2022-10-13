// Library Module. Since we only need a single library throughout our application!
export const Library = (() => {
    let library = [];
    let id = 0;
    // TODO: Make sure the operations are only performed on data of type Book
    // In other words, make sure the passed data is an instance of Book class
    const generateID = () => id++;
    const add    = (book) => library.push(book);
    const remove = (id)   => library = library.filter(book => (book.id !== id));

    return { generateID, add, remove };
})();