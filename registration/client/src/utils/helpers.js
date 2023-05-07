async function fetchData(url, options = {}) {
  try {
    const response = await fetch(url, options);
    const result = await response.json();

    return result;
  } catch (error) {
    console.log("Fetch Data error: ", error);
    return error;
  }
}

module.exports = {
  fetchData,
};
