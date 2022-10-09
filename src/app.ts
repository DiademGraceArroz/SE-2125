import express, { Application, Request, Response } from 'express';

const app: Application = express();
const port: number = 3001;

app.get('/pre', (req: Request, res: Response) => {
    res.send('Hello pre')
})

app.listen(port, function() {
    console.log(`App is listening on port ${port} !`)
})