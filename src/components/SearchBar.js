import React from 'react';
import getImages from '../api';
import { useState } from 'react';

export default function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('cars');

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(term);
  }

  function handleChange(event) {
    // Sets the term to the value of the input
    setTerm(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={term} type="text" onChange={handleChange} />
      </form>
    </div>
  )
}
