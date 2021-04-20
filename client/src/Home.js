import React from 'react';
import axios from 'axios';
import './Home.css';

const Home = () => {
    const uploadFile = e => {
        e.preventDefault();
        console.log(e.target[0].files);
    }
    return (
        <div className='home-div' enctype="multipart/form-data">
            <h1>PellmUploader</h1>
            <p>Image uploader service for my (Guilherme Almeida) backend development portfolio.</p>    
            <form onSubmit={uploadFile}>
                <input type="file" id="myFile" name="filename" hidden/>
                <label htmlFor='myFile'>Choose file</label>
                <span id="file-chosen">No file chosen</span>
                <br></br>
                <input type="submit" id='submit'/>
            </form>
        </div>
        
    );
}
    

export default Home