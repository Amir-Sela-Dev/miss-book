const { useState, useEffect } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

import { bookService } from "../services/book.service.js"



export function AddReview({ bookId }) {
    const [reviewToEdit, setReviewToEdit] = useState(bookService.getEmptyReview())
    const navigate = useNavigate()



    function handleChange({ target }) {
        let { value, type, name: field } = target
        value = type === 'number' ? +value : value

        setReviewToEdit((prevReview) => ({ ...prevReview, [field]: value }))
    }

    function onSaveReview(ev) {
        ev.preventDefault()
        console.log('wow')
        bookService.addReview(bookId, reviewToEdit)
        setTimeout(() => {
            navigate('/book')
        }, 3000);
    }


    console.log(reviewToEdit)


    return <section className="add-review">
        <form className="review-form" onSubmit={onSaveReview}>
            <table>
                <thead>
                    <tr>
                        <th colSpan="2" className="title">Like the book? Add a review!</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><label htmlFor="fullname"> Your full name? </label></td>
                        <td>
                            <input type="text"
                                name="fullname"
                                id="fullname"
                                placeholder="Enter your fullname..."
                                value={reviewToEdit.fullname}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td><label htmlFor="rating"> Your rate? </label></td>
                        <td>
                            <input type="range"
                                min="1"
                                max="5"
                                name="rating"
                                id="rating"
                                placeholder="Enter your rating..."
                                value={reviewToEdit.rating}
                                onChange={handleChange}
                            />
                            <span>{reviewToEdit.rating}</span>
                        </td>
                    </tr>
                    <tr>
                        <td><label htmlFor="readAt"> When have you read it? </label></td>
                        <td>
                            <input type="date"
                                name="readAt"
                                id="readAt"
                                placeholder="Enter date"
                                value={reviewToEdit.readAt}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th colSpan="2" className="review-btn"><button>Add review</button></th>
                    </tr>
                </tbody>
            </table>

        </form>
    </section>
}