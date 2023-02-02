import React from "react";
import {IItem} from "../utils/Interfaces";


const Item : React.FC<IItem> = (props) => {
    const {checkbox, label, key, onChange} = props;
    return(
        <div className="item-container" key={key}>
            {
                checkbox && <input type="checkbox" onChange={onChange}/>
            }
            <span>{label}</span>
        </div>
    )
}
export default Item