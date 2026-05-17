import img1 from "./img1.jpg"
import mark from "./marker.png"

export default function Main() {
    return (

        <article>
            <div className="main-img">
                <img  className="imge" src={img1} alt="pyramids" />
            </div>

            <div>
                <img className="marker" src={mark} alt="map marker" />
                <span>Egypt</span>
                <a href="https://www.google.com/maps/place/%D8%A3%D9%87%D8%B1%D8%A7%D9%85%D8%A7%D8%AA+%D8%A7%D9%84%D8%AC%D9%8A%D8%B2%D8%A9%E2%80%AD/@29.9773008,31.1350704,17z/data=!3m1!4b1!4m6!3m5!1s0x14584f7de239bbcd:0xca7474355a6e368b!8m2!3d29.9772962!4d31.1324955!16s%2Fm%2F07s6gb8?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D">View on Google Maps</a>
                <h2> Giza Pyramids </h2>
                <p className="date">12 May, 2023 -- 15 May, 2023</p>
                <p className="pp">Smarthistory – The Great Pyramids of GizaThe Giza Pyramids are an ancient complex of monumental royal tombs and structures built over 4,500 years ago during Egypt's Old Kingdom. Located just outside modern-day Cairo, they are the last surviving member of the Seven Wonders of the Ancient World.</p>
            </div>
        </article>





    )
}