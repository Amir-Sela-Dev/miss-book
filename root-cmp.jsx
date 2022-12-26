const { useState } = React

import { About } from "./views/about.jsx";
import { MissBooksIndex } from "./views/miss-books-index.jsx";
import { Home } from "./views/home.jsx";

export function App() {
    const [page, setPage] = useState('book')
    console.log('page is', page);

    return <section className="main-layout app">
        <header className="app-header full main-layout">
            <h1>React Miss Books App</h1>
            <nav className="app-nav">
                <a href="#" onClick={() => setPage('home')}>Home</a> |
                <a href="#" onClick={() => setPage('about')}>About</a> |
                <a href="#" onClick={() => setPage('book')}>Book shop</a>
            </nav>
        </header>

        <main>
            {page === 'home' && <Home />}
            {page === 'about' && <About />}
            {page === 'book' && <MissBooksIndex />}
        </main>
    </section>
}