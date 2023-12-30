import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  ndaData: null,
};

const ndaSlice = createSlice({
  name: "nda",
  initialState,
  reducers: {
    setNda: (state, action: PayloadAction<any>) => {
      state.ndaData = action.payload;
    },
    clearNda: (state) => {
        state.ndaData = null;
      },
  },
});

export const {setNda, clearNda} = ndaSlice.actions;
export default ndaSlice.reducer;
