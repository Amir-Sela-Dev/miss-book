const { useState } = React

export function BookDescription({ txt }) {

    const [isShowMore, setIsShowMore] = useState(false)



    if (!txt) return ''
    return <section className="book-long-details">
        <div className='desc'>
            <p>
                {(isShowMore) ? txt : `${txt.substring(0, 100)}`}
                {(txt.length > 100) && <button onClick={() => setIsShowMore(!isShowMore)} >{(isShowMore) ? 'Show less' : 'Show more...'}</button>}
            </p>
        </div>
    </section>
}