const Header = ({ children }) => {
	return (
		<section className=" bg-Tropical-Indigo  mx-auto w-full px-4 py-5  ">
			<nav className="flex items-baseline justify-between  gap-4">{children}</nav>
		</section>
	);
};

export default Header;
