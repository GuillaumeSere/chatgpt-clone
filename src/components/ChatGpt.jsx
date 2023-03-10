import { useState } from 'react';
import { arrayItems } from '../AIOptions';
import { Configuration, OpenAIApi } from "openai";
import OptionSelection from './OptionSelection';
import Translation from './Translation';

const ChatGpt = () => {

    const configuration = new Configuration({
        apiKey: import.meta.env.VITE_APP_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const [option, setOption] = useState({});
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    const selectOption = (option) => {
        setOption(option);
    };

    const doStuff = async () => {
        let object = { ...option, prompt: input }

        const response = await openai.createCompletion(object);

        setResult(response.data.choices[0].text)
    }

    return (
        <div className='App'>
            {Object.values(option).length === 0 ? (
                <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
            ) : (
                <Translation doStuff={doStuff} setInput={setInput} result={result} />
            )}
        </div>
    )
}

export default ChatGpt
