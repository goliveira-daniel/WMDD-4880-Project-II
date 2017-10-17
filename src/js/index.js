const apiUrl = `http://localhost:5000/ticketmaster`

function fetchData (url) { 
	fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
}

fetchData(apiUrl);