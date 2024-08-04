// -----------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------
import { createContext, useEffect, useReducer } from "react"; // -----------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------

// Initial state for authentication context
const InitialState = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    role: localStorage.getItem('role') || "",
    token: localStorage.getItem('token') || "",
};
// -----------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------


// Create authentication context
export const AuthContext = createContext(InitialState);

// Reducer function to handle authentication state changes
const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_START':
            // Set state to initial values when login starts
            return {
                user: null,
                role: null,
                token: null,
            };

        case 'LOGIN_SUCCESS':
            // Update state with user, token, and role on successful login
            return {
                user: action.payload.user,
                token: action.payload.token,
                role: action.payload.role,
            };
        
        case 'LOGOUT':
            // Clear user, role, and token on logout
            return {
                user: null,
                role: null,
                token: null,
            };

        default:
            // Return the current state for unknown action types
            return state;
    }
}

// Context provider component for authentication
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, InitialState);

    useEffect(() => {
        // Save state to local storage whenever it changes
        localStorage.setItem("user", JSON.stringify(state.user));
        localStorage.setItem("token", state.token);
        localStorage.setItem("role", state.role);
    }, [state]);

    return (
        <AuthContext.Provider value={{
            user: state.user,
            token: state.token,
            role: state.role,
            dispatch,
        }}>
            {children}
        </AuthContext.Provider>
    );
};
// -----------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------