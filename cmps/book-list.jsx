import { BookPreview } from "./book-preview.jsx"


export function BookList({ books, onRemoveBook, onSelectBook }) {
    console.log('hello from booklist')

    return <ul className="book-list">
        {
            books.map(book => <li key={book.id}>
                <BookPreview book={book} />
                <div className="book-list-btns">
                    <button onClick={() => onRemoveBook(book.id)}>Remove book</button>
                    <button onClick={() => onSelectBook(book.id)}>More details</button>
                </div>
            </li>)
        }
    </ul>


}