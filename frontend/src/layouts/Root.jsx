import { Outlet } from 'react-router-dom';
import Metadata from '../components/Metadata';
import { getCSRFToken } from '../constants/data';

const Root = () => {
	getCSRFToken()
	return (
		<>
			<Metadata
				title="BlogIt | Use Your Voice"
				description="Welcome to BlogIt and start writing to have your unique voice."
				keywords="BlogIt, BlogIt Login, BlogIt Signup, Log into BlogIt, Start writing a blog"
			/>
			<Outlet />
		</>
	);
};

export default Root;
