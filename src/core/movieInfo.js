export async function getMovie(id) {
  const res = await fetch(
    `https://omdbapi.com/?apikey=7035c60c&i=${id}&plot=full`
  )
  const json = await res.json()
  if (json.Response === 'True') {
    return json
  }
  return json.Error
}