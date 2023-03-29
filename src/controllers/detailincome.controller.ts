import { Request, Response } from "express";
import DetailIncome from "../entities/DetailIncome";
import { IDetailIncome } from "../Interfaces/IDetailIncome";
import DetailIncomeService from "../services/detailincome.service";

class DetailIncomeController{

    public async addDetailIncome(req: Request, res: Response){
        try {
            const reqBody: IDetailIncome =  req.body;
            const service = new DetailIncomeService();
            const result =  await service.addServiceDetailIncome(reqBody);
            return res.json(result);
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message)
                return res.status(500).json({message: error.message});
            }
        }
    }

    public async getDetailIncome(req: Request, res: Response){
        try {
            const service = new DetailIncomeService();
            const result =  await service.getServiceDetailIncome();
            return res.json(result);
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message);
                return res.status(500).json({message: error.message})
            }
        }
    }

    public async getOneDetailIncome(req: Request, res: Response){
        try {
            let iddetincome: number = parseInt(req.params.iddetincome)
            const service =  new DetailIncomeService();
            const result =  await service.getServiceOneDetailIncome(iddetincome);
            return res.json(result);

        } catch (error) {
            if(error instanceof Error){
                console.log(error.message)
                return res.status(500).json({message: error.message});
            }
        }
    }

    public async updateDetailIncome(req: Request, res: Response){
        try {
            const iddetincome: number =  parseInt(req.params.iddetincome);
            const resBody:IDetailIncome = req.body;
            const service = new DetailIncomeService();
            const result = await service.updateServiceDetailIncome(iddetincome,resBody);
            return res.json(result)
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message);
                return res.status(500).json({message: error.message})
            }
        }
    }

    /*public async deleteDetailIncome(req: Request, res: Response){
        try {
            const idicome: number =  parseInt(req.params.idicome);
            const service =  new DetailIncomeService();
            const result =  await service.deleteServiceDetailIncome(idicome);
            return res.json(result);
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message);
                return res.status(500).json({nessage: error.message})
            }
        }
    }*/

}

export default DetailIncomeController;