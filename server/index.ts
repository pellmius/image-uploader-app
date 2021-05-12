import {Express, Request, Response} from 'express';
import * as cors from 'cors';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as path from 'path';
import {uploadIndexObj as upload} from './components/upload';

dotenv.config();
const app : Express = express()
const PORT: any = process.env.PORT || 8000;
app.use('/api/uploads',upload.api);

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));



app.get("/*", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

app.listen(PORT, async () => {
    try {
    console.log(`Starting on port ${PORT}`)
    } catch {
        console.error("STDERR")
    }
})