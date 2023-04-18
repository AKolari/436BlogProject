import { useEffect, useState } from 'react';

const getBlogApi = (apiURL) => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const handleRequest = async () => {
		const url = '' + apiURL;
		setLoading(true);
		try {
			const request = await fetch(url);
			const data = await request.json();
			setPosts(data);
		} catch (e) {
			setError('Uh oh, the following error was detected: ' + e.message);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		handleRequest();
	}, []);

	return [posts, loading, error];
};

export default getBlogApi;
