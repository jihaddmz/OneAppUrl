import {createAsyncThunk} from "@reduxjs/toolkit";
import {saveUrl} from "../../api/api.ts";

interface Props {
    appName: string;
    androidUrl: string;
    iosUrl: string;
}

const SaveUrlAction = createAsyncThunk(
    'SaveUrl',
    async ({appName, androidUrl, iosUrl}: Props, {rejectWithValue}) => {
        try {
            const result = await saveUrl(appName, androidUrl, iosUrl);
            return result;
        } catch (e) {
            const errorMsg = e instanceof Error ? e.message : "Failed to save url";
            return rejectWithValue(errorMsg)
        }
    }
)

export default SaveUrlAction