import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSearch } from '../../redux/store';

const SearchForm = () => {
    const dispatch = useDispatch();

    const [search, setSearch] = useState('') 

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(updateSearch({search}))
    }

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..." value={search} onChange={e=> setSearch(e.target.value)} />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;