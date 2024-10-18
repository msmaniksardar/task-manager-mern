import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from '../layout/Layout';
import NewTask from '../pages/NewTask';
import CompletedTask from '../pages/CompletedTask';
import ProgressTask from '../pages/ProgressTask';
import SignInPage from '../pages/SignInPage';
import CanceledTask from '../pages/CanceledTask';
import AddNewTask from '../pages/AddNewTask';
import UpdateProfile from '../pages/UpdateProfile';
import SignUpPage from '../pages/SignUpPage';
import ForgetPasswordPage from '../pages/ForgetPasswordPage';
import PinVerification from '../pages/PinVerification';
import ResetPassword from '../pages/ResetPassword';

const Api = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/new-task' element={<NewTask />} />
            <Route path='/completed-task' element={<CompletedTask />} />
            <Route path='/canceled-task' element={<CanceledTask />} />
            <Route path='/progress-task' element={<ProgressTask />} />
            <Route path='/add-new-task' element={<AddNewTask />} />
          </Route>

          <Route>
            <Route path='/' element={<SignInPage />} />
            <Route path='/sign-up' element={<SignUpPage />} />
            <Route path='/forget-password' element={<ForgetPasswordPage />} />
            <Route path='/update-profile' element={<UpdateProfile />} />
            <Route path='/pin-verify' element={<PinVerification />} />
            <Route path='/reset-password' element={<ResetPassword />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Api