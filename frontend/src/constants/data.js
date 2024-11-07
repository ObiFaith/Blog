export const api_url = import.meta.env.VITE_API_BASE_URL;
export const formElements = [
	{
		type: 'text',
		iconName: 'Mail',
		inputName: 'email',
		label: 'Email address',
		placeholder: 'e.g. alex@email.com',
	},
	{
		type: 'password',
		iconName: 'LockKeyhole',
		inputName: 'password',
		label: 'Create password',
		placeholder: 'At least 8 characters',
	},
	{
		type: 'password',
		iconName: 'LockKeyhole',
		inputName: 'confirm_password',
		label: 'Confirm password',
		placeholder: 'At least 8 characters',
	},
];
