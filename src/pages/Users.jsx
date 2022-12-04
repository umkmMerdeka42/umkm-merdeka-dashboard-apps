import React, {useEffect} from 'react';
import Layout from './Layout';
import ListUser from '../components/ListUser';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { sessionUser } from '../features/auth';

const Users = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state => state.auth));

  useEffect(() => {
    dispatch(sessionUser());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate('/');
    }
    if (user && user.data.role !== 'admin') {
      navigate('/dashboard');
    }
  }, [isError, user, navigate]);

  return (
    <Layout>
      <ListUser />
    </Layout>
  )
};

export default Users;