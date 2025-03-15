
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'
import Price from './Price'

function Book({ book }) {

    const [img, setImg] = useState()

    const mountedRef = useRef(true)

    useEffect(() => {
        const image = new Image()
        image.src = book.url
        image.onload = () => {
            if (mountedRef.current) {
                setImg(image)
            }
        }
        return () => mountedRef.current = false
    })

    return (

        <div className="book">

            {
                img ?
                    <>
                        <Link to={`/books/${book.id}`}>
                            <figure>
                                <img src={img.src} alt="" />
                            </figure>
                        </Link>
                        <div className="book__title">
                            <Link to={`/books/${book.id}`} className="book__title--link">{book.title}</Link>
                        </div>
                        <div className="book__ratings">
                            <Rating rating={book.rating} />
                        </div>
                        <div className="book__price">
                            <Price salePrice={book.salePrice} originalPrice={book.originalPrice} />
                        </div>
                    </> :
                    <>
                        <div className="book__img--skelly skelly"></div>
                        <div className="book__title--skelly skelly"></div>
                        <div className="book__rating--skelly skelly"></div>
                        <div className="book__--skelly skelly"></div>
                    </>
            }

        </div>
    )
}

export default Book
