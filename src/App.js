import './App.css';
import {
    BrowserRouter,
    Route, Routes,
} from "react-router-dom";
import {Profile} from "./pages/profile";
import {Biography} from "./pages/biography";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Profile/>} />
                <Route  path="/bio" element={<Biography />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
