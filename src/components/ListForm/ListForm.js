import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import styles from './ListForm.module.scss'
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addList } from "../../redux/listsRedux";


const ListForm = () =>{

	const dispatch = useDispatch()
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('')

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(addList({title, description}))
		setTitle('')
		setDescription('')
	}
return (
	<form onSubmit={handleSubmit} className={styles.listForm}>
			Title: <TextInput value={title} onChange={e => setTitle(e.target.value)} /> 
			Description: <TextInput value={description} onChange={e => setDescription(e.target.value)} />
			<Button>Add list</Button>
	</form>
);
};
export default ListForm;