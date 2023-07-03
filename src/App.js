import './App.css';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import {Profile} from "./pages/profile";
import {Biography} from "./pages/biography";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Profile/>}>
            <Route path="/biography" element={<Biography />} />
        </Route>
    )
);

export default router;
