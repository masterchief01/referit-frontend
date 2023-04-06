import React from 'react'
import { Card,Row } from 'react-bootstrap'
import styles from './styles/style.module.css'
import { useNavigate } from 'react-router-dom'
import ButtonStyles from './styles/button.style.module.css'



const AddReferralRequestCard = () => {
    const navigate = useNavigate();

    const func = ()=>{
        let path=`/createreferralrequest`;
        navigate(path);
        // console.log("button click");
    }
    
    return (
        <Card className={styles.card}>
            <Row className="justify-content-center">
               <h4 className={styles.headerDiv}>If you have a Job ID / Link. You can directly request from here.</h4> 
            </Row>
            <div style={{textAlign : "center"}}>
                <button className={ButtonStyles.submitButton} onClick={func}>Click Here</button>
            </div>
        </Card>
    )
}

export default AddReferralRequestCard;
