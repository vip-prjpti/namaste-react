import {useState,useEffect} from 'react';

export const useOnlineStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true);
    // check online status
    useEffect(() => {
        window.addEventListener("offline", ()=>{
            setOnlineStatus(false);
        });

        window.addEventListener("online", ()=>{
            setOnlineStatus(true);
        });


    }, [])

    // boolean value
    return onlineStatus;
}

