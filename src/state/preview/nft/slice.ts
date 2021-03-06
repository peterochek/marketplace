import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ApprovedToken, Token} from "../../../business-logic/models/nft";
import {TContractResponse} from "../../../business-logic/near/api/types/response/contracts";
import {Optional} from "../../../business-logic/models/types";

export interface PreviewNftState {
    fetching: boolean,
    success?: boolean,
    token?: Token,
    price?: Optional<string>,
    contract?: TContractResponse,
    isApproved?: boolean,
    payouts: Record<string, number>
}


const initialState: PreviewNftState = {
    payouts: {},
    fetching: true,
}

export const previewNftSlice = createSlice({
    name: "preview-nft",
    initialState,
    reducers: {
        success: (state, action: PayloadAction<ApprovedToken>) => {
            state.token = action.payload
            state.isApproved = action.payload.isApproved
        },
        setPrice: (state, action: PayloadAction<Optional<string>>) => {
            state.price = action.payload
        },
        failure: (state) => {
            state.token = undefined
        },
        toggleFetching: (state, action: PayloadAction<boolean>) => {
            state.fetching = action.payload
        },
        setContract: (state, action: PayloadAction<TContractResponse | undefined>) => {
            state.contract = action.payload
        },
        setPayouts: (state, action: PayloadAction<Record<string, number>>) => {
            state.payouts = action.payload
        },
        reset: () => initialState
    }
})

export const previewNftReducer = previewNftSlice.reducer