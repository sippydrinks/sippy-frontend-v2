import { toast } from 'react-hot-toast';

export const errorMessage = (message: string) => {
	toast(`${message}`, {
		position: 'top-right',
		// autoClose: 3000,
		// hideProgressBar: false,
		// closeOnClick: true,
		// pauseOnHover: true,
		// draggable: true,
		// progress: undefined,
	});
};
