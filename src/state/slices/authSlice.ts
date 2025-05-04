import {createSlice} from "@reduxjs/toolkit";
import signUpAction from "../actions/SignUpAction.ts";
import signInAction from "../actions/SignInAction.ts";

interface Props {
    loading: boolean;
    error: string | null;
    signUpSuccess: boolean,
    token: string | null
}

const initialState: Props = {
    loading: false,
    error: null,
    signUpSuccess: false,
    token: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signUpAction.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(signUpAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
                state.signUpSuccess = false;
            })
            .addCase(signUpAction.fulfilled, (state) => {
                state.loading = false;
                state.error = null;
                state.signUpSuccess = true;
            })

            // Sign in action cases
            .addCase(signInAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signInAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
                state.token = null;
            })
            .addCase(signInAction.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.token = action.payload;

            })
    }
})

export default authSlice.reducer;