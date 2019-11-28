const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        //sticks these as query strings    
        params: {
            apikey: '',
            s: searchTerm
        }
    })
    console.log(response.data)
}

const input = document.querySelector('input')
input.addEventListener('input', (event) => {
    fetchData(event.target.value)
})