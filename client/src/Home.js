import React, {useState} from 'react';
import axios from 'axios';
import './Home.css';

const Home = () => {
    const [fileName,setFileName] = useState('No file chosen')
    const [message,setMessage] = useState('');
    const [link,setLink] = useState('');
    const uploadFile = e => {
        e.preventDefault();
        const data = new FormData();
        const file = e.target[0].files[0];
        data.append("name",fileName);
        data.append("photo",file);

        axios.post('http://localhost:80/api/uploads/upload', data).then((res) => {
            if (res.data.success) {
                console.log(res.data.filename)
                setLink(`http://localhost/api/uploads/image/${res.data.filename}`)
                setMessage(`File uploaded at`)
            }
        }).catch((err) => {
            setMessage(`${err.request.status} ${err.request.statusText}`);
        })
    }
    const displayFileName = e => {
        let fileName = e.target.files[0].name || "No file chosen"
        setFileName(fileName)  
    }
    return (
        <div className='home-div' encType="multipart/form-data">
            <h1>PellmUploader</h1>
            <p>Image uploader service for my (Guilherme Almeida) backend development portfolio.</p>    
            <form onSubmit={uploadFile} onChange={displayFileName}>
                <input type="file" accept='image/*' id="myFile" name="filename" hidden/>
                <label htmlFor='myFile'>Choose file</label>
                <br/>
                <br/>
                <br/>

                <span id="file-chosen">{fileName}</span>
                <br></br>
                <input type="submit" id='submit'/>
            </form>
            <h2>{message} <a href={link}>{link}</a></h2>
        </div>
        
    );
}
    

export default Home