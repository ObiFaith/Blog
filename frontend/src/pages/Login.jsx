import { LoginForm, Metadata } from '..';
import { AuthLayout } from '../layouts';

const Login = () => {
	return (
		<>
			<Metadata
				title="Login | BlogIt : Use your voice"
				description="Log into your account and continue to write"
				keywords="BlogIt, BlogIt Login, Log into BlogIt, Start writing a blog"
			/>
			<AuthLayout
				href="/signup"
				heading="Login"
				footer="Don't have an account?"
				footer_text="Create account"
				subheading="Add your details below to get back into the app"
			>
				<LoginForm />
			</AuthLayout>
		</>
	);
};

export default Login;
