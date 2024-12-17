import { render } from "@testing-library/react";
import Footer from "../../components/Footer";
import '@testing-library/jest-dom';

describe("Footer Component", () => {
  it("renders without crashing", () => {
    render(<Footer />);
  });

  it("displays the correct copyright text", () => {
    const { getByText } = render(<Footer />);
    const copyrightText = getByText(/© 2024 Blog Explorer. All rights reserved./i);
    expect(copyrightText).toBeInTheDocument();
  });

  it("has the correct class names", () => {
    const { container } = render(<Footer />);
    const footerElement = container.querySelector("footer");
    expect(footerElement).toHaveClass("bg-blue-600");
    expect(footerElement).toHaveClass("text-white");
    expect(footerElement).toHaveClass("py-4");
    expect(footerElement).toHaveClass("text-center");
    expect(footerElement).toHaveClass("mt-12");
  });
});