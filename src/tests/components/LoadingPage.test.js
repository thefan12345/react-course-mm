import React from 'react';
import { shallow } from 'enzyme';
import LoadingPage from '../../components/LoadingPage';

test("Test should correctly render loading page", () => {
    const wrapper = shallow(<LoadingPage />);
    expect(wrapper).toMatchSnapshot();
});