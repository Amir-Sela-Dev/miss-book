import { bookService } from './../services/book.service.js';
import { utilService } from './util.service.js'

export const googleBookService = {
    query
}

function query(search) {

    const url = `https://www.googleapis.com/books/v1/volumes?q=${search}`

    return axios.get(url)
        .then((res) => {
            const items = []
            res.data.items.forEach(item => {
                const { title, authors, subtitle, publishedDate, description, pageCount, language } = item.volumeInfo
                let book = bookService.getEmptyBook()
                book = {
                    ...book, title, authors, subtitle, publishedDate, description, pageCount, language
                }
                book.thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail
                items.push(book)
            })
            return items

        }).catch(() => {
            throw new Error('Could not find books: ' + search)
        })
}

