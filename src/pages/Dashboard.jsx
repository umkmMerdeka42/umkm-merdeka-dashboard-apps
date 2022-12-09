import React, {useEffect} from 'react';
import Layout from './Layout';
import HelloUsers from '../components/HelloUsers';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { sessionUser } from '../features/auth';

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state => state.auth));

  useEffect(() => {
    dispatch(sessionUser());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate('/');
    }
  }, [isError, navigate]);
  
  return (
    <Layout>
      <HelloUsers />
    </Layout>
  )
}

export default Dashboard;
