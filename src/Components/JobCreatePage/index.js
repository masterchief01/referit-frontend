import React, { useState, useEffect } from 'react'
import styles from './styles/style.module.css'
import { Card,FormControl,InputGroup} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import JobCreateReviewModal  from './JobCreateReviewModal'
import { getOwnUser } from '../../api/user';
import { addJob } from '../../api/jobListing'



const JobCreatePage = (props) => {

    const navigate = useNavigate();
    const [company,setCompany] = useState("");
    const [jobId, setJobId] = useState("");
    const [jobLink, setJobLink] = useState("");
    const [jobDesc,setJobDesc] = useState("");

    const tempUser={
        name: "",
        email: "",
        phone_number: "",
        current_company:"",
        resume_link: ""
    }
    
    const [user, setUser] = useState(tempUser);
    useEffect(()=>{
        getOwnUser().then((res) => {
            console.log(res)
            if(res)
            setUser(res);
        }) 
    },[])

    function SubmitFunction()
    {
      if(jobId==="" && jobLink==="")
      {
        alert("Job Id/Job Link is required");
      }
      else{
        addJob({isActive: true, company: user.current_company,jobId: jobId, desc: jobDesc, jobLink: jobLink}).then((jobid) =>{
            if(jobid) {
              alert("Job Added");
              navigate('/');
            }
        }); 

          // console.log("fine");
          
          
      }
    }

    const firstCardClassName = "text-center " + styles.firstCard + " mt-5 mb-5"

    return (
        <Card className={firstCardClassName} border="primary" style={{ width: '40rem' }}>    
          
          <Card.Body>
            <h4 className={styles.heading}>Welcome</h4>
            <Card.Text className={styles.text}>
              Kindly fill in the details to proceed
            </Card.Text>
            
            <hr className={styles.horizontalLine}/>
            <>
              <br/>
              <InputGroup className="mb-3">
              <FormControl onChange={(e)=>{setCompany(e.target.value)}} value={user.current_company}
                placeholder={user.current_company}
                aria-label="company-name"
                aria-describedby="basic-addon2"
                disabled
              />
              </InputGroup>
            </>
            
            <FormControl onChange={(e)=>{setJobId(e.target.value)}} value={jobId}
            placeholder="JOB ID"
            aria-label="job-id"
            aria-describedby="basic-addon2"/>  
            <h3 className={styles.headingThird}>OR</h3>
            <FormControl onChange={(e)=>{setJobLink(e.target.value)}} value={jobLink}
            placeholder="JOB Link"
            aria-label="job-link"
            aria-describedby="basic-addon2"/>
                    
            <br/>
            <div className={styles.desc}>
              <textarea className={styles.txtArea} placeholder="Description"  onChange={(e)=>{setJobDesc(e.target.value)}} value={jobDesc} cols="30" rows="4"></textarea>
            </div>
            <br/>
            <JobCreateReviewModal user={user} buttonLabel={"ADD"} heading={"Review"} msg={"Kindly check your details"} isReferReq={false} SubmitFunction={SubmitFunction} company={company} jobId={jobId} jobLink={jobLink} jobDesc={jobDesc}/>
          </Card.Body>
          
        </Card>
    )
};

export default JobCreatePage;