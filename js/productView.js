var products='';
var columnCount=0;
for(i=0;i<localStorage.length;i++)
{
	columnCount++;
	product=JSON.parse(localStorage.getItem(localStorage.key(i)));
	if(columnCount==3){
		products+='<div class="row">';
	}
	products+='<div class="col-sm-6 col-md-4"><div class="thumbnail">';
	products+='<img class="img-fluid" src="'+product.image+'"><div class="caption text-center">';
	products+='<h3>'+product.name+'</h3><p class="'+product.name+'">$'+product.price+'</p>';
	products+='<p><button class="add'+product.name+' btn btn-success">Add to cart';
	products+='</button></p></div></div></div>';
	if(columnCount==3){
		products+='</div>';
		columnCount=0;
	}
}
$('.productview').append(products);