import React, {useEffect} from 'react';
import Layout from './Layout'
import EditUserform from '../components/EditUserform';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { sessionUser } from '../features/auth';

const EditUser = () => {
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
      <EditUserform />
    </Layout>
  )
};

export default EditUser;
