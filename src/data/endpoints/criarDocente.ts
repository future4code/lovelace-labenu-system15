import {Request, Response} from "express"
import { connection } from "../connection"

export const criarDocente = async (req: Request, res: Response) : Promise <void> => {

    try {

        const {id, nome, email, data_nasc, turma_id} = req.body 
        
        await connection ("docente")
            .insert ({
                id,
                nome,
                email,
                data_nasc,
                turma_id
            })
        
        res.status(200).send("Docente criado")

    } catch (error) {
        res.status(500).send(error)
    }
}