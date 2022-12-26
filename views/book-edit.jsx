const { useState, useEffect } = React
const { useNavigate, useParams, Link } = ReactRouterDOM

import { bookService } from "../services/book.service.js"
import { eventBusService, showSuccessMsg } from "../services/event-bus.service.js"


export function BookEdit() {
    const [bookToEdit, setBookToEdit] = useState(bookService.getEmptyBook())
    const navigate = useNavigate()

    function handleChange({ target }) {
        let { value, type, name: field } = target
        value = type === 'number' ? +value : value
        if (field === 'listPrice') {
            value = {
                ...bookToEdit.listPrice,
                amount: +value
            }
        }
        setBookToEdit((prevBook) => ({ ...prevBook, [field]: value }))
    }

    function onSaveBook(ev) {
        ev.preventDefault()
        bookService.save(bookToEdit).then((book) => {
            showSuccessMsg('Book saved!')
            navigate('/book')
        })

    }
    console.log(bookToEdit)

    return <section className="book-edit">
        <h2>{bookToEdit.id ? 'Edit this book' : 'Add a new book'}</h2>

        <div className="form-container">
            <form className='book-edit-form' onSubmit={onSaveBook}>
                <label htmlFor="title">Title : </label>
                <input type="text"
                    name="title"
                    id="title"
                    placeholder="Enter book title..."
                    value={bookToEdit.title}
                    onChange={handleChange}
                />
                <label htmlFor="authors">Authors : </label>
                <input type="text"
                    name="authors"
                    id="authors"
                    placeholder="Enter authors (separate by comma)"
                    value={bookToEdit.authors}
                    onChange={handleChange}
                />
                <label htmlFor="publishedDate">Year of publish:  </label>
                <input type="number"
                    name="publishedDate"
                    id="publishedDate"
                    placeholder="Enter published Date..."
                    value={bookToEdit.publishedDate}
                    onChange={handleChange}
                />
                <label htmlFor="pageCount">Page count:  </label>
                <input type="number"
                    name="pageCount"
                    id="pageCount"
                    placeholder="Enter page count..."
                    value={bookToEdit.pageCount}
                    onChange={handleChange}
                />
                <label htmlFor="amount">Book price:  </label>
                <input type="number"
                    name="listPrice"
                    id="amount"
                    placeholder="Enter book price..."
                    value={bookToEdit.listPrice.amount}
                    onChange={handleChange}
                />


                <div>
                    <button>{bookToEdit.id ? 'Save' : 'Add'}</button>
                    <Link className="btn cancel" to="/book">Cancel</Link>
                </div>
            </form>
            <img src="assets/img/book.png" alt="" />

        </div>

    </section>



}