import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/Expenses-total';
import { Link } from 'react-router-dom';

export const ExpensesSummary = ({ expenseCount, ExpensesTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses' ;
    const formattedExpensesTotal = numeral(ExpensesTotal / 100).format('$0,0.00');
    
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totaling <span>{formattedExpensesTotal}</span></h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
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