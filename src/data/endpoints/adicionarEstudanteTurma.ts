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

        let estudantes = await connection("estudante")
        .select("*")
        
        let turma  = await connection("turma")
        .select("*")

        let encontraEstudante=estudantes.find((estudante)=>{
           return estudante.id===req.body.id
        })
  
        if(!encontraEstudante){
            errorCode=404
           throw new Error("esse aluno  não esta cadastrado no sistema")
        }

        let encontraTurma=turma.find((turma)=>{
            return turma.id===req.body.turma_id
         })
   
         if(!encontraTurma){
             errorCode=404
            throw new Error("essa turma  não esta cadastrado no sistema")
         }




            adicionarEstudanteNaTurma (
                req.body.id,
                req.body.turma_id
            )
        
        res.status(200).send('Estudante adicionado a turma')
       
    } catch (error: any) {
        res.status(errorCode).send ({message: error.message})
    }
 }