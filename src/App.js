import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Dentists from './Pages/Dentists/Dentists';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import Contact from './Pages/Contact/Contact';
import NotFound from './Pages/NotFound/NotFound';
import AouthProvider from './Components/Context/AouthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Apartments from './Pages/Apartments/Apartments';

function App() {
  return (
    <>
      <AouthProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/dentists">
              <Dentists />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <PrivateRoute path="/service-details/:serviceID">
              <ServiceDetails />
            </PrivateRoute>
            <Route path="/apartments">
              <Apartments />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </AouthProvider>
    </>
  );
}

export default App;
