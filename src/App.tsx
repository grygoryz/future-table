import React from 'react';
import {Switch, Route} from 'react-router-dom';
import SelectPageContainer from './containers/SelectPageContainer';
import MainPageContainer from './containers/MainPageContainer';
import HeaderContainer from "./containers/HeaderContainer";

function App() {
    return (
        <div>
            <HeaderContainer/>
            <Switch>
                <Route exact path="/table" render={() => <MainPageContainer/>}/>
                <Route exact path="/" render={() => <SelectPageContainer/>}/>
            </Switch>
        </div>
    );
}

export default App;
