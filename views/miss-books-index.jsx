const { useState, useEffect } = React
const { Link } = ReactRouterDOM

import { BookList } from '../cmps/book-list.jsx';
import { BookDetails } from './book-details.jsx';
import { BookFilter } from '../cmps/book-filter.jsx';



import { bookService } from './../services/book.service.js';
import { eventBusService, showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js';


export function MissBooksIndex() {
    const [books, setBooks] = useState([])
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())



    useEffect(() => {
        loadBooks()
    }, [filterBy])

    function loadBooks() {
        bookService.query(filterBy).then(booksToUpdate => {
            setBooks(booksToUpdate)
        })
    }

    function onRemoveBook(bookId) {
        bookService.remove(bookId).then(() => {
            const updatedBooks = books.filter(book => book.id !== bookId)
            setBooks(updatedBooks)
            showSuccessMsg('Book removed!')
        })
            .catch((err) => {
                console.log('Had issues removing', err)
                showErrorMsg('Could not remove book, try again please!')
            })

    }



    function onSetFilter(filterByFromFilter) {
        setFilterBy(filterByFromFilter)
    }







    return <section className="miss-book-index">
        <div className="main-book-list">
            <BookFilter onSetFilter={onSetFilter} />

            <div className="add-books-btns">
                <div className=" btn add-btn">
                    <Link to="/book/edit">Add Your own Book!</Link>
                </div>
                <div className=" btn add-btn" >
                    <Link to="/book/add-book">Add Book!</Link>
                </div>
            </div>

            <BookList books={books}
                onRemoveBook={onRemoveBook}
            />
        </div>



    </section>
}
