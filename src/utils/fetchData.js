export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '64ec6c49ecmshb01eb8c36a25785p1d506cjsn85eb14f460b9',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    } 
}

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '64ec6c49ecmshb01eb8c36a25785p1d506cjsn85eb14f460b9',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export async function fetchData(url, options) {
  try {
    const response = await fetch(url, options)
    const data = await response.json()
    return data
  } catch (err) {
    console.error(err)
  }
}