import { render, screen } from "@testing-library/react";
import Card from "../card";
import data from "../../../module";

test("should render song cards", () => {
  render(<Card key={data[0].uri} item={data[0]} />);
  const title = screen.getByText("Bohemian Rhapsody - Remastered 2011");
  const image = screen.getByAltText("Bohemian Rhapsody - Remastered 2011");
  const name = screen.getByText("Queen");
  const button = screen.getByRole("button", { name: "Select" });
  expect(title).toBeInTheDocument();
  expect(name).toBeInTheDocument();
  expect(button).toBeInTheDocument();
  expect(image).toBeInTheDocument();
});
