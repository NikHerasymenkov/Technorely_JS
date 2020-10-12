import React, {useEffect} from "react";
import { connect } from "react-redux";
import SetTable from "../SetTable";
import Container from 'react-bootstrap/Container'
import { SetNavbar } from "../SetNavbar";

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = dispatch => {
    return {
        init: function (users) {
            return dispatch({type: 'INIT', users})
        },
    }
}

const Redux = props => {
    useEffect(() => {
            fetch('https://api.github.com/users')
                .then(response => response.json())
                .then(data => {
                    props.init(data)
                })
    },[])
        return (
            <Container>-
                <SetNavbar/>
                <SetTable users={props.users}/>
            </Container>
        )
}

export default connect(mapStateToProps, mapDispatchToProps)(Redux)
