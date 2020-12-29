import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
export default function Root() {
  return (
    <Router>
      <div>
        <h1>Hello SPA + Nextjs</h1>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="other">Other</Link>
            </li>
          </ul>
        </div>
        <div>
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <div>
                  <h2>Home page</h2>
                </div>
              )}
            />
            <Route
              path="/about"
              exact
              render={() => (
                <div>
                  <h2>About page</h2>
                </div>
              )}
            />
            <Route
              path="/other"
              exact
              render={() => (
                <div>
                  <h2>Other page</h2>
                </div>
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  )
}
