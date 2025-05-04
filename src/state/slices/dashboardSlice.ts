import {createSlice} from "@reduxjs/toolkit";
import {UrlType} from "../../types/UrlType.ts";
import saveUrlAction from "../actions/SaveUrlAction.ts";
import getAllUrlsAction from "../actions/GetAllUrlsAction.ts";

interface Props {
    loading: boolean;
    error: string | null;
    urls: UrlType[];
}

const initialState: Props = {
    loading: false,
    error: null,
    urls: []
}

const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(saveUrlAction.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(saveUrlAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(saveUrlAction.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.urls.push(action.payload);
            })

    //     fetching urls actions
            .addCase(getAllUrlsAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllUrlsAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(getAllUrlsAction.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.urls = action.payload;
            })
    }
})

export default dashboardSlice.reducer;