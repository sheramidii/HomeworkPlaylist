import { render, screen } from "@testing-library/react";
import Card from "../card";
import { RootObject } from "../../storagets";

test('should render song cards', () =>{
    render(<Card />)
})

