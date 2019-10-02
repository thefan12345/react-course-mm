import selectExpensesTotal from '../../selectors/Expenses-total';
import expenses from '../fixtures/expenses';

test('shoult return 0 if no expenses found', () => {
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
});

test('Should correctly add up a single expense', () => {
    const res = selectExpensesTotal([expenses[0]]);
    console.log("res:" + res);
    expect(res).toBe(195);
});

test('Should correctly add up a multiple expenses', () => {
    const res = selectExpensesTotal(expenses);
    expect(res).toBe(114195);
});