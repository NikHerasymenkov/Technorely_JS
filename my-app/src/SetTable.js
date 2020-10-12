import React from "react";
import Table from "react-bootstrap/Table";
import Container from 'react-bootstrap/Container'

const SetTable=({users})=> {
    return (
        <Container>
        <Table striped bordered hover variant='dark'>
            <thead>
            <tr>
                <th>ID</th>
                <th>Avatar</th>
                <th>User</th>
                <th>URL</th>
            </tr>
            </thead>
            <tbody>
            {users.map(item=>(
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                    <img src={item.avatar_url} alt=" " height="40px" width="40px"/>
                </td>
                <td>{item.login}</td>
                <td><a rel="noopener noreferrer"
                       target="_blank"
                       href={item.html_url}>
                    {item.html_url}
                </a>
                </td>
            </tr>
            ))}
            </tbody>
        </Table>
        </Container>
   )
}
export default SetTable
