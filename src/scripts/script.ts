
import { querySQL } from '../database/query';
import { readSql } from '../utils/read-sql';

class Email {
    async saveEmail(): Promise<any> {
        const email = document.getElementById("email") as HTMLInputElement;
        const buttonEmail = document.getElementById("save_email") as HTMLButtonElement;

        buttonEmail.addEventListener("click", async () => {
            console.log(email.value)

            const insertEmailQuery = await readSql('insert-email');
            const insertEmail = insertEmailQuery.replace('@email', `${email.value}`);

            console.log(insertEmail);

            if (!email.value) return alert('Não há registro de email!');

            return await querySQL.query(insertEmail);
        });
    }

    //Esse método aqui é só pra testar
    async getEmail(): Promise<any> {
        const emails = await querySQL.query("SELECT * FROM email");

        console.log('foi')

        let divEmails = document.getElementById("emails") as HTMLDivElement;

        emails.forEach((email: string) => {
            divEmails.innerHTML += JSON.stringify(email);
        });
    }
}

export const email = new Email();

