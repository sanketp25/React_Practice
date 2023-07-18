import React from "react";

interface Expense {
  id: number;
  description: string;
  category: string;
  amount: number;
}

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}
export const ExpenseList = ({ expenses, onDelete }: Props) => {
    if(expenses.length ===0) return null;
  return (
   
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Delete?</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(expense.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
            <td>Total</td>
            <td>${expenses.reduce((acc,expenses)=>expenses.amount+acc,0).toFixed(2)}</td>
            <td></td>
            <td></td>
        </tr>
      </tfoot>
    </table>
  );
};
