import React, { useState } from 'react';
import { booksData } from '../data/books';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const BooksPage = () => {

  const [productSelected, setProductSelected] = useState([]);

  const companyHandler = (setPro) => {
    if (productSelected.includes(setPro)) {
      setProductSelected(productSelected.filter(item => item !== setPro));
    } else {
      setProductSelected([...productSelected, setPro]);
    }
  };

  const filteredProduct = productSelected.length === 0
    ? booksData
    : booksData.filter((filterpro) => productSelected.includes(filterpro.author));

  return (
    <div>
      <div>
        <Navbar />
      </div>

      {/* Checkbox Selection Section */}
      <div className="CheckBoxSelected">
        {booksData.map((theProis, index) => (
          <div key={index}>
            <label>
              <input
                type="checkbox"
                checked={productSelected.includes(theProis.author)}
                onChange={() => {
                  companyHandler(theProis.author);
                }}
              />
              {theProis.author}
            </label>
          </div>
        ))}
      </div>

      {/* Product Grid Section */}
      <div className="ProductPageContainerofPages">
        <h1>Books</h1>
        <div className="ProductPageGridofPages">
          {filteredProduct.map((item, index) => (
            <div className="ProductCardofPages" key={index}>
              <Link to={`/bookSingle/${item.id}`}>
                <img src={item.image} alt={item.title} />
              </Link>
              <h3>{item.title} Author:  {item.author}</h3>
              <p>Price: {item.price} </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default BooksPage;
