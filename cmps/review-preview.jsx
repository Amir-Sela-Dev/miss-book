export function ReviewPreview({ review }) {

    function getStars() {
        if (review.rating === 5) return '⭐⭐⭐⭐⭐'
        else if (review.rating === 4) return '⭐⭐⭐⭐'
        else if (review.rating === 3) return '⭐⭐⭐'
        else if (review.rating === 2) return '⭐⭐'
        else return '⭐'
    }

    return <article className="review-preview">
        <h3>{review.fullname} :</h3>
        <h3>Rate:{getStars()} </h3>
        <h3>Reade at:{review.readAt}</h3>
    </article>
}