import {Routes, Route} from "react-router-dom";
import Home from "./Home";
import Protecting from "./Protecting";
import Blogs from "./Blogs";
import Contact from "./Contact";
import NoPage from "./NoPage";

function RoutePage() {
    return (
        <div>
            <Routes>
                <Route index element={< Home />}/>
                <Route path="protecting" element={< Protecting />}/>
                <Route path="blogs" element={< Blogs />}/>
                <Route path="contact" element={< Contact />}/>
                <Route path="*" element={< NoPage />}/>
            </Routes>
        </div>
    );
}
export default RoutePage;