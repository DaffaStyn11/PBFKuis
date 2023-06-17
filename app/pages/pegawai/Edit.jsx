import React from 'react'
import { db } from '@/app/firebase'
import { Link } from 'react-router-dom'
import { collection, doc, getDoc, updateDoc } from 'firebase/firestore'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const PegawaiEdit = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [name, setNama] = React.useState("");
    const [jabatan, setJabatan] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [status, setStatus] = React.useState("");

    React.useEffect(() => {
        const fetchItem = async () => {
            const docRef = doc(db, "pegawai", id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setNama(docSnap.data().name);
                setEmail(docSnap.data().email);
                setJabatan(docSnap.data().jabatan);
                setStatus(docSnap.data().status);
            } else {
                console.log("No such document!");
            }
        };
        if (id) {
            fetchItem();
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const docRef = await updateDoc(doc(db, "pegawai", id), {
                name,
                email,
                jabatan,
                status,
            });
            MySwal.fire({
                icon: 'success',
                title: 'Data submitted successfully',
                text: `Your data has been submitted successfully`,
            });
            navigate("/pegawai");
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            // console.error("Error adding document: ", e);
            // MySwal.fire({
            //     icon: 'error',
            //     title: 'Oops...',
            //     text: 'Something went wrong!',
            // });
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
                <h1 className="mt-3 text-5xl font-semibold text-white">Update</h1>
            </div>
            <form>
                <div className="mb-6">
                    <label
                        htmlFor="nama"
                        className="block mb-2 text-sm font-medium text-gray-100 "
                    >
                        Nama
                    </label>
                    <input
                        type="text"
                        name="nama"
                        id="nama"
                        placeholder="Nama"
                        value={name}
                        onChange={(e) => setNama(e.target.value)}
                        required
                        className="w-1/2 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md max-md:w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
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
                        name="email"
                        id="email"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-1/2 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md max-md:w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
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
                        name="jabatan"
                        id="jabatan"
                        placeholder="jabatan"
                        value={jabatan}
                        onChange={(e) => setJabatan(e.target.value)}
                        required
                        className="w-1/2 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md max-md:w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
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
                        name="status"
                        id="status"
                        placeholder="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        required
                        className="w-1/2 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md max-md:w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    />
                </div>
                <div className="mb-6">
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 p-5"
                    >
                        Edit Data
                    </button>
                </div>
            </form>


        </div>
    )
}

export default PegawaiEdit