import Earth from "./earth.png"

export default function Header() {
    return (
        <header>
            <img src={Earth} alt="earth" />
            <h1>my travel journal.</h1>
        </header>
    )
}
