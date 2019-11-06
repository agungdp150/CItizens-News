import React from "react";
import { Route, Switch } from "react-router-dom";

// import PrivateRoute from './PrivateRoutes';

// Layout
import HeadCategory from "../components/layout/HeadCategory";
import Footer from "../components/layout/Footer";

// Admin Layout
import AdminSidebar from "../components/Admin/AdminSidebar";

// Main Page
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import SearchPage from "../pages/SearchPage";

// User Page
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import ForgotPage from "../pages/ForgotPage";
import EditProfilePage from "../pages/EditProfilePage";
import DeleteAccountPage from "../pages/DeleteAccountPage";
import FileUploadPage from "../pages/FileUploadPage";
import VerifyPage from "../pages/VerifyPage";
import VerifyForgotPage from "../pages/VerifyForgotPage";
import SuccesChangePasswordPage from "../pages/SuccesChangePasswordPage";
import NewCitizensPage from "../pages/NewCitizensPage";
import ProfileDashboardPage from "../pages/ProfileDashboardPage";
import ProfileNewsPage from "../pages/ProfileNewsPage";

// Profile
import UserNewsPage from "../pages/UserNewsPage";
import UserStatusPage from "../pages/UserStatusPage";

// Category Pages
import CategoryPage from "../pages/CategoryPage";
import DetailVideoPage from "../pages/DetailVideoPage";

// Admin Control
import AdminLoginPage from "../pages/AdminLoginPage";
import AdminNewsPage from "../pages/AdminNewsPage";
import AdminUserPage from "../pages/AdminUserPage";
import AdminRejectedPage from "../pages/AdminRejectedPage";
import AdminApprovedPage from "../pages/AdminApprovedPage";

// News
import DetailPage from "../pages/DetailPage";

// Other
import NotfoundPage from "../pages/NotfoundPage";

const Routes = () => {

  const AppRoute = ({component : Component, layout : Layout, ...rest}) => (
      <Route {...rest} render = {props => (
        <Layout>
          <Component {...props}/>
        </Layout>
      )}/>
  )

  const Navigate = props => (
    <div>
      <HeadCategory/>
        {props.children}
      <Footer/>
    </div>
  )

  const noneFoot = props => (
    <div>
      <HeadCategory/>
        {props.children}
    </div>
  )

  const AdminMenu = props => (
    <div>
      <AdminSidebar/>
      {props.children}
    </div>
  )

  return (
    <section>
      <Switch>
        <AppRoute exact path="/" layout={Navigate} component={HomePage} />
        <AppRoute exact path="/category/:category" layout={Navigate} component={CategoryPage} />

        <AppRoute exact path="/about" layout={Navigate} component={AboutPage} />
        <Route exact path="/signin" component={SignInPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/forgot" component={ForgotPage} />

        <Route exact path="/adminlogin" component={AdminLoginPage} />
        <AppRoute exact path="/admindashboardnews" layout={AdminMenu} component={AdminNewsPage}/>
        <AppRoute exact path="/adminapproved" layout={AdminMenu} component={AdminApprovedPage}/>
        <AppRoute exact path="/adminrejected" layout={AdminMenu} component={AdminRejectedPage}/>
        <AppRoute exact path="/admindashboardusers" layout={AdminMenu} component={AdminUserPage} />

        <AppRoute exact path="/detail/:id" layout={Navigate} component={DetailPage} />
        <AppRoute exact path="/videoDetail/:id" layout={Navigate} component={DetailVideoPage}/>
        <AppRoute exact path="/search/:query" layout={Navigate} component={SearchPage}/>

        <AppRoute exact path="/user/:id" layout={noneFoot} component={UserNewsPage} />
        <Route exact path="#" component={ProfileNewsPage}/>
        <Route exact path="/profile/:id/status" component={UserStatusPage}/>
        <Route exact path="/editprofile/:id" component={EditProfilePage} />
        <Route exact path="/editprofile/:id/delete-account" component={DeleteAccountPage}/>
        <AppRoute exact path="/profile/:id" layout={noneFoot} component={ProfileDashboardPage}/>
        <Route exact path="/profile/:id/upload" component={FileUploadPage} />
        
        <Route exact path="/verify" component={VerifyPage} />
        <Route exact path="/verifyforgot" component={VerifyForgotPage}/>
        <Route exact path="/verifyforgot/succeschange" component={SuccesChangePasswordPage}/>
        <Route exact path="/greetings" component={NewCitizensPage}/>

        <Route component={NotfoundPage} />
        
      </Switch>
    </section>
  );
};



export default Routes;
