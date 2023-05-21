import React, { useState } from 'react';
import './Decision.css';

export default function Decision2() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="decision-container">
      <div className="background-image" />
      <h2 className="decision-heading">Milk Supply</h2>
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
                <th>Production Adjustments</th>
                <td>
                Review production schedules and adjust accordingly to align with the predicted supply. 
                This might involve reducing production or temporarily halting certain products to avoid overstocking.
                </td>
              </tr>
              <tr>
                <th>Inventory management</th>
                <td>
                Assess the storage capacity and expiration dates of existing inventory. 
                Implement strategies to optimize storage and minimize waste, such as increasing production of products with longer shelf life or exploring alternative storage options.
                </td>
              </tr>
              <tr>
                <th>Marketing and Promotion</th>
                <td>
                Develop targeted marketing campaigns and promotional offers to stimulate demand and encourage consumers to purchase milk products. 
                This can include discounts, bundle deals, or collaborations with other businesses.
                </td>
              </tr>
              <tr>
                <th>Diversification</th>
                <td>
                Explore opportunities to diversify product offerings, such as creating new dairy products or developing value-added products. 
                This can help utilize excess milk supply by transforming it into alternative products with longer shelf life or higher demand.
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
                  <th>Supply Chain Management</th>
                  <td>
                  Assess the reasons for the low milk supply, such as seasonal fluctuations, weather conditions, or changes in the dairy industry. 
                  Collaborate with suppliers to understand the situation and explore ways to stabilize the supply chain.
                  </td>
                </tr>
                <tr>
                  <th>Inventory Optimization</th>
                  <td>
                  Review existing inventory levels and prioritize products with higher demand. 
                  Implement strategies to optimize inventory turnover and minimize waste, such as reducing production of low-demand products or implementing just-in-time inventory management.
                  </td>
                </tr>
                <tr>
                  <th>Supplier Relationships</th>
                  <td>
                  Strengthen relationships with milk suppliers and explore options for securing additional or alternative sources of milk. 
                  This may involve diversifying supplier partnerships or establishing long-term contracts to ensure a stable supply.
                  </td>
                </tr>
                <tr>
                  <th>Pricing and Profitability</th>
                  <td>
                  Evaluate the impact of low milk supply on pricing and profitability. 
                  Consider adjusting prices to reflect the scarcity and maintain profitability while remaining competitive in the market.
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