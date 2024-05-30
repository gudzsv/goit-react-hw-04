import toast from 'react-hot-toast';
import { Field, Form, Formik } from 'formik';

import styles from './SearchBar.module.css';

const initialValues = { query: '' };

const SearchBar = ({ onSubmit }) => {
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={(values, actions) => {
				if (!values.query) {
					toast.error('Please enter the value in the search field');
					return;
				}
				onSubmit(values.query);
				actions.resetForm();
			}}
		>
			<Form className={styles.searchForm}>
				<Field
					className={styles.searchInput}
					name='query'
					type='search'
					autoComplete='off'
					autoFocus
					placeholder='Search images and photos'
				/>
				<button type='submit'>Search</button>
			</Form>
		</Formik>
	);
};

export default SearchBar;
