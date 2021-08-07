import React from "react";
import Router from "next/router";
import {connect} from "react-redux";
import Loading from "./FullLoading/Loading";

const publicRoute = (Component = null, options = {}) => {
    class PublicRoute extends React.Component {
        state = {
            loading: true,
        };

        componentDidMount() {
            if (!this.props.isLoggedIn) {
                this.setState({loading: false});
            } else {
                Router.push("/");
            }
        }

        render() {
            const {loading} = this.state;

            if (loading) {
                return <Loading/>;
            }

            return <Component {...this.props} />;
        }
    }

    return connect((state) => (
        {
            isLoggedIn: Object.keys(state.userReducer.user).length > 0
        }))(PublicRoute);
};

export default publicRoute;