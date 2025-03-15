
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useParams } from 'react-router-dom'
import Rating from '../components/ui/Rating'
import Price from '../components/ui/Price'
import Book from '../components/ui/Book'

function BookInfo({ books, addToCart, cart }) {

    const { id } = useParams()
    const book = books.find(book => +book.id === +id)

    function bookExistsInCart() {
        return cart.find(book => +book.id === +id)
    }

    return (
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <Link to="/books" className="book__link">
                                <FontAwesomeIcon icon="arrow-left" />
                            </Link>
                            <Link to="/books" className="book__link">
                                <h2 className="book__selected--title--top">Books</h2></Link>
                        </div>
                        <div className="book__selected">
                            <figure className="book__selected--figure">
                                <img src={book.url} alt="" class="book__selected--img"/>
                            </figure>
                            <div className="book__selected--description">
                                <h2 className="book__selected--title">{book.title}</h2>
                                <Rating rating={book.rating} />
                                <div className="book__selected--price">
                                    <Price salePrice={book.salePrice} originalPrice={book.originalPrice} />
                                </div>
                                <div className="book__summary">
                                    <h3 className="book__summary--title">Summary</h3>
                                    <p className="book__summary--para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nam perspiciatis quod dolorum possimus explicabo, aperiam suscipit deserunt quae labore consectetur sit nihil, incidunt voluptates sint, doloremque rerum? Accusantium, corrupti!
                                    </p>
                                    <p className="book__summary--para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nam perspiciatis quod dolorum possimus explicabo, aperiam suscipit deserunt quae labore consectetur sit nihil, incidunt voluptates sint, doloremque rerum? Accusantium, corrupti!
                                    </p>
                                    {
                                        bookExistsInCart() 
                                        ? <Link to="/cart"><button className="btn">Checkout</button></Link> 
                                        : <button className="btn" onClick={() => addToCart(book)}>Add to cart</button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="books__container">
                        <div className="row">
                            <div className="books__selected--top">
                                <div className="book__selected--top">
                                    <h2 className="book__selected--title--top">Recommended Books</h2>
                                </div>
                                <div className="books">
                                    {
                                        books
                                            .filter(book => book.rating === 5 && +book.id !== +id)
                                            .slice(0, 4)
                                            .map(book => <Book key={book.id} book={book} />)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default BookInfo
