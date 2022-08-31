//1.


$(".button").click(function(){
    $("p")[0].hide();
});

$(".button1").click(function(){
    $("p")[1].show();
})




//2.


$("#btn").click(function(){
    $.ajax({
        url:"https://jsonplaceholder.typicode.com/posts/2",
        type: "GET",
        success: function(data){
            console.log(data);
            document.getElementsByTagName("h1")[0].innerText = data.title;
        },
    })
})