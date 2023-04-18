import StatusAlert from '../components/StatusAlert';
import editBlogApi from '../hooks/editBlogApi';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import deleteBlogApi from '../hooks/deleteBlogApi';

function EditPostForm({ testing }) {
	const params = useParams();
	const navigate = useNavigate();

	const [clickEdit, setClickEdit] = useState(false);
	const [clickDelete, setClickDelete] = useState(false);

	const [loading, error, handlePatch, clonePost, setClonePost] = editBlogApi(
		`http://localhost:3001/v1/api/posts/${params.id}`
	);
	const [deleteLoad, deleteError, handleDelete] = deleteBlogApi(
		`http://localhost:3001/v1/api/posts/${params.id}`
	);
	function checkDelete() {
		if (clickDelete) {
			handleDelete();
		} else {
			setClickEdit(false);
			setClickDelete(true);
		}
	}

	const submit = (e) => {
		e.preventDefault();
		handlePatch();
		setClickEdit(false);
		setClickDelete(false);
		navigate('/');
	};

	const updateTitle = (e) => {
		setClonePost({ ...clonePost, title: e.target.value });
		setClickEdit(false);
		setClickDelete(false);
	};
	const updateContent = (e) => {
		setClonePost({ ...clonePost, content: e.target.value });
		setClickEdit(false);
		setClickDelete(false);
	};
	const handleCancel = () => {
		if (clickEdit) {
			navigate('/');
		} else {
			setClickEdit(true);
			setClickDelete(false);
		}
	};

	if (error && !testing) {
		return <StatusAlert />;
	} else if (deleteError && !testing) {
		return <StatusAlert statusType="deletionError" />;
	} else if ((loading || deleteLoad) && !testing) {
		return <StatusAlert statusType={'loading'} />;
	} else {
		return (
			<div className="min-h-screen w-screen flex flex-col items-center">
				<section className=" bg-French-Gray  mx-auto w-full px-4 py-5 mb-10 ">
					<div className="flex items-baseline justify-between  gap-4">
						<input
							value={clonePost.title}
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
							{!clickDelete && (
								<button className=" w-20 py-2 hover:text-Madder" onClick={checkDelete}>
									<p className=" text-center ">Delete</p>
								</button>
							)}
							{clickDelete && (
								<button
									className="bg-Madder w-20 py-2  hover:bg-red-500 hover:text-black"
									onClick={checkDelete}
								>
									<p className=" text-center ">Confirm?</p>
								</button>
							)}
						</div>
					</div>
				</section>

				<div className=" w-3/4">
					<textarea
						value={clonePost.content}
						onChange={updateContent}
						rows="25"
						className=" whitespace-pre-line relative resize-none hover:resize-y   w-full  block p-2.5  text-sm text-gray-900 bg-French-Gray  border border-gray-300 "
					></textarea>
				</div>
			</div>
		);
	}
}

export default EditPostForm;
