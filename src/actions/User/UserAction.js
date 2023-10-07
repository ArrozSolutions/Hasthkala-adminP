import {
    emailConstants,
    otpConstants,
    userLoginConstants,
    userUpdateConstants
} from "../../constant/constant";
import axios from "../../helpers/axios";


export const adminLogin = (user) => {

    return async (dispatch) => {
        dispatch({ type: userLoginConstants.LOGIN_REQUEST });
        const res = await axios.post(`/login`, {
            ...user,
        }).catch((err) => {
            console.log(err.response)
            const { message } = err.response.data;
            dispatch({
                type: userLoginConstants.LOGIN_FAILURE,
                payload: {
                    message,
                },
            });
        })
        if (res.status === 200) {
            const { user } = res.data;
            dispatch({
                type: userLoginConstants.LOGIN_SUCCESS,
                payload: {
                    user,
                },
            });
        }
    };
};


export const adminUpdate = (user) => {
    return async (dispatch) => {
        dispatch({ type: userUpdateConstants.UPDATE_REQUEST });
        const res = await axios.post(`/updateuser`, {
            ...user,
        });
        if (res.status === 200) {
            const { user } = res.data;
            dispatch({
                type: userUpdateConstants.UPDATE_SUCCESS,
                payload: {
                    user: user,
                },
            });
        } else {
            if (res.status === 400 || res.status === 401) {
                dispatch({
                    type: userUpdateConstants.UPDATE_FAILURE,
                    payload: { message: res.data.message },
                });
            }
        }
    };
};

export const adminLoginWithOTP = (phone) => {
    phone = parseInt(phone);
    return async (dispatch) => {
        const res = await axios.post(`/signinotp`, {
            phone: phone,
        });
        if (res.status === 200) {
            const { user } = res.data;
            dispatch({
                type: userLoginConstants.LOGIN_SUCCESS,
                payload: {
                    user,
                },
            });
        } else {
            if (res.status === 400 || res.status === 401) {
                dispatch({
                    type: userLoginConstants.LOGIN_FAILURE,
                    payload: { message: res.data.error },
                });
            }
        }
    };
};

export const adminSendEmailVerification = (email, subject) => {
    return async (dispatch) => {
        dispatch({ type: emailConstants.EMAIL_REQUEST });
        try {
            const res = await axios.post('/admin-emailverification', {
                email,
                subject,
            })
            if (res.status === 200) {
                const { emailSent, message, otp } = res.data;
                dispatch({
                    type: emailConstants.EMAIL_SUCCESS,
                    payload: {
                        emailSent: emailSent,
                        message: message,
                        otp: otp,
                    },
                });
            }
            return true;
        } catch (error) {
            if (error.response && error.response.status === 400 && error.response.data.success === false) {
                dispatch({
                    type: emailConstants.EMAIL_FAILURE,
                    payload: { error: error.response.data.message },
                });
            }
            else {
                dispatch({
                    type: emailConstants.EMAIL_FAILURE,
                    payload: { error: error.response.data.message },
                });
                console.error(error);
            }
            return false;
        }
    }
}

export const adminsendotp = (phone, sendOtpType) => {
    return async (dispatch) => {
        dispatch({ type: otpConstants.OTP_REQUEST });
        try {
            let res = '';
            if (sendOtpType === "login") {
                res = await axios.post(`/admin-mobileverification`, {
                    phone: `+91${phone}`,
                });
            }
            else {
                res = await axios.post(`/register/mobileverification`, {
                    phone: `+91${phone}`,
                });
            }
            if (res.status === 200) {
                const { otp, message } = res.data;
                dispatch({
                    type: otpConstants.OTP_SUCCESS,
                    payload: {
                        otpsent: true,
                        otp: otp,
                        message: message
                    },
                });
                return true;
            }
        } catch (error) {
            if (error.response && error.response.status === 400 && error.response.data.success === false) {
                dispatch({
                    type: otpConstants.OTP_FAILURE,
                    payload: { error: error.response.data.message },
                });
            }
            else {
                dispatch({
                    type: otpConstants.OTP_FAILURE,
                    payload: { error: error.response.data.message },
                });
                console.error(error);
            }
            return false;
        }

    };
};

