const initialState = {
    isLoggedIn: false,
    user: null,
  };
const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return { 
          isLoggedIn: true,
          user: action.payload,
        };
      case 'LOGOUT':
        return {
          isLoggedIn: false,
          user: null,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;