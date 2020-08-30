import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from 'components/header';
import Home from 'pages/home';
import ShowTag from 'pages/tag/show-tag';
import Footer from 'components/footer';

function Routes() {
  return (
    <Router>
      <div className="flex flex-col justify-between min-h-screen text-gray-900 bg-white">
        <div className="flex flex-col justify-between w-full">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/tags/:id" component={ShowTag} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default Routes;
