import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

 interface SignUp {
  user_name: boolean;
  user_email: string;
  user_number: Number;
  user_role: string;
  user_password: string;
  }
   interface SignIn {
   user_email: string;
   user_password: string;
  }
   interface ForgetPassword {
   user_account:string
  }
   interface Otp {
   user_otp:string
  }
   
const userSlice = createSlice({
  name: 'api',
  initialState: {},
  reducers: {
     signup: {
      reducer: (state, action: PayloadAction<SignUp>) => {
         console.log(state)
return action.payload
},
      prepare: (user_name:boolean, user_email: string, user_number: Number, user_role: string, user_password: string) => {
         return {
          payload: { user_name, user_email, user_number, user_role,user_password },
         };
      },
    },
     signIn: {
      reducer: (state, action: PayloadAction<SignIn>) => {
         console.log(state)
return action.payload
},
      prepare: ( user_email: string, user_password: string) => {
         return {
          payload: {  user_email,user_password },
         };
      },
    },
     forgetPassword: {
      reducer: (state, action: PayloadAction<ForgetPassword>) => {
         console.log(state)
return action.payload
},
      prepare: ( user_account: string) => {
         return {
          payload: {user_account},
         };
      },
    },
     otpVerification: {
      reducer: (state, action: PayloadAction<Otp>) => {
         console.log(state)
return action.payload
},
      prepare: ( user_otp:string) => {
         return {
          payload: {user_otp},
         };
      },
    },
  },
});

export const { signup,signIn,forgetPassword,otpVerification } = userSlice.actions;
export default userSlice.reducer;