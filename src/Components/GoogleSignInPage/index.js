import React from 'react'
import styles from './styles/style.module.css'
import { useState } from 'react'
import googleIcon from '../../Assets/images/google.svg'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useNavigate } from 'react-router-dom'
import { addUser} from '../../api/user/index'

const GoogleSignInPage = ({setAuth, token , setToken, setSignUp}) => {
    const [stu, setStu] = useState(true);

    const navigate = useNavigate();

    const signInWithGoogle = async() => {

        await firebase
			.auth()
			.signInWithPopup(new firebase.auth.GoogleAuthProvider())
			.then((userCred) => {
                if(userCred) {
                    const user = {
                        name: userCred.user.displayName,
                        email: userCred.user.email,
                        isReferee: stu
                    }
                    // console.log(user);
                    userCred.user.getIdToken().then(() => {
                        addUser(user).then((res) => {
                            window.localStorage.setItem('isReferee',res.isReferee);
                            if(res.signin) {
                                setSignUp(false);
                                window.localStorage.setItem('signup','false');
                                let path = `/`;
                                navigate(path);
                            }
                            else {
                                setSignUp(true);
                                window.localStorage.setItem('signup','true');
                                const userId = userCred.user.uid;
                                let path = `/users/${userId}`;
                                navigate(path);
                            }

                            setAuth(true);
					        window.localStorage.setItem('auth', 'true');
                            
                        })
                        .catch((err)=>{
                            console.log("Error from addUser()");
                        });    
                    });           
				}
                
			});
    };

  return (
    <div className={styles.container}>
        <div className={styles.heading}>
        </div>
        <div className={styles.midCard}>
            {stu?<><button style={{backgroundColor: "#1b1bd2"}} className={styles.buttonF} onClick={()=>setStu(true)}>STUDENT</button>
            <button className={styles.buttonS} onClick={()=>setStu(false)}>PROFESSIONAL</button></>:
            <><button  className={styles.buttonF} onClick={()=>setStu(true)}>STUDENT</button>
            <button style={{backgroundColor: "#1b1bd2"}} className={styles.buttonS} onClick={()=>setStu(false)}>PROFESSIONAL</button></>}

            <div className={styles.body}>
                    <h3>Sign in</h3>
                    {stu?<><div style={{marginBottom: "20px"}}>Sign In as a Student</div></>:
                    <><div style={{marginBottom: "20px"}}>Sign In as a Professional</div></>}
                    <button onClick={signInWithGoogle} className={styles.gglbtn} style={{marginBottom: "20px"}}><img src={googleIcon} alt="icon" /> Sign in with Google</button> 
            </div>
        </div>
    </div>
  )
}

export default GoogleSignInPage;