import React from "react";

function TransactionCard({ category, amount, type, date }) {
  return (
    <tr className="ps-2">
      <td className="ps-3">{category}</td>
      <td className="ps-3 text-end">{amount}</td>
      <td className="ps-3">
        <span
          className={`${
            type === "expense" ? "text-danger" : "text-success"
          } fw-bold`}
        >
          {type.toLowerCase()}
        </span>
      </td>
      <td className="ps-3">{date}</td>
    </tr>
  );
}

function LatestTransactions() {
  const transactions = [
    { category: "Travel", amount: "4500", type: "expense", date: "2021-09-01" },
    { category: "Food", amount: "250", type: "expense", date: "2021-09-02" },
    { category: "Salary", amount: "6000", type: "income", date: "2021-09-03" },
    { category: "Food", amount: "250", type: "expense", date: "2021-09-02" },
    { category: "Salary", amount: "600", type: "income", date: "2021-09-03" },
    { category: "Food", amount: "250", type: "expense", date: "2021-09-02" },
    { category: "Salary", amount: "600", type: "income", date: "2021-09-03" },
  ];

  return (
    <div className="container">
      <div className="card shadow-sm">
        <div className="card-content">
          <div className="card-body">
            <h2 className="text-center mb-4">Latest Transactions</h2>
            <div className="row">
              <table className="table table-">
                <thead>
                  <tr className="bg-light p-2">
                    <th className="p-3">Category</th>
                    <th className="p-3 text-end ">Amount</th>
                    <th className="p-3">Type</th>
                    <th className="p-3">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction, index) => (
                    <TransactionCard
                      key={index}
                      category={transaction.category}
                      amount={transaction.amount}
                      type={transaction.type}
                      date={transaction.date}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestTransactions;
