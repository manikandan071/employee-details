import React from 'react'

import Card from 'react-bootstrap/Card';

import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Profile = () => {
    const [params] = useSearchParams();
    const id = parseInt(params.get('id'));
    const state = useSelector((data)=>data.sample).details;

    const navigate = useNavigate();
    const goBack=()=>{
        navigate('/')
    }
    const gotoHome=()=>{
        navigate('/')
    }
  return (
    <div className='home-page'>
        <div className='nav-bar-sec'>
        <div className='nav-bar'>
            <div>
                <Link className='title' to='/'>LOGO</Link>
            </div>
            <div>
                <button className='login-btn' onClick={()=>gotoHome()}>Home</button>
            </div>
        </div>
        </div>
        <div className='container'>
        <Card className='employee-table'>
            <Card.Header as="h3">{state[id].username}</Card.Header>
            <Card.Body>
                <Card.Text as='p'><strong>Gender</strong> : {state[id].gender}</Card.Text>
                <Card.Text as='p'><strong>Birth</strong> : {state[id].dob}</Card.Text>
                <Card.Text as='p'><strong>Mail ID</strong> : {state[id].mailid}</Card.Text>
                <Card.Text as='p'><strong>Address</strong> : {state[id].address},{state[id].pincode}</Card.Text>
                <Card.Text as='p'><strong>Contact</strong> : {state[id].number}</Card.Text>
                <button className='detail-btn' variant="primary" onClick={()=>goBack()}>Back</button>
            </Card.Body>
        </Card>
    </div>
    </div>
  )
}

export default Profile