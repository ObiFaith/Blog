import { Outlet } from 'react-router-dom';
import Metadata from '../components/Metadata';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const Root = () => {
	return (
		<>
			<Metadata
				title="BlogIt | Use Your Voice"
				description="Welcome to BlogIt and start writing to have your unique voice."
				keywords="BlogIt, BlogIt Login, BlogIt Signup, Log into BlogIt, Start writing a blog"
			/>
			<Outlet />
			<ToastContainer
				limit={3}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</>
	);
};

export default Root;
