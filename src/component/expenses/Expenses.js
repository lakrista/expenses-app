import ExpenseItem from "./ExpenseItem";
import React from "react";

const Expenses = (props) => {

    return (
        props.expenses.map(expense => (
            <ExpenseItem title={expense.title}
                         date={expense.date}
                         amount={expense.amount}/>
        ))
    );
}

export default Expenses;