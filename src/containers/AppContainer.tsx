import App from "../App";
import { connect } from "react-redux";
import React from "react";
import {AppState} from "../store/configureStore";

const mapStateToProps = (state: AppState) => {
    return {
        error: state.app.error
    }
};

export default connect<MapStateProps, {}, {}, AppState>(mapStateToProps)(App)

type MapStateProps = {
    error: Error | null
}
