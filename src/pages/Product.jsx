import React, {useEffect} from 'react';
import Layout from './Layout';
import ListProduct from '../components/ListProduct';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { sessionUser } from '../features/auth';

const Product = () => {
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
      <ListProduct/>
    </Layout>
  )
}

export default Product;
