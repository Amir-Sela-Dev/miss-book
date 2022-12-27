
export function SearchedBooksList({ books, onSaveBook }) {

    return <ul className="searched-book-list ">
        {
            books.map(book =>
                <li key={book.title}>
                    <div>
                        {book.title}
                        <button className="btn" onClick={() => onSaveBook(book)}>+</button>
                    </div>
                    <img src={book.thumbnail} alt="" />
                </li>

            )
        }
    </ul>

}