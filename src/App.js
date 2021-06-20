import React from "react";
import './component/expenses/Expenses.css'
import Expenses from "./component/expenses/Expenses";
import Card from "./component/ui/Card";
import NewExpense from "./component/new-expense/NewExpense";

const App = () => {
    const expenses = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        {
            id: 'e2',
            title: 'New TV',
            amount: 799.49,
            date: new Date(2021, 2, 12)
        },
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2021, 5, 12),
        },
    ];
    return (
        <div>
            <NewExpense/>
            <Card className='expenses'>
                <Expenses expenses={expenses}/>
            </Card>
        </div>
    );
}

export default App;
