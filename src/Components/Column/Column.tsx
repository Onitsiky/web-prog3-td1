import "./Column.css";
import {IColumn} from "../utils/Interfaces";

const Column : React.FC<IColumn> = (props) => {
    const {title, children} = props;
    return(
        <div className="column-container">
            <div className="column-title-container">
                <h3 className="column-title" data-testid="column-title">{title}</h3>
            </div>
            <div className="column-elements" data-testid="column-elements">
                {children}
            </div>
        </div>
    )
}
export default Column;