import Button from "../Buttons/Button"
import "./style.css"
import car from '../../assets/image/car.svg'




export default function Header() {
  return (
    <div>
        <header>
        <div className="header_section_left">
            <h1 className="text_header">The Worlds Best Luxury Car Deals</h1>
            <p className="text_paragrph">HKinvestor can provide rentals of the most exclusive cars like Ferrari and Lamborghini.</p>
            <div className="btn_group_header">
                <Button className={"orange"} name={"Buy now"}/>
                <Button className={"orange_secondary"} name={"Video Introduction"}/>
            </div>
            <div className="text_number_followers">
                <div className="text_all">
                    <h1 className="text_number">500+</h1>
                    <p className="text_name">Luxury Cars</p>
                </div>
                <div className="text_all">
                    <h1 className="text_number">#1</h1>
                    <p className="text_name">Best Deal Car</p>
                </div>
            </div>
        </div>
        <div className="header_section_right">
            <img src={car} alt="" className="car_image" />
        </div>
        </header>
    </div>
  )
}
