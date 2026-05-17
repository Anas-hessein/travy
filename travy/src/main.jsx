import { createRoot } from "react-dom/client"
import { Fragment } from "react"
import './index.css'
import Header from "./header"
import Mian from "./mainContent"

const root = createRoot(document.getElementById("root"))

root.render(
   <App />
)

function App() {
    return (  
    <>
    <Header />
    <Mian />
    </>
    )
}

