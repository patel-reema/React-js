const initialState = {
    user: null,
    loading: false,
    error: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "AUTH_LOADING":
            return {
                ...state,
                loading: true,
                error: null
            };
        case "LOGIN_SUCCESS":
        case "SET_USER":
            return {
                ...state,
                loading: false,
                user: action.payload,
                error: null
            };
        case "LOGIN_FAIL":
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case "LOGOUT":
            return { ...state, user: null };
        default:
            return state;
    }
};

export default authReducer;
