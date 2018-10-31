import {createStore,applyMiddleware ,compose} from 'redux';
import React from "react";
import ReactDom from "react-dom";
import {Provider} from "react-redux";
import thunk from 'redux-thunk'; //异步处理插件
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom';
// import './config';
import reducers from './reducer';
import AutoRouter from './component/autoRouter/autoRouter'
import AgentView from './container/agentView/AgentView';
import HelpView from './container/help/HelpView';
import DashboardView from './container/dashboard/DashboardView';
import MyCruiseView from './container/my-cruise/MyCruiseView';
import './index.css';

// 新建store
const store = createStore(reducers,compose(
    applyMiddleware(thunk),
    window.devToolsExtension() || (()=>{})
));

ReactDom.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                <AutoRouter></AutoRouter>
                <Switch>
                    <Route path='/agent' component={AgentView}></Route>
                    <Route path='/help' component={HelpView}></Route>
                    <Route path='/dashboard' component={DashboardView}></Route>
                    <Route path='/myCruise' component={MyCruiseView}></Route>
                    {/* <Route component={Dashboard }></Route>     */}
                </Switch>

            </div>
        </BrowserRouter>
    </Provider>),
    document.getElementById("root")
);