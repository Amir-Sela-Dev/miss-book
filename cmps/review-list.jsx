const { useEffect, useState } = React

import { ReviewPreview } from "./review-preview.jsx"
import { bookService } from './../services/book.service.js';


export function ReviewList({ bookId }) {
    const [book, setBook] = useState(null)

    useEffect(() => {
        loadBook()
    }, [])



    function loadBook() {
        bookService.get(bookId)
            .then((book) => {
                setBook(book)
            })
            .catch((err) => {
                console.log('Had issues in book details', err)
            })
    }




    if (!book) return <div>Loading...</div>
    return <ul className="review-list">
        <h2>Book review list!</h2>
        {
            book.review
                .map((review, i) => <li key={i}>
                    <ReviewPreview review={review} />
                </li>)
        }
    </ul>


}