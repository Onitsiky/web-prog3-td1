import React, {useState} from "react";
import Input from "../Input/Input";
import Column from "../Column/Column";
import "./View.css";
import {IListIem} from "../utils/Interfaces";
import Item from "../Item/Item";

type IView = {

}

const View : React.FC<IView> = () => {
    const [todoDescription, setTodoDescription] = useState<string>("");
    const [todoList, setTodoList] = useState<IListIem[]>([]);
    const [doneList, setDoneList] = useState<IListIem[]>([]);
    const [id, setId] = useState(1);

    function addTodo(e : any) {
        e.preventDefault();
        if(todoDescription !== "" || todoDescription !== null){
            console.log(todoDescription)
            // @ts-ignore
            setTodoList([...todoList, {index : id, description : todoDescription}]);
            setId(id+1);
            e.target.reset();
            console.log(todoList);
        }
    }

    function todoToDone (description : string, index : number){
        setTodoList(todoList.filter((item) => item.index !== index));
        setDoneList([...doneList, {index: index, description: description}]);
    }
    return(
        <div className="view-container">
            <form className="view-elem-form" onSubmit={(e) => addTodo(e)}>
                <Input setDescription={(e) => setTodoDescription(e)}/>
            </form>
            <div className="view-elem-columns">
                <Column title="TODO">
                    {
                        todoList.map((todoItem : any) => (
                            <Item checkbox={true}
                                  label={todoItem.description}
                                  index={todoItem.index}
                                  onChange={() => todoToDone(todoItem.description, todoItem.index)}/>
                        ))
                    }
                </Column>
                <Column title="DONE">
                    {
                        doneList.map((doneItem : any) => (
                            <Item checkbox={false} label={doneItem.description} index={doneItem.index}
                                  />
                        ))
                    }
                </Column>
            </div>
        </div>
    )
}
export default View;