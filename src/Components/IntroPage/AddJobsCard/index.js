import React from 'react'
import { Card,Row } from 'react-bootstrap'
import styles from './styles/style.module.css'
import { useNavigate } from 'react-router-dom'
import ButtonStyles from './styles/button.style.module.css'



const AddJobs = () => {
    const navigate = useNavigate();

    const func = ()=>{
        let path=`/createjob`;
        navigate(path);
        // console.log("button click");
    }
    return (
        <Card className={styles.card}>
            <Row className="justify-content-center">
               <h4 className={styles.headerDiv}>Add Jobs.</h4> 
            </Row>
            <div style={{textAlign : "center"}}>
                <button className={ButtonStyles.submitButton} onClick={func}>Click Here</button>
            </div>
        </Card>
    )
}

export default AddJobs;
