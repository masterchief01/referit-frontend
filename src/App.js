import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useState, useEffect } from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { Container } from 'react-bootstrap';

import SignInPageHeader from "./Components/SignInPageHeader";
import GoogleSignInPage from "./Components/GoogleSignInPage";
import Header from './Components/Header';
import IntroPage from './Components/IntroPage';
import ProfilePage from "./Components/ProfilePage";
import Status from "./Components/StatusPage";
import ReferralRequestPage from "./Components/ReferralRequestPage";
import JobCreatePage from "./Components/JobCreatePage";
import OpenJobs from "./Components/OpenJobs";
import OpenReferralRequests from "./Components/OpenReferralRequests";
import ArchivePage from "./Components/ArchivePage"


const App = () => {
  
  const [auth, setAuth] = useState(false || window.localStorage.getItem('auth') === 'true');
  const [token, setToken] = useState(null || window.localStorage.getItem('token'));
  const [userId, setUserId] = useState(null || window.localStorage.getItem('userId'));
  const [signup, setSignUp] = useState(false || window.localStorage.getItem('signup') === 'true');

  useEffect( () => {
		firebase.auth().onAuthStateChanged((userCred) => {
			if (userCred) {
        // setAuth(true);
        // console.log("it is here");
				// window.localStorage.setItem('auth', 'true');
				userCred.getIdToken().then((token) => {
					setToken(token);
          // console.log('Token is set');
          window.localStorage.setItem('token', token);
				});
        setUserId(userCred.uid);
        window.localStorage.setItem('userId',userId);
			}
      else{
        setAuth(false);
        setToken('');
        window.localStorage.setItem('auth', 'false');
        window.localStorage.setItem('token',null);
        window.localStorage.setItem('userId',null);
        window.localStorage.setItem('isReferee',null);
      }
		});
	}, [userId]);

  return (
    <>
      <Router>
        <Routes>
          <Route exact path = '/signin' element = {
            <>
              <SignInPageHeader/>
              <GoogleSignInPage token={token} setToken={setToken} setAuth={setAuth} setSignUp={setSignUp}/>
            </>
            }/>
          <Route path='/*' element={
            <>
              <Header auth={auth} userId={userId} setAuth={setAuth} />
              <Routes>
                <Route exact path='/' element={
                  <main className='py-3 bg-light contextual'>
                    <Container>
                      <IntroPage/>
                    </Container>
                  </main>
                } />
                <Route exact path="/users/:userId" element={
                  <ProfilePage token={token} userId={userId} signup={signup} setSignUp={setSignUp}/>
                }/>
                <Route exact path="/userStatus/:userId" element={
                  <Status token={token} userId={userId}/>
                }/>
                <Route exact path="/createreferralrequest" element={
                    <ReferralRequestPage token={token}/>
                }/>
                <Route exact path="/createjob" element={
                    <JobCreatePage token={token}/>
                }/>
                <Route exact path="/jobopenings" element={
                    <OpenJobs token={token}/>
                }/>
                <Route exact path="/referralrequests" element={
                    <OpenReferralRequests token={token}/>
                }/>
                <Route exact path="/referralrequests/:jobId" element={
                    <OpenReferralRequests token={token}/>
                }/>
                <Route exact path="/archive" element={
                    <ArchivePage token={token}/>
                }/>
              </Routes>
            </>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
