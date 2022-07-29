import React, { useEffect, useState } from 'react';

const useUserData = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data)
                setLoading(false)
            }
            )
    }, [])
    return [users,loading]
};

export default useUserData;