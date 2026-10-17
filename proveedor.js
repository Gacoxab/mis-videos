export async function misVideosDeNuvio(mediaDetails) {
  // Nuvio detecta qué película tocas y nos da su código interno (ID)
  const idDePelicula = mediaDetails.tmdbId; 

  // AQUÍ es donde le dices a Nuvio en qué página o servidor web tienes tus archivos .mp4
  const enlaceDeVideo = `https://tuservidor.com{idDePelicula}.mp4`;

  // Le enviamos el enlace a Nuvio para que lo reproduzca
  return [
    {
      name: "Mi Servidor Privado",
      url: enlaceDeVideo,
      quality: "1080p"
    }
  ];
}
