import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import PostId from "./pages/PostId";

const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = { <Home/> } />
                <Route path = "/postview/:postid" element = { <PostId/> } />
            </Routes>
        </BrowserRouter>
        );
}

export default App;
