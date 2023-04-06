import React, { useEffect, useState } from "react";
import { Row, Container } from "react-bootstrap";
import styles from "./styles/style.module.css";
import {withRouter} from '../../react-utils/withRouter'
import { useParams } from 'react-router-dom';
import ReactLoading from 'react-loading'

import { getUser,getSecUser } from "../../api/user";

import RequestStatus from "./RequestStatus";

const Status = (props) => {
    const isReferee = window.localStorage.getItem("isReferee");
    const {userId} = useParams();
    const tempUser = {
        general: {}
    };

    const tempUserSec = {
        jobPosted: [],
        referralFeedback:[]
    };

    const [userData, setUserData] = useState(tempUser);
    const [userSecData, setUserSecData] =useState(tempUserSec);
    const [loading,setLoading] = useState(true);

    useEffect(() =>{
        setLoading(true);
        getUser(userId).then((res)=>{
            if(res)
            setUserData(res);
            // console.log(res)
        });
        
        getSecUser(userId).then((res)=>{
            setLoading(false);
            if(res){
                setUserSecData(res);
                // console.log(res);
            }
        });
    },[userId]);  
    
    // console.log(userData);

    return (

        <Container>
          {loading?
          <ReactLoading className={styles.loadingStatus} type="bars" color="black" height={667} width={375} />
          :
          <div>
          {isReferee==='true' ? (
            <Row className={styles.rw}>
              <RequestStatus token={props.token} detailsarr={userSecData.referralFeedback} userId={props.userId} id={userId} isApplied={true} />
            </Row>
          ) : null}
    
          {isReferee==='false' ? (
            <Row className={styles.rw}>
              <RequestStatus cur_comp={userData.general.current_company} token={props.token} detailsarr={userSecData.jobPosted} userId={props.userId} id={userId} isApplied={false} />
            </Row>
          ) : null} 
          </div>}
        </Container>
      );
};

export default withRouter(Status);