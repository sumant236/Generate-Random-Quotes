window.addEventListener('load', ()=>{
    const btn = document.getElementById('btn');
    btn.addEventListener('click', generateQuote)

    onLoad();
    // generateQuote()
    // .then(res=>showQuote(res))
    // .catch(err => console.log(err));
})

function setLoading(isLoading) {
    const container = document.getElementById('loading');
    if(isLoading){
        container.className  = "visible";
    }
    else
        container.className = "hidden"
}

const generateQuote = () => {
    return fetch('https://api.quotable.io/random?tags=famous-quotes')
    .then(res => res.json())
}

const showQuote = (data) =>{
    const div = document.getElementById('container');
    const h2 = document.createElement('h2');
    h2.textContent = data.content;
    const h4 = document.createElement('h4');
    h4.textContent = `- ${data.author}`;
    const clearDiv = document.createElement('div');
    clearDiv.style.clear = "both";
    div.append(h2, h4, clearDiv)
    console.log(data);
}

async function onLoad() {
    try {
        setLoading(true);
        const result = await generateQuote();
        showQuote(result);
        setLoading(false)
    }
    catch(err){
        console.log(err);
    }
}