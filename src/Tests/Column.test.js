import renderer from "react-test-renderer";
import {render, screen} from "@testing-library/react";
import Column from "../Components/Column/Column";
import Item from "../Components/Item/Item";
import userEvent from "@testing-library/user-event";

it("Render an empty column", () => {
    const component = renderer.create(
        <Column title="Test"/>
    )
    let tree= component.toJSON();
    expect(tree).toMatchSnapshot();
    render(
        <Column title="Test"/>
    )
    expect(screen.getByTestId("column-title")).toHaveTextContent("Test");
    expect(screen.getByTestId("column-elements")).toBeEmptyDOMElement();
});

it("Render column with an item", () => {
    const component = renderer.create(
        <Column title="Test with checkbox">
            <Item checkbox={true} label="task 1" index={1}/>
        </Column>
    )
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    render(
        <Column title="Test with checkbox">
            <Item checkbox={true} label="task 1" index={1}/>
        </Column>
    );
    const itemInput = screen.getByTestId("item-input");
    expect(screen.getByTestId("column-title")).toHaveTextContent("Test with checkbox");
    expect(screen.getByText("task 1")).toHaveTextContent("task 1");
    userEvent.click(itemInput);
    expect(itemInput).toBeChecked();
})