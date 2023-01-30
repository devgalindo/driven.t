import { notFoundError } from "@/errors"
import paymentsRepository from "@/repositories/payments-repository"


async function getUserPayments (ticketId: number) {

    const payment = await paymentsRepository.getUserPayments(ticketId)

    return payment
}

async function findTicketId (ticketId: number) {

    const thereIsTicket = await paymentsRepository.findTicketId(ticketId)

    if(!thereIsTicket) throw notFoundError()

    return thereIsTicket
}


async function postUserPayment () {
    
}

const paymentsService = {
    getUserPayments,
    findTicketId,
    postUserPayment
}

export default paymentsService