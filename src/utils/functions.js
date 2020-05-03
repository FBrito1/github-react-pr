export const orderReposByStar = (a, b) => {
  const starA = a.stargazers_count;
  const starB = b.stargazers_count;

  let comparison = 0;
  if (starA > starB) {
    comparison = -1;
  } else if (starA < starB) {
    comparison = 1;
  }
  return comparison;
};
