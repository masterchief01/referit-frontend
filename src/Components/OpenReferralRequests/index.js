import React, {useState, useEffect} from 'react'
import { withRouter } from '../../react-utils/withRouter'
import { useParams } from 'react-router-dom'
import styles from './styles/style.module.css'
import ReactLoading from 'react-loading'
import LoadingStyles from './styles/loading.style.module.css'

import ReferralRequestCard from './ReferralRequestCard'

import { getReferralByComp, getReferralByJob } from '../../api/referral'


const OpenReferralRequests = (props) => {

    const [loading,setLoading] = useState(true);
    const [data,setData] = useState([]);

    const {jobId} = useParams();
    // console.log(jobId)

    useEffect(() => {
        setLoading(true);
        // console.log("done");
        if(jobId===undefined) {
            getReferralByComp().then((res) => {
                if(res) {
                    setData(res.data);
                }
                // console.log(res.data);
                setLoading(false);
            })
        }
        else {
            getReferralByJob(jobId).then((res) => {
                if(res) {
                    setData(res.data);
                }
                // console.log(res.data);
                setLoading(false);
            })
        }
    },[jobId])
    

    return (
    <>
    <br/>
    <div className={styles.mainCard} >
        {!loading?data.length>0?
        data.map(obj=><ReferralRequestCard user = {obj} token={props.token} key={obj.id} obj={obj}/>):<div style={{textAlign: "center"}}>No data</div>
        :<ReactLoading className={LoadingStyles.loading} type="bars" color="black" height={667} width={375} />}
    </div>
    </>);
};

export default withRouter(OpenReferralRequests);