import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary} from '../../components/ExpensesSummary';

test('Should correctly render expensesSummary with one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} ExpensesTotal={235} />)
    expect(wrapper).toMatchSnapshot();
});

test('Should correctly render expensesSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} ExpensesTotal={23242343} />)
    expect(wrapper).toMatchSnapshot();
});