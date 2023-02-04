import React from "react";
import {IItem} from "../utils/Interfaces";


const Item : React.FC<IItem> = (props) => {
    const {checkbox, label, key, onChange} = props;
    return(
        <div className="item-container" key={key}>
            {
                checkbox && <input type="checkbox" data-testid="item-input" onChange={onChange}/>
            }
            <span data-testid="item-label">{label}</span>
        </div>
    )
}
export default Item;