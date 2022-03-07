
import sqlite3 from 'sqlite3';
import path from 'path';

const fileDatabaseDir: string = path.join(__dirname, '..', 'database', 'database.sqlite');

class Connection {
    constructor() {}

    public openConnection(): sqlite3.Database {
        let db = new sqlite3.Database(fileDatabaseDir);
        return db;
    }
}


export const connection = new Connection();