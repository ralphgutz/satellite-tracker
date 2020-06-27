import React from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Header from "./Header"
import Home from "./Home"
import FetchAPI from "./FetchAPI"

const Default = () => <h1>Nothing to show here.</h1>

const App = () => {
    
    return (<>
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/diwata" exact component={() => <FetchAPI satId={43678} />} />
                <Route path="/maya" component={() => <FetchAPI satId={43590} />} />
                <Route path="/iss" component={() => <FetchAPI satId={25544} />} />
                <Route component={Default} />
            </Switch>
        </BrowserRouter>
        </>
    )
}

export default App