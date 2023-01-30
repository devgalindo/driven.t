import { AuthenticatedRequest } from "@/middlewares";
import paymentsService from "@/services/payments-service";
import { Request, Response } from "express";
import httpStatus from "http-status";


export async function getUserPayments (req: AuthenticatedRequest, res: Response) {
    const ticketId = req.query.ticketId as string

    if (!ticketId) res.sendStatus(httpStatus.BAD_REQUEST)

    try {

        await paymentsService.findTicketId(parseInt(ticketId))

        const payment = await paymentsService.getUserPayments(parseInt(ticketId))

        return res.status(httpStatus.OK).send(payment[0])
    } catch (error) {
        if (error.name === "NotFoundError") {
            return res.sendStatus(httpStatus.NOT_FOUND);
          }
          
        return res.sendStatus(httpStatus.BAD_REQUEST)
    }
}

export async function postUserPayment (req: AuthenticatedRequest, res: Response) {
    try {
        
    } catch (error) {
        
    }
}

