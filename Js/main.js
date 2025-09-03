let myhttpp = new XMLHttpRequest();  //1- instance



myhttpp.open('get', 'https://forkify-api.herokuapp.com/api/search?q=pasta')  // 2- Establish connection 

myhttpp.send();   // 3- send request 


myhttpp.responseType = 'json' // 4- Change Datatype








let recipes = [];



myhttpp.addEventListener('load', function () {   // 5- response is ready



    recipes = myhttpp.response.recipes


    displaydata()

    console.log(myhttpp.response.recipes)


})





// Displayaa the data
function displaydata() {


    box = '';



    for (var i = 0; i < recipes.length; i++) {

        box += `
  <div class="col-md-3">
                    <div class="inner shadow-lg rounded-4">
                        
                        <img class='w-100' src="${recipes[i].image_url}" alt="">
                        
                        <h3>${recipes[i].title.split(' ', 2).join(' ')}</h3>
                    </div>
                </div>

`



    }



    document.getElementById('myRow').innerHTML = box


}
