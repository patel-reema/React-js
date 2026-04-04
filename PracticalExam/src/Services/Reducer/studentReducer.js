const initialState = {
    students: [],
    loading: false,
    error: null
};

const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case "STUDENTS_START":
            return {
                ...state,
                loading: true,
                error: null
            };
        case "STUDENTS_SUCCESS":
            return {
                ...state,
                loading: false,
                students: action.payload
            };
        case "STUDENTS_FAIL":
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case "ADD_STUDENT": {
            const exists = state.students.find(s => s.id === action.payload.id);
            if (exists) return state;
            return {
                ...state,
                students: [...state.students, action.payload]
            };
        }
        case "UPDATE_STUDENT":
            return {
                ...state,
                students: state.students.map(student =>
                    student.id === action.payload.id ? action.payload : student
                )
            };
        case "DELETE_STUDENT":
            return {
                ...state,
                students: state.students.filter(student => student.id !== action.payload)
            };
        default:
            return state;
    }
};

export default studentReducer;
