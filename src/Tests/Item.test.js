import renderer from "react-test-renderer";
import {fireEvent, render, screen} from "@testing-library/react";
import Item from "../Components/Item/Item";

it("Render item component with checkbox", () =>{
    const component = renderer.create(
        <Item checkbox={true} label="test" key={1} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    render(
        <Item checkbox={true} label="test" key={1} />
    )
    const input = screen.getByTestId("item-input");
    expect(input).toBeTruthy();
    expect(screen.getByTestId("item-label")).toHaveTextContent("test");
    fireEvent.click(input);
    expect(input).toBeChecked();
} )

it("Render item component without checkbox", () => {
    const component = renderer.create(
        <Item checkbox={false} label="test" key={1} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    render(
        <Item checkbox={false} label="test" key={1}/>
    );
    expect(screen.getByTestId("item-label")).toHaveTextContent("test");
})