import React from 'react'
import { Configuration, OpenAIApi } from "openai";
import { useState } from 'react';

const GenerateImage = () => {

    const [prompt, setPrompt] = useState('');
    const [result, setResult] = useState('');

    const configuration = new Configuration({
        apiKey: import.meta.env.VITE_APP_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    const generateImage = async () => {
        const res = await openai.createImage({
            prompt: prompt,
            n: 1,
            size: "1024x1024",
        });
        setResult(res.data.data[0].url)
    }

    return (
        <div className="app-main">
            <h2>Generate an Image using Open AI API</h2>
            <input
                type="text"
                className='app-input'
                placeholder='Type something go generate image'
                onChange={(e) => setPrompt(e.target.value)}
            />
            <button className='btn' onClick={generateImage}>Generate image</button>
            {result.length > 0 ? <img src={result} className="result-image" alt="result" /> : <></>}
        </div>
    )
}

export default GenerateImage
