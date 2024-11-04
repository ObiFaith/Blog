import { Icons } from '..';
import PropTypes from 'prop-types';
import { ErrorMessage, Field } from 'formik';

const InputWithIcon = ({ type, label, iconName, inputName, placeholder }) => {
	return (
		<div>
			{label && (
				<label
					className={`text-sm text-dark-grey pb-1 ${
						!iconName ? 'sm:w-2/5 sm:text-base' : ''
					}`}
				>
					{label}
				</label>
			)}
			<div
				className={`flex justify-between relative ${
					!iconName ? 'sm:w-3/5' : ''
				}`}
			>
				<div className="w-full">
					{iconName && (
						<Icons
							name={iconName}
							className="text-grey absolute top-[18px] left-4"
						/>
					)}
					<Field
						type={type}
						name={inputName}
						placeholder={placeholder}
						className={`input ${iconName ? 'indent-7' : ''}`}
					/>
				</div>
				<ErrorMessage
					className="text-red-400 text-sm right-4 top-3.5 absolute"
					name={inputName}
					component="span"
				/>
			</div>
		</div>
	);
};

InputWithIcon.propTypes = {
	label: PropTypes.string,
	iconName: PropTypes.string,
	type: PropTypes.string.isRequired,
	inputName: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
};

export default InputWithIcon;
