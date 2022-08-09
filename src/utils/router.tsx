
import React from "react";
import {BrowserRouter, HashRouter} from "react-router-dom";

type RouterProps = {
    hash: boolean,
    children: JSX.Element | JSX.Element[]
}

type RouterPropsExternal = {
    hash?: boolean,
    children?: JSX.Element | JSX.Element[]
}

/**
 *
 * @description fast switcher of router type
 * @description GitHub Pages or Defined Domain with fixed pathname [hash=true]
 * @description Custom Domain or no fixed pathname [hash=false]
 *
 * @see HashRouter
 * @see BrowserRouter
 */
export default class Router extends React.Component<RouterPropsExternal, {}> {

    constructor(_props: RouterPropsExternal) {
        const props: RouterProps = {
            hash: _props.hash || false,
            children: _props.children || []
        }
        super(props);
    }

    render() {
        return(
            <>
            {
                this.props.hash ?
                    <HashRouter>{this.props.children}</HashRouter>
                     :
                    <BrowserRouter>{this.props.children}</BrowserRouter>
            }
            </>
        )
    }

}
