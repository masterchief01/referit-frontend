import React, { useEffect } from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import styles from './styles/style.module.css'


const JobCreateReview = (props) => {
    // console.log(props);
    // const [feedback, setFeedback] =useState("");
    const [user, setUser] = useState(props.user);
    useEffect(()=>{
        setUser(props.user);
    },[props.user]);
    // console.log(user);


    return(
        <Card className={styles.mainCard}>
            <div className={styles.section}>
                <div><span style={{fontWeight: "300"}}>Company - </span>{user.current_company}</div>
                {props.jobId?<div><span style={{fontWeight: "300"}}>Job ID - </span>{props.jobId}</div>:null}
                {props.jobLink?<div><span style={{fontWeight: "300"}}>Job Link - </span><a rel="noreferrer" target="_blank" href={props.jobLink} style={{textDecoration: "none",backgroundColor:"lightgreen"}}>Click Here</a></div>:null}
            </div>
            <div className={styles.section}>
                <div><span style={{fontWeight: "300"}}>Name - </span>{user.name}</div>
                <div><span style={{fontWeight: "300"}}>Email - </span>{user.email}</div>
                <div><span style={{fontWeight: "300"}}>Phone - </span>{user.phone_number}</div>
            </div>
            <div className={styles.desc}>{props.jobDesc}</div>
        </Card>);
};

export default JobCreateReview;
