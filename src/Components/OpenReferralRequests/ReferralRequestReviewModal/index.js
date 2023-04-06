import React from 'react';
import ReferralRequestReview from '../ReferralRequestReview';
import { useState} from 'react';
import { Modal,Button} from 'react-bootstrap';
import ButtonStyles from './styles/button.style.module.css';
import styles from './styles/style.module.css'


const ReferralRequestReviewModal = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  
  return (<>
         
         <button className={ButtonStyles.submitButtonY} onClick={handleShow}> {props.buttonLabel} </button>

        <Modal 
            // {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={show}
            onHide={handleClose}
            // backdrop="static"
            keyboard={false}>

            
            <Modal.Header closeButton>
              
            </Modal.Header>
            
            
            <Modal.Body>
                <div className={styles.headings}>{props.heading}</div>
                <div className={styles.desc}>{props.msg}</div>
                <div className={styles.line}></div>
                <ReferralRequestReview feedback={props.feedback} setFeedback={props.setFeedback}/>
            </Modal.Body>
            
            <Modal.Footer>
              <Button variant="primary" onClick={props.feedbackSubmit}>Submit</Button>
            </Modal.Footer>
          
        </Modal>
  </>);
};

export default ReferralRequestReviewModal;
