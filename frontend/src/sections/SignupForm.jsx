import { BtnPrimary, InputWithIcon } from '..';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import { api_url, formElements } from '../constants/data';

const SignupForm = () => {
	const SignupSchema = Yup.object().shape({
		email: Yup.string()
			.email('Invalid email address')
			.required("Can't be empty"),
		password: Yup.string()
			.min(8, '8+ characters')
			.required('Please check again'),
		confirm_password: Yup.string()
			.oneOf([Yup.ref('password'), null], 'Passwords must match')
			.required('Please check again'),
	});

	return (
		<>
			<Formik
				initialValues={{
					email: '',
					password: '',
					confirm_password: '',
				}}
				validationSchema={SignupSchema}
				onSubmit={async (values, { setSubmitting }) => {
					setSubmitting(false);
					try {
						const { data } = await axios.post(
							`${api_url}/signup/`,
							values
						);
						toast.success(data.message);
					} catch (error) {
						toast.error(
							error.response?.data?.message || 'An error occurred'
						);
					}
				}}
			>
				{({ isSubmitting }) => (
					<Form>
						{formElements.map(element => (
							<InputWithIcon
								key={element.inputName}
								{...element}
							/>
						))}
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
