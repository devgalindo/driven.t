import { AuthenticatedRequest } from "@/middlewares";
import ticketsService, { postTicket } from "@/services/tickets-service";
import { Response } from "express";
import httpStatus from "http-status";


export async function getTicketsTypes (req:AuthenticatedRequest, res:Response) {
    try {

        const ticketTypes = await ticketsService.getTicketsTypes()

        return res.status(httpStatus.OK).send(ticketTypes)
    } catch (error) {

        return res.sendStatus(httpStatus.BAD_REQUEST)
    }
}

export async function getTicketsFromUser (req:AuthenticatedRequest, res:Response) {
    const { userId } = req
    try {
        const enrollment = await ticketsService.findUserEnrollment(userId)
        console.log(enrollment);
        
        
        const tickets = await ticketsService.getTicketsFromEnrollmentId(enrollment[0].id)

        return res.status(httpStatus.OK).send(tickets[0])
    } catch (error) {
        if (error.name === "NotFoundError") {
            return res.sendStatus(httpStatus.NOT_FOUND);
          }
        return res.sendStatus(httpStatus.BAD_REQUEST)
    }
}

export async function postUserTicket (req:AuthenticatedRequest, res:Response) {
    const { userId } = req
    const ticket = req.body as postTicket
    const {ticketTypeId} = ticket
    try {

        const enrollment =  await ticketsService.findUserEnrollment(userId)

        const enrollmentId = enrollment[0].id

        const userTicket = await ticketsService.postUserTicket(ticketTypeId, enrollmentId)
        
        return res.status(httpStatus.CREATED).send(userTicket)
    } catch (error) {
        if (error.name === "NotFoundError") {
            return res.sendStatus(httpStatus.NOT_FOUND);
          }
          
        return res.sendStatus(httpStatus.BAD_REQUEST)
    }
}