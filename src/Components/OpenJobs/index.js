import React from 'react';
import JobCard from './JobCard';
import styles from './styles/style.module.css';
import {useState,useEffect} from 'react'
import { getJobList } from '../../api/jobListing';
import { withRouter } from '../../react-utils/withRouter';

import ReactLoading from 'react-loading';

const OpenJobs = (props) => {
    
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    

    useEffect(() => {
        setLoading(true);
        getJobList().then((res) => {
            if(res) {
                setData(res.data);
            }
            setLoading(false);
            // console.log(res);
        })
    },[])

  return(
    <>
    <div className={styles.mainCard}>
        {!loading? data.length>0?
            data.map(obj=><JobCard token={props.token} key={obj.id} obj={obj}/>)
            :
            <div style={{textAlign: "center"}}>No data</div>
            :
            <ReactLoading className={styles.loading} type="bars" color="black" height={667} width={375} />}
    </div>
    </>);
};

export default withRouter(OpenJobs);
