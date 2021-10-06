import { Request, Response } from "express"
import { connection } from "../connection"

const adicionarEstudanteNaTurma = async ( 
    id: number, turma_id: number
) : Promise <any> => {
    await connection ('estudante')
    .update ({
        turma_id: turma_id
    })
    .where('id', id)
}

export const adicionarEstudanteTurma = async (req: Request, res: Response ) => {
    let errorCode = 400 
    
    try {
        await
            req.params.id 
            adicionarEstudanteNaTurma (
                req.body.id,
                req.body.turma_id
            )
        
        res.status(200).send('Estudante adicionado a turma')
       
    } catch (error: any) {
        res.status(errorCode).send ({message: error.message})
    }
 }