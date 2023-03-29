import { Router } from "express";
import IncomeController from "../controllers/income.controller";

const income = new IncomeController;

const router =  Router();

router.post("/income",income.addIncome);
router.get("/incomes",income.getIncome);
router.get("/income/:idincome",income.getOneIncome);
router.put("/income/:idincome",income.UpdateIncome);
router.delete("/income/:idincome",income.deleteIncome);

export default router;