const body = document.getElementById('body');

// Creating request variable
//var request = new XMLHttpRequest();

// Opening connection
fetch('https://www.dnd5eapi.co/api/classes/')
    .then(response => {
        if (response.ok) {
            console.log('SUCCESS')
            response.json()
            .then(data => {
                console.log(data)
                console.log(data.results[0])

                let class_list = data.results

                let info = document.getElementById('class-info')
                class_list.forEach(dnd_class => {
                    console.log(dnd_class)
                    let table_data = info.insertCell()
                    let text = document.createTextNode(dnd_class.name)
                    table_data.appendChild(text)
                //const listKeys = Object.keys(data)
		        //const listVals = Object.values(data)
                //console.log(listKeys)
                //console.log(listVals)
                })
            })
        }
        else {
            console.log('FAIL')
        }
    })
