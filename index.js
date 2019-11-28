const fetchData = async searchTerm => {
    const response = await axios.get('http://www.omdbapi.com/', {
        //sticks these as query strings
        params: {
            apikey: '',
            s: searchTerm
        }
    });
    console.log(response.data);
};

const input = document.querySelector('input');

const debounce = (func, delay = 500) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(null, args);
        }, delay);
    };
};

const onInput = event => {
    fetchData(event.target.value);
};

input.addEventListener('input', debounce(onInput, 3000));