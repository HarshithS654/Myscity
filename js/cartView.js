cart='';
var sum=0;

var myCart = $.Class({
	initialize: function(name){
		var productInfo = {
			name: name.name,
            price: name.price,
			image: name.image
    	}
    	cart='<div class="row text-center"><h3>Name:'+productInfo.name+'</h3>';
		cart+='<h4>Price:'+productInfo.price+'</h4></div>';
		sum+=parseInt(productInfo.price);
		$('#cartlist').append(cart);
	}
})

$('.addbook').on('click', function(){ 
	alert("Product added to cart");
	var pname=JSON.parse(localStorage.getItem("book"));
	var prod=new myCart(pname);
});

$('.addmobile').on('click', function(){ 
	alert("Product added to cart");
	var pname=JSON.parse(localStorage.getItem("mobile"));
	var prod=new myCart(pname);
});

$('.addshirt').on('click', function(){ 
	alert("Product added to cart");
	var pname=JSON.parse(localStorage.getItem("shirt"));
	var prod=new myCart(pname);
});

$('.addshoes').on('click', function(){ 
	alert("Product added to cart");
	var pname=JSON.parse(localStorage.getItem("shoes"));
	var prod=new myCart(pname);
});

$('.addtable').on('click', function(){ 
	alert("Product added to cart");
	var pname=JSON.parse(localStorage.getItem("table"));
	var prod=new myCart(pname);
});

$('.addtv').on('click', function(){ 
	alert("Product added to cart");
	var pname=JSON.parse(localStorage.getItem("tv"));
	var prod=new myCart(pname);
});

$('.buyall').on('click',function(){
	if(sum==0){
		alert("No products selected");
	}
	else
		alert("Your total amount is:"+sum+"\nThank you for shopping");
	sum=0;
	$('#cartlist').empty();
});

$('.clear').on('click',function(){
	sum=0;
	$('#cartlist').empty();
})