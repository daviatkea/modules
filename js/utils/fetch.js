// export async function fetchData(url) {
//   const response = await fetch(url);
//   const data = await response.json();
//   return data;
// }

export function fetchData(url) {
  return fetch(url).then((response) => response.json());
}
