function searchImage(x, y)
{
    let number = 6;
    let linkImg = prompt("Ajouter un lien, si votre image se trouve sur votre site,\nvous pourrez mettre son chemin\nExemple: ../img/monimage.png");
    const nameImg = prompt("Ajouter le nom de votre image\nSe nom apparait si l'image n'est pas chargé ");

    if(linkImg == "" && nameImg == "" || linkImg == "") return;
    if(linkImg == "https://lesilluminés.com/files/barre_recherche.png") linkImg = "https://xn--lesillumins-kbb.com/files/barre_recherche.png";
    
    if(Url_Valide(linkImg, true) != true || detectURLValide(linkImg, "https:", "6") != true || detectURLValide(linkImg, "http:", "5") != true)
    {
        if(detectPath(linkImg) == false)
        {
            const searchTerm = ".";
            const illegalTerm = " ";
            const indexOfFirst = linkImg.indexOf(searchTerm);
            const indexOfIllegalTerm = linkImg.indexOf(illegalTerm);
    
            if(indexOfFirst !== -1)
            {
                if(indexOfIllegalTerm !== -1)
                {
                    alert("Le fichier contient ou le chemin un espace");
                    return;
                }
                
                addLinkImage(linkImg, nameImg);
            }
            return;
        }
    }

    addLinkImage(linkImg, nameImg);
}

function Url_Valide(UrlTest, http_fac)
{
    if (http_fac) var regexp = new RegExp("^((http|https)://)?(www[.])?([a-zA-Z0-9]|-)+([.][a-zA-Z0-9(-|/|=|?)?]+)+$");
    else var regexp = new RegExp("^((http|https)://){1}(www[.])?([a-zA-Z0-9]|-)+([.][a-zA-Z0-9(-|/|=|?)?]+)+$");

    return regexp.test(UrlTest);
}

function addLinkImage(linkImg, nameImg)
{
    const addImage = document.createElement("div");
    
    addImage.classList.add("item","move-element");
    addImage.innerHTML = `
        <img src="${linkImg}" alt="${nameImg}" class="${nameImg}">
        <div class="resizer ne"></div>
        <div class="resizer nw"></div>
        <div class="resizer sw"></div>
        <div class="resizer se"></div>`

    document.querySelector(".user").appendChild(addImage);
}

function detectURLValide(link, type, value)
{
    value = parseInt(value, 10);
    const checkURL = link.slice(0, value);

    if(checkURL == type) return true;
    else return false;
}

function detectPath(path)
{
    if(path.slice(0, 3) == "../") return true;
    else if(path.slice(0, 2) == "./") return true;
    else return false;
}