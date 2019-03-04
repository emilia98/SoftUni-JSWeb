import React from 'react';
import BookService from '../services/books-service.js';
import withDataFromService from './hocs/with-data-from-service.jsx';

const BookListWithHoc = (props) => {
    const { data: books } = props;

    return (
        <ul>
            {
                books.map(book => <li key={book.id}>{book.title}</li>)
            }
        </ul>
    )
}

export default withDataFromService(BookListWithHoc, [], new BookService().getBooks);