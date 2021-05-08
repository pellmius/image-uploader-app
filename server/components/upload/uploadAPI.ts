import * as multer from 'multer';
import {Router, Request, Response} from 'express';
import * as express from 'express';
import * as rateLimit from 'express-rate-limit';
import * as fs from 'fs';
import * as path from 'path';
import {promises} from 'fs';


const limiter = rateLimit({
    windowMs: 60 * 1000, 
    max: 1
});

const router: Router = express.Router();

let storage = multer.diskStorage({
    destination: (req,file,cb) => {
        const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
        let newPath = `./uploads/${ip}`
        file.path = newPath
        if (!fs.existsSync(newPath)) {
            fs.mkdirSync(newPath);
        }
        cb(null,newPath)
    },
    filename: (req,file,cb) => {
        cb(null, Date.now() + '.jpg')
    }
});

let upload: multer.Multer = multer({storage:storage});

router.post('/upload', limiter, upload.single('photo'), (req,res ) => {
    res.json({success: true, filename:req.file.filename});
});

router.get('/image/:filename', async (req, res) => {
    try {
        const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
        let file : string = req.params.filename
        if( fs.existsSync(path.join('./uploads', ip.toString(), file)) ) {
            res.sendFile(file, { root: `./uploads/${ip}` });
        } else {
            res.json({msg:"File does not exist.", sucess: false})
        }
    } catch {
        res.json({msg:"An unknown error has aborted the operation."})
    } 
});

export {router};
