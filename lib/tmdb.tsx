const key = 'a5be40fb'

export async function fetchMovies({ query, page }: { query: string; page?: string }) {
  const url = `https://www.omdbapi.com/?apikey=${key}&s=${query}&page=${page || '1'}`

  const res = await fetch(url, {
    next: { revalidate: 3600 },
  })

  if (!res.ok) {
    throw new Error(`OMDb HTTP error: ${res.status}`)
  }

  const data = await res.json()

  if (data.Response === 'False') {
    throw new Error(data.Error || 'OMDb error')
  }

  return data
}

export async function fetchMoviesId({ id }: { id: string }) {
  const url = `https://www.omdbapi.com/?apikey=${key}&i=${id}`

  const res = await fetch(url, {
    next: { revalidate: 3600 },
  })

  if (!res.ok) {
    throw new Error(`OMDb HTTP error: ${res.status}`)
  }

  const data = await res.json()

  if (data.Response === 'False') {
    throw new Error(data.Error || 'OMDb error')
  }

  return data
}
