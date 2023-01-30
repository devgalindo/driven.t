import { prisma } from "@/config";
import { postTicket } from "@/services/tickets-service";
import { Ticket } from "@prisma/client";


async function getTicketsTypes () {
    return prisma.ticketType.findMany()
}

async function findUserEnrollment (userId: number) {    
    return prisma.enrollment.findMany({
        where: {userId: userId}
    })
}


async function getTicketsFromUser (enrollmentId: number){
    return prisma.ticket.findMany({
        where: {enrollmentId: enrollmentId},
        include: {
            TicketType:true
        }
    })
}

async function getTicketUser (userId: number) {
    return prisma.user.findMany({
        where: {id: userId}
    })
}

async function postUserTicket (ticketTypeId: number, enrollmentId: number){
  //Vários erros de tipo
}

const ticketsRepository = {
    getTicketsTypes,
    getTicketsFromUser,
    findUserEnrollment,
    postUserTicket,
    getTicketUser
}

export default ticketsRepository