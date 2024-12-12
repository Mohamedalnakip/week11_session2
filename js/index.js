var myRequest=new XMLHttpRequest()
myRequest.open("GET","https://jsonplaceholder.typicode.com/posts")
myRequest.send()
myRequest.responseType='json'
var data

console.log(myRequest.response);


myRequest.addEventListener("readystatechange",function(){

    if(myRequest.readyState == 4){
        data=myRequest.response
        console.log(myRequest.response);
    }

})

function displayPosts(){
    var carton=``;

    for(var i=0;i<data.length;i++){
        carton+=` <div class="col-12">

                            <h1>title : ${data[i].title}</h1>
                            <p>body : ${data[i].body}</p>

                    </div>`
    }
    document.getElementById("mm").innerHTML=carton
}