const {get_order_status, get_group_order} = require('./uber_eat_api');


// https://eats.uber.com/group-orders/c9278b82-d972-43c8-9cc8-2b1d54b21c74/join
// https://eats.uber.com/group-orders/a604b141-7a35-47f4-9234-e5f7d36d2526/join
const ID = 'a604b141-7a35-47f4-9234-e5f7d36d2526';


(async () => {
    var req;
    // req = await add_member(ID);
    // req = await get_group_order(ID, false);
    req = await get_order_status(ID);
    if (req !== 'fail'){
        console.log(req.data.data.orders[0].orderInfo.orderPhase);
        console.log(req.data.data.orders[0].feedCards);
    }else {
        console.log('error')
    }

    req = await get_group_order(ID);
    if (req !== 'fail'){
        console.log(req);
    }else {
        console.log('get group order fail')
    }
    

    // setInterval(async ()=>{ await get_group_order(ID)}, 1500);
})();