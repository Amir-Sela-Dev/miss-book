const { Link } = ReactRouterDOM

import { BookPreview } from "./book-preview.jsx"


export function BookList({ books, onRemoveBook }) {
    console.log('hello from booklist')

    return <ul className="book-list">
        {
            books.map(book => <li key={book.id}>
                <BookPreview book={book} />
                <div className="book-list-btns">
                    <button onClick={() => onRemoveBook(book.id)}>Remove book</button>
                    <Link className="btn" to={`/book/${book.id}`}>More deatils</Link>
                </div>
            </li>)
        }
    </ul>


}