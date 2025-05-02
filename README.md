## 🎬 Movie Search API

This simple API allows you to search for TV shows using the [TVmaze API](https://www.tvmaze.com/api). It returns basic information like title, genres, language, rating, and more about the first search result.

## 🚀 Features

- 🔎 Search TV shows by name.
- 🎭 Get genres, language, rating, summary, and image.
- ✅ Simple GET-based interface.
- ⚡ Cleans up HTML from summaries.
- 🌐 Powered by TVmaze’s public API.

## 📦 Requirements

- Node.js 14+
- `fetch` or any compatible fetch polyfill for Node

## 📡 Usage

**1. Endpoint**

Send a GET request to the deployed function or local server:
`GET /api/tvsearch?search=Breaking+Bad`

**2. Query Parameters**

| Parameter | Required | Description                            |
|-----------|----------|----------------------------------------|
| `search`  | ✅       | Name of the TV show you want to search |

**✅ Example Request**

```bash
curl "http://localhost:3000/api/tvsearch?search=Game+of+Thrones"
```

**✅ Example Response**

```json
{
  "title": "Game of Thrones",
  "genres": ["Drama", "Adventure", "Fantasy"],
  "language": "English",
  "rating": 8.9,
  "summary": "Nine noble families fight for control over the lands of Westeros...",
  "image": "https://static.tvmaze.com/uploads/images/original_untouched/190/476117.jpg",
  "url": "https://www.tvmaze.com/shows/82/game-of-thrones"
}
```

**❌ Error Responses**
- Missing query:

```json
{
  "error": "Please provide ?search=movie_name"
}
```

- No results found:

```json
{
  "error": "No results found"
}
```

- Server error:

```json
{
  "error": "Something went wrong"
}
```

## 🔍 Code Explanation

- Uses fetch to call the TVmaze API with the provided search term.
- Extracts the first result from the returned array.
- Cleans HTML tags from the summary using RegEx.
- Returns relevant show data (title, genres, language, rating, summary, image, url).
- Handles missing search queries and fetch errors gracefully.

## ⚠️ Error Handling

- 📭 400 Bad Request: If search is not provided.
- ❓ 404 Not Found: If no results match the query.
- 💥 500 Internal Server Error: If API call fails.

## 📄 License

This project is licensed under the License - see the [LICENSE](https://github.com/NotFlexCoder/movie-search-api/blob/main/LICENSE) file for details.
