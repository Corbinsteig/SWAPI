const residentButton = document.querySelector('#button')

const resButton = () => {
    axios.get("https://swapi.dev/api/planets/2/").then((res) => {
        // console.log(res.data.residents)
        for (let i = 0; i < res.data.residents.length; i++){
            axios.get(res.data.residents[i]).then((res) => {
                let newRes = document.createElement("h2")
                newRes.textContent = res.data.name
                document.querySelector('body').appendChild(newRes)
                // console.log(newRes.textContent)
            })
        }
        // alert (res.data.residents)
    })
} 

residentButton.addEventListener('click', resButton)

