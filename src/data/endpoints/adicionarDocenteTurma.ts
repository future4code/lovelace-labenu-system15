import { Request, Response } from "express"
import { connection } from "../connection"

const adicionarDocenteNaTurma = async ( 
    id: number, turma_id: number
) : Promise <any> => {
    await connection ('docente')
    .update ({
        turma_id: turma_id
    })
    .where('id', id)
}

export const adicionarDocenteTurma = async (req: Request, res: Response ) => {
    let errorCode = 400 
    try {

        let docentes = await connection("docente")
        .select("*")
        
        let turma  = await connection("turma")
        .select("*")

        let encontraDocente=docentes.find((docente)=>{
           return docente.id===req.body.id
        })
  
        if(!encontraDocente){
            errorCode=404
           throw new Error("esse docente não esta cadastrado no sistema")
        }
        let encontraTurma=turma.find((turma)=>{
            return turma.id===req.body.turma_id
         })
   
         if(!encontraTurma){
             errorCode=404
            throw new Error("essa turma  não esta cadastrado no sistema")
         }

            adicionarDocenteNaTurma (
                req.body.id,
                req.body.turma_id
            )
        
        res.status(200).send('docente adicionado a turma')
       
    } catch (error: any) {
        res.status(errorCode).send ({message: error.message})
    }
 }