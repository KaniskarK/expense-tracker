import React from "react";

const NewExpense = () => {
    return (
    <div>
       <form action="">
        <div>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="expense_title" />
        </div>
        <div>
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" name="expense_amount" min="0"/>
        </div>
        <div>
            <label htmlFor="date">Date</label>
            <input type="date" id="date" name="expense_date"/>
        </div>
         <div>
            <button type="submit">Add Expense</button>
            <button>Cancel</button>
        </div>
       </form>
    </div>
    );
}

export default NewExpense;