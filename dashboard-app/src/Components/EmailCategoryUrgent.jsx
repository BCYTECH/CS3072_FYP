import React, {useState} from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../index";
import { useEffect } from "react";
import { Box } from "@mui/system";
import { tokens } from '../theme';
import { useTheme } from '@mui/material/styles';
import "./EmailCategory.css"


const EmailCategoryUrgent = () => {

    const [emails, setEmails] = useState([]);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    useEffect(() => {
        getUrgentEmails()
    },[])

    // useEffect(()=>{
    //     console.log(emails)
    // }, [emails])

    function getUrgentEmails(){
        const emailCollection = collection(db, 'primary-email')
        const q = query(emailCollection, where('category', '==', "urgent"));

        getDocs(q).then((response) => {
            const em = response.docs.map((doc) => doc.data({
                data: doc.data(),
                id: doc.id,
            }))
            setEmails(em)
        })
        .catch(error => console.log(error.message))
    }

    function convertTimestamp(timestamp) {
        let date = timestamp.toDate();
        let mm = date.getMonth();
        let dd = date.getDate();
        let yyyy = date.getFullYear();
    
        date = dd + '/' + mm + '/' + yyyy;
        return date;
    }

    return (
        <div>
            {emails.map(email => (
                <div key={email.id}>
                    <Box sx={{ bgcolor: colors.primary[400], boxShadow: 1, borderRadius: 2, p: 2, width: "100%"}} >
                    
                    <div display="flex">
                        <h3>{email.subject}</h3> 
                        <p id="date">{convertTimestamp(email.date)}</p>
                        <h4>{email.senderAddress}</h4>
                    </div>
                    <p>{email.emailBody}</p>
                    </Box>
                    <br/>
                </div>
            ))}
        </div>
    )
}

// const EmailUrgent = () => {
//     const [emails, setEmails] = useState([]);
//     //const theme = useTheme();
//     //const colors = tokens(theme.palette.mode);

//     useEffect(() => {
//         getEmails()
//     },[])

//     useEffect(()=>{
//         console.log(emails)
//     }, [emails])

//     function getEmails(){
//         const emailCollection = collection(db, 'primary-email')
//         getDocs(emailCollection).then((response) => {
//             const em = response.docs.map((doc) => doc.data({
//                 data: doc.data(),
//                 id: doc.id,
//             }))
//             setEmails(em)
//         })
//         .catch(error => console.log(error.message))
//     }

//     return (
//         <div>
//             <p>Urgent</p>
//         </div>
//     )
// }

    /* {emails.map(email => (
                <div key={email.id}>
                    <p>{email.senderAddress}</p>
                    <p>{email.subject}</p>
                    <p>{email.date}</p>
                    <p>{email.emailBody}</p>
                </div>
            ))} */

                        /* <ul>
                {emails.map(email => (
                    <li key={email.id}>
                        <p>{email.subject} {convertTimestamp(email.date)}</p>
                        <p>{email.senderAddress}</p>
                        <p>{email.emailBody}</p>
                    </li>
                ))}
            </ul> */
            // function getUrgentEmails(){
            //     const emailCollection = collection(db, 'primary-email')
            //     const q = query(emailCollection, where('category', '==', "urgent"));
            //     const querySnapshot = getDocs(emailCollection).then((response) => {
            //     const em = response.docs.map((doc) => doc.data({
            //             data: doc.data(),
            //             id: doc.id,
            //         }))
            //         setEmails(em)
            //     })
            //     .catch(error => console.log(error.message))
        
        
            // }

export default EmailCategoryUrgent;
// export const EmailUrgent;

//Reference from https://www.youtube.com/watch?v=F7t-n5c7JsE
//Reference from https://gist.github.com/christoph-codes/bf7b6ce4dd5b10e3cf4ba59b571dfdc4
//Reference from https://cloud.google.com/firestore/docs/query-data/queries