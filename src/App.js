import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./componets/Header/Header";
import Footer from "./componets/Footer/Footer";
import Dashboard from "./pages/Dashboard/Dashboard";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

import Legislation from "./pages/primary/Legislation";
import Reported from "./pages/primary/Reported";
import Unreported from "./pages/primary/Unreported";

import Book from "./pages/secondary/Book";
import Journal from "./pages/secondary/Journal";
import Encyclopedia from "./pages/secondary/Encyclopedia";
import Looseleaf from "./pages/secondary/Looseleaf";
import Website from "./pages/secondary/Website";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/primary/legislation" component={Legislation} />
          <Route path="/primary/cases/reported" component={Reported} />
          <Route path="/primary/cases/unreported" component={Unreported} />
          <Route path="/secondary/book" component={Book} />
          <Route path="/secondary/journal-article" component={Journal} />
          <Route
            path="/secondary/legal-encyclopedia"
            component={Encyclopedia}
          />
          <Route path="/secondary/looseleaf-service" component={Looseleaf} />
          <Route path="/secondary/website" component={Website} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
