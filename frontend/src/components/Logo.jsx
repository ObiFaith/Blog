import PropTypes from 'prop-types';
import { LinkIcon } from 'lucide-react';

const Logo = ({ className }) => {
	return (
		<div className="px-10 max-w-[476px] mx-auto flex gap-2 sm:justify-center items-center">
			<div className="p-1.5 bg-purple rounded-xl">
				<LinkIcon strokeWidth={2} className="text-white" />
			</div>
			<h1
				className={`xl:text-3xl text-2xl font-black tracking-wide ${className}`}
			>
				BlogIt
			</h1>
		</div>
	);
};

Logo.propTypes = {
	className: PropTypes.string,
};

export default Logo;
