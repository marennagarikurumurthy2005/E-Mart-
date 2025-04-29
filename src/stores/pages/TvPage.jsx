import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { tvData } from '../data/tv';
import { Link } from 'react-router-dom';

const TvPage = () => {
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
  const filteredProduct = productSelected.length === 0
    ? tvData
    : tvData.filter(item => productSelected.includes(item.brand));

  // Get unique list of companies for checkboxes
  const uniqueCompanies = [...new Set(tvData.map(item => item.brand))];

  return (
    <div>
      <div>
        <Navbar />
      </div>

      {/* Checkbox Section */}
      <div className="CheckBoxSelected">
        {uniqueCompanies.map((company, index) => (
          <div key={index}>
            <label>
              <input
                type="checkbox"
                checked={productSelected.includes(company)}
                onChange={() => companyHandler(company)}
              />
              {company}
            </label>
          </div>
        ))}
      </div>

      {/* Products Grid */}
      <div className="ProductPageContainerofPages">
        <h1>Televisions</h1>
        <div className="ProductPageGridofPages">
          {filteredProduct.map((item, index) => (
            <div className="ProductCardofPages" key={index}>
              <Link to={`/tvSingle/${item.id}`}>
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

export default TvPage;
