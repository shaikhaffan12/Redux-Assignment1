// this an action it means what we have to do we have to describe it here

export const increment = () =>{
    return{
        type : 'INCREMENT'
    }
}

export const decrement = () =>{
    return{
        type : 'DECREMENT'
    }
}

export const signin = () => {
    return{
        type : 'SIGN_IN'
    }
}

export const signout = () => {
    return{
        type: 'SIGN_OUT'
    }
}