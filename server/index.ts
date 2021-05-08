import {Express, Request, Response} from 'express';
import * as cors from 'cors';
import * as dotenv from 'dotenv';
import * as express from 'express';
import  {uploadIndexObj as upload} from './components/upload';

dotenv.config();
const app : Express = express()
const PORT: any = process.env.PORT || 8000;

app.use(cors());

app.use('/api/uploads',upload.api);

app.get("/", (req: Request, res: Response) => {
    res.json({msg:"Success!"})
});

app.listen(PORT, async () => {
    try {
    console.log(`Starting on port ${PORT}`)
    } catch {
        console.error("STDERR")
    }
})