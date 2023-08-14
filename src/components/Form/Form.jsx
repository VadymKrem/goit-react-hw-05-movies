import { useState } from 'react';
import { Input, Button } from './Form.styled';

const Form = ({ params }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!query) {
      alert('Введіть назву фільму');
      return;
    }
    params({ query });
  };

  const handleSearchParams = ({ target: { value } }) => {
    setQuery(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Title movie"
        value={query}
        onChange={handleSearchParams}
      />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default Form;
