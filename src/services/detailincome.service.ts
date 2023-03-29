import DetailIncome from "../entities/DetailIncome";
import { IDetailIncome } from "../Interfaces/IDetailIncome";

class DetailIncomeService{

    public async addServiceDetailIncome(reqBody: IDetailIncome){
        const detailincome =  new DetailIncome();
        detailincome.idincome =  reqBody.idincome;
        detailincome.idproduc=reqBody.idproduc;
        detailincome.price_buy=reqBody.price_buy;
        detailincome.quantity=reqBody.quantity;
        detailincome.igv=reqBody.igv;
        return await detailincome.save();
    }

    public async getServiceDetailIncome(){
        let respuesta: IDetailIncome[] = ([] =[]);
        const income =  await DetailIncome.find();
        income.map((b) =>{
            let obj: IDetailIncome = {iddetincome: b.iddetincome, idincome: b.idincome, idproduc: b.idproduc, price_buy:b.price_buy,quantity:b.quantity,igv:b.igv };
            respuesta.push(obj);
        })
        return respuesta;
    }

    public async getServiceOneDetailIncome(iddetincome: number){
        const detailincome =  await DetailIncome.findOneBy({iddetincome: iddetincome});
        let respuesta: IDetailIncome ={
            iddetincome: detailincome?.iddetincome,
            idincome: detailincome?.idincome,
            idproduc: detailincome?.idproduc,
            price_buy: detailincome?.price_buy,
            quantity: detailincome?.quantity,
            igv: detailincome?.igv,
        }
        return respuesta;
    }

    public async updateServiceDetailIncome(idincome:number, reqBody:IDetailIncome){
        const detailincome = await DetailIncome.findOneBy({idincome:idincome});

        if(!detailincome) return Promise.reject("No existe Detalle Ingreso");

        detailincome.idincome=reqBody.idincome;
        detailincome.idproduc=reqBody.idproduc;
        detailincome.price_buy = reqBody.price_buy;
        detailincome.quantity = reqBody.quantity;
        detailincome.igv = reqBody.igv;
        detailincome.save();
        return detailincome;
    }

    /*public async deleteServiceDetailIncome(idincome: number){
        const detailincome = await DetailIncome.findOneBy({idincome: idincome});
        if(!detailincome){
            return Promise.reject("No existe Ingreso")
        }else{
            detailincome.state = 0;
            detailincome.save();
            return detailincome;
        }
    }*/

}

export default DetailIncomeService;