import { Request, Response } from "express"
import { connection } from "../connection"

export const criarTurma = async(
   req: Request,
   res: Response
   ): Promise<void> =>{
   try {

      let {nome,data_inicial,data_final,modulo}=req.body

      await connection.raw(`
      INSERT INTO turma (nome, data_inicial, data_final, modulo)
      VALUES (
       "${nome}",
       "${data_inicial}",
       "${data_final}",
       "${modulo}"
      );    
    `)
    console.log('data',data_inicial)
         res.status(200).send("tabela criada")
         
   } catch (error:any) {
      console.log(error.message)
   }

} 

