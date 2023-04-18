import { Link } from 'react-router-dom';
import getBlogApi from '../hooks/getBlogApi';

import { useParams } from 'react-router-dom';
import StatusAlert from './StatusAlert';

function IndividualPost({ postData, displayType }) {
	if (displayType == 'partial') {
		return (
			<div className=" overflow-hidden mx-10 mt-20 text-base grid grid-cols-3 bg-Light-Sky-Blue rounded-xl border border-Davy-Gray outline outline-offset-0 outline-1 outline-Tropical-Indigo ">
				<div className="   overflow-x-hidden flex col-span-2 justify-start  bg-French-Gray rounded-tr-3xl rounded-tl-xl  border-b border-r border-Davy-Gray  ">
					<h1 data-testid="dataTest" className=" mx-5  py-3 text-Tropical-Indigo ">
						{postData.title}
					</h1>
				</div>

				<div className=" flex justify-center text-center ">
					<p className=" whitespace-pre-line py-3 text-Tropical-Indigo w-full h-full ">
						<Link className="hover:underline" to={`/post/${postData.id}`}>
							View This Post
						</Link>
					</p>
				</div>

				<div className=" flex col-span-3 bg-French-Gray p-4 rounded-b-xl ">
					<p className="text-Davy-Gray max-h-24 text-ellipsis overflow-hidden ">
						{postData.content}
					</p>
				</div>
			</div>
		);
	} else {
		const params = useParams();
		//console.log(params.id);
		let [myPostData, loading, error] = getBlogApi(
			`http://localhost:3001/v1/api/posts/${params.id}`
		);
		if (error) {
			return <StatusAlert></StatusAlert>;
		} else if (loading) {
			return <StatusAlert statusType="loading"></StatusAlert>;
		} else {
			return (
				<div className=" mt-20 mx-10 text-base grid grid-cols-3 bg-Light-Sky-Blue rounded-xl border border-Davy-Gray outline outline-offset-0 outline-1 outline-Tropical-Indigo ">
					<div className=" overflow-x-hidden flex col-span-2 justify-start  bg-French-Gray rounded-tr-3xl rounded-tl-xl  border-b border-r border-Davy-Gray  ">
						<h1 className=" mx-5 pl-10 py-3 text-Tropical-Indigo ">
							{myPostData.title}
						</h1>
					</div>
					<p className=" text-Tropical-Indigo w-full h-full ">
						<Link className="hover:underline" to={`/post/${myPostData.id}/edit`}>
							Edit This Post
						</Link>
					</p>

					<div className=" flex col-span-3 bg-French-Gray p-4  ">
						<p className=" whitespace-pre-line text-Davy-Gray text-left ">
							{myPostData.content}
						</p>
					</div>
					<div className=" flex col-span-3 bg-Davy-Gray p-4 rounded-b-xl ">
						<p className=" text-Argentinian-Blue text-left ">
							<i>
								Published on: {myPostData.originally_published} Last Edited on:{' '}
								{myPostData.last_updated}{' '}
							</i>
						</p>
					</div>
				</div>
			);
		}
	}
}
export default IndividualPost;
