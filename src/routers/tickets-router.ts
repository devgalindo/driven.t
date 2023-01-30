import { Router } from 'express';

import { authenticateToken, validateBody } from '@/middlewares';
import { getTicketsFromUser, getTicketsTypes, postUserTicket } from '@/controllers/tickets-controller';
import { createTicketSchema } from '@/schemas/tickets-schema';

const ticketsRouter = Router();

ticketsRouter
  .all('/*', authenticateToken)
  .get('/types', getTicketsTypes)
  .get('/', getTicketsFromUser)
  .post('/',validateBody(createTicketSchema), postUserTicket);

export { ticketsRouter };
