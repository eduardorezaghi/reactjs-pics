import React from 'react'
import { useState } from 'react'
import SearchBar from './components/SearchBar'
import { getImages } from './api'
import ImageList from './components/ImageList'


export default function App () {
  const [images, setImages] = useState([]);

  async function handleSubmit (term) {
    const result = await getImages(term);
    setImages(result);
  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  )
}