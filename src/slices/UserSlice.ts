import { createSlice } from "@reduxjs/toolkit";

interface UserProps {
  DisplayName?: string;
  Email?: string;
  EmployeeCorporateID?: string;
  FirstName?: string;
  LastName?: string;
  LOB?: string;
  Role?: string[];
}

const initialState: UserProps = {
  DisplayName: "",
  Email: "",
  EmployeeCorporateID: "",
  FirstName: "",
  LastName: "",
  LOB: "",
  Role: [],
};

const UserSlice = createSlice({
  name: "userProps",
  initialState,
  reducers: {
    SAVE_USER: (state, action) => {
      Object.assign(state, action.payload);
    },
    CLEAR_USER: (state) => {
      Object.assign(state, initialState);
    },
  },
});

const { actions, reducer: userReducer } = UserSlice;
const { SAVE_USER, CLEAR_USER } = actions;

export { CLEAR_USER, SAVE_USER };
export type { UserProps };
export default userReducer;
