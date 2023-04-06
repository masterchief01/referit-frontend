import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './styles/style.module.css'
import { Card,FormControl,InputGroup} from 'react-bootstrap'

import ReferralRequestReviewModal  from './ReferralRequestReviewModal'
import { getOwnUser } from '../../api/user';
import { addJob, postReferral } from '../../api/jobListing'



const ReferralRequestPage = (props) => {

    const navigate = useNavigate();
    const [company,setCompany] = useState("");
    const [jobId, setJobId] = useState("");
    const [jobLink, setJobLink] = useState("");
    const tempUser={
        name: "",
        email: "",
        phone_number: "",
        resume_link: ""
    }
    
    const [user, setUser] = useState(tempUser);
    useEffect(()=>{
        getOwnUser().then((res) => {
            if(res)
            setUser(res);
        }) 
    },[])

    function SubmitFunction()
    {
      if(company==="")
      {
        alert("Company Name is required");
      }
      else
      {
        if(jobId==="" && jobLink==="")
        {
          alert("Job Id/Job Link is required");
        }
        else{
          addJob({self: true,isActive: false, company: company,jobId: jobId, jobLink: jobLink}).then((jobid) =>{
            postReferral(jobid).then((res) => {
              if(res)
              alert(res.message);
              navigate('/');
            })
          });

          // console.log("fine");
          
          
        }
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
              <FormControl as = 'select' onChange={(e)=>{setCompany(e.target.value)}} value={company}
              placeholder="Company Name"
              aria-label="company-name"
              aria-describedby="basic-addon2">
              
              <option value="">Select Company</option>
              <option value="microsoft">Microsoft</option>
              <option value="google">Google</option>
              <option value="adobe">Adobe</option>

              </FormControl>
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
            <ReferralRequestReviewModal user={user} buttonLabel={"REQUEST"} heading={"Review"} msg={"Kindly check your details"} isReferReq={true} SubmitFunction={SubmitFunction} company={company} jobId={jobId} jobLink={jobLink}/>
          </Card.Body>
          
        </Card>
    )
};

export default ReferralRequestPage;