import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  nationalIdNumber: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducer: {
    createCustomer: {
      prepare(fullName, nationalIdNumber) {
        return {
          payload: {
            fullName,
            nationalIdNumber,
            createdAt: new Date().toISOString(),
          },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalIdNumber = action.payload.nationalIdNumber;
        state.createdAt = action.payload.createdAt;
      },
    },
    updateName(state, action) {
      state.fullName = action.payload;
    },
  },
});

export const { createCustomer, updateName } = customerSlice.actions;

export default customerSlice.reducer;

// export default function customerReducer(state = initialStateCustomer, action) {
//   switch (action.type) {
//     case "customer/createCustomer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalIdNumber: action.payload.nationalIdNumber,
//         createdAt: action.payload.createdAt,
//       };

//     case "customer/updateName":
//       return {
//         ...state,
//         fullName: action.payload,
//       };

//     default:
//       return state;
//   }
// }

// export function createCustomer(fullName, nationalIdNumber) {
//   return {
//     type: "customer/createCustomer",
//     payload: {
//       fullName,
//       nationalIdNumber,
//       createdAt: new Date().toISOString(),
//     },
//   };
// }

// export function updateName(fullName) {
//   return { type: "customer/updateName", payload: fullName };
// }
