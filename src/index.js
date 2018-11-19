import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/common/Header';
import './index.css';
import BigList from './components/biglist/BigList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './components/notfound/NotFound';
import DetailEvent from './components/detailevent/DetailEvent';


const App = () => {
     return (
         <BrowserRouter>
         <div>
         <Header />

         <Switch>
             <Route path="/" component={BigList} exact />
             <Route path="/event/:id" component={DetailEvent} exact />
             <Route component={NotFound} />
         </Switch>
         </div>
         </BrowserRouter>
     );
}

ReactDOM.render(
 <App />,
 document.getElementById('root')
);
