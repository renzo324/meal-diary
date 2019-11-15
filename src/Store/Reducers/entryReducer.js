const initState = {
    entries:[
        {id:'1', title:'Lorem', content:'female husky'},
        {id:'2', title:'Ipsum', content:'male husky'}
    ]
}
const entryReducer = (state = initState, action) => {
    switch (action.type){
        case 'ADD_ENTRY':
            console.log('Entry Created: ', action.entry)
    }
    return state;
}

export default entryReducer;