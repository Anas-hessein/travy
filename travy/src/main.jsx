import { createRoot } from "react-dom/client"
import './index.css'
import Header from "./header"
import Main from "./mainContent"
import data from "./data.js"

export default function App() {
    return (
        <>
        <Header />
        {data.map((entry) => (
            <Main
                key={entry.id}
                img={entry.img}
                title={entry.title}
                country={entry.country}
                googleMapsUrl={entry.googleMapsUrl}
                date={entry.date}
                text={entry.text}
            />
        ))}
        </>
    )
}

createRoot(document.getElementById("root")).render(<App />)