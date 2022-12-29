import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom"

import { Home } from "./pages/Home"
import { About } from "./pages/About"

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quem-somos" element={<About/>} />
            </Routes>
        </Router>
    )
}
