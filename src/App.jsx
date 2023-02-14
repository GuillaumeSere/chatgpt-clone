import { Route, Routes } from 'react-router-dom';
import './App.css';
import ChatGpt from './components/ChatGpt';
import GenerateImage from './components/GenerateImage';
import Header from './components/Header';


function App() {


    return (
        <>
        <Header />
        <div className='App'>
            <Routes>
                <Route path="/" element={ <ChatGpt />} />
                <Route path="/images" element={ <GenerateImage />} />
            </Routes>
        </div>
        </>
    )
}

export default App;
