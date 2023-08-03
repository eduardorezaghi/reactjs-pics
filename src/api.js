import axios from 'axios';

export async function getImages(term) {
  const response = await axios.get('https://api.unsplash.com/search/photos/', {
    headers: {
      Authorization: 'Client-ID 6Jz8vRPUnLzNpfjSlX1cGQw59gEcXJbxvXgfIpr99iY'
    },
    params: {
      query: term,
    }
  })

  return response.data.results;
}

