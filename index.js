const fetchData = async searchTerm => {
    const response = await axios.get('http://www.omdbapi.com/', {
        //sticks these as query strings
        params: {
            apikey: '',
            s: searchTerm
        }
    });
    return response.data.Search
};

const input = document.querySelector('input');

const onInput = async event => {
    const movies = await fetchData(event.target.value);
    console.log(movies)
};

input.addEventListener('input', debounce(onInput, 2000));