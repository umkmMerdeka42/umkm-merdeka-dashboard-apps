import React, {useEffect} from 'react';
import Layout from './Layout';
import EditProductform from '../components/EditProductform';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { sessionUser } from '../features/auth';

const EditProduct = () => {
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
      <EditProductform />
    </Layout>
  )
}

export default EditProduct;
