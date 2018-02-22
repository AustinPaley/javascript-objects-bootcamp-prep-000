var playlist = new Object({artist: 'song title'});

function updatePlaylist(playlist, artist, songtitle){
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist(playlist, artistname){
  delete playlist[artistname]
  return playlist
}