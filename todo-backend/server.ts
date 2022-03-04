import express,{Express} from 'express';
import routes from './routes/todoRoutes';
import cors from 'cors';
import {run} from './db/connectDB';
const PORT = 8899;
run().catch(err => console.log(err));

const app:Express = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());


app.use('/',routes);
app.listen(PORT, ()=>{
    console.log(`work on ${PORT}`)
})