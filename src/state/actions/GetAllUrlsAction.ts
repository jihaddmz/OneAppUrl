import {createAsyncThunk} from "@reduxjs/toolkit";
import {getAllUrls} from "../../api/api.ts";

const GetAllUrlsAction = createAsyncThunk(
    'GetAllUrls',
    async (_,{rejectWithValue}) => {
        try {
            const result = await getAllUrls();
            return result;
        } catch (e) {
            const errorMsg = e instanceof Error ? e.message : "Failed to fetch urls";
            return rejectWithValue(errorMsg)
        }
    }
)

export default GetAllUrlsAction