const key = 'a5be40fb'

export async function fetchMovies({ query, page }: { query: string; page?: string }) {
  const url = `https://www.omdbapi.com/?apikey=${key}&s=drama&type=movie&page=${page || '1'}`

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
// export async function fetchMovies({
//   query,
//   limit = 16,
// }: {
//   query: string
//   limit?: number
// }) {
//   if (!query) query = 'avengers'

//   const pageSize = 3
//   const pagesNeeded = Math.ceil(limit / pageSize)

//   const requests = Array.from({ length: pagesNeeded }, (_, i) =>
//     omdbFetch(
//       `https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${query}&page=${i + 1}`,
//     ),
//   )

//   const responses = await Promise.all(requests)

//   return responses.flatMap((r) => r.Search ?? []).slice(0, limit)
// }

export async function fetchMoviesId({ id }: { id: string }) {
  const url = `https://www.omdbapi.com/?apikey=${key}i=${id}`

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
