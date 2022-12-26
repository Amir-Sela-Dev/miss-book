const { useState, useEffect } = React

import { bookService } from "../services/book.service.js"

export function BookFilter({ onSetFilter }) {

    const [filterByToEdit, setFilterByToEdit] = useState(bookService.getDefaultFilter())

    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        let { value, name: field, type } = target
        value = (type === 'number') ? +value : value
        setFilterByToEdit((prevFilter) => {
            console.log('field', field)
            return { ...prevFilter, [field]: value }
        })
    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
        onSetFilter(filterByToEdit)
    }

    return <section className="book-filter">
        <h2 className='filter-title'>Filter</h2>
        <form onSubmit={onSubmitFilter}>
            <label htmlFor="title">Book name:</label>
            <input className='book-name' type="text"
                id="title"
                name="title"
                placeholder="By book name"
                value={filterByToEdit.title}
                onChange={handleChange}
            />

            <label htmlFor="price">Price:</label>
            <input className='book-price' type="number"
                id="price"
                name="price"
                placeholder="By price"
                value={filterByToEdit.price}
                onChange={handleChange}
            />

            <label htmlFor="Date">From Date:</label>
            <input className='book-Date' type="number"
                id="Date"
                name="publishedDate"
                placeholder="By published Date"
                value={filterByToEdit.publishedDate}
                onChange={handleChange}
            />

            <label htmlFor="authors">Authors:</label>
            <input className='book-authors' type="text"
                id="authors"
                name="authors"
                placeholder="By authors"
                value={filterByToEdit.authors}
                onChange={handleChange}
            />

            <button>Filter books!</button>
        </form>

    </section>
}