import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the profile structure
interface Profile {
  firstname: string;
  lastname: string;
  about?: string;
  // You can add any other properties that are part of the profile here
}

// Define the profile state
interface ProfileState {
  isLoading: boolean;
  data: {
    profile?: Profile;  // Optional, because profile might not be available initially
  };
}

// Initial state with types
const initialState: ProfileState = {
  isLoading: true,
  data: {},  // Initially empty, will hold profile data once fetched
};

// Slice definition
const profileDetailSlice = createSlice({
  name: 'profileDetails',
  initialState,
  reducers: {
    // Specify the PayloadAction type for the action's payload
    setProfilesdata: (state, action: PayloadAction<{ profile?: Profile }>) => {
      state.isLoading = false;
      state.data = action.payload;  // This will be an object containing profile data
    },
  },
});

// Export the action creators
export const { setProfilesdata } = profileDetailSlice.actions;

// Export the reducer
export default profileDetailSlice.reducer;
