import './db/mongoose.js';
import express from 'express';
import {router as userRouter} from './routers/user.js'
import {router as taskRouter} from './routers/task.js'

const app = express();
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
})