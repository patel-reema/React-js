import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";
export const SET_USER = "SET_USER";

export const loginStart = () => ({
    type: LOGIN_START
});
export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user
});
export const loginFail = (error) => ({
    type: LOGIN_FAIL,
    payload: error
});
export const logoutAction = () => ({
    type: LOGOUT
});
export const setUserAction = (user) => ({
    type: SET_USER,
    payload: user
});

export const loginWithGoogle = () => async (dispatch) => {
    dispatch(loginStart());
    try {
        const result = await signInWithPopup(auth, provider);
        dispatch(loginSuccess(result.user));
    } catch (error) {
        dispatch(loginFail(error.message));
    }
};

export const logoutUser = () => async (dispatch) => {
    try {
        await signOut(auth);
        dispatch(logoutAction());
    } catch (error) {
        console.error("Logout failed", error);
    }
};
