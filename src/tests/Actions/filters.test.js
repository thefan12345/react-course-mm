import {
    setStartDate,
    setEndDate,
    setTextFilter,
    sortByAmount,
    sortByDate
} from '../../actions/filters';
import moment from 'moment';

test('Should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual( {
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('Should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual( {
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('Should test the set text filter action object with text value', () => {
    const text = 'Rent';
    const action = setTextFilter(text);
    expect(action).toEqual( {
        type: 'SET_TEXT_FILTER',
        text
    });
});

test('Should test the set text filter action object with default value', () => {
    const action = setTextFilter();
    expect(action).toEqual( {
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('Should test sort by amount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual( { type: 'SORT_BY_AMOUNT'})
});

test('Should test sort by date action object', () => {
    const action = sortByDate();
    expect(action).toEqual( { type: 'SORT_BY_DATE'})
});