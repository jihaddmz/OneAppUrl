import {createAsyncThunk} from "@reduxjs/toolkit";
import {signUp} from "../../api/api.ts";

interface Props {
    fullName: string,
    username: string,
    password: string,
}

const SignUpAction = createAsyncThunk(
    'SignUp',
    async ({fullName, username, password}: Props, {rejectWithValue}) => {
        try {
            const result = await signUp(fullName, username, password);
            return result;
        } catch (e) {
            const errorMsg = e instanceof Error ? e.message : "Failed to sign up";
            return rejectWithValue(errorMsg)
        }
    }
)

export default SignUpAction