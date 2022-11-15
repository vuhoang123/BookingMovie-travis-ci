import { createBrowserHistory } from "history";
import { Router, Switch } from "react-router-dom";
import "./App.css";
import { AuthRoute } from "./components/Guard/Guard";
import Loading from "./components/Loading/Loading";
import Checkout from "./pages/Checkout/Checkout";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import { CheckoutTemplate } from "./templates/CheckoutTemplate/CheckoutTemplate";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
// import { Suspense, lazy } from "react";

export const history = createBrowserHistory();
// DUONG NGOC HUNG
// console.log(history);

function App() {
  // New
  return (
    <div className="App">
      <Router history={history}>
        <Loading />
        <Switch>
          <HomeTemplate path="/home" exact Component={Home} />
          <HomeTemplate path="/detail/:id" exact Component={Detail} />

          <CheckoutTemplate path="/checkout/:id" exact Component={Checkout} />

          <HomeTemplate path="/profile" exact Component={Profile} />

          <AuthRoute path="/login" exact component={Login} redirectPath="/" />
          <AuthRoute path="/register" exact component={Register} redirectPath="/" />

          <HomeTemplate path="/" exact Component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
