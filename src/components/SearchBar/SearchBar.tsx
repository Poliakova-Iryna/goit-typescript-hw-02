import { FormEvent, useState } from "react";
import s from './SearchBar.module.css';
import toast from 'react-hot-toast';

interface SearchBarProps {
    onSubmit: (query: string) => void;
}

const SearchBar: React.FC <SearchBarProps> = ({onSubmit}) => {
    const [query, setQuery] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!query.trim()) {
            toast.error("Please enter a search term!")
            return
        }
        onSubmit(query);
        setQuery('');
    };

    return (
        <div>
            <header className={s.header}>
                <form className={s.form} onSubmit={handleSubmit}>
                    <input className={s.input}
                     type="text"
                     value={query}
                     onChange={handleChange}
                     autoComplete="off"
                     autoFocus
                     placeholder="Search images and photos"
                    />
                    <button type="submit" className={s.button}>Search</button>
                </form>
            </header>
        </div>
    )
};

export default SearchBar;