export default (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                uid: action.uid
            }
        case 'LOGIOUT':
            return{};
            default:
                return state;
    }
};