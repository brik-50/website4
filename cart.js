/* Our Products */
T = new Array;
T[0]={
    "id": 0,
    "title": "Apple iPhone 11",
    "image": "./images/products/iphone/iphone3.jpeg",
    "price": 990,
    "category": "phones"
};
T[1]={
    "id": 1,
    "title": "Samsung Galaxy S10",
    "image": "./images/products/sumsung/samsung6.jpeg",
    "price": 899,
    "category": "phones"
};
T[2]={
    "id": 2,
    "title": "Apple iPhone X",
    "image": "./images/products/iphone/iphone4.jpeg",
    "price": 720,
    "category": "phones"
};
T[3]={
    "id": 3,
    "title": "Apple iPhone 11",
    "image": "./images/products/iphone/iphone5.jpeg",
    "price": 769,
    "category": "phones"
};
T[4]={
    "id": 4,
    "title": "Samsung Smart TV",
    "image": "./images/products/sumsung/samsung6.jpeg",
    "price": 900,
    "category": "tvs"
};
T[5]={
    "id": 5,
    "title": "Apple Smart TV",
    "image": "./images/products/sumsung/samsung4.jpeg",
    "price": 1099,
    "category": "tvs"
};
T[6]={
    "id": 6,
    "title": "LG Smart TV",
    "image": "./images/products/sumsung/samsung5.jpeg",
    "price": 899,
    "category": "tvs"
};
T[7]={
    "id": 7,
    "title": "Samsung Smart TV",
    "image": "./images/products/sumsung/samsung2.jpeg",
    "price": 789,
    "category": "tvs"
};
T[8]={
    "id": 8,
    "title": "Sony WH-CH510",
    "image": "./images/products/headphone/headphone9.jpeg",
    "price": 760,
    "category": "casques"
};
T[9]={
    "id": 9,
    "title": "Sony WH-CH510",
    "image": "./images/products/headphone/headphone4.jpeg",
    "price": 799,
    "category": "casques"
};
T[10]={
    "id": 10,
    "title": "Sony WH-CH510",
    "image": "./images/products/headphone/headphone7.jpeg",
    "price": 499,
    "category": "casques"
};
T[11]={
    "id": 11,
    "title": "Sony WH-CH510",
    "image": "./images/products/headphone/headphone2.jpeg",
    "price": 239,
    "category": "casques"
};
/*
// add item 
function addListItem (obj) {
    var html, newHtml, element;
    // Create HTML string with placeholder text
    
        element = ".table";
        
        html = '<tr id="%id%"><td class="product__thumbnail"><a href="#"><img src="%image%" alt=""></a></td><td class="product__name"><a href="#">%title%</a><br><br></td><td class="product__price"><div class="price"><span class="new__price">$%price%</span></div></td><td class="product__quantity"><div class="input-counter"><div><span class="minus-btn"><i class="fas fa-minus"></i></span><input type="text" min="1" value="1" max="10" class="counter-btn"><span class="plus-btn"><i class="fas fa-plus"></i></span></div></div></td><td class="product__subtotal"><div class="price"><span class="new__price">$%newprice%</span></div><a href="#" class="remove__cart-item"><i class="fas fa-trash"></i></a></td></tr>';
    
    // Replace the placeholder text with some actual data
    newHtml = html.replace('%id%', obj.id);
    newHtml = newHtml.replace('%image%', obj.image);
    newHtml = newHtml.replace('%price%', obj.price);
    
    // Insert the HTML into the DOM
    document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
};
//delete item 
function deleteListItem (selectorID) {
    
    var el = document.getElementById(selectorID);
    el.parentNode.removeChild(el);
};
// get id 
function getID(el) {
    var id = el.parentNode.parentNode.id.value;
    console.log(id);
return id;
};
var ctrlAddItem = function(el) {
    var input, newItem;
    
    // 1. Get the field input data
    id = getID(el);        
    
    
    for(var i= 0 ; i<T.length ; i++){
    if(id == T[i].id){
        // 3. Add the item to the UI
        addListItem(T[i]);
        
        // 4. Clear the fields
        UICtrl.clearFields();
        // 5. Calculate and update budget
        updateBudget();
        
        // 6. Calculate and update percentages
        updatePercentages(); 
    }
    }
};
*/

/* var ctrlDeleteItem = function(event) {
    var itemID, splitID, type, ID;
    
    itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
    
    if (itemID) {
        
        //inc-1
        splitID = itemID.split('-');
        type = splitID[0];
        ID = parseInt(splitID[1]);
        
        // 1. delete the item from the data structure
        budgetCtrl.deleteItem(type, ID);
        
        // 2. Delete the item from the UI
        UICtrl.deleteListItem(itemID);
        
        // 3. Update and show the new budget
        updateBudget();
        
        // 4. Calculate and update percentages
        updatePercentages();
    }
}; */


