import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import API_ENDPOINT from '../global/api-endpoint';
import Spinner from './Spinner';

const ListProduct = () => {
  const { PRODUCTS, DELETE_PRODUCT } = API_ENDPOINT;

  const [ products, setProducts ] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    allProduct();
  });

  const allProduct = async () => {
    const response = await axios.get(PRODUCTS);
    setProducts(response.data.data);
  };

  const deleteProduct = async (id) => {
    setIsLoading(true);
    await axios.delete(DELETE_PRODUCT(id));
    setIsLoading(false);
    allProduct();
  };
  
  return (
    <div>
      {isLoading && <Spinner/>}
      <section className="w-[270px] md:w-[640px] lg:w-[50rem] xl:w-[62rem] mb-6 text-gray-600">
        <div className="flex flex-col justify-center h-full">
          <div className="w-full mr-[14px] bg-white shadow-lg rounded-md border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100 flex justify-between items-center">
              <h2 className="font-semibold text-[10px] w-20 md:w-full md:text-base lg:text-xl text-gray-800">Product UMKM Merdeka</h2>
              <Link to={'/products/add'}>
                <button
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  className="bg-red-400 transition duration-200 ease-linear hover:bg-red-300 active:bg-red-500 px-2 py-2 md:px-3 md:py-2 text-[10px] md:text-base md:w-52 rounded-sm text-white font-bold shadow-md">
                  Add Product <i className="fa-solid fa-cart-plus ml-2"></i>
                </button>
              </Link>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th className="p-2 whitespace-nowrap">
                        <div className="px-4 lg:px-0 font-semibold text-left">No</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="px-4 lg:px-0 font-semibold text-left">Nama Produk</div>
                      </th>
                      <th className="py-2 whitespace-nowrap">
                        <div className="px-4 lg:px-0 font-semibold text-left">Harga</div>
                      </th>
                      <th className="py-2 whitespace-nowrap">
                        <div className="px-4 lg:px-0 font-semibold text-left">Kategori</div>
                      </th>
                      {user && user.data.role === 'admin' && (
                        <th className="py-2 whitespace-nowrap">
                          <div className="px-4 lg:px-0 font-semibold text-left">Pemilik</div>
                        </th>
                      )}
                      <th className="py-2 whitespace-nowrap">
                        <div className="px-4 lg:px-0 font-semibold text-left">Deskripsi</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="px-4 lg:px-0 font-semibold text-center">Aksi</div>
                      </th>
                    </tr>
                  </thead>
                    <tbody className="text-sm transition duration-200 ease-in-out divide-y divide-gray-100">
                      
                      {products.map((product, index)=>(
                        <tr key={product.uuid}>
                          <td className="p-2 whitespace-nowrap">
                            <div className="px-4 lg:px-0 text-left">{index + 1}.</div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="flex items-center px-4 lg:px-0">
                              <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                <img className="rounded-full w-[40px] h-[40px] object-cover object-center" src={product.url} alt={product.productName} />
                              </div>
                              <div className="text-left">{product.productName}</div>
                            </div>
                          </td>
                          <td className="py-2 whitespace-nowrap">
                            <div className="px-4 lg:px-0 text-left">Rp.{product.price},-</div>
                          </td>
                          <td className="py-2 whitespace-nowrap">
                            <div className="px-4 lg:px-0 text-left">{product.category}</div>
                          </td>
                          {user && user.data.role === 'admin' && (
                            <td className="py-2 whitespace-nowrap">
                              <div className="px-4 lg:px-0 text-left">{product.user.name}</div>
                            </td>
                          )}
                          <td className="py-2 whitespace-nowrap">
                            <div className="px-4 lg:px-0 text-left">{product.description.slice(0,10)}...</div>
                          </td>
                          <td className="py-2 whitespace-nowrap text-center">
                            <Link to={`/products/edit/${product.uuid}`}>
                              <button
                                type="button"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                                className="bg-yellow-400 min-w-[44px] min-h-[44px] transition duration-200 ease-linear hover:bg-yellow-300 active:bg-yellow-500 text-white rounded-full px-2 py-1 mr-2 shadow-md"><i className="fa-solid fa-pen-to-square"></i></button>
                            </Link>
                            <button
                              type="button"
                              onClick={() => deleteProduct(product.uuid)}
                              data-mdb-ripple="true"
                              data-mdb-ripple-color="light"
                              className="bg-red-400 min-w-[44px] min-h-[44px] transition duration-200 ease-linear hover:bg-red-300 active:bg-red-500 text-white rounded-full px-2 py-1 shadow-md"><i className="fa-solid fa-trash"></i></button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
};

export default ListProduct;
