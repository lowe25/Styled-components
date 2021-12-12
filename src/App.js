import {BrowserRouter, Route, Switch} from "react-router-dom";
import Reset from "base/reset";
import Navbar from "components/navbar/navbar";
import Landing from "pages/landing/landing";
import About from "pages/about/about";
import Contact from "pages/contacts/contact";
import Services from "pages/services/services";
import Footer from "components/footer/footer";
function App() {
  return (
    <div className="App">
      <Reset />
      <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
