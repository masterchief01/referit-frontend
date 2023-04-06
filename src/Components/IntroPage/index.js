import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import styles from './styles/styles.module.css'

import IntroCard from './IntroCard'
import AddReferralRequestCard from './AddReferralRequestCard'
import AddJobsCard from './AddJobsCard';
import NavigationCard from './NavigationCard'


const IntroPage = () => {
    const isReferee = window.localStorage.getItem('isReferee');
    const auth = window.localStorage.getItem('auth');
    return (
    <Container>
    <Row>
        <Col/>
        <Col xs={8}>
        <Row className={styles.rw}><IntroCard/></Row>
        {auth==='true'?
        <>
            {isReferee==='true'? 
                <>
                    <Row className={styles.rw}><AddReferralRequestCard/></Row>
                </>:<>
                    <Row className={styles.rw}><AddJobsCard/></Row>
                </>}  
        </>:null}
        </Col>
        <Col>
            {auth==='true'?<Row className={styles.rw}><NavigationCard/></Row>:null}
        </Col>
    </Row>
    </Container>
    )
}

export default IntroPage;
