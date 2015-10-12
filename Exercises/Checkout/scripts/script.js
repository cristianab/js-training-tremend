/**
 * Here you have access to:
 * employees,
 * items,
 * orders
 *
 * Return final_prices
 */

var final_prices = [];



for (var i = 0; i < orders.length; i++) {
	var sum = 0;
	var discount = 0;
	for (var j = 0; j < orders[i].items.length; j++) {		
		for (var n = 0; n < items.length; n++) {			
			if (items[n].code === orders[i].items[j].item) {
				sum = sum+(items[n].cost * orders[i].items[j].quantity);
			}
		}
	}
	
	if (orders[i].employee) {
		for (var s = 0; s < employees.length; s++) {			
			if (orders[i].employee === employees[s].id) {
				discount = employees[s].discount;
			}
		}
	}
	
	if (discount > 0) {
		sum = sum - (sum * discount /100);
	}

	if (discount > 70) {
		sum = false;
	} 
	
	final_prices.push({
		order_id: orders[i].id,
		cost: sum
	});

};
console.log(final_prices);

