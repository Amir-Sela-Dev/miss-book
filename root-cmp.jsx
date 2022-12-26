const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM

import { About } from "./views/about.jsx";
import { MissBooksIndex } from "./views/miss-books-index.jsx";
import { Home } from "./views/home.jsx";
import { AppHeader } from "./cmps/app-header.jsx";
import { BookDetails } from "./views/book-details.jsx";
import { UserMsg } from "./cmps/user-msg.jsx";
import { BookEdit } from "./views/book-edit.jsx";

export function App() {

    return <Router>
        <section className="main-layout app">

            <AppHeader />

            <main>
                <Routes>

                    <Route element={<Home />} path="/" />
                    <Route element={<About />} path="/about" />
                    <Route element={<MissBooksIndex />} path="/book" />
                    <Route element={<BookDetails />} path="/book/:bookId" />
                    <Route element={<BookEdit />} path="/book/edit" />


                </Routes>

            </main>
            <UserMsg />
        </section>
    </Router>
}