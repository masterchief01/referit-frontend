import Button from './Button'
import React from 'react'
import { Card, Row } from 'react-bootstrap';
import styles from './styles/style.module.css'
import { useNavigate } from 'react-router-dom'

const NavigationCard = () => {
    const navigate = useNavigate();

    const userId = window.localStorage.getItem('userId');
    const isReferee = window.localStorage.getItem('isReferee');

    const func1 = ()=>{
        let path=`/jobopenings`;
        if(isReferee === 'false') {
            path = '/referralrequests'
        }
        navigate(path);
        // console.log("button click");
    }

    const func2 = ()=>{
        let path=`/userStatus/` + userId;
        navigate(path);
        // console.log("button click");
    }

    const func3 = ()=>{
        let path=`/archive`;
        navigate(path);
        // console.log("button click");
    }
    return (
        <Card className={styles.card}>
            <Row className="justify-content-center">
              {isReferee==='true'?<Button label="Job Openings" handleClick={func1}/>:<Button label="Referral Requests" handleClick={func1}/>}
            </Row>
            <Row className="justify-content-center">
                <Button label="Check Status" handleClick={func2}/>
            </Row>
            {isReferee==='true'?
                <Row className="justify-content-center">
                    <Button label="Referral Archive" handleClick={func3}/>
                </Row>:null
            }
            
        </Card>
    )
}

export default NavigationCard
