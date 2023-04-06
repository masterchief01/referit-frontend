import axios from 'axios';
import firebase from 'firebase/compat/app';


const url = `${process.env.REACT_APP_url}/referral`;

export const getReferralByComp = async () => {

    // console.log(comp);
    const token = window.localStorage.getItem('token');
    const res = await axios.get(`${url}/company`,{
            headers: {
                authorization: 'Bearer ' + token,
            }
        });
        
    if(res.status === 269)
    {
        // console.log("expired");
        firebase.auth().onAuthStateChanged((user) => {
            if(user)
            {
                user.getIdToken().then((token) => {
                    window.localStorage.setItem('token',token);
                    
                })
            }
            else{
                document.location.href = '/signin';
                return;
            }
        })

        return getReferralByComp();
    }
    else{
        return res.data;
    }
}

export const getReferralByJob = async (jobId) => {

    // console.log(comp);
    const token = window.localStorage.getItem('token');
    const res = await axios.get(`${url}/jobId?jobId=${jobId}`,{
            headers: {
                authorization: 'Bearer ' + token,
            }
        });
        
    if(res.status === 269)
    {
        // console.log("expired");
        firebase.auth().onAuthStateChanged((user) => {
            if(user)
            {
                user.getIdToken().then((token) => {
                    window.localStorage.setItem('token',token);
                    
                })
            }
            else{
                document.location.href = '/signin';
                return;
            }
        })

        return getReferralByComp();
    }
    else{
        return res.data;
    }
}

export const giveFeedback = async (feedback,comp, ind) => {
    const body = {
        feedback: feedback
    }
    const token = window.localStorage.getItem('token');
    const res = await axios.patch(`${url}/feedbackreferral?company=${comp}&ind=${ind}`,body,{
        headers: {
            authorization: 'Bearer ' + token,
        }
    });

    if(res.status === 269)
    {
        // console.log("expired");
        firebase.auth().onAuthStateChanged((user) => {
            if(user)
            {
                user.getIdToken().then((token) => {
                    window.localStorage.setItem('token',token);
                    
                })
            }
            else{
                document.location.href = '/signin';
                return;
            }
        })
        return giveFeedback(feedback,comp,ind);
    }
    else{
        if(res.data)
        {
            return res.data;
        }
    }
}

export const giveReferral = async (comp,ind) => {
    // console.log(comp);
    // console.log(ind);
    // console.log(token);
    const token = window.localStorage.getItem('token');
    const body ={};
    const res = await axios.patch(`${url}/referreferral?company=${comp}&ind=${ind}`,body,{
        headers: {
            authorization: 'Bearer ' + token
        }
    });

    if(res.status === 269)
    {
        // console.log("expired");
        firebase.auth().onAuthStateChanged((user) => {
            if(user)
            {
                user.getIdToken().then((token) => {
                    window.localStorage.setItem('token',token);
                    
                })
            }
            else{
                document.location.href = '/signin';
                return;
            }
        })
        return giveReferral(comp,ind);
    }
    else{
        if(res.data)
        {
            return res.data;
        }
    }
}

export const rejectReferral = async (comp, ind) => {
    
    const body ={};
    const token = window.localStorage.getItem('token');
    const res = await axios.patch(`${url}/rejectreferral?company=${comp}&ind=${ind}`,body,{
        headers: {
            authorization: 'Bearer ' + token
        }
    });

    if(res.status === 269)
    {
        // console.log("expired");
        firebase.auth().onAuthStateChanged((user) => {
            if(user)
            {
                user.getIdToken().then((token) => {
                    window.localStorage.setItem('token',token);
                    
                })
            }
            else{
                document.location.href = '/signin';
                return;
            }
        })
        return rejectReferral(comp,ind);
    }
    else{
        if(res.data)
        {
            return res.data;
        }
    }
}