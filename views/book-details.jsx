const { useEffect, useState } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

import { AddReview } from "../cmps/add-review.jsx";
import { BookDescription } from "../cmps/long-txt.jsx"
import { ReviewList } from "../cmps/review-list.jsx";
import { bookService } from './../services/book.service.js';


export function BookDetails() {
    const [book, setBook] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadBook()
    }, [])



    function loadBook() {
        bookService.get(params.bookId)
            .then((book) => setBook(book))
            .catch((err) => {
                console.log('Had issues in book details', err)
                navigate('/book')
            })
    }

    function onGoBack() {
        navigate('/book')
    }





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

    if (!book) return <div>Loading...</div>
    return <section className="book-details">
        <h1>Book title : {book.title}</h1>
        <h2> By: {book.authors},  {book.publishedDate} {getPublishedDateDisplay()}</h2>
        <img src={book.thumbnail} />
        <h2>{getPageCountDisplay()} ({book.pageCount} Pages)</h2>
        <BookDescription txt={book.description} />
        <h5 className={getPriceColor()}  >price: {book.listPrice.amount} {book.listPrice.currencyCode} {(book.listPrice.isOnSale) ? '(🤑On sale!!!🤑)' : ''}</h5>
        {(book.review) && <ReviewList bookId={params.bookId} />}
        <AddReview bookId={params.bookId} />
        <button className="back-btn" onClick={onGoBack}>Go Back</button>
    </section>
}