import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './index.css';
import './bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import AppManagedForm from './ManagedForm/App';
import AppWithWarning from './WithWarning/App';
import AppErrorNotification from './ErrorNotification/App';
ReactDOM.render(
    <Fragment>
        <Router>
            <Fragment>
                <div id="links">
                    <Link to="/with-warning" class="btn btn-warning btn-lg">With Warning</Link>
                    <Link to="/error-notification" class="btn btn-success btn-lg">Error Notification</Link>
                    <Link to="/managed-form" class="btn btn-info btn-lg">Managed Form</Link>
                </div>

                <Switch>
                    <Route path="/" exact />
                    <Route path="/with-warning" exact component={AppWithWarning} />
                    <Route path="/error-notification" exact component={AppErrorNotification} />
                    <Route path="/managed-form" exact component={AppManagedForm} />
                </Switch>
            </Fragment>
        </Router>
    </Fragment>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
