import * as multer from 'multer';
import {Router, Request, Response} from 'express';
import * as express from 'express';
import * as rateLimit from 'express-rate-limit';
import * as fs from 'fs';
import * as path from 'path';



const limiter = rateLimit({
    windowMs: 60 * 1000, 
    max: 1
});

const router: Router = express.Router();

let storage = multer.diskStorage({
    destination: (req,file,cb) => {
        let uploadFolder = './uploads';
        let newPath = `./uploads/${req.body.library}`;
        file.path = newPath;
        if(!fs.existsSync(uploadFolder)) {
            fs.mkdirSync(uploadFolder);
        }
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

router.post('/upload', limiter, upload.single('photo'), (req,res) => {
    if (req.file) {
        res.json({success: true, filename:req.file.filename});
    } else {
        res.json({success: false})
    }
});

router.get('/image/:library/:filename', async (req, res) => {
    try {
        const library = req.params.library;
        let file : string = req.params.filename;
        if( fs.existsSync(path.join('./uploads', library.toString(), file)) ) {
            res.sendFile(file, { root: `./uploads/${library}` });
        } else {
            res.json({msg:"File does not exist.", sucess: false})
        }
    } catch {
        res.json({msg:"An unknown error has aborted the operation."})
    } 
});

export {router};
