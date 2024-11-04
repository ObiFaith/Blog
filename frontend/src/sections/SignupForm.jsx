import { BtnPrimary, InputWithIcon } from '..';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const SignupForm = () => {
	const SignupSchema = Yup.object().shape({
		email: Yup.string()
			.email('Invalid email address')
			.required("Can't be empty"),
		password: Yup.string()
			.min(8, '8+ characters')
			.required('Please check again'),
		confirmPassword: Yup.string()
			.min(8, '8+ characters')
			.required('Please check again'),
	});
	const api_url = import.meta.env.VITE_API_BASE_URL;
	return (
		<>
			<Formik
				initialValues={{ email: '', password: '', confirmPassword: '' }}
				validationSchema={SignupSchema}
				onSubmit={async (values, { setSubmitting }) => {
					setSubmitting(false);
					console.log('api_url', api_url);
					try {
						const { data } = await axios.post(
							`http://127.0.0.1:8000/signup/`,
							values,
							{
								headers: { 'Content-Type': 'application/json' },
								'X-CSRFToken': window.CSRF_TOKEN,
							}
						);
						console.log('data', data);
						setSubmitting(true);
					} catch (error) {
						console.error(error);
					} finally {
						setSubmitting(false);
					}
				}}
			>
				{({ isSubmitting }) => (
					<Form>
						<InputWithIcon
							type="text"
							iconName="Mail"
							inputName="email"
							label="Email address"
							placeholder="e.g. alex@email.com"
						/>
						<InputWithIcon
							type="password"
							iconName="LockKeyhole"
							inputName="password"
							label="Create password"
							placeholder="At least 8 characters"
						/>
						<InputWithIcon
							type="password"
							iconName="LockKeyhole"
							inputName="confirmPassword"
							label="Confirm password"
							placeholder="At least 8 characters"
						/>
						<BtnPrimary
							name="Register"
							className="w-full"
							disabled={isSubmitting}
						/>
					</Form>
				)}
			</Formik>
		</>
	);
};

export default SignupForm;
