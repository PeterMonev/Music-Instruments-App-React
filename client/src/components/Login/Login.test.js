import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import { AuthContext } from "../../hooks/authContext";
import { Login } from "./Login";

describe("Login", () => {
  const user = { name: "peter@abv.bg", password: "1234" };

  beforeEach(() => {
    render(
      <AuthContext.Provider value={user}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </AuthContext.Provider>
    );
  });

  test("Should not show email error", () => {
    const emailInput = screen.getByTestId("email");
    const passwordInput = screen.getByTestId("password");

    userEvent.click(emailInput);
    userEvent.type(emailInput, "peter@abv.bg");
    userEvent.click(passwordInput);

    const error = screen.queryByText("Email or Password are incorrect!");
    expect(error).not.toBeInTheDocument();
  });

  test("Should not show password error", () => {
    const emailInput = screen.getByTestId("email");
    const passwordInput = screen.getByTestId("password");
    
    userEvent.click(emailInput);
    userEvent.click(passwordInput);
    userEvent.type(passwordInput, "1234");

    const error = screen.queryByText("Email or Password are incorrect!");
    expect(error).not.toBeInTheDocument();
  });

  test("Button should be enabled", () => {
    const emailInput = screen.getByTestId("email");
    const passwordInput = screen.getByTestId("password");
    const loginBtn = screen.getByTestId("loginBtn");

    userEvent.type(emailInput, "joe@gmail.com");
    userEvent.type(passwordInput, "12345");

    expect(loginBtn).toBeEnabled();
  });

  test("Password should be wrong", () => {
    const emailInput = screen.getByTestId("email");
    const passwordInput = screen.getByTestId("password");
    const loginBtn = screen.getByTestId("loginBtn");

    userEvent.type(emailInput, "joe@gmail.com");
    userEvent.type(passwordInput, "12");
    userEvent.click(loginBtn);

    const error = screen.queryByText("Email or Password are incorrect!");
    expect(error).not.toBeInTheDocument();
  });

  test("Email should be wrong", () => {
    const emailInput = screen.getByTestId("email");
    const passwordInput = screen.getByTestId("password");
    const loginBtn = screen.getByTestId("loginBtn");

    userEvent.type(emailInput, "joe@gmail.com");
    userEvent.type(passwordInput, "1234");
    userEvent.click(loginBtn);

    const error = screen.queryByText("Email or Password are incorrect!");
    expect(error).not.toBeInTheDocument();
  });

  test("Email and Password should be wrong", () => {
    const emailInput = screen.getByTestId("email");
    const passwordInput = screen.getByTestId("password");
    const loginBtn = screen.getByTestId("loginBtn");

    userEvent.type(emailInput, "joe@gma");
    userEvent.type(passwordInput, "14");
    userEvent.click(loginBtn);

    const error = screen.queryByText("Email or Password are incorrect!");
    expect(error).not.toBeInTheDocument();
  });

  test("Should send request", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => {
        return { _id: "123", email: "peter@abv.bg" };
      },
    });
    const emailInput = screen.getByTestId("email");
    const passwordInput = screen.getByTestId("password");
    const loginBtn = screen.getByTestId("loginBtn");

    userEvent.type(emailInput, "peter@abv.bg");
    userEvent.type(passwordInput, "1234");
    userEvent.click(loginBtn);

    await waitFor(() => expect(window.fetch).toHaveBeenCalledTimes(1));
  });

  test('Should switch to register', () => {
    const linkLogin = screen.getByTestId('link');
    userEvent.click(linkLogin);
    expect(global.window.location.pathname).toEqual('/');
});
});
