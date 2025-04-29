import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { kitchenData } from '../data/kitchen';
import { Link } from 'react-router-dom';

const KitchenPage = () => {
  const [productSelected, setProductSelected] = useState([]);

  // Handle company checkbox selection
  const companyHandler = (company) => {
    if (productSelected.includes(company)) {
      setProductSelected(productSelected.filter(item => item !== company));
    } else {
      setProductSelected([...productSelected, company]);
    }
  };

  // Filter the products based on selected companies
  const filteredProducts = productSelected.length === 0
    ? kitchenData
    : kitchenData.filter(item => productSelected.includes(item.brand));

  return (
    <div>
      <div>
        <Navbar />
      </div>

      {/* Checkbox Section */}
      <div className="CheckBoxSelected">
        {kitchenData.map((item, index) => (
          <div key={index}>
            <label>
              <input
                type="checkbox"
                checked={productSelected.includes(item.brand)}
                onChange={() => companyHandler(item.brand)}
              />
              {item.brand}
            </label>
          </div>
        ))}
      </div>

      {/* Products Grid */}
      <div className="ProductPageContainerofPages">
        <h1>Kitchen</h1>
        <div className="ProductPageGridofPages">
          {filteredProducts.map((item, index) => (
            <div className="ProductCardofPages" key={index}>
              <Link to={`/kitchenSingle/${item.id}`}>
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

export default KitchenPage;
