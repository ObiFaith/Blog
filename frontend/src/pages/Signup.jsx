import { Metadata, SignupForm } from '..';
import { AuthLayout } from '../layouts';

const Signup = () => {
	return (
		<>
			<Metadata
				title="Signup | BlogIt : Use your voice"
				description="Signup for your account and continue to write"
				keywords="BlogIt, BlogIt Signup, Signup to BlogIt, Start writing a blog"
			/>
			<AuthLayout
				href="/login"
				heading="Create account"
				footer="Already have an account?"
				footer_text="Login"
				subheading="Let's get you started sharing your links!"
			>
				<SignupForm />
			</AuthLayout>
		</>
	);
};

export default Signup;
