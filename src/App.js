import { Route, Routes } from "react-router-dom";
import "./App.css";
import GithubUser from "./Components/GithubUser";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";

function App() {
    return (
        <main data-theme="corporate">
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/:username" element={<GithubUser />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
    );
}

export default App;
