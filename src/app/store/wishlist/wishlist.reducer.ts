const initialValues = {
    current: ['ok'],
    wishlist: [],
}

export function WishReducer(state = initialValues, action){
    switch (action.type) {
        case 'ADD_WISH':
            // console.log([...state.wishlist, action.payload])
            return{
                wishlist: [...state.wishlist, action.payload]
            }

        case 'REMOVE_WISH':
            return{
                wishlist: action.payload
            }
    
        default:
            return state;
    }
}