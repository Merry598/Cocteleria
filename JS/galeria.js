//Formato de las Imagenes
$(document).ready(function(){

	// Se agrega la clase active al primer enlace
	$('.category_list .category_item[category="all"]').addClass('ct_item-active');

   
// se filtran los productos

$('.category_item').click(function(){
  var catProduct = $(this).attr('category');
  console.log(catProduct);

// Se agrega la clase active al enlace seleccionado "Todo"--> hacia abajo cocteles frutas etc"
$('.category_item').removeClass('ct_item-active');
$(this).addClass('ct_item-active');


// Ocultar productos
		$('.product-item').css('transform', 'scale(0)');
		function hideProduct(){
			$('.product-item').hide();
    } setTimeout(hideProduct,400);
    
    // Mostrar productos
		function showProduct(){
			$('.product-item[category="'+catProduct+'"]').show();
			$('.product-item[category="'+catProduct+'"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	});
  // Mostrar todos los productos

	$('.category_item[category="all"]').click(function(){
		function showAll(){
			$('.product-item').show();
			$('.product-item').css('transform', 'scale(1)');
		} setTimeout(showAll,400);


});

});