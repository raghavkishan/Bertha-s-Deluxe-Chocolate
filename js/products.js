/*
    Sunku Ravindranath, Raghav Kishan
    Project #4
    Fall 2017
    820174908
    jadrn063

*/

var proj4_data;
var finalTotalCost;
var finalTotaltax;
var finalTotalSHippingCharges;

var addCards = function (proj4_data,category) {
    var handle = document.getElementById('content_main');
    tmpString = "<div class=\"row\" id=\"contentPanel\"></div>";
    handle.innerHTML = tmpString;
    for(var i=0; i < proj4_data.length; i++) {
        if(proj4_data[i][1] === category) {
            var myCol = $('<div class="col-md-3 pb-2 d-flex align-items-stretch"></div>');
            var myPanel = $('<div class="card border-secondary mb-3 d-flex" style="width: 20rem;">\n' +
                '<img class="card-img-top" src="/~jadrn000/PROJ4_IMAGES/'+proj4_data[i][0]+'.jpg" alt="Card image cap">\n' +
                '<div class="card-body">\n' +
                '<h5 class="card-title text-primary">'+proj4_data[i][2]+'</h5>\n' +
                '<p class="card-text text-secondary">'+proj4_data[i][3]+'</p>\n' +
                '</div>\n' +
                '<span class="d-flex justify-content-around align-items-end my-2">'+
                '<span class="text-primary mx-2 my-1 font-weight-bold">'+'$ '+proj4_data[i][6]+'</span>'+
                '<button type="button" value="Add to Cart" class="btn btn-outline-primary btm-sm" name="'+proj4_data[i][0]+'">Add to Cart</button>\n' +
                '</span>'+
                '</div>');
            myPanel.appendTo(myCol);
            myCol.appendTo('#contentPanel');
        }
    }
};

var mainPage = function () {
    $(this).addClass("active");
    $('#about_us,#products,#contact_us').removeClass("active");

    tmpString = '';
    tmpString +="<div class=\"card bg-dark text-white\">"+"<img class=\"card-img\" src=\"chocolates-slider.jpg\" alt=\"Card image\">";
    tmpString +="<div class=\"card-img-overlay\">"+"<h2 class=\"card-title\">Welcome to the World of Chocolates !!!</h2>";
    tmpString +="<p class=\"card-text\">Experience Unusual and exiting flavours.</p>"+"<p class=\"card-text\">Find a gift for everyone...</p>"+"</div>"+"</div>";
    var handle = document.getElementById('content_main');
    handle.innerHTML = tmpString;
};

var displayCartItems = function (cartArray,proj4_data) {

    $('#customer_products_list_group').empty();

    var totalCost = 0;
    var totalQuantity = 0;

    var header = $('<li class="list-group-item d-flex">'+'<span class="text-primary mr-auto font-weight-bold">Item Name</span>'
        +'<span class="text-primary mx-5 font-weight-bold">Quantity</span>'
        // +'<span class="text-primary mx-2 font-weight-bold">Click to Change</span>'
        +'<span class="text-primary mx-2 font-weight-bold">Delete Item</span>'
        +'<span class="text-primary mx-2 font-weight-bold">Cost</span>'
        +'</li>');

    header.appendTo('#customer_products_list_group');

    for (var i=0; i < cartArray.length; i++){
        for  (var j = 0; j < proj4_data.length; j++){
            if (cartArray[i][0] == proj4_data[j][0]){
                var itemName = proj4_data[j][2];
                var itemRetail = proj4_data[j][6];
            }
        }
        var quantity = $.trim(cartArray[i][1]);
        var myGroup = $('<li class="list-group-item d-flex">'
            +'<span class="mr-auto">'+itemName+'</span>'
            +'<input type="number" class="mx-2 quantity_number_input" value="'+quantity+'" name="'+cartArray[i][0]+'">'
            // +'<button type="button" class="btn btn-outline-secondary mx-1 btn-sm" value="change_quantity" name="'+cartArray[i][0]+'">Change Quantity</button>'
            +'<button type="button" class="btn btn-outline-danger mx-1 btn-sm"  value="delete_item" name="'+cartArray[i][0]+'">Delete Item</button>'
            +'<span class="text-primary mx-2 font-weight-bold">'+itemRetail+' $'+'</span>'
            +'</li>');
        myGroup.appendTo('#customer_products_list_group');

        totalCost = totalCost + (quantity*itemRetail);
        quantity = parseInt(quantity);
        totalQuantity = totalQuantity + quantity;
    }

    var footer2 = $('<li class="list-group-item d-flex justify-content-end">'
        +'<span class="text-primary mx-2 font-weight-bold">Tax (8%):</span>'
        +'<span class="text-primary mx-2 font-weight-bold">'+'$ '+(totalCost*(8/100)).toFixed(2)+'</span>'
        +'</li>');

    footer2.appendTo('#customer_products_list_group');

    var totalShippingCharges = totalQuantity * 2;

    var footer1 = $('<li class="list-group-item d-flex">'
        +'<span class="text-primary mr-2 font-weight-bold">Total Quantity:</span>'
        +'<span class="text-primary mx-2 mr-auto font-weight-bold">'+totalQuantity+'</span>'
        +'<span class="text-primary font-weight-bold">Shipping Charge ($ 2 per item):</span>'
        +'<span class="text-primary mx-2 font-weight-bold">'+'$ '+totalShippingCharges+'</span>'
        +'</li>');

    footer1.appendTo('#customer_products_list_group');

    var t = (totalCost*(8/100)).toFixed(2);
    totalCost = parseFloat(totalCost) + parseFloat(t) + parseFloat(totalShippingCharges);
    totalCost = totalCost.toFixed(2);

    var footer = $('<li class="list-group-item d-flex justify-content-end">'
        +'<span class="text-primary font-weight-bold">Total:</span>'
        +'<span class="text-primary mx-2 font-weight-bold">'+'$ '+totalCost+'</span>'
        +'</li>');

    footer.appendTo('#customer_products_list_group');

    finalTotalCost = parseFloat(totalCost);
    finalTotaltax = parseFloat(t);
    finalTotalSHippingCharges = parseFloat(totalShippingCharges);
};



$(document).ready(function() {
    $('#home').addClass("active");
    proj4_data = new Array();
    // $.get('/perl/jadrn000/proj4/get_products.cgi', storeData);
    $.get('/perl/jadrn063/get_products.cgi', storeData);
    var cart = new shopping_cart("jadrn063");
    var cart_quantity_span = document.getElementById('cart_quantity');
    cart_quantity_span.textContent="0";

    $('#home').on('click', function() {
        mainPage();
    });

    $('#about_us').on('click', function() {
        $(this).addClass("active");
        $('#home,#products,#contact_us').removeClass("active");

        tmpString = '';
        tmpString +="<div class=\"container\">"+"<div class=\"jumbotron\">"+"<h1 class=\"display-5 text-info\">About Us</h1>"+"<p class=\"lead\"> The most amazing chocolates you can ever have!</p>";
        tmpString +="<p>Bertha's Deluxe Chocolate is a chocolatier in San Diego, California. Established in 1970, it is the first certified organic chocolates producer in California. Betha has sourced beans from the Congo, Costa Rica, the Dominican Republic, Ecuador, Madagascar, Peru, and Venezuela. An equatorial crop, cocoa in the United States grows only in Hawaii. Betha's chocolates come in 6 different categories. They are:</p>";
        tmpString +="<ul>"+"<li>Milk Chocolates</li>"+"<li>Dark chocolate</li>"+"<li>Nuts and chews</li>"+"<li>Brittles and toffies</li>"+"<li>Truffles</li>"+"<li>Gifts</li>"+"<li>Holiday assortments</li>"+"</ul>"+"<hr class=\"my-4\">";
        tmpString +="<p>The business was established in 1970 by Bertha and her husband in Downtown, San Diego neighborhood.</p>"+"<p>As the business grew, many major baking enterprises began investing in the company making it one of the largest organic chocolate manufacturers in the country.\n" +
            "        With business thriving, we began to export our speciality chocolates to Asian and European countries. Today we are a 300 million dollar company.</p>"+"</div>"+"</div>";
        var handle = document.getElementById('content_main');
        handle.innerHTML = tmpString;
    });

    $('#contact_us').on('click', function() {
        $(this).addClass("active");
        $('#home,#products,#about_us').removeClass("active");

        tmpString = '';
        tmpString +="<div class=\"container\">"+"<div class=\"jumbotron\">"+"<h1 class=\"display-5 text-info\">Contact Us @</h1>";
        tmpString +="<ul>"+"<li>446-857-8965</li>"+"<li>446-berthas</li>"+"<li>berthas_deleuxe_cholcolates@chocolate.com</li>"+"</ul>";
        tmpString +="</div>"+"</div>";
        var handle = document.getElementById('content_main');
        handle.innerHTML = tmpString;
    });

    $('#dark_chocolates').on('click',function () {
        $('#products').addClass("active");
        $('#home,#about_us,#contact_us').removeClass("active");

        addCards(proj4_data,"Dark chocolate");
    });

    $('#nuts_chews').on('click', function() {
        $('#products').addClass("active");
        $('#home,#about_us,#contact_us').removeClass("active");

        addCards(proj4_data,"Nuts and chews");
    });

    $('#brittles_toffies').on('click', function() {
        $('#products').addClass("active");
        $('#home,#about_us,#contact_us').removeClass("active");

        addCards(proj4_data,"Brittles and toffies");
    });

    $('#milk_chocolates').on('click', function() {
        $('#products').addClass("active");
        $('#home,#about_us,#contact_us').removeClass("active");

        addCards(proj4_data,"Milk chocolate");
    });

    $('#truffles').on('click', function() {
        $('#products').addClass("active");
        $('#home,#about_us,#contact_us').removeClass("active");

        addCards(proj4_data,"Truffles");
    });

    $('#gifts').on('click', function() {
        $('#products').addClass("active");
        $('#home,#about_us,#contact_us').removeClass("active");

        addCards(proj4_data,"Gifts");
    });

    $('#holiday_assortment').on('click', function() {
        $('#products').addClass("active");
        $('#home,#about_us,#contact_us').removeClass("active");

        addCards(proj4_data,"Holiday assortments");
    });

    $('#content_main').on('click',$('input[type="button"]'), function(e) {
        if($(e.target).val() != 'Add to Cart') return;


        cart.add($(e.target).attr("name"),1);
        //alert("The SKU is " + $(e.target).attr("name"));

        // Adding cart quantity to the cart badge
        var cart_size = cart.size();
        cart_quantity_span.textContent = cart_size;

        //display cart items
        var cartArray = cart.getCartArray();
        // $('#customer_products_list_group').empty();
        displayCartItems(cartArray,proj4_data);
    });

    $('#dialog-modal').on('click',$('input[type="button"]'), function(e) {
        var cartArray ;
        if($(e.target).val() === 'delete_item'){
            cart.delete($(e.target).attr("name"));
            cartArray = cart.getCartArray();
            cart_quantity_span.textContent = cart.size();
            displayCartItems(cartArray,proj4_data);
        }

    });

    $('#dialog-modal').on('change',$('input[type="number"]'),function (e) {
        var cartArray ;
        cart.setQuantity($(e.target).attr("name"),$(e.target).val());
        cartArray = cart.getCartArray();
        cart_quantity_span.textContent = cart.size();
        displayCartItems(cartArray,proj4_data);
    })

    // $(document).on('click', ".buy", function() {
    //     var sku = this.id;
    //     cart.add(sku,1);
    //     $(this).next().fadeIn(50).fadeOut(2000);
    // });


});


