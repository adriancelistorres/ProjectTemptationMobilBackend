import Styles from "../entities/Styles";
import { IStyles } from "../Interfaces/IStyles";

class StyleService{
    public async addStyle(reqBody: IStyles){
        const styles = new Styles();
        styles.idstyles = reqBody.idstyles;
        styles.name_sty = reqBody.name_sty;
        styles.state = reqBody.state;
        return await styles.save();
    }

    public async getStyle(){
        let respuesta: IStyles [] = [];
        const styles = await Styles.find();
        styles.map((c)=>{
            let obj: IStyles = {idstyles:c.idstyles, name_sty:c.name_sty,state:c.state};
            respuesta.push(obj);
        })
        return respuesta;
    }

    public async getOneStyle(idstyles:number){
        //Obtenemos el 'id' del style que vamos a obtener 
        const rol = await Styles.findOneBy({idstyles: idstyles});
        //LA VARIABLE 'respuesta' será un objeto de tipo 'IStyles'
        let respuesta: IStyles = {
            //Atributos del objeto 'respuesta'
            idstyles: rol?.idstyles,
            name_sty:rol?.name_sty,
            state:rol?.state
        };
        //retorna la respuesta
        return respuesta;
    }

    public async updateStyle(idstyles:number, reqBody:IStyles){

        const styles = await Styles.findOneBy({
            idstyles: idstyles
        });
        if(!styles)
        return Promise.reject("NO HAY ESE ESTILO")
        styles.name_sty = reqBody.name_sty,
        styles.state = reqBody.state

        styles.save();
        return styles;
    }

    public async deleteStyle(idstyles:number){
        const styles = await Styles.findOneBy({
            idstyles:idstyles
        });

        if(!styles){
            return Promise.reject("NO HAY ESTILOS");
        }else{

            styles.state = 0;
            styles.save();
            return styles;
        }


    }
















}


export default StyleService;


