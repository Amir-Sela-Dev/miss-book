const { useState, useEffect } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

import { bookService } from "../services/book.service.js"
import { utilService } from "../services/util.service.js";
import { googleBookService } from "../services/google-book.service.js"
import { eventBusService, showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js';

import { SearchedBooksList } from "./searched-books-list.jsx"




export function AddBook() {
    const [booksToSearch, setBooksToSearch] = useState(null)
    const [booksToEdit, setBooksToEdit] = useState([])


    function handleChange({ target }) {
        let { value } = target
        setBooksToSearch(value)
    }

    function onAddBook(ev) {
        ev.preventDefault()
        googleBookService.query(booksToSearch)
            .then(books => {
                setBooksToEdit(books)
            })
    }

    function onSaveBook(book) {
        bookService.save(book)
        showSuccessMsg('Book added!')

    }


    return <section className="add-book">
        <form onSubmit={onAddBook}>
            <label htmlFor="searchBook">Search book</label>
            <input type="text"
                name="searchBook"
                id="searchBook"
                placeholder="Search book..."
                onChange={handleChange}
            />
            <button>Search</button>
        </form>

        {(booksToEdit) && <SearchedBooksList books={booksToEdit} onSaveBook={onSaveBook} />}
    </section>

}