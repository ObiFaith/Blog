import * as Yup from 'yup';
import { BtnPrimary, InputWithIcon } from '..';
import { Form, Formik } from 'formik';

const LoginForm = () => {
	const LoginSchema = Yup.object().shape({
		email: Yup.string()
			.email('Invalid email address')
			.required("Can't be empty"),
		password: Yup.string().required('Please check again'),
	});
	return (
		<Formik
			initialValues={{ email: '', password: '' }}
			validationSchema={LoginSchema}
			onSubmit={(values, { setSubmitting }) => {
				setSubmitting(false);
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
						label="Password"
						iconName="LockKeyhole"
						inputName="password"
						placeholder="Enter your password"
					/>
					<BtnPrimary
						name="Login"
						className="w-full"
						disabled={isSubmitting}
					/>
				</Form>
			)}
		</Formik>
	);
};

export default LoginForm;
