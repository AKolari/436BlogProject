import { useState, useEffect } from 'react';

function editBlogApi(apiURL) {
	//const [post, setPost] = useState({});
	const [loading, setLoading] = useState(false);
	const [clonePost, setClonePost] = useState({});
	const [error, setError] = useState(false);
	useEffect(() => {
		handleGet();
	}, []);

	const handleGet = async () => {
		const url = '' + apiURL;
		setLoading(true);

		setLoading(true);
		try {
			const request = await fetch(url);
			const data = await request.json();
			//setPost(data);
			setClonePost(data);
		} catch (e) {
			setError('Uh oh, the following error was detected: ' + e.message);
		} finally {
			setLoading(false);
		}
	};

	const handlePatch = async () => {
		const url = '' + apiURL;
		let title = clonePost.title;
		let content = clonePost.content;
		setLoading(true);
		try {
			const request = await fetch(url, {
				method: 'PATCH',
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
		} catch (e) {
			setError('Uh oh, the following error was detected: ' + e.message);
		} finally {
			setLoading(false);
		}
	};

	return [loading, error, handlePatch, clonePost, setClonePost];
}
export default editBlogApi;
