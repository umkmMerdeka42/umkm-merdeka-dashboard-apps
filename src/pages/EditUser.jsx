import React, {useEffect} from 'react';
import Layout from './Layout'
import EditUserform from '../components/EditUserform';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { sessionUser } from '../features/auth';

const EditUser = () => {
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
      <EditUserform />
    </Layout>
  )
};

export default EditUser;
