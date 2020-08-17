const URLAPI = "https://5f2859b3f5d27e001612eede.mockapi.io/article"

function getNewsFromApi() {

    fetch(URLAPI)
        .then(function (response) {
            // console.log(document.readyState)
            return response.json();
        })

        .then(function (dados) {
            const dadosAPI = dados.slice(0, 4);
            articleTag = document.querySelectorAll(".dynamic-news");

            for (let i = 0; i < dadosAPI.length; i++) {

                let TagImage = document.createElement("img");
                TagImage.classList.add("news-post__image");
                TagImage.src = dadosAPI[i].image;
                TagImage.alt = dadosAPI[i].imagealt;
                articleTag[i].appendChild(TagImage);

                let TagTitle = document.createElement("h2");
                TagTitle.classList.add("news-post__title");
                TagTitle.innerText = dadosAPI[i].title;
                articleTag[i].appendChild(TagTitle);

                let TagPost = document.createElement("p");
                TagPost.classList.add("news-post__text");
                TagPost.innerText = dadosAPI[i].post;
                articleTag[i].appendChild(TagPost);
            }
        });
}


// console.log(document.readyState)

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", getNewsFromApi);
} else {
    getNewsFromApi();
}