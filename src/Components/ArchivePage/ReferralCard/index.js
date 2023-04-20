import { Card, Button } from 'react-bootstrap';
import styles from './styles/style.module.css';
import { withRouter } from '../../../react-utils/withRouter'


const ReferralCard = (props) => {

    // console.log(props.obj);

  return <Card className={styles.card}>
            {props.obj.postedBy?
                <>
                    <a href={`/users/${props.obj.postedBy.id}`} className={styles.headingSection}>
                        <h4 className={styles.heading}>{props.obj.postedBy.name}</h4>
                    </a>
                    <div className={styles.infotext}>{props.obj.postedBy.infotext}</div>
                </>:<>
                    (You Requested)
                </>
            }
            
            <div className={styles.middleSection}>
                <div>Company - {props.obj.company}</div>
                {props.obj.jobId?<div>JOB ID - {props.obj.jobId}</div>:null}
                {props.obj.jobLink?<div>JOB Link - <a rel="noreferrer" target="_blank" style={{textDecoration: "none",backgroundColor:"lightgreen"}} href={props.obj.jobLink}>Click Here</a></div>:null}
            </div>
            <div className={styles.description}>
                {props.obj.desc}
            </div>
            <div className={styles.buttonSection}>
                {(props.obj.requested===true)?<Button disabled> Requested </Button>:null}
            </div>
        </Card>;
};

export default withRouter(ReferralCard);
