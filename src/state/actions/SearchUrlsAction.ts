import {createAsyncThunk} from "@reduxjs/toolkit";
import {searchUrls} from "../../api/api.ts";

const SearchUrlsAction = createAsyncThunk(
    'GetAllUrls',
    async ({query}: {query: string},{rejectWithValue}) => {
        try {
            const result = await searchUrls(query);
            return result;
        } catch (e) {
            const errorMsg = e instanceof Error ? e.message : "Failed to fetch urls";
            return rejectWithValue(errorMsg)
        }
    }
)

export default SearchUrlsAction