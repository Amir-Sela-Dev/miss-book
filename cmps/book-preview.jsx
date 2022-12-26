export function BookPreview({ book }) {

    return <article className="book-preview">
        <h2>Book title: {book.title}</h2>
        <h4> By: {book.authors},  {book.publishedDate}</h4>
        <img src={book.thumbnail} />
        <h3>price: {book.listPrice.amount} {book.listPrice.currencyCode}</h3>
    </article>
}