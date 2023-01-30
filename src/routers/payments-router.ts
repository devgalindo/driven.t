import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { getUserPayments, postUserPayment } from "@/controllers/payments-controller";

const paymentsRouter = Router()

paymentsRouter
    .all("/*", authenticateToken)
    .get("/", getUserPayments)
    .post("/process", postUserPayment)

export { paymentsRouter }