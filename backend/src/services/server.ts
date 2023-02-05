import express from 'express';
import usersRouter from '../users/routes'
import cors from 'cors'
import helmet from 'helmet';

const app = express();

app.use(cors())
app.use(helmet());
app.use(express.json())
app.use('/users', usersRouter);


export const InitServer = (PORT: number) => {

    app.listen(PORT, () => {
        console.log("Server up! Listenging at PORT", PORT)
    });
}