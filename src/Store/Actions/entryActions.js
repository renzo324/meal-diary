export const addMeal = (entry) => {
    return (dispatch, getState) => {
        //Async call to DB
        dispatch({ type: 'ADD_ENTRY', entry});
    }
}