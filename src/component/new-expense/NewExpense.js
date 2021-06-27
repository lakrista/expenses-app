import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
import React, {useState} from "react";

const NewExpense = (props) => {
    const [showExpenseForm, setShowExpenseForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);

        hideExpenseFormHandler();
    };

    const hideExpenseFormHandler = () => {
        setShowExpenseForm(false);
    };

    const showExpenseFormHandler = () => {
        setShowExpenseForm(true);
    };

    return <div className='new-expense'>
        {showExpenseForm &&
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}
                     onCancelExpenseData={hideExpenseFormHandler}/>
        }
        {!showExpenseForm &&
            <button onClick={showExpenseFormHandler}>Add New Expense</button>
        }
    </div>
};

export default NewExpense;