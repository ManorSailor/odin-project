// Book Class. Depends on Library module
// Note: Use dependency injection design pattern here. Modularized code & Library dependency can be easily substituted for something else!
export class Book {
    // Make library dependency private to avoid external changes. Using a public
    // library ref makes it possible to overwrite the lib property from outside. That's bad!
    #library;

    #toTitleCase(str) {
        if (!str) return '';

        return str.trim().split(' ').reduce((arr, word) => {
            word = word[0].toUpperCase() + word.slice(1);
            arr.push(word);
            return arr;
        }, []).join(' ');
    }

    constructor({title, author, pages, hasRead}, Library) {
        this.#library = Library;
        this.id       = Library.generateID();
        this.title    = this.#toTitleCase(title);
        this.author   = this.#toTitleCase(author);
        this.pages    = pages;
        this.hasRead  = hasRead;
    }

    changeStatus() {
        this.hasRead = !this.hasRead;
        this.#library.syncDB();
    }

    removeBook() {
        this.#library.remove(this.id);
    }
}