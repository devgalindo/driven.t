import { prisma } from "@/config"


async function getUserPayments (ticketId: number) {
    return prisma.payment.findMany({
        where:{ticketId}
    })

}

async function findTicketId (ticketId: number) {
    return prisma.ticket.findMany({
        where:{id: ticketId}
    })
    
}

async function postUserPayment () {
    
}

const paymentsRepository = {
    getUserPayments,
    findTicketId,
    postUserPayment
}

export default paymentsRepository