let url = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=';
let forms = document.querySelector(".forms")
let int = document.querySelector("input")
let div = document.querySelector(".cord")
let spans = document.querySelector(".spans")

forms.addEventListener("submit",(e)=>{
    e.preventDefault();

    if(int.value != ""){
        spans.style.visibility = "visible"
        fetch(`${url} ${int.value}`)
        .then(data => data.json())
        .then(json=>{
            // console.log(json);
            let result = json.query.search
            // console.log(result);
            spans.style.visibility = "hidden"
            for (let i = 0; i < result.length; i++) {
                // console.log(result[i]);
                // console.log(result[i].title);
                // console.log(result[i].snippet);
                // console.log(result[i].pageid);

                let names = document.createElement("h3")
                names.innerText = result[i].title
                let a = document.createElement("a")
                a.href = `http://en.wikipedia.org/?curid=${result[i].pageid}`

                let page = document.createElement("p")
                page.innerHTML = result[i].snippet


                div.appendChild(a)
                a.appendChild(names)
                a.appendChild(page)
                
                int.value = ""
            }


        })
    }
    else if (int.value == ""){
        div.innerText = "Please enter the valid search..."
    }
})