const LoadMoreBtn = ({ handleLoadMore, isActive }) => {
	return (
		<button onClick={handleLoadMore} type='button' disabled={isActive}>
			Load more
		</button>
	);
};

export default LoadMoreBtn;
