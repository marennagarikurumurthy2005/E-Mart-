import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { fridgeData } from '../data/fridge';
import { Link } from 'react-router-dom';

const FridgePage = () => {
  const [productSelected, setProductSelected] = useState([]);

  const companyHandler = (setPro) => {
    if (productSelected.includes(setPro)) {
      setProductSelected(productSelected.filter(item => item !== setPro));
    } else {
      setProductSelected([...productSelected, setPro]);
    }
  };

  const filteredProduct = productSelected.length === 0
    ? fridgeData
    : fridgeData.filter((filterpro) => productSelected.includes(filterpro.brand));

  return (
    <div>
      <div>
        <Navbar />
      </div>

      {/* Checkbox Section */}
      <div className="CheckBoxSelected">
        {fridgeData.map((theProis, index) => (
          <div key={index}>
            <label>
              <input
                type="checkbox"
                checked={productSelected.includes(theProis.brand)}
                onChange={() => {
                  companyHandler(theProis.brand);
                }}
              />
              {theProis.brand}
            </label>
          </div>
        ))}
      </div>

      {/* Products Grid */}
      <div className="ProductPageContainerofPages">
        <h1>Re-Fridgerator</h1>
        <div className="ProductPageGridofPages">
          {filteredProduct.map((item, index) => (
            <div className="ProductCardofPages" key={index}>
              <Link to={`/fridgeSingle/${item.id}`}>
                <img src={item.image} alt={item.brand} />
              </Link>
              <h3>{item.brand} {item.model}</h3>
              <p>Price: {item.price}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default FridgePage;
