export class LocalDB {
    constructor(name) {
        this.name = name;
        this.db = localStorage;
    }

    getObject() {
        const obj = this.db.getItem(this.name) || '[]';
        return JSON.parse(obj);
    }

    setObject(obj) {
        this.db.setItem(this.name, JSON.stringify(obj));
    }

    clearDB() {
        this.db.removeItem(this.name);
    }
}

// TODO: Export a LocalDB wrapper/manager which exposes generic named APIs
// instead of relying on low-level APIs. Why? To have an abstract dbmanager class
// which can work with any type of db & allows easy refactoring