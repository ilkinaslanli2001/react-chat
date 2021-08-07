import {useContext, useEffect} from 'react';

import {useSelector} from "react-redux";
import Loading from "./FullLoading/Loading";
import Router, {useRouter} from "next/router";
import {connect} from "react-redux";

import React from 'react';


const withAuth = (Component = null, options = {}) => {
    class AuthenticatedRoute extends React.Component {
        state = {
            loading: true,
        };

        componentDidMount() {
            if (this.props.isLoggedIn) {
                this.setState({loading: false});
            } else {
                Router.push("/login");
            }
        }

        render() {


            if (this.state.loading) {
                return <Loading/>;
            }

            return <Component {...this.props} />;
        }
    }

    return connect((state) => (
        {
            isLoggedIn: Object.keys(state.userReducer.user).length > 0
        }))(AuthenticatedRoute);
};

export default withAuth;
