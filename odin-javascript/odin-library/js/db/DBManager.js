import { LocalDB } from "./LocalDB.js";

class DBManager {
    constructor(name) {
        // TODO: Inject db dependency instead of hardcoding a db
        this.db = new LocalDB(name);
    }

    retrieve() {
        return this.db.getObject();
    }

    store(obj) {
        const data = this.retrieve();
        data.push(obj);
        this.db.setObject(data);
    }

    update(db) {
        this.db.setObject(db);
    }
}

export const db = new DBManager('Library');