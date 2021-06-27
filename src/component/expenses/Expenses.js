import React, {useState} from "react";
import './Expenses.css'
import Card from "../ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const onChangeFilter = (year) => {
        setFilteredYear(year);
    };

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
        <li>
            <Card className='expenses'>
                <ExpensesFilter
                    selectedYear={filteredYear}
                    onChangeFilter={onChangeFilter}/>
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList expenses={filteredExpenses}/>
            </Card>
        </li>
    );
}

export default Expenses;