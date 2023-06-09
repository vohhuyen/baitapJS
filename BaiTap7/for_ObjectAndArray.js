function listProducts(){
    for(var i = 0; i <= man.length-1; i++){
        var demo = '<div class="col-3">';
        demo += '<div class="card" style="width: 18rem;">';
        demo += '<img class="card-img-top" style="height:400px;" src="'+man[i].image+'"alt="Card image">';
        demo += '<div class="card-body">';
        demo += '<h4 class="card-title">'+man[i].name+'</h4>';
        demo += '<p class="card-text">'+man[i].price+'</p>';
        demo += '<a href="#" class="btn btn-primary" onclick=order()">Buy</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';

        console.log(demo);
        document.getElementById("man").innerHTML += demo;
    }
    for(var i=0; i<=women.length-1; i++){
        var demo = '<div class="col-3">';
        demo += '<div class="card" style="width: 18rem;">';
        demo += '<img class="card-img-top" style="height:400px;" src='+women[i].image+'alt="Card image">';
        demo += '<div class="card-body">';
        demo += '<h4 class="card-title">' +women[i].name+ '</h4>';
        demo += '<p class="card-text">'+women[i].price+'</p>';
        demo += '<a href="#" class="btn btn-primary" onclick=order()">Buy</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';

        console.log(demo);
        document.getElementById("women").innerHTML += demo;
    }
}