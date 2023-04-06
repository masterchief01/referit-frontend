import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { closeJobApi } from "../../../../../api/jobListing";
import styles from "./styles/style.module.css";


const RequestRows = ({ cur_comp,token, obj , isApplied,userId,id}) => {
  // console.log(token);
  // console.log(cur_comp);
  const [isActive,setIsActive] = useState(obj.isActive);
  const closeJob = () => {
    if (window.confirm('Are you sure want to close this job?')) {
      closeJobApi(obj.id).then((res) => {
        if(res.status === 200)
        {
          setIsActive(false);
        }
      });
    } 
    
  }
  // console.log(id);
  return (
    <>
    {isApplied?
    <Row className={styles.rw}>
      <Col>{obj.company}</Col>
      <Col>{obj.jobId}</Col>
      <Col><a style={{color: "black"}} href={`/users/${obj.givenById}`}>{obj.givenBy}</a></Col>
      {obj.type === 'feedback'?<Col><button style={{paddingLeft: "0px",border: "none",backgroundColor: "white",color: "#e7e722"}} onClick={()=> {if(id===userId)alert(obj.msg)}}>Feedback</button></Col>:null}
      {obj.type === 'refer'?<Col><div style={{color: "#0fb40f"}}>Referred</div></Col>:null}
      {obj.type === 'reject'?<Col><div style={{color: "Red"}}>Rejected</div></Col>:null}
    </Row>
    :
    <Row className={styles.rw}>
      <Col>{obj.company}</Col>
      <Col>{obj.jobId}</Col>
      {obj.company.toLowerCase()===cur_comp.toLowerCase() && userId===id?<Col><a style={{color: "black"}} href={`/referralrequests/?jobId=${obj.id}`}>Show Referral Requests</a></Col>:<Col>You can not Refer for this job</Col>}
      <Col><Button onClick={closeJob} disabled={(userId !== id) || (!isActive)}>Close Job</Button></Col>
    </Row>}
    </>
  );
};

export default RequestRows;
