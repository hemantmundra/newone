var create_view=function(){
	
	var pv =new ProductsView({
			collection:pc
		});
}

var pc = new Napp.Collections.ProductsCollection();
pc.url= "/products.json";
pc.fetch({
	success: create_view
});
pc.url= "http://10.1.2.29:3000/products.json";//Kailash
pc.fetch({
	success: create_view
});
pc.url= "http://10.1.2.64:3000/products.json";//RYadav
pc.fetch({
	success: create_view
});
pc.url= "http://10.1.2.51:3000/products.json";//Bhanu
pc.fetch({
	success: create_view
});
pc.url= "http://10.1.2.48:3000/products.json";//Abhijit
pc.fetch({
	success: create_view
});
pc.url= "http://10.1.2.49:3000/products.json";//RB
pc.fetch({
	success: create_view
});
pc.url= "http://10.1.2.27:3000/products.json";//Kishore
pc.fetch({
	success: create_view
});