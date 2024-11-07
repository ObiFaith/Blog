import * as Yup from 'yup';
import { BtnPrimary, InputWithIcon } from '..';
import { Form, Formik } from 'formik';
import { formElements } from '../constants/data';

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
					{formElements.slice(0, 2).map(element => (
						<InputWithIcon key={element.inputName} {...element} />
					))}
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
