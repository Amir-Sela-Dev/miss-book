import { BookDescription } from "../cmps/long-txt.jsx"


export function BookDetails({ book, onGoBack }) {

    function getPageCountDisplay() {
        if (book.pageCount < 100) return 'Light Reading '
        else if (book.pageCount > 500) return 'Serious Reading'
        else if (book.pageCount > 200) return 'Descent Reading'
    }

    function getPublishedDateDisplay() {
        let year = new Date().getFullYear()
        if ((year - book.publishedDate) > 10) return '(Vintage)'
        else if ((year - book.publishedDate) <= 1) return '(New)'
    }

    function getPriceColor() {
        if (book.listPrice.amount > 150) return 'expensive'
        else if (book.listPrice.amount < 60) return 'cheap'
    }






    return <section className="book-details">
        <h1>Book title : {book.title}</h1>
        <h2> By: {book.authors},  {book.publishedDate} {getPublishedDateDisplay()}</h2>
        <img src={book.thumbnail} />
        <h2>{getPageCountDisplay()} ({book.pageCount} Pages)</h2>
        <BookDescription txt={book.description} />
        <h5 className={getPriceColor()}  >price: {book.listPrice.amount} {book.listPrice.currencyCode} {(book.listPrice.isOnSale) ? '(🤑On sale!!!🤑)' : ''}</h5>
        <button onClick={onGoBack}>Go Back</button>
    </section>
}