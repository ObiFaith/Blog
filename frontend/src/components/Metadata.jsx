import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const Metadata = ({ title, description, keywords }) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
		</Helmet>
	);
};

Metadata.propTypes = {
	title: PropTypes.string.isRequired,
	keywords: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};

export default Metadata;
