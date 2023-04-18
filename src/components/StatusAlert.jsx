import noPosts from '../assets/no_posts.gif';
import error404 from '../assets/404.gif';
import deletionError from '../assets/deletion_error.gif';
import loading from '../assets/loading.gif';
import standardError from '../assets/standard_error.gif';
import { NavLink } from 'react-router-dom';

function StatusAlert({ statusType }) {
	if (statusType == 'NoPosts') {
		return (
			<div className=" h-screen w-screen flex flex-col justify-center items-center">
				<h1 className=" mx-5  py-3 text-Davy-Gray ">No Posts!</h1>
				<img src={noPosts} alt="No Posts" />
				<p className="mt-10 text-Davy-Gray">
					:O No one has made a post! Why not be the first? Create a new post
				</p>
				<NavLink className="m-1 text-lg text-Davy-Gray" to="/newPost">
					Here!
				</NavLink>
			</div>
		);
	}
	if (statusType == '404') {
		return (
			<div className=" h-screen w-screen flex flex-col justify-center items-center">
				<h1 className=" mx-5  py-3 text-Davy-Gray ">Error 404</h1>
				<img src={error404} alt="404 Error" />;
				<p className="mt-10 text-Davy-Gray">
					We&apos;re sorry :^{'('}. Try as we might, we cannot find the page you are
					looking for.
				</p>
				<NavLink className="m-1 text-lg text-Davy-Gray" to="/">
					Head Home?
				</NavLink>
			</div>
		);
	}
	if (statusType == 'deletionError') {
		return (
			<div className=" h-screen w-screen flex flex-col justify-center items-center">
				<h1 className=" mx-5  py-3 text-Davy-Gray ">Your Post is too powerful</h1>
				<img src={deletionError} alt="Deletion Error" />
				<p className="mt-10 text-Davy-Gray">
					An error has stopped us from deleting your post.
				</p>
				<NavLink className="m-1 text-lg text-Davy-Gray" to="/">
					Return Home
				</NavLink>
			</div>
		);
	}
	if (statusType == 'loading') {
		return (
			<div className=" h-screen w-screen flex flex-col justify-center items-center">
				<img src={loading} alt="Loading" />
			</div>
		);
	}
	return (
		<div className=" h-screen w-screen flex flex-col justify-center items-center">
			<img src={standardError} alt="Error" />
			<p className="mt-10 text-Davy-Gray">An error has occured.</p>
			<NavLink className="m-1 text-lg text-Davy-Gray" to="/">
				Return Home
			</NavLink>
		</div>
	);
}

export default StatusAlert;
