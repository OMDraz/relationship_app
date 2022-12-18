import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import Home from "../pages/index";
import Login from "../pages/login";
import { Navbar } from "../pages/components/navbar";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import renderWithRouter from "./utils/utils.js";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);
    const header = screen.getByRole("heading");

    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent("Hello World!");
  });

  it("there are buttons for login/signup page", () => {
    // Arrange
    render(<Home />);

    // Act
    const loginLink = screen.getByRole("link", { name: "Login" });

    // Assert
    expect(loginLink).toBeInTheDocument();
  });

  it("login button send you to login page", async () => {
    // Arrange
    render(
      <Home>
        <Navbar />
      </Home>
    );
    const user = userEvent.setup();
    const loginButton = screen.getByRole("link", { name: "Login" });

    // Act
    await user.click(loginButton);

    // Assert
    expect(screen.getByText(/Login World/i)).toBeInTheDocument();
  });

  it("signup button send you to signup page", async () => {
    // Arrange
    render(
      <Home>
        <Navbar />
      </Home>
    );
    const user = userEvent.setup();
    const signupButtom = screen.getByRole("link", { name: "Signup" });

    // Act
    await user.click(signupButtom);

    // Assert
    expect(screen.getByText(/Signup World/i)).toBeInTheDocument();
  });

  it("about button in the footer", () => {});

  it("about button sends you to the button page", () => {});
});

describe("Signup", () => {
  it("renders a signup page", () => {
    render(<Login />);
  });

  it("renders input for first name, last name, email, phone numbe rand password", () => {});

  it("renders a button to submit", () => {});

  it("signing up is successful", () => {});

  it("signing up renders home page", () => {});
});

describe("Login", () => {
  it("renders a login page", () => {
    render(<Login />);
  });

  it("renders input for first name, last name, email, phone numbe rand password", () => {});

  it("renders a button to submit", () => {});

  it("logging in is successful", () => {});

  it("logging in renders home page", () => {});
});
