import React from "react";

import Home from "../pages/Home/Home";
import Detail from "../pages/Detail/Detail";
import CheckoutPage from "../pages/Checkout/Checkout";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Login/Login";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";
import { Provider } from "react-redux";
import { store } from "../store/configStore";

jest.mock("../pages/Home/Home");
jest.mock("../pages/Detail/Detail");
jest.mock("../pages/Checkout/Checkout");
jest.mock("../pages/Profile/Profile");
jest.mock("../pages/Login/Login");

describe("Tests for App Router", () => {
  test("Should render HomePage on default route", () => {
    // Arrange
    Home.mockImplementation(() => <div>HomePageMock</div>);
    // Act
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/home"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    // Assert
    expect(screen.getByText("HomePageMock")).toBeInTheDocument();
  });

  //   test("Should render and ArticlePage for article route", () => {
  //     // Arrange
  //     Detail.mockImplementation(() => <div>DetailPageMock</div>);

  //     // Act
  //     render(
  //       <Provider store={store}>
  //         <MemoryRouter initialEntries={["/detail/6735"]}>
  //           <App />
  //         </MemoryRouter>{" "}
  //       </Provider>
  //     );

  //     // Assert
  //     expect(screen.getByText("DetailPageMock")).toBeInTheDocument();
  //   });

  //   test("Should render CheckoutPage for checkout route", () => {
  //     // Arrange

  //     CheckoutPage.mockImplementation(() => <div>CheckoutPageMock</div>);

  //     // Act
  //     render(
  //       <Provider store={store}>
  //         <MemoryRouter initialEntries={["/checkout/44024"]}>
  //           <App />
  //         </MemoryRouter>{" "}
  //       </Provider>
  //     );

  //     // Assert
  //     expect(screen.getByText("CheckoutPageMock")).toBeInTheDocument();
  //   });

  test("Should render Profile for profile route", () => {
    // Arrange
    Profile.mockImplementation(() => <div>Sign in</div>);

    // Act
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/profile"]} initialIndex={0}>
          <App />,
        </MemoryRouter>
      </Provider>
    );

    // Assert
    expect(screen.getByText("Sign in")).toBeInTheDocument();
  });
});
