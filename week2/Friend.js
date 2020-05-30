import React ,{ useEffect, useState } from 'react';

const Friend = () => {
    const [friend, setFriend] = useState({});
    const getFriend=() => {
        const [friend, setFriend] = useState({});
        const [error, setError] = useState(null);
        const [isLoading, setIsLoading] = useState(true);
        useEffect(() => {
          const fetchData = async () => {
            const apiUrl = "https://www.randomuser.me/api?results=1";
            const res = await fetch(apiUrl);
            if (res.status !== 200) {
              setError("it is an error");
              setIsLoading(false);
            } else {
              const data = await res.json();
              setFriend(data);
              setIsLoading(false);
            }
          };
          fetchData();
        }, []); 
                            
    };


    return (
        <div>
            
        </div>
    );
};

export default Friend;