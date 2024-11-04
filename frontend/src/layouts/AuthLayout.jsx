import { Logo } from '..';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AuthLayout = ({
	children,
	heading,
	subheading,
	footer,
	footer_text,
	href,
}) => {
	return (
		<section className="py-10 sm:bg-light-grey min-h-screen">
			<div className="pb-6 sm:pb-12">
				<Logo />
			</div>
			<section className="grid gap-8 rounded-xl sm:shadow-sm p-10 bg-white max-w-[476px] mx-auto">
				<div className="grid gap-2">
					<h1 className="text-2xl">{heading}</h1>
					<p>{subheading}</p>
				</div>
				<div>
					<div className="*:grid *:gap-6">{children}</div>
					<div className="*:text-center pt-6 sm:flex justify-center gap-1">
						<p>{footer}</p>
						<p>
							<Link
								to={href}
								className="text-purple hover:underline hover:underline-offset-2"
							>
								{footer_text}
							</Link>
						</p>
					</div>
				</div>
			</section>
		</section>
	);
};

AuthLayout.propTypes = {
	children: PropTypes.node.isRequired,
	heading: PropTypes.string.isRequired,
	subheading: PropTypes.string.isRequired,
	footer: PropTypes.string.isRequired,
	footer_text: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
};

export default AuthLayout;
