// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId,
} = require("./data");

const express = require("express");
const app = express();

// Your code here
app.use(express.json());

app.use((req, res, next) => {
  console.log("request body: ", req.body);
  next();
});

//phase 2

//GET /artists
app.get("/artists", (req, res) => {
  res.json(getAllArtists());
});

//POST /artists

app.post("/artists", (req, res) => {
  let addResult = addArtist(req.body);
  res.status(201).json(addResult);
});

//bonus
//GET /artists/latest

app.get("/artists/latest", (req, res) => {
  let latestArtist = getLatestArtist();
  res.status(200).json(latestArtist);
});

// GET /artists/latest/albums
app.get("/artists/latest/albums", (req, res) => {
  let latestArtistAlbums = getAlbumsForLatestArtist();
  res.status(200).json(latestArtistAlbums);
});

//long practice

//GET /artists/:artistId
app.get("/artists/:artistId", (req, res) => {
  res.status(200).json(getArtistByArtistId(req.params.artistId));
});

//PUT or PATCH /artists/:artistId
app.put("/artists/:artistId", (req, res) => {
  let artistId = req.params.artistId;
  let editResult = editArtistByArtistId(artistId, req.body);
  res.json(editResult);
});
app.patch("/artists/:artistId", (req, res) => {
  let artistId = req.params.artistId;
  let editResult = editArtistByArtistId(artistId, req.body);
  res.json(editResult);
});

//DELETE /artists/:artistId
app.delete("/artists/:artistId", (req, res) => {
  let artistId = req.params.artistId;

  let deleteArtist = deleteArtistByArtistId(artistId);

  if (!deleteArtist) {
    res.json({ message: "Successfully deleted" });
  } else {
    res.json({ message: "Failed to delete" });
  }
});

// GET /artists/:artistId/albums
app.get("/artists/:artistId/albums", (req, res) => {
  let artistId = req.params.artistId;

  res.json(getAlbumsByArtistId(artistId));
});

//GET /albums/:albumId

app.get("/albums/:albumId", (req, res) => {
  let albumId = req.params.albumId;
  res.json(getAlbumByAlbumId(albumId));
});

//POST /artists/:artistId/albums
app.post("/artists/:artistId/albums", (req, res) => {
  let artistId = req.params.artistId;
  res.status(201).json(addAlbumByArtistId(artistId, req.body));
});

//PUT or PATCH /albums/:albumId
app.put("/albums/:albumId", (req, res) => {
  let albumId = req.params.albumId;

  let editedAlbum = editAlbumByAlbumId(albumId, req.body);
  res.status(200).json(editedAlbum);
});

app.patch("/albums/:albumId", (req, res) => {
  let albumId = req.params.albumId;

  let editedAlbum = editAlbumByAlbumId(albumId, req.body);
  res.status(200).json(editedAlbum);
});

// DELETE /albums/:albumId

app.delete("/albums/:albumId", (req, res) => {
  let albumId = req.params.albumId;

  let deleteResult = deleteAlbumByAlbumId(albumId);
  if (!deleteResult) {
    res.json({ message: "Successfully deleted" });
  } else {
    res.json({ message: "Failed to delete" });
  }
});

//GET /albums?startsWith={letter}

app.get("/albums", (req, res) => {
  let letter = req.query.startsWith;

  let filteredAlbums = getFilteredAlbums(letter);
  res.json(filteredAlbums);
});

// GET /songs/:songId
app.get("/songs/:songId", (req, res) => {
  let songId = req.params.songId;
  let song = getSongBySongId(songId);
  res.json(song);
});

//POST /albums/:albumId/songs

app.post("/albums/:albumId/songs", (req, res) => {
  let albumId = req.params.albumId;
  let addedSong = addSongByAlbumId(albumId, req.body);

  res.status(201).json(addedSong);
});

// GET /artists/:artistId/songs
app.get("/artists/:artistId/songs", (req, res) => {
  let artistId = req.params.artistId;

  let artistSongs = getSongsByArtistId(artistId);

  res.json(artistSongs);
});

// GET /albums/:albumId/songs
app.get("/albums/:albumId/songs", (req, res) => {
  let albumId = req.params.albumId;
  let albumSongs = getSongsByAlbumId(albumId);
  res.json(albumSongs);
});

// PUT or PATCH /songs/:songId

app.put("/songs/:songId", (req, res) => {
  let songId = req.params.songId;
  let editedSong = editSongBySongId(songId, req.body);
  res.json(editedSong);
});
app.patch("/songs/:songId", (req, res) => {
  let songId = req.params.songId;
  let editedSong = editSongBySongId(songId, req.body);
  res.json(editedSong);
});

// DELETE /songs/:songId
app.delete("/songs/:songId", (req, res) => {
  let songId = req.params.songId;
  let deletedSong = deleteSongBySongId(songId);
  if (!deletedSong) {
    res.json({ message: "Successfully deleted" });
  } else {
    res.json({ message: "Failed to delete" });
  }
});
// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log("Server is listening on port", port));
} else {
  module.exports = app;
}
