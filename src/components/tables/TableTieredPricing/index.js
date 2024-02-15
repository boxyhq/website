import './table-tiered-pricing.css';

const TableTieredPricing = () => {
  return (
    <table className="table-tiered-pricing">
      <thead>
        <tr>
          <th scope="col">Tier</th>
          <th scope="col">Connection count</th>
          <th scope="col">Price per connection</th>
          <th scope="col">Tier discount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>1 - 20</td>
          <td>$49 per month</td>
          <td>-</td>
        </tr>
        <tr>
          <td>2</td>
          <td>21 - 40</td>
          <td>$39 per month</td>
          <td>20% +</td>
        </tr>
        <tr>
          <td>3</td>
          <td>41 - 60</td>
          <td>$29 per month</td>
          <td>40% +</td>
        </tr>
        <tr>
          <td>4</td>
          <td>61 - 100</td>
          <td>$19 per month</td>
          <td>60% +</td>
        </tr>
        <tr>
          <td>100</td>
          <td>101+</td>
          <td>$14 per month</td>
          <td>70% +</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableTieredPricing;
