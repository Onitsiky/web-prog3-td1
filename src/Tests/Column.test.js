import renderer from "react-test-renderer";
import {render, screen} from "@testing-library/react";
import Column from "../Components/Column/Column";

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