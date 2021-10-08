import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net"
import { criarTurma } from './data/endpoints/criarTurma';
import { adicionarEstudanteTurma } from './data/endpoints/adicionarEstudanteTurma';
import { criarEstudante } from './data/endpoints/criarEstudante';
import { adicionarDocenteTurma } from './data/endpoints/adicionarDocenteTurma';
import { criarDocente } from './data/endpoints/criarDocente';

const app: Express = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
})

app.post("/turma",criarTurma)
app.put("/adicionarEstudanteTurma", adicionarEstudanteTurma)
app.put("/adicionarDocenteTurma", adicionarDocenteTurma)
app.post("/estudante",criarEstudante)
app.post ("/docente", criarDocente)