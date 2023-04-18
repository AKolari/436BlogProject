import postBlogApi from '../hooks/postBlogApi';
import StatusAlert from '../components/StatusAlert';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreatePostForm() {
	const [clickEdit, setClickEdit] = useState(false);
	const [title, setTitle, content, setContent, loading, error, handleRequest] =
		postBlogApi('http://localhost:3001/v1/api/posts');
	const navigate = useNavigate();

	const submit = (e) => {
		e.preventDefault();
		if (content && title) {
			handleRequest();
			navigate('/');
		}
	};
	const handleCancel = () => {
		if (clickEdit) {
			navigate('/');
		} else {
			setClickEdit(true);
		}
	};

	const updateTitle = (e) => {
		setTitle(e.target.value);
		setClickEdit(false);
	};
	const updateContent = (e) => {
		setContent(e.target.value);
		setClickEdit(false);
	};

	if (error) {
		return <StatusAlert />;
	} else if (loading) {
		return <StatusAlert statusType={'loading'} />;
	} else {
		return (
			<div className="min-h-screen w-screen flex flex-col items-center">
				<section className=" bg-French-Gray  mx-auto w-full px-4 py-5 mb-10 ">
					<div className="flex items-baseline justify-between  gap-4">
						<input
							value={title}
							placeholder="Title"
							onChange={updateTitle}
							className=" w-75 bg-French-Gray shadow   hover:border-Argentinian-Blue border rounded  py-2 px-3 text-Davy-Gray leading-tight focus:outline-none focus:shadow-outline"
							type="text"
						/>

						<div className="flex items-baseline  gap-4">
							<button
								className="w-20 py-2 hover:text-Argentinian-Blue "
								onClick={submit}
							>
								<p className="text-center ">Save</p>
							</button>
							{!clickEdit && (
								<button
									className=" w-20 py-2 hover:text-Davy-Gray"
									onClick={handleCancel}
								>
									<p className=" text-center ">Cancel</p>
								</button>
							)}
							{clickEdit && (
								<button
									className=" bg-Madder w-20 py-2  hover:bg-red-500 hover:text-black"
									onClick={handleCancel}
								>
									<p className=" text-center ">Confirm?</p>
								</button>
							)}
						</div>
					</div>
				</section>

				<div className=" w-3/4">
					<textarea
						placeholder="Your Post"
						value={content}
						onChange={updateContent}
						rows="25"
						className=" whitespace-pre-line relative resize-none hover:resize-y o  w-full  block p-2.5  text-sm text-gray-900 bg-French-Gray  border border-gray-300 "
					></textarea>
				</div>
			</div>
		);
	}
}

export default CreatePostForm;
