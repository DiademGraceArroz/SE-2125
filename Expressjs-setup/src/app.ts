/*
 * I have problem in creating a command to execute the code
 */

import express, { Application, Request, Response } from 'express';

const app: Application = express();
const port: number = 0888;

app.get('/pre', (req: Request, res: Response) => {
    res.send('Hello pre')
})

app.listen(port, function() {
    console.log(`Ap is listening on port ${port} !`)
})