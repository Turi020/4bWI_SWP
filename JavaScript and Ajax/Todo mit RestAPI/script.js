loadDataFromAPI();


document.getElementById("btnLoad").addEventListener("click", function() {
    loadDataFromAPI;
});


function loadDataFromAPI() {
    fetch("https://67b89321699a8a7baef48e81.mockapi.io/todos")
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            let html = [];

            json.forEach((todo) => {
                html.push("<div><div>" + todo.title + "</div><img width='79px' src ='" + todo.image + "?id=" + Math.random() + "'/><div>----</div></div>");

            });
            document.getElementById("content").innerHTML = html.join("");


        });
}