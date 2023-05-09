import { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState('2020');
  // const [list, setFilteredList] = useState(props.items);   //Second variant

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
    // setFilteredList(props.items.filter(expense => 
    // expense.date.getFullYear().toString() === selectedYear  //Second variant
    // ))
  };
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;