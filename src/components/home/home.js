import React from 'react'
import Table from 'react-bootstrap/Table';


import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutAuthentication } from '../redux/slice';


import './home.css'

const Home = () => {
    const state = useSelector((data)=>data.sample)

    const navigate = useNavigate();
    const dispatch = useDispatch();

    
    const moreDetails= (e)=>{
        navigate('/Profile?id='+e)
    }
    const gotoLogout=()=>{
        dispatch(logoutAuthentication())
    }
    
  return (
    <div className='home-page'>
        <div className='nav-bar-sec'>
        <div className='nav-bar'>
            <div>
                <Link className='title' to='/'>LOGO</Link>
            </div>
            <div>
                <button className='login-btn' onClick={()=>gotoLogout()}>Logout</button>
            </div>
        </div>
        </div>
        <div className='container'>
        <Table className='employee-table' striped bordered hover responsive>
            <thead>
                <tr>
                    <th>S.no</th>
                    <th>Employee Name</th>
                    <th>Mail ID</th>
                    <th>Mobile</th>
                    <th>More</th>
                </tr>
            </thead>
            <tbody>
                {
                    state.details.map((item , index)=>{
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.username}</td>
                                <td>{item.mailid}</td>
                                <td>{item.number}</td>
                                <td><button className='detail-btn' onClick={()=>moreDetails(index)} >Click</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
        </div>
    </div>
  )
}

export default Home