import React, { useEffect, useState } from "react";
import { Row, Container } from "react-bootstrap";
import styles from "./styles/style.module.css";
import ProfileCard from "./ProfileCard";

import {withRouter} from '../../react-utils/withRouter'
import { useParams } from 'react-router-dom';

import { getUser} from "../../api/user";



const ProfilePage = (props) => {
  const {userId} = useParams();
  const tempUser = {
    general: {}
  }

  const [userData , setUserData] = useState(tempUser);

  useEffect(() =>{
    getUser(userId).then((res)=>{
      if(res)
      setUserData(res);

      // console.log(res)
    });
  },[userId]);
  
  // console.log(userData);
  return (

    <Container>
      <Row className={styles.rw}>
        <ProfileCard userData={userData.general} token={props.token} userId={props.userId} id={userId} signup={props.signup} setSignUp={props.setSignUp}/>
      </Row>
    </Container>
  );
};

export default withRouter(ProfilePage);
