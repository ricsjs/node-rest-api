import fastify from "fastify"
import crypto from 'node:crypto'
import { knex } from "./database"

const app = fastify()

app.get('/', async () => {
    const transaction = await knex('transactions').select('*')

    return transaction
})

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP server running')
}).catch((error) => {
    console.log(error)
})