
import './index.css'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Books from './pages/Books.jsx'
import { books } from './data.js'
import BookInfo from './pages/BookInfo.jsx'
import Cart from './pages/Cart.jsx'
import { useState } from 'react'

function App() {

  const [cart, setCart] = useState([])

  function addToCart(book) {
    setCart([...cart, {...book, quantity: 1}])
  }

  function cartItems() {
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity
    })
    return counter
  }

  function changeQuantity( book, quantity ) {
    setCart(cart.map(item =>
      item.id === book.id
      ? {...item, quantity: +quantity}
      : item
    ))
  }

  function removeItem(book) {
    
    setCart(cart.filter(b => b.id !== book.id))

}

  return (
    <Router>
      <div className="App">
        <Nav cartItems={cartItems} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/books" exact render={() => <Books books={books} />} />
          <Route path="/books/:id" render={() => <BookInfo books={books} addToCart={addToCart} cart={cart} />} />
          <Route path="/cart" render={() => <Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} /> } />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
