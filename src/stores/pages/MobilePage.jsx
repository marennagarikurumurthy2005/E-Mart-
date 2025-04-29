import React, { useState } from 'react';
import { mobileData } from '../data/mobiles'; // assuming same data file
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const MobilePage = () => {
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
    ? mobileData
    : mobileData.filter(item => productSelected.includes(item.company));

  // Get unique list of companies for checkboxes
  const uniqueCompanies = [...new Set(mobileData.map(item => item.company))];

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
        <h1>Mobiles</h1>
        <div className="ProductPageGridofPages">
          {filteredProduct.map((item, index) => (
            <div className="ProductCardofPages" key={index}>
              <Link to={`/mobileSingle/${item.id}`}>
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

export default MobilePage;
