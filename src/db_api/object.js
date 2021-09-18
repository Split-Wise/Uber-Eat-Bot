const { v4: uuidv4 } = require('uuid');

class Order {
    constructor(group, orderID) {
        this.belongTo = group;
        this.orderID  = orderID;
        this.status   = 0; // 0: unpaid, 1: paid
        this.store    = "";
        this.orders   = [];
    }
}


class OrderItem {
    constructor(userID){
        this.userID = userID;
        this.foods  = [];
    }
}


class FoodItem {
    constructor(name, price) {
        this.name = name;
        this.price= price;
    }
}
