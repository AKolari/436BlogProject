import IndividualPost from '../components/IndividualPost';

import StatusAlert from '../components/StatusAlert';
import getBlogApi from '../hooks/getBlogApi';

function HomePage() {
	const [posts, loading, error] = getBlogApi(
		'http://localhost:3001/v1/api/posts'
	);

	if (error) {
		return <StatusAlert></StatusAlert>;
	} else if (loading) {
		return <p>Loading</p>;
	} else {
		if (posts.length === 0) {
			return <StatusAlert statusType={'NoPosts'}></StatusAlert>;
		}

		return (
			<div className="mx-12">
				{posts.map((post) => {
					return (
						<>
							<IndividualPost postData={post} displayType={'partial'} />
						</>
					);
				})}
			</div>
		);
	}
}

export default HomePage;
