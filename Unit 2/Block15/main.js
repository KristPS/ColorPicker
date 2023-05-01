const customer = {
    firtsName: "jake",
    lastName: "smith",
    email: "jaekSmith!aol.com",
    phone: undefined,
    zipCode: "631",
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "Target",
    firstVisit: false,
}
console.log(customer)

//modifying some 'customer' information
customer["email"] = "Jak3Smith1992@email.com" ;
customer["phone"] = 3195551234 ;
customer["zipCode"] = "63132" ;
Customer["favoriteFlavors"] = "coffee", "strawberry", "matcha" ;
console.log(customer)

//delete some properties from a "customer" object
delete customer.zipCode;
delete customer.favoriteStore;
console.log(customer)

//adding some key:values to the "customer"object
const customer = {
    toppings: "chocolate sprinkles", "wafer straws", "gummy bears";
    futureFlavors: "mango";
    todaysPurchaseCost: 5.32 
}
console.log(customer)

console.table(customer)