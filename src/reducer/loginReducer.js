export  const loginReducer=(state,{type,payload})=>{
      switch(type)
      {
        case'Email':
        return {
            ...state,
            email:payload.value
        }
        case'Password':
        return {
            ...state,
            password:payload.value
        }

        case'TOKEN':
        return {
            ...state,
           token:payload.token
        }
        case'LOGOUT':
        return {
            ...state,
            email:'',
            password:'',
            token:''
        }

        default:
            return state;
    }
      
}