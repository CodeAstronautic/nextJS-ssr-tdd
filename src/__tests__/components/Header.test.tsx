import { render } from "@testing-library/react";
import Header from "../../components/Header";
import '@testing-library/jest-dom';

describe("Header Component", () => {
  it("renders without crashing", () => {
    render(<Header />);
  });

  it("displays the correct title", () => {
    const { getByText } = render(<Header />);
    const title = getByText("Blog Explorer");
    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe("H1");
    expect(title).toHaveClass("text-4xl font-bold");
  });

  it("displays the correct subtitle", () => {
    const { getByText } = render(<Header />);
    const subtitle = getByText("Discover insightful posts on various topics!");
    expect(subtitle).toBeInTheDocument();
    expect(subtitle.tagName).toBe("P");
    expect(subtitle).toHaveClass("text-gray-200 mt-2");
  });

  it("has the correct class names", () => {
    const { container } = render(<Header />);
    const headerElement = container.querySelector("header");
    expect(headerElement).toHaveClass("bg-blue-600");
    expect(headerElement).toHaveClass("text-white");
    expect(headerElement).toHaveClass("p-6");
    expect(headerElement).toHaveClass("text-center");
  });
});