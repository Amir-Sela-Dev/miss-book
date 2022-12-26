const { useState, useEffect } = React

import { BookList } from '../cmps/book-list.jsx';
import { BookDetails } from './book-details.jsx';
import { BookFilter } from '../cmps/book-filter.jsx';



import { bookService } from './../services/book.service.js';


export function MissBooksIndex() {
    const [books, setBooks] = useState([])
    const [selectedBook, setSelectedBook] = useState(null)
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
        })
    }

    function onSelectBook(bookId) {
        bookService.get(bookId).then((book) => {
            setSelectedBook(book)
        })
    }


    function onSetFilter(filterByFromFilter) {
        setFilterBy(filterByFromFilter)
    }







    return <section className="miss-book-index">
        {!selectedBook && <div className="main-car-list">
            <BookFilter onSetFilter={onSetFilter} />
            <BookList books={books}
                onRemoveBook={onRemoveBook}
                onSelectBook={onSelectBook} />
        </div>
        }

        <div>
            {selectedBook && <BookDetails
                book={selectedBook}
                onGoBack={() => setSelectedBook(null)}
            />}
        </div>

    </section>
}
