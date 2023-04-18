import './App.css';
import { Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import CreatePost from './pages/CreatePost';
import HomePage from './pages/HomePage';
import EditPost from './pages/EditPost';
import StatusAlert from './components/StatusAlert';
import IndividualPost from './components/IndividualPost';
import HeaderFooter from './components/HeaderFooter';

function App() {
	const getClassName = (props) => {
		return `${
			props.isActive ? 'font-bold' : ''
		} hover:underline hover:text-Light-Coral transition duration-300  `;
	};
	return (
		<div className="min-h-screen relative pb-60  ">
			<HeaderFooter>
				<NavLink className={getClassName} to="/">
					<p className="text-2xl">Blog.Com!</p>
				</NavLink>
				<div className="flex items-baseline  gap-4">
					<NavLink className={getClassName} to="/">
						Home
					</NavLink>

					<NavLink className={getClassName} to="/newPost">
						Create
					</NavLink>
				</div>
			</HeaderFooter>

			<div>
				<Routes>
					<Route index element={<HomePage />} />
					<Route path="/newPost" element={<CreatePost />} />
					<Route path="/post/:id" element={<IndividualPost />} />
					<Route path="/post/:id/edit" element={<EditPost />} />

					<Route path="*" element={<StatusAlert statusType={'404'} />} />
				</Routes>
			</div>
			<div className="absolute bottom-0 left-0 right-0 w-full  ">
				<HeaderFooter>
					<div className=" text-sm  bg-Tropical-Indigo mx-auto w-full">
						Thank you for choosing Blog.com! We arethe number one blog site currently
						on localhost:5173
					</div>
				</HeaderFooter>
			</div>
		</div>
	);
}

export default App;
