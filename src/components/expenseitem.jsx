import React from "react";
import "./expenseitem.css";
const ExpenseItem = () => {
  return(
    <div className="expense-item">
        <div>Date</div>
           <div className="expense-item_description">
               <h2>Title</h2>
               <div className="expense-item_price">amount</div>
          </div>
    </div>

  ) 
};

export default ExpenseItem;