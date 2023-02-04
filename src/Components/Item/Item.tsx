import React from "react";
import {IItem} from "../utils/Interfaces";


const Item : React.FC<IItem> = (props) => {
    const {checkbox, label, index, onChange} = props;
    return(
        <div className="item-container" key={index}>
            {
                checkbox && <input type="checkbox" data-testid="item-input" onChange={onChange}/>
            }
            <span data-testid="item-label">{label}</span>
        </div>
    )
}
export default Item;