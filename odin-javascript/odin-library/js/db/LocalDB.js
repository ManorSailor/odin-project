// Low level localdb API
class LocalDB {
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

// LocalDB Manager which wraps the low level api
export class LocalDBManager {
    constructor(name) {
        this.db = new LocalDB(name);
    }

    retrieve() {
        return this.db.getObject();
    }

    save(obj) {
        this.db.setObject(obj);
    }

    clear() {
        this.db.clearDB();
    }
}