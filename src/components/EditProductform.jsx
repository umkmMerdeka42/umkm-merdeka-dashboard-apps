import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import API_ENDPOINT from '../global/api-endpoint';
import Alert from './Alert';
import Spinner from './Spinner';
import Swal from 'sweetalert2';

const EditProductform = () => {
  const { DETAIL_PRODUCT, UPDATE_PRODUCT } = API_ENDPOINT;

  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [previewImage, setPreviewImage] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const getProductById = async () => {
      setIsLoading(true);
      const response = await axios.get(DETAIL_PRODUCT(id));
      const {
        productName,
        price,
        url,
        category,
        description
      } = response.data.data;
      setProductName(productName);
      setPrice(price);
      setImage(response.data.data.image);
      setPreviewImage(url);
      setCategory(category);
      setDescription(description);
      setIsLoading(false);
    };
    getProductById();
  }, [DETAIL_PRODUCT, id]);

  const addImage = (e) => {
    const image = e.target.files[0];
    setImage(image);
    setPreviewImage(URL.createObjectURL(image));
  }

  const updateProduct = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('productName', productName);
    form.append('price', price);
    form.append('image', image);
    form.append('category', category);
    form.append('description', description);
    try {
      setIsLoading(true);
      await axios.put(UPDATE_PRODUCT(id), form, {
        headers: {
          "Content-type": "multipart/form-data"
        }
      });
      setIsLoading(false);
      navigate('/products');
      Swal.fire(
        'Berhasil edit produk',
        'Produk kamu berhasil di edit',
        'success'
        );
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
      }
    }
  }
  
  return (
    <div>
      <section className="bg-white md:border rounded-md md:shadow-md mb-7">
        <div className="flex justify-center">
          <div className="flex items-center w-[300px] md:w-[650px] lg:w-[900px] mx-auto md:py-8 px-4 lg:px-12">
            <div className="w-full">
              <h1 className=" text-gray-900 text-xl font-semibold text-center">
                Tambah Produk UMKM Merdeka
              </h1>
              {message && Alert(message)}

              <form onSubmit={updateProduct} className="grid grid-cols-1 gap-6 mt-8 ">
              {isLoading && <Spinner/>}
                <div>
                  <label className="block mb-2 text-sm text-gray-600">Nama Produk</label>
                  <input
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    type="text"
                    placeholder="Nama Produk"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600">Harga Produk</label>
                  <input
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    type="text"
                    placeholder="Harga Produk"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600">Masukkan Gambar</label>
                  <input
                    onChange={addImage}
                    type="file"
                    className="block form-control px-5 py-3 mt-2 w-full text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                {previewImage ? (
                  <figure className = "w-24">
                    <img src={previewImage} alt="Preview Gambar" />
                  </figure>
                ):(
                  ""
                )}

                <div>
                  <label className="block mb-2 text-sm text-gray-600">Kategori</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="No Telephone Customers"
                    className="block w-full px-5  py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40">
                    <option readOnly>Pilih Kategori...</option>
                    <option>Makanan</option>
                    <option>Minuman</option>
                    <option>Fashion</option>
                    <option>Gadget</option>
                    <option>Alat Dapur</option>
                    <option>Jasa</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600">Deskripsi produk Kamu</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    rows="5"
                    placeholder="Deskripsi Produkmu"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="block px-5 py-4 mt-2 text-sm tracking-wide text-white capitalize transition-colors duration-200 ease-in-out rounded-md bg-[#0a2558] hover:bg-sky-700 focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50">
                    <span>Update Produk</span>
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EditProductform