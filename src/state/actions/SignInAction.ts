import {createAsyncThunk} from "@reduxjs/toolkit";
import {signIn} from "../../api/api.ts";

interface Props {
    username: string,
    password: string,
}

const SignInAction = createAsyncThunk(
    'SignIn',
    async ({username, password}: Props, {rejectWithValue}) => {
        try {
            const result = await signIn(username, password);
            return result;
        } catch (e) {
            const errorMsg = e instanceof Error ? e.message : "Failed to sign up";
            return rejectWithValue(errorMsg)
        }
    }
)

export default SignInAction