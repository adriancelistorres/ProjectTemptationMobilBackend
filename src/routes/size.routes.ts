import { Router } from "express";
import SizeController from "../controllers/size.controller"
import ValidateToken from "../controllers/validate-token.controller";

const sizecontroller = new SizeController;
const validatetoken =  new ValidateToken;



const router = Router();

router.post("/size",sizecontroller.addSize);
router.get("/sizes",sizecontroller.getSize);
router.get("/size/:idsize",sizecontroller.getOneSize);
router.put("/size/:idsize",sizecontroller.UpdateSize);
router.delete("/size/:idsize",sizecontroller.deleteSize);

export default router;