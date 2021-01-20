import { render, screen } from "@testing-library/react";
import Login from "../pages/Login";

describe("when Login page is loaded", () => {
  test("should appear the Login word", () => {
    render(<Login />);
    const TextLogin = screen.getByText("Login");
    expect(TextLogin).toBeInTheDocument();
  });
});
