/**
 * Gets a url and fetches content.
 * 
 * @param {String} url An api endoint.
 * @returns {JSON} Json data if no error is found.
 */
export default async function fetchContent(url) {
  
  const result = await fetch(url)
    .then(response => response.json())
    .then(data => data)
    .catch(error => {
      throw (error);
    });

  return result;

}
