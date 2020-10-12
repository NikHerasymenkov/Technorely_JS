import React, {useEffect, useState} from "react";
import SetTable from './SetTable'
import Container from 'react-bootstrap/Container'
import {SetNavbar} from "./SetNavbar";




export const Main = () => {
    const [users, setUsers] = useState([])
    //https://api.github.com/users
    const [isLoading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(false)
        fetch('https://api.github.com/users')
            .then(response => response.json())
            .then(response => setUsers(response))
            .finally(() => setLoading(true))
    }, [])
    if (isLoading) {
        return (
            <>
                <Container>
                    <SetNavbar/>
                    <SetTable users={users}/>
                </Container>
            </>
        )
    }
    return <p>Please waiting</p>
}
