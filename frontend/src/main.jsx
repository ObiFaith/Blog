import './index.css';
import {
	Navigate,
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import { StrictMode } from 'react';
import { MainLayout, Root } from './layouts';
import { createRoot } from 'react-dom/client';
import { ForgotPassword, Login, Signup } from '.';

const router = createBrowserRouter(
	createRoutesFromElements(
		// root layout is the parent to all routes in the website
		<Route
			path="/"
			element={<Root />}
			errorElement={<Navigate to="/" replace />}
		>
			{/* Routes that has the header and footer component */}
			<Route element={<MainLayout />}></Route>
			{/* Routes that doesn't need a header and footer */}
			<Route path="/signup" element={<Signup />} />
			<Route path="/login" element={<Login />} />
			<Route path="/forgot-password" element={<ForgotPassword />} />
		</Route>
	)
);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
