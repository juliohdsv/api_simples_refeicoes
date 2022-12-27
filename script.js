// URL: https://sujeitoprogramador.com/rn-api/?api=posts

let listElement = document.querySelector("#app");
let post = [];

function nutriApp(){
    
    fetch("https://sujeitoprogramador.com/rn-api/?api=posts")
        .then((response)=> response.json())
        .then((json) =>{
            let post = json;

            post.map((item)=> {

                let liElement = document.createElement("li");
                let titleElement = document.createElement("strong");
                let imgElement = document.createElement("img");
                let decriptionElement = document.createElement("a");

                //Titulo
                let titleText = document.createTextNode(item.titulo);
                titleElement.appendChild(titleText);
                liElement.append(titleElement);
                
                //Imagem
                imgElement.src = item.capa;
                liElement.appendChild(imgElement);

                //Description
                let descriptionText = document.createTextNode(item.subtitulo);
                decriptionElement.appendChild(descriptionText);
                liElement.append(decriptionElement);

                //Inserir tudo na ul
                listElement.appendChild(liElement);
             
            })
            
        })
        .catch(() => {
            console.log("Erro na API");
        })
}

nutriApp();