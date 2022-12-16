import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import Login from "../pages/login/login";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);
    const header = screen.getByRole('heading');

    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent('Hello World!');
  });

  it('there are buttons for login/signup page', () => {

  });

  it('login button send you to login page', () => {

  });

  it('signup button send you to signup page', () => {

  });

  it('about button in the footer', () => {

  });

  it('about button sends you to the button page', () => {

  });
});


describe("Signup", () => {
  it("renders a signup page", () => {
    render(<Login />)
  });

  it('renders input for first name, last name, email, phone numbe rand password', () => {

  });

  it('renders a button to submit', () => {

  });

  it('signing up is successful', () => {

  });

  it('signing up renders home page', () => {

  });
});


describe("Login", () => {
  it("renders a login page", () => {
    render(<Login />)
  });

  it('renders input for first name, last name, email, phone numbe rand password', () => {

  });

  it('renders a button to submit', () => {

  });

  it('logging in is successful', () => {

  });

  it('logging in renders home page', () => {

  });
});
