import { Request, Response } from "express"
import { connection } from "../connection"

export const criarEstudante = async(
   req: Request,
   res: Response
   ): Promise<void> =>{
   try {

      let {nome,email,data_nasc,turma_id}=req.body

      await connection.raw(`
      INSERT INTO estudante (nome, email, data_nasc,turma_id)
      VALUES (
       "${nome}",
       "${email}",
       "${data_nasc}",
       "${turma_id}"
      );    
    `)
         res.status(200).send(" estudante adicionado")
         
   } catch (error:any) {
      console.log(error.message)
   }

} 

