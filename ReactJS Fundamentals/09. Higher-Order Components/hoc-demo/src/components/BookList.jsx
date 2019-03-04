import React, { Component } from 'react';
import BookService from '../services/books-service.js';

class BookList extends Component {
    constructor(props) {
        super(props);

        this.bookService = new BookService();
        
        this.state = {
            books: [],
            error: null
        }
    }

    async componentDidMount() {
        try {
            let books = await this.bookService.getBooks();

            this.setState({books});
        } catch(error) {
            console.log(error);
            this.setState({error});
        }
    }
    render() {
        const  {books, error} = this.state;

        if(error) {
            return <h1>Something went wrong!</h1>
        }

        if(!books.length) {
            return <h1>Loading...</h1>
        }

        return (
            <ul>
                {
                    books.map(book => <li key={book.id}>{book.title}</li>)
                }
            </ul>
        )
    }
}

export default BookList;