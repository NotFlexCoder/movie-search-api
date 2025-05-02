export default async function handler(req, res) {
  const { search } = req.query;

  if (!search) {
    return res.status(400).json({ error: "Please provide ?search=movie_name" });
  }

  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(search)}`);
    const data = await response.json();

    if (!data.length) {
      return res.status(404).json({ error: "No results found" });
    }

    const show = data[0].show;

    res.status(200).json({
      title: show.name,
      genres: show.genres,
      language: show.language,
      rating: show.rating?.average,
      summary: show.summary?.replace(/<[^>]+>/g, ''),
      image: show.image?.original || show.image?.medium || null,
      url: show.url
    });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
}
