import { CountActions } from "../actions/countActions";

type CountState = {
    count: number;
    name: string;
};
const initialState: CountState = {
    count: 0,
    name: ""
}
const countReducer = (state: CountState = initialState, action: CountActions) => {
    switch(action.type) {
        case "GET_NAME":
            const {payload:name}=action
            return {
                ...state,
                name:name
            }
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1,
            }
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1,
            }
        default:
            return state;
    }
}
export default countReducer;