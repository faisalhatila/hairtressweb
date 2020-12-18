import React from "react";
import { Switch, Redirect } from "react-router-dom";
import HomeContainer from "../containers/Home";
import PageNotFound from "../containers/404";
import Route from "./route";
import PvtRoute from "./privateRoute";
import LoginContainer from "../containers/Login";
import { AboutUs } from "../containers/AboutUs";
import SignUp from "../containers/SignUp";
import Questionaire from "../containers/Questionaire";
import RecommendedProduct from "../containers/RecommendedProduct";
import Products from "../containers/Products";
import CraftProducts from "../containers/CraftProducts";
import ThePros from "../containers/ThePros";
import TheStudy from "../containers/TheStudy";
import Profile from "../containers/Profile";
import ResetPassword from "../containers/ResetPassword";
import { useAuth } from "./../shared/hooks/auth-hooks";
const Router = (props) => {
  const { userId, token } = useAuth();
  let content;
  if (!token)
    content = (
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route
          exact
          path="/questionaire"
          component={() => <Redirect to="/login" />}
        />
        {/* <Route exact path="/questionaire" component={Questionaire} /> */}
        <Route
          exact
          path="/recommeded-product"
          component={RecommendedProduct}
        />
        <Route exact path="/all-results" component={RecommendedProduct} />
        <Route exact path="/results" component={RecommendedProduct} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/craft-products" component={CraftProducts} />
        <Route exact path="/the-pros" component={ThePros} />
        <Route exact path="/the-study" component={TheStudy} />
        <Route exact path="/profile" component={() => <Redirect to="/" />} />
        <PvtRoute exact path="/login" component={LoginContainer} />
        <PvtRoute exact path="/reset/:token" component={ResetPassword} />
        <PvtRoute exact path="/reset-password" component={ResetPassword} />
        <PvtRoute exact path="/sign-up" component={SignUp} />
        <Route exact path="/404" component={PageNotFound} />
        <Route exact path="/*" component={() => <Redirect to="/404" />} />
      </Switch>
    );
  else
    content = (
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/questionaire" component={Questionaire} />
        <Route exact path="/all-results" component={RecommendedProduct} />
        <Route exact path="/results" component={RecommendedProduct} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/craft-products" component={CraftProducts} />
        <Route exact path="/the-pros" component={ThePros} />
        <Route exact path="/the-study" component={TheStudy} />
        <Route exact path="/profile" component={Profile} />
        <PvtRoute exact path="/login" component={() => <Redirect to="/" />} />
        <PvtRoute exact path="/reset/:token" component={ResetPassword} />
        <PvtRoute
          exact
          path="/reset-password"
          component={() => <Redirect to="/" />}
        />
        <PvtRoute exact path="/sign-up" component={() => <Redirect to="/" />} />
        <Route exact path="/404" component={PageNotFound} />
        <Route exact path="/*" component={() => <Redirect to="/404" />} />
      </Switch>
    );
  return content;
};

export default Router;
