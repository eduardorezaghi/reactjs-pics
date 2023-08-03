import React from 'react'
import { ReactDOM } from 'react-dom/client'
import SearchBar from './components/SearchBar'

export default function App () {
  function handleSubmit (term) {
    console.log('Do a search with', term)
  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  )
}