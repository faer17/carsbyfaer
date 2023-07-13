import { otherServices } from "../../utils/utils";
import "./style.css"

export default function Second_section() {
  return (
    <div>
        <section>
            <h3 className="section_img">Our Other Services</h3>
           <div className="second_section_cards">
           {otherServices?.map(({name,text,image})=>{
            return(
                <>
                        <div className="second_section_card">
                          <img src={image} alt="" />
                          <h4 className="section_info">{name}</h4>
                          <p className="setion_paragrph">{text}</p>
                        </div>
                </>
            )
        })}
           </div>
        </section>
    </div>
  )
}
