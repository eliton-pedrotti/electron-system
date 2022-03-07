
import fs from 'fs/promises';
import path from 'path';

export const readSql = (caminho: string) => {
    const fileDatabaseDir = path.join(__dirname, '..', 'sql', `${caminho}.sql`);
    return fs.readFile(fileDatabaseDir, 'utf8');
}
