import express from "express";
import dotenv from 'dotenv'
import path from 'path';
import { exec } from 'child_process';
import userRouter from "./UserManagement/Infrastructure/Route/UserRoute";
dotenv.config()
const server = express();
const server_port =process.env.PORT;
server.use(express.json());
server.use('/user', userRouter);

server.listen(process.env.PORT, () => {
    console.log(`Server listening on http://localhost:${server_port}/`);
});

const migrateScript = path.join(__dirname, '..', 'src', 'UserManagement', 'Infrastructure', 'Migrations', 'Migration.ts');

const migrationProcess = exec(`ts-node ${migrateScript}`);

migrationProcess.on('exit', (code: number) => {
    if (code === 0) {
        console.log('Migración completada con éxito');
    } else {
        console.error('Error durante la migración');
    }
});