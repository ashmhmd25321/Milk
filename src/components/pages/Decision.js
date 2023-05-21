import React, { useState } from 'react';
import './Decision.css';

export default function Decision() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="decision-container">
      <div className="background-image" />
      <h2 className="decision-heading">Milk Consumption</h2>
      <label htmlFor="selectOption" className="option-label">
        Select Option:
      </label>
      <select id="selectOption" value={selectedOption} onChange={handleOptionChange} className="option-select">
        <option value="">Choose an option</option>
        <option value="high">High</option>
        <option value="low">Low</option>
      </select>

      {selectedOption === 'high' && (
        <div>
          <table className="strategy-table">
            <tbody>
              <tr>
                <th>Strategy</th>
                <td>High Demand Strategy</td>
              </tr>
              <tr>
                <th>Production planning</th>
                <td>
                  Increase production capacity and adjust production schedules to meet the anticipated demand. Ensure that there
                  is an adequate supply of raw materials and ingredients to support increased production levels.
                </td>
              </tr>
              <tr>
                <th>Inventory management</th>
                <td>
                Evaluate existing inventory levels and ensure they are sufficient to fulfill the expected demand. 
                Increase stock levels if necessary to avoid stockouts and meet customer needs.
                </td>
              </tr>
              <tr>
                <th>Supply chain management</th>
                <td>
                Strengthen relationships with suppliers and ensure a reliable supply chain. 
                Monitor and communicate closely with suppliers to address any potential issues or delays in the procurement of raw materials.
                </td>
              </tr>
              <tr>
                <th>Marketing and advertising</th>
                <td>
                Allocate additional resources to marketing and advertising efforts to capitalize on the anticipated high demand. 
                Develop targeted campaigns to promote milk products, highlight their benefits, and differentiate the business from competitors.
                </td>
              </tr>
              {/* Add other strategies as needed */}
            </tbody>
          </table>
          {/* Add other elements with corresponding CSS classes */}
        </div>
      )}

      {selectedOption === 'low' && (
        <div>
          <table className="strategy-table">
              <tbody>
                <tr>
                  <th>Strategy</th>
                  <td>Low Demand Strategy</td>
                </tr>
                <tr>
                  <th>Production adjustment</th>
                  <td>
                  Evaluate and adjust production levels to align with the expected lower demand. 
                  Reduce production capacity if necessary to avoid excess inventory and minimize costs.
                  </td>
                </tr>
                <tr>
                  <th>Inventory management</th>
                  <td>
                  Review existing inventory levels and adjust them to reflect the anticipated lower demand. Avoid overstocking to prevent wastage and tie-up of resources. 
                  Consider implementing inventory optimization strategies to minimize carrying costs.
                  </td>
                </tr>
                <tr>
                  <th>Cost reduction measures</th>
                  <td>
                  Assess operational expenses and identify areas where cost reductions can be made without compromising product quality or customer service. 
                  This may involve renegotiating supplier contracts, optimizing energy usage, or streamlining production processes.
                  </td>
                </tr>
                <tr>
                  <th>Marketing and promotion</th>
                  <td>
                  Develop targeted marketing campaigns to stimulate demand and encourage sales during the anticipated low-demand period. Offer promotions, discounts, or bundles to incentivize customers and attract new ones. 
                  Emphasize the unique selling points of milk products to differentiate them from competitors.
                  </td>
                </tr>
                {/* Add other strategies as needed */}
              </tbody>
            </table>
          {/* Add other elements with corresponding CSS classes */}
        </div>
      )}
    </div>
  );
}