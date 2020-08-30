import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from 'components/header';
import Home from 'pages/home';
import Footer from 'components/footer';

function Routes() {
  return (
    <Router>
      <div className="min-h-screen text-gray-900 bg-white">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default Routes;
