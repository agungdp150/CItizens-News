import React from "react";
import { Route, Switch } from "react-router-dom";

import PrivateRoute from './PrivateRoutes';

// Main Page
import HomePage from "../pages/HomePage";
import CategoryPage from "../pages/CategoryPage";
import ContributionPage from "../pages/ContributionPage";
import AboutPage from "../pages/AboutPage";

// User Page
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import ForgotPage from "../pages/ForgotPage";
import EditProfilePage from "../pages/EditProfilePage";
import FileUploadPage from "../pages/FileUploadPage";
import VerifyPage from "../pages/VerifyPage";
import VerifyForgotPage from "../pages/VerifyForgotPage";
import UserPage from "../pages/UserPage";

// Category Pages

// Admin Control
import AdminLoginPage from "../pages/AdminLoginPage";
import AdminNewsPage from "../pages/AdminNewsPage";
import AdminUserPage from "../pages/AdminUserPage";

// News
import DetailPage from "../pages/DetailPage";

// Other
import NotfoundPage from "../pages/NotfoundPage";

const Routes = () => {
  return (
    <section>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/category/:category" component={CategoryPage} />
        <Route exact path="/contribution" component={ContributionPage} />

        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/signin" component={SignInPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/forgot" component={ForgotPage} />

        <Route exact path="/adminlogin" component={AdminLoginPage} />
        <PrivateRoute exact path="/admindashboardnews" component={AdminNewsPage} />
        <PrivateRoute exact path="/admindashboardusers" component={AdminUserPage} />

        <Route exact path="/detail/:id" component={DetailPage} />
        <Route exact path="/user/:id" component={UserPage} />
        <Route exact path="/editprofile" component={EditProfilePage} />
        <Route exact path="/upload" component={FileUploadPage} />
        <Route exact path="/verify" component={VerifyPage} />
        <Route exact path="/verifyforgot" component={VerifyForgotPage} />

        <Route component={NotfoundPage} />
      </Switch>
    </section>
  );
};

export default Routes;
