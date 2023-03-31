//import { tokens } from "../theme";
import React, {useState} from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../index";
import { useEffect } from "react";
import { p } from "@mui/material";
//import { Timestamp } from "firebase/firestore";

//import { mockEmail as email } from '../mockData';

const EmailCategory = () => {

    const [emails, setEmails] = useState([]);
    //const theme = useTheme();
    //const colors = tokens(theme.palette.mode);

    useEffect(() => {
        getEmails()
    },[])

    useEffect(()=>{
        console.log(emails)
    }, [emails])

    function getEmails(){
        const emailCollection = collection(db, 'primary-email')
        getDocs(emailCollection).then((response) => {
            const em = response.docs.map((doc) => doc.data({
                data: doc.data(),
                id: doc.id,
                timestamp: doc.data().timestamp
            }))
            setEmails(em)
        })
        .catch(error => console.log(error.message))
    }

    // function convertTimestamp(timestamp) {
    //     let date = timestamp.toDate();
    //     let mm = date.getMonth();
    //     let dd = date.getDate();
    //     let yyyy = date.getFullYear();
    
    //     date = mm + '/' + dd + '/' + yyyy;
    //     return date;
    // }

    return (
        <div>
            <ul>
                {emails.map(email => (
                    <li key={email.id}>
                        <p>{email.subject} </p>
                        <p>{email.senderAddress}</p>
                        
                    </li>
                ))}
            </ul>
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

export default EmailCategory;
// export const EmailUrgent;
