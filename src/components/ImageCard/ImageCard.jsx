import styles from './ImageCard.module.css';

const ImageCard = ({ alt_description, urls, updateModalStateData }) => {
	return (
		<div
			className={styles.cardWrapper}
			onClick={() => updateModalStateData(urls.regular, alt_description)}
		>
			<img
				className={styles.cardImage}
				src={urls.small}
				alt={alt_description}
			/>
			<p className={styles.cardDescription}>{alt_description}</p>
		</div>
	);
};

export default ImageCard;
