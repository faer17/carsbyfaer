// import { car1 } from "../../assets";
import { sectionImageBoxes } from "../../utils/utils";
import "./style.css"

export default function Section() {
  return (
    <>
        <h1 className="section_text">Rent a Luxury Car</h1>
 <div className="section1">
 {sectionImageBoxes?.map(({hover_top_name,hover_bottom_name ,image})=>{
            return(
                <>
                    <div className="car_box">
                    <img src={image} alt="" className="car_image_boxes" />
                    <div className="hover_car_texts">
                    <h1 className="hover_text_top">{hover_top_name}</h1>
                    <h3 className="hover_text_bottom">{hover_bottom_name}</h3>
            </div>
            </div>
                </>
            )
        })}
 </div>

    </>
  )
}
