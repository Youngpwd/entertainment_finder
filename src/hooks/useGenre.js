const useGenres = (selectedGenres) => {
  if (selectedGenres.length < 1) return "";
  const GeraldIds = selectedGenres.map((genres) => genres.id);
  return GeraldIds.reduce((prev, curr) => prev + "," + curr);
};

export default useGenres;
