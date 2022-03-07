
import { connection } from './connection';

class QuerySQL {

    constructor() {}

    public async query(query: string): Promise<any> {

        let db = connection.openConnection();

        return await new Promise((resolve, reject) => {
            db.all(query, (err: any, rows: unknown) => {
                if (err)
                    reject(err);
                else
                    resolve(rows);
            })
        })
            .finally(() => {
                db.close();
            })
    }
}

export const querySQL = new QuerySQL();