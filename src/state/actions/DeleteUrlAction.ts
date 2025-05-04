import {createAsyncThunk} from "@reduxjs/toolkit";
import {deleteUrl} from "../../api/api.ts";

const DeleteUrlAction = createAsyncThunk(
    'DeleteUrl',
    async ({id}: {id: string},{rejectWithValue}) => {
        try {
            const result = await deleteUrl(id);
            return result;
        } catch (e) {
            const errorMsg = e instanceof Error ? e.message : "Failed to delete url";
            return rejectWithValue(errorMsg)
        }
    }
)

export default DeleteUrlAction