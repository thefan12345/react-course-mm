import uuid from 'uuid';

// ADD_POC
export const addRFP = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_RFP',
  poc: {
    id: uuid(),
    title,
    companyInfo,
    description,
    mnda,
    question1,
    createdAt,
    startDate,
    closeDate
  }
});

// REMOVE_EXPENSE
export const removeRFP = ({ id } = {}) => ({
  type: 'REMOVE_RFP',
  id
});

// EDIT_EXPENSE
export const editRFP = (id, updates) => ({
  type: 'EDIT_RFP',
  id,
  updates
});
