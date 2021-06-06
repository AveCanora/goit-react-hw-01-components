import React from "react";
import styles from "./TransactionHistory.module.css";
const TransactionHistory = ({ items }) => (
  <div className={styles.container}>
    <h1>История транзакций</h1>
    <table className={styles.transactionhistory}>
      <thead>
        <tr className={styles.tr}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
export default TransactionHistory;
