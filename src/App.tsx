import React from 'react';
import {Switch, Route} from 'react-router-dom';
import SelectPageContainer from './containers/SelectPageContainer';
import MainPageContainer from './containers/MainPageContainer';
import HeaderContainer from "./containers/HeaderContainer";
import PopUp from "./components/common/PopUp/PopUp";

type Props = {
    error: Error | null
}

const App: React.FC<Props> = ({error}) => {
    return (
        <div>
            {error && <PopUp content={error.message}/>}
            <HeaderContainer/>
            <Switch>
                <Route exact path="/table" render={() => <MainPageContainer/>}/>
                <Route exact path="/" render={() => <SelectPageContainer/>}/>
            </Switch>
        </div>
    );
};

export default App;
