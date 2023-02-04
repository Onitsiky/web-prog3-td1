import renderer from "react-test-renderer";
import Input from "../Components/Input/Input";
import {fireEvent, render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

it("Render Input", () => {
    function setDescriptionMock (){
        console.log("function");
    }
    const component = renderer.create(
        <Input setDescription={setDescriptionMock}/>
    )
    let tree = component.toJSON();
    expect(tree).toBeTruthy();
    render(
        <Input setDescription={setDescriptionMock}/>
    )
    const inputField = screen.getByTestId("input-field");
    userEvent.type(inputField, "Todo-test")
    expect(inputField).toHaveValue("Todo-test");
    fireEvent.submit(inputField);
    expect(inputField).toBeEmpty();
})