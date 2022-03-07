
import { email } from './src/scripts/script';
import { contextBridge } from 'electron';

class ExecuteAllMethods {
    
    public async execute(): Promise<void> {
        await email.getEmail();
        await email.saveEmail();
    }
}

const executeAllMethods = new ExecuteAllMethods();

contextBridge.exposeInMainWorld("api", {
    executeAllMethods: executeAllMethods.execute,
});