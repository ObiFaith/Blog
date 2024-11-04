import PropTypes from 'prop-types';
import * as icons from 'lucide-react';

const Icon = ({ name, color, size = 16, className }) => {
	const LucideIcon = icons[name];

	if (!LucideIcon) {
		console.error(`Icon "${name}" does not exist in "lucide-react"`);
		return;
	}

	return (
		<LucideIcon
			color={color}
			strokeWidth={2}
			absoluteStrokeWidth={true}
			size={size}
			className={className}
		/>
	);
};

Icon.propTypes = {
	size: PropTypes.string,
	color: PropTypes.string,
	name: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
};

export default Icon;
