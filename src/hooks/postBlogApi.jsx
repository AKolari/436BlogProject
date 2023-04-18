import { useState } from 'react';
function postBlogApi(apiURL) {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [loading, setLoading] = useState(false);

	const [error, setError] = useState(false);

	const handleRequest = async () => {
		const url = '' + apiURL;
		setLoading(true);

		try {
			const request = await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					title,
					content,
				}),
			});
			const response = request.json();
			console.log(response);
			setContent('');
			setTitle('');
		} catch (e) {
			setError('Uh oh, the following error was detected: ' + e.message);
		} finally {
			setLoading(false);
		}
	};

	return [title, setTitle, content, setContent, loading, error, handleRequest];
}
export default postBlogApi;
