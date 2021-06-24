import ExpenseItem from "./ExpenseItem";
import React, {useState} from "react";
import './Expenses.css'
import Card from "../ui/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const onChangeFilter = (year) => {
        setFilteredYear(year);
    };

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter
                    selectedYear={filteredYear}
                    onChangeFilter={onChangeFilter}/>
                {props.expenses
                    .filter(expense => expense.date.getFullYear() == filteredYear)
                    .map(expense => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        date={expense.date}
                        amount={expense.amount}/>
                ))}
            </Card>
        </div>
    );
}

export default Expenses;