import React from 'react';
import styles from './styles/style.module.css'


const ReferralRequestReview = (props) => {

    return(
    <div className={styles.txtInput}>
        <textarea value={props.feedback} onChange={(e)=>{props.setFeedback(e.target.value)}} className={styles.txtArea} placeholder={"Write your feedback...."} cols="50" rows="12"></textarea>
    </div>);
};

export default ReferralRequestReview;
