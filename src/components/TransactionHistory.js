import React from "react";

const TransactionHistory = ({ items }) => (
  <div>
    <h1>История транзакций</h1>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    {items.map((item) => (
      <table class="transaction-history">
        <tbody>
          <tr>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        </tbody>
      </table>
    ))}
  </div>
);
export default TransactionHistory;
