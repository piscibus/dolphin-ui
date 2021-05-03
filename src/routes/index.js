import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'
import routes from './routes'
import { connect } from 'react-redux'

/**
 * Returns a public component
 * @param {Object} props
 */

const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => (
                <React.Suspense fallback={<h1>Loading</h1>}>
                    <Component {...props} allowedType={rest.allowedType} />
                </React.Suspense>
            )}
        />
    )
}

/**
 * Returns a private component if user is authenticated and have sufficient permissions
 * @param {Object} props
 */
const PrivateRoute = ({
    component: Component,
    isAuthenticated,
    roles,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            render={(props) => (
                <React.Suspense fallback={<h1>Loading</h1>}>
                    {isAuthenticated ? (
                        <Component path={rest.path} {...props} />
                    ) : (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: { from: props.location },
                            }}
                        />
                    )}
                </React.Suspense>
            )}
        />
    )
}

const Routes = ({ isAuthenticated, roles }) => {
    return (
        <Router>
            <Switch>
                {routes.map((route, i) => {
                    if (route.isAuth) {
                        return (
                            <PrivateRoute
                                roles={roles}
                                isAuthenticated={isAuthenticated}
                                key={i}
                                {...route}
                            />
                        )
                    }
                    return (
                        <PublicRoute
                            isAuthenticated={isAuthenticated}
                            roles={roles}
                            key={i}
                            {...route}
                        />
                    )
                })}
            </Switch>
        </Router>
    )
}

function mapStateToProps(state) {
    return {
        isAuthenticated: state.authReducer.isAuthenticated,
    }
}

export default connect(mapStateToProps)(Routes)
