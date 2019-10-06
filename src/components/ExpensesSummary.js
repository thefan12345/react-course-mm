import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/Expenses-total';

export const ExpensesSummary = ({ expenseCount, ExpensesTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses' ;
    const formattedExpensesTotal = numeral(ExpensesTotal / 100).format('$0,0.00');
    
    return (
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totaling {formattedExpensesTotal}</h1>
        </div>
    );
};

const mapSateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        ExpensesTotal: selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapSateToProps)(ExpensesSummary);