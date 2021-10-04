import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import NotFound from './components/NotFound/NotFound';
import Coaches from './components/Coaches/Coaches';
import ServicesAll from './components/ServicesAll/ServicesAll';

function App() {
  return (
    <div>
       <Router>
         <Header></Header>
         <Switch>
         <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/services">
            <ServicesAll></ServicesAll>
          </Route> 
          <Route path="/coaches">
            <Coaches></Coaches>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
         </Switch>
         <Footer></Footer>
       </Router>
    </div>
  );
}

export default App;