/*
// UI CONTROLLER
var UIController = (function() {
    return {
        getID : function (el) {
        var id = el.parentNode.id;
        console.log(id);
        return id;
    },
    // add item 
    addListItem: function  (obj) {
        var html, newHtml, element;
        // Create HTML string with placeholder text
        
            element = ".table";
            
            html = '<tr id="%id%"><td class="product__thumbnail"><a href="#"><img src="%image%" alt=""></a></td><td class="product__name"><a href="#">%title%</a><br><br></td><td class="product__price"><div class="price"><span class="new__price">$%price%</span></div></td><td class="product__quantity"><div class="input-counter"><div><span class="minus-btn"><i class="fas fa-minus"></i></span><input type="text" min="1" value="1" max="10" class="counter-btn"><span class="plus-btn"><i class="fas fa-plus"></i></span></div></div></td><td class="product__subtotal"><div class="price"><span class="new__price">$%newprice%</span></div><a href="#" class="remove__cart-item"><i class="fas fa-trash"></i></a></td></tr>';
        
        // Replace the placeholder text with some actual data
        newHtml = html.replace('%id%', obj.id);
        newHtml = newHtml.replace('%image%', obj.image);
        newHtml = newHtml.replace('%price%', obj.price);
        
        // Insert the HTML into the DOM
        document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
    },
    
    //delete item 
    deleteListItem : function (selectorID) {
        
        var el = document.getElementById(selectorID);
        el.parentNode.removeChild(el);
    }
}
})();*/
/*
function reply_click(clicked_btn){
    var id = clicked_btn.id;
    console.log(id);
    return id;
};
// GLOBAL APP CONTROLLER
var controller = (function(UICtrl) {
    
    var setupEventListeners = function() {
        document.querySelector(".product__btn").addEventListener('click', ctrlAddItem());
    
    };
    
    
    
    
    var ctrlAddItem = function() {
        
        // 1. Get the field input data
        
        for(var i= 0 ; i<T.length; i++){
    
        //if(id == T[i].id){
            // 3. Add the item to the UI
            addListItem(T[i]);
            
       // }
        }
    };
    
    
    
    return {
        init: function() {
            console.log('Application has started.');
            setupEventListeners();
        }
    };
    
})(UIController);
controller.init(); */ 

    var newPrice = document.querySelector('.new__price');
    var select = document.querySelector('.cart_products');
	var button = document.querySelectorAll('.product__btn');
    var plusBtn = document.querySelectorAll('.plus-btn');
    var minusBtn = document.querySelectorAll('.minus-btn');
    var counterBtn = document.querySelectorAll('.counter-btn');
    var removeItem = document.querySelectorAll('.remove__cart-item');
    var product__subtotal = document.querySelector('.product__subtotal');
    var counter = 1;

    for(var count of counterBtn){
        counter = count.value;
    }

    for(var remove of removeItem){
        remove.addEventListener('click', (e)=> {
            e.target.parentElement.parentElement.remove();
        });
    }

	for(var but of button){
		but.addEventListener('click', (e)=>{

			// copy and paste //
            var id = e.target.id;
            console.log(e.target.id);
            html = '<tr id="%id%"><td class="product__thumbnail"><a href="#"><img src="%image%" alt=""></a></td><td class="product__name"><a href="#">%title%</a><br><br></td><td class="product__price"><div class="price"><span class="new__price">$%price%</span></div></td><td class="product__quantity"><div class="input-counter"><div><span class="minus-btn"><i class="fas fa-minus"></i></span><input type="text" min="1" value="1" max="10" class="counter-btn"><span class="plus-btn"><i class="fas fa-plus"></i></span></div></div></td><td class="product__subtotal"><div class="price"><span class="new__price">$%newprice%</span></div><a href="#cart" class="remove__cart-item"><i class="fas fa-trash"></i></a></td></tr>';
			var parent = e.target.parentNode;
			//var clone = parent.cloneNode(true);
            for(var i= 0 ; i<T.length; i++){
                if(id == T[i].id){ 
                    var newHtml = html.replace('%id%', T[i].id);
                    newHtml = newHtml.replace('%image%', T[i].image);
                    newHtml = newHtml.replace('%title%', T[i].title);
                    newHtml = newHtml.replace('%price%', T[i].price); 
                    newHtml = newHtml.replace('%newprice%', T[i].price*counter); 
               }
            }
			select.insertAdjacentHTML('beforeend', newHtml);
		})
        
	};
  
    
        if(counterBtn){
            for(var plus of plusBtn){
            plus.addEventListener('click', function(){
                counterBtn.value++;
                console.log(counterBtn.value);
            });
        }
        
        

            for(var minus of minusBtn){
                minus.addEventListener('click', function(){
                    counterBtn.value--;
                    console.log(counterBtn.value);
                });
        };
        
        

        for(var i=0; i<plusBtn.length; i++){
            plusBtn[i].addEventListener('click', function(){
                counterBtn[i].value++;
                console.log(counterBtn.value);
            });
        }

    }