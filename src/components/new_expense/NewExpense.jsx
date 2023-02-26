import React from "react";
import ExpenseForm from "./expense_form/Expenseform";
import "./NewExpense.css";
const NewExpense = () => {
    const onSave=(new_expense={})=>{
        const expense={
            ...new_expense,
            id:Math.random().toString()
        }
        console.log(expense);
    }
    return (
    <div className="new-expense">
       <ExpenseForm onFormSubmit={onSave} />
    </div>
    );
}

export default NewExpense;