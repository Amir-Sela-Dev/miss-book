const { NavLink } = ReactRouterDOM

export function AppHeader() {

    return <header className="app-header full main-layout">
        <h1>React Miss Books App</h1>
        <nav className="app-nav">
            <NavLink to="/">Home</NavLink> |
            <NavLink to="/book">Book shop</NavLink> |
            <NavLink to="/about">About</NavLink>
        </nav>
    </header>
}

