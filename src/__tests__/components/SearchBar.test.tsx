import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { useRouter } from "next/navigation";
import SearchBar from "../../components/SearchBar";
import '@testing-library/jest-dom';

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("SearchBar Component", () => {
  const mockPush = jest.fn();
  const mockUseRouter = useRouter as jest.Mock;

  beforeEach(() => {
    mockUseRouter.mockReturnValue({ push: mockPush });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly", () => {
    const { getByPlaceholderText } = render(<SearchBar query="" />);
    expect(getByPlaceholderText("Search blog posts...")).toBeInTheDocument();
  });

  it("initializes with the correct query", () => {
    const { getByPlaceholderText } = render(<SearchBar query="Initial Query" />);
    const input = getByPlaceholderText("Search blog posts...") as HTMLInputElement;
    expect(input.value).toBe("Initial Query");
  });

  it("updates the input and calls router.push", () => {
    const { getByPlaceholderText } = render(<SearchBar query="" />);
    const input = getByPlaceholderText("Search blog posts...") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "New Query" } });
    expect(input.value).toBe("New Query");
    expect(mockPush).toHaveBeenCalledWith("/?page=1&query=New Query");
});
});