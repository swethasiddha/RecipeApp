import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    { userName: "swetha", password: "swetha123" },
    { userName: "siddha", password: "siddha123" },
    { userName: "reddy", password: "reddy123" },
  ],
  currentUser: null,
};

const userdataSlice = createSlice({
  name: "userdata",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const { userName, password } = action.payload;
      const user = state.users.find(
        (user) => user.userName === userName && user.password === password
      );
      if (user) {
        state.currentUser = userName;
      }
    },
    logoutUser: (state) => {
      state.currentUser = null;
    },
  },
});

export const { loginUser, logoutUser } = userdataSlice.actions;
export default userdataSlice.reducer;
