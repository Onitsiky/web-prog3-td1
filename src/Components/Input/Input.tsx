import "./Input.css";
import {IInput} from "../utils/Interfaces";

const Input : React.FC<IInput> = (props) => {
    const {setDescription} = props;
    return(
        <div className="input-container">
            <input
                type="text"
                data-testid="input-field"
                className="input-field"
                placeholder="Enter new todo"
                onChange={(e) => setDescription(e.target.value)}
                />
        </div>
    )
}
export default Input;