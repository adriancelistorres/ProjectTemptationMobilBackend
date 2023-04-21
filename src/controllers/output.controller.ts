import{Request, Response} from "express";
import { IOutput } from "../Interfaces/IOutput";
import OutputService from "../services/output.service";
import Output from "../entities/Output";

class OutputController{

    public async addOutput(req: Request, res:Response){
        try {
            const reqBody: IOutput =req.body;
            const service = new OutputService();
            const result = await service.addServiceOutput(reqBody);
            return res.json(result);
            
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message)
                return res.status(500).json({message: error.message});
            }
            
        }
        
    }

    public async getOutput(req: Request, res:Response){

        try {

            const service = new OutputService();
            const result = await service.getServiceOutput();
            return res.json(result);

        } catch (error) {

            if (error instanceof Error) {

                console.log(error.message)
                return res.status(500).json({ message: error.message });
            }
        }
    }

    public async getOneOutput(req:Request, res:Response){
        try{
            const idout: number = parseInt(req.params.idout);
            const service = new OutputService();
            const result = await service.getServiceOneOutput(idout);
            return res.json(result);
        }catch(error){
            if (error instanceof Error) {

                console.log(error.message)
                return res.status(500).json({ message: error.message });
            }
        }

    }

    public async updateOutput(req: Request, res:Response){
        try {
            const idout: number = parseInt(req.params.idout);
            const reqBody: IOutput = req.body;
            const service = new OutputService();
            const result = await service.updateServiceOutput(idout,reqBody);
            return res.json(result);
        } catch (error) {
            if (error instanceof Error) {

                console.log(error.message)
                return res.status(500).json({ message: error.message });
            }
        }
    }
    public async deleteOutput(req:Request,res:Response){
        try{
            const id:number=parseInt(req.params.idout)
            const service= new OutputService()
            const result = await service.deleteServiceOutput(id)
            return res.status(200).json(result)

        }catch(error){
            if (error instanceof Error) {
                console.log(error.message);
                return res.status(500).json({message: error.message})
            }
        }
    }

}
export default OutputController;