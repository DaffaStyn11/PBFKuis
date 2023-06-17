import React from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const PegawaiCreate = () => {

  const navigate = useNavigate();

  const [name, setNama] = React.useState("");
  const [jabatan, setJabatan] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "pegawai"), {
        name,
        email,
        jabatan,
        status,
      });
      navigate("/pegawai");
      MySwal.fire({
        icon: 'success',
        title: 'Data submitted successfully',
        text: `Your data has been submitted successfully`,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    }
  };
  return (
    <div className="m-10">
      <div className="py-4">
        <Link to="/pegawai">
          <div className="flex items-center">
            <svg className="w-10 rounded-lg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Arrow / Chevron_Left">
                <path id="Vector" d="M15 19L8 12L15 5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </g>
            </svg>
            <p className="text-white">Kembali</p>
          </div>
        </Link>
        <h1 className="mt-3 text-5xl font-semibold text-white">Create Pegawai</h1>
      </div>
      <form>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-100 "
          >
            Nama
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setNama(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 max-md:w-full p-2.5 "
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-100 "
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  w-1/2 max-md:w-full p-2.5 "
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="jabatan"
            className="block mb-2 text-sm font-medium text-gray-100 "
          >
            Jabatan
          </label>
          <input
            type="text"
            id="jabatan"
            value={jabatan}
            onChange={(e) => setJabatan(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  w-1/2 max-md:w-full p-2.5 "
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="status"
            className="block mb-2 text-sm font-medium text-gray-100 "
          >
            Status
          </label>
          <input
            type="text"
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  w-1/2 max-md:w-full p-2.5 "
            required
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 p-5"
        >
          Create Data
        </button>
      </form>
    </div>
  );
};

export default PegawaiCreate;