function storeData(response) {
    var tmpArray = explodeArray(response,';');
    for(var i=0; i < tmpArray.length; i++) {
        innerArray = explodeArray(tmpArray[i],'|');
        proj4_data[i] = innerArray;
    }
}

// from http://www.webmasterworld.com/forum91/3262.htm
function explodeArray(item,delimiter) {
    tempArray=new Array(1);
    var Count=0;
    var tempString=new String(item);

    while (tempString.indexOf(delimiter)>0) {
        tempArray[Count]=tempString.substr(0,tempString.indexOf(delimiter));
        tempString=tempString.substr(tempString.indexOf(delimiter)+1,tempString.length-tempString.indexOf(delimiter)+1);
        Count=Count+1
    }

    tempArray[Count]=tempString;
    return tempArray;
}


//-------------------------------------------------------------------------------------------------------------------------


/*
    $('#dark_chocolates').on('click',function () {
        var tmpString = '';
        var handle = document.getElementById('content_main');
        tmpString = "<div class=\"row\" id=\"contentPanel\"></div>";
        handle.innerHTML = tmpString;
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Dark chocolate") {
                var myCol = $('<div class="col-md-3 pb-2 d-flex align-items-stretch"></div>');
                var myPanel = $('<div class="card border-secondary mb-3" style="width: 20rem;">\n' +
                    '<img class="card-img-top" src="/~jadrn000/PROJ4_IMAGES/'+proj4_data[i][0]+'.jpg" alt="Card image cap">\n' +
                    '<div class="card-body">\n' +
                    '<h4 class="card-title text-primary">'+proj4_data[i][2]+'</h4>\n' +
                    '<p class="card-text text-secondary">'+proj4_data[i][3]+'</p>\n' +
                    '<button type="button" class="btn btn-primary">Add To Cart</button>\n' +
                    '</div>\n' +
                    '</div>');
                myPanel.appendTo(myCol);
                myCol.appendTo('#contentPanel');
            }
        }
    });*/



//Java Script to load the ABout us page
//
// $('#about_us').on('click', function() {
//     $("#content").load("aboutus.html")
// });
//
// //Java Script to load the Contact page
//
// $('#contact_us').on('click', function() {
//     $("#content").load("contact.html")
// });