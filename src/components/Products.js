import React from 'react'

function Products(props) {
  return (
    <div>
      <ul className="products">
        {props.products.map(product => (
          <li key={product._id}>
            <div className="product">
              <a href={`#${product._id}`}>
                <img src={product.image} alt={product.title} />
                <p>{product.title}</p>
              </a>
              <div className="product-price">
                <div>
                  {product.price}
                </div>
                <button className="button primary">Add to Cart</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Products
