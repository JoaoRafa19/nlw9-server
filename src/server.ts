import express, { Request, Response } from 'express'
const app = express()


app.get('/', (req: Request , res: Response) => {
    return res.json({message:"ola mundo"})
} )

app.get('/echo/:message', (req: Request, res: Response) => {
    const message = req.params.message
    return res.json({echo: message})
})

app.listen(8000)