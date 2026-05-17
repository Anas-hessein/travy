import mark from "./marker.png"

export default function Main(props) {
    return (

        <article>
            <div className="main-img">
                <img className="imge" src={props.img.src} alt={props.img.alt} />
            </div>

            <div>
                <img className="marker" src={mark} alt="map marker" />
                <span>{props.country}</span>
                <a href={props.googleMapsUrl}>View on Google Maps</a>
                <h2>{props.title}</h2>
                <p className="date">{props.date}</p>
                <p className="pp">{props.text}</p>
            </div>
        </article>





    )
}