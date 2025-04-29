import React, { useState } from 'react';
import { computerData } from '../data/computers';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const ComputersPage = () => {

  const [productSelected, setProductSelected] = useState([]);

  const companyHandler = (setPro) => {
    if (productSelected.includes(setPro)) {
      setProductSelected(productSelected.filter(item => item !== setPro));
    } else {
      setProductSelected([...productSelected, setPro]);
    }
  };

  const filteredProduct = productSelected.length === 0
    ? computerData
    : computerData.filter((filterpro) => productSelected.includes(filterpro.company));

  return (
    <div>
      <div>
        <Navbar />
      </div>

      {/* Checkbox Selection Section */}
      <div className="CheckBoxSelected">
        {computerData.map((theProis, index) => (
          <div key={index}>
            <label>
              <input
                type="checkbox"
                checked={productSelected.includes(theProis.company)}
                onChange={() => {
                  companyHandler(theProis.company);
                }}
              />
              {theProis.company}
            </label>
          </div>
        ))}
      </div>

      {/* Product Grid Section */}
      <div className="ProductPageContainerofPages">
        <h1>Computers</h1>
        <div className="ProductPageGridofPages">
          {filteredProduct.map((item, index) => (
            <div className="ProductCardofPages" key={index}>
              <Link to={`/computerSingle/${item.id}`}>
                <img src={item.image} alt={item.company} />
              </Link>
              <h3>{item.company} {item.model}</h3>
              <p>Price: {item.price}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ComputersPage;
