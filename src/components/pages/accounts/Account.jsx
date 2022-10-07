import React, { useMemo, useState } from 'react'
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'

const Account = () => {

  const [loginUser, setLoginUser] = useState([]);

  
  const navigate = useNavigate();

  useMemo(() => setLoginUser(localStorage.getItem('logined_user') ? JSON.parse(localStorage.getItem('logined_user')) : []), [])

  useEffect(() => {
   
    if (loginUser.length === 0) {
      navigate('/login')
    }
  }, [navigate, loginUser]);

  return (
    <Row>
      <Col lg="3"><Sidebar /></Col>
      <Col lg="9"><Outlet /></Col>
    </Row>
  )
}

export default Account