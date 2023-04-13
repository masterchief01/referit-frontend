import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styles from './styles/style.module.css';
import ReferralRequestReviewModal from '../ReferralRequestReviewModal';
import { withRouter } from '../../../react-utils/withRouter'
import { useParams } from 'react-router-dom';

import { getJob, postReferral } from '../../../api/jobListing';
import { getOwnUser } from '../../../api/user';


const JobCard = (props) => {

    const {jobId} = useParams();
    const jobid = jobId;
    console.log(jobid)
    let navigate = useNavigate();
    let tempObj = {};
    tempObj.postedBy = {id: "", name: "", infotext: ""};
    tempObj.jobId = "";
    tempObj.jobLink= "";
    tempObj.company="";
    tempObj.desc="";
    const tempUser={
        name: "",
        email: "",
        phone_number: "",
        resume_link: "",
        current_company: ""
    }
    const [obj,setObj] = useState(tempObj);
    const [user, setUser] = useState(tempUser);
    useEffect(() => {
        if(window.localStorage.getItem('auth') === 'true'){
            getOwnUser().then((res) => {
                if(res)
                    setUser(res);
            }) 
        }
        if(props.obj === undefined)
        {
            console.log(jobid)
            getJob(jobid).then((res) => {
                if(res)
                    setObj(res);
                // console.log(res.postedBy.name);
            })
        }
        else{
            setObj(props.obj);
        }
    },[jobid, props.obj])
    

    // console.log(obj);

    function SubmitFunction(setShow)
    {
      postReferral(obj.id).then((res) => {
          if(res){
            alert(res.message);
            navigate('/');
            // console.log(res.message);
        }
      })
    }    
  return <Card className={styles.card}>
            <a href={`/users/${obj.postedBy.id}`} className={styles.headingSection}>
                <h4 className={styles.heading}>{obj.postedBy.name}</h4>
            </a>
            <div className={styles.infotext}>{obj.postedBy.infotext}</div>
            <div className={styles.middleSection}>
                <div>Company - {obj.company}</div>
                {obj.jobId?<div>JOB ID - {obj.jobId}</div>:null}
                {obj.jobLink?<div>JOB Link - <a rel="noreferrer" target="_blank" style={{textDecoration: "none",backgroundColor:"lightgreen"}} href={obj.jobLink}>Click Here</a></div>:null}
            </div>
            <div className={styles.description}>
                {obj.desc}
            </div>
            <div className={styles.buttonSection}>
            <ReferralRequestReviewModal user={user} token={props.token} buttonLabel={"REQUEST"} heading={"Confirm"} msg={"Kindly check your details"} SubmitFunction={SubmitFunction} company={obj.company} jobId={obj.jobId} jobLink={obj.jobLink}/>
            </div>
        </Card>;
};

export default withRouter(JobCard);
