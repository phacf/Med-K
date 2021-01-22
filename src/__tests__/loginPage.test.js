import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import { Provider } from "react-redux";
import store from "../store";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("When everything is okay:", () => {
  const history = createMemoryHistory();

  test("should render in page login", () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
    const TextLogin = screen.getByText("Login");
    const InputEmail = screen.getByText("Email");
    const InputSenha = screen.getByText("Senha");
    const EntrarBtn = screen.getByText("Entrar");
    const RegisteLink = screen.getByText("Cadastre-se");
    expect(history.location.pathname).toBe("/");
    expect(RegisteLink).toBeInTheDocument();
    expect(EntrarBtn).toBeInTheDocument();
    expect(InputSenha).toBeInTheDocument();
    expect(InputEmail).toBeInTheDocument();
    expect(TextLogin).toBeInTheDocument();
  });
  test("should open register page", async () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );

    await userEvent.click(screen.getByText("Cadastre-se"));
    await expect(history.location.pathname).toBe("/cadastro");
    await expect(screen.getByText("Cadastro")).toBeInTheDocument();
  });
});
