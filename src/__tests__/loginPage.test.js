import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import { Provider } from "react-redux";
import store from "../store";
import { Router } from "react-router";
import { createMemoryHistory } from "history";

describe("When everything is okay:", () => {
  const history = createMemoryHistory();
  render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  );
  test("should render in page login", () => {
    const TextLogin = screen.getByText("Login");
    const InputEmail = screen.getByText("Email");
    const InputSenha = screen.getByText("Senha");
    const EntrarBtn = screen.getByText("Entrar");
    const RegisteLink = screen.getByText("Cadastre-se");
    expect(history.location.pathname).toBe("/");
    expect(RegisteLink).toBeInTheDocument;
    expect(EntrarBtn).toBeInTheDocument;
    expect(InputSenha).toBeInTheDocument;
    expect(InputEmail).toBeInTheDocument;
    expect(TextLogin).toBeInTheDocument;
  });
});
