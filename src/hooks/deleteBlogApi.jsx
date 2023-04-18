import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function deleteBlogApi(apiURL) {
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const [error, setError] = useState(false);

	const handleRequest = async () => {
		const url = '' + apiURL;
		setLoading(true);

		try {
			const request = await fetch(url, {
				method: 'DELETE',
			});
			const response = request.json();
			console.log(response);
		} catch (e) {
			setError(true);
		} finally {
			setLoading(false);
			navigate('/');
		}
	};

	return [loading, error, handleRequest];
}
export default deleteBlogApi;
