import { notFoundError } from "@/errors";
import ticketsRepository from "@/repositories/tickets-repository";
import { Ticket, TicketType } from "@prisma/client";

async function getTicketsTypes (){
    const ticketTypes = await ticketsRepository.getTicketsTypes()

    return ticketTypes
}

async function findUserEnrollment(userId: number) {

    const userEnrollment = await ticketsRepository.findUserEnrollment(userId) 
    
    if (userEnrollment.length === 0) {
        throw notFoundError()
        
    }

    return userEnrollment

}

async function getTicketsFromEnrollmentId (enrollmentId: number){


    const userTickets = await ticketsRepository.getTicketsFromUser(enrollmentId)

    if (userTickets.length === 0) {
        throw notFoundError()
    } 
     
    return userTickets
}


async function postUserTicket (ticketTypeId: number, enrollmentId: number){
    await ticketsRepository.postUserTicket(ticketTypeId, enrollmentId)
}

export type postTicket = Pick<Ticket, "ticketTypeId">

const ticketsService = {
    getTicketsTypes,
    getTicketsFromEnrollmentId,
    postUserTicket,
    findUserEnrollment,
}

export default ticketsService