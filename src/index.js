const {add_member,get_group_order}  = require('./api/uber_eat_api');
const {parse_items} = require('./utils');
const {STATE} = require('./state');

var state = STATE.IDLE;

let groupMap = new Map();
let groupIndex = 0;
let timer = null;


async function on_idle(context) {
  if (context.event.isText) {
    var message = context.event.text;
    
    if (message.includes('eats.uber.com/group-orders/')) {
      // Add bot to group cart 
      var groupCartId = message.substring(message.search('orders')+7, message.search('/join')); // TODO use regrex instead
      var req = await add_member(groupCartId);
      // console.log(req);

      //push_back groupId to list
      groupMap.set(groupIndex, groupCartId);

      // Send message back
      await context.sendText(`Start listening on group cart ${groupIndex}: ${groupCartId}`);
      groupIndex += 1;

      // Change state 
      state = STATE.LISTENING;
      
      if(timer === null){
        timer = setInterval(()=>{
          groupMap.forEach(async(value, key)=>{
            let check = await get_group_order(value);
            console.log(check);
            if(check === null){
              console.log('Delete');
              groupMap.delete(key);
            }
          });
        }, 60000);
      }

    }
  }
}

async function on_listening(context) {
  // TODO setInterval to listen the cart
  
  if (context.event.isText) {
    var message = context.event.text;

    if (message.includes('eats.uber.com/group-orders/')) {
      // Add bot to group cart 
      var groupCartId = message.substring(message.search('orders')+7, message.search('/join'));
      var req = await add_member(groupCartId);
      await groupMap.set(groupIndex, groupCartId);

      // Send message back
      await context.sendText(`Start listening on group cart ${groupIndex}: ${groupCartId}`);
      groupIndex += 1;

    } else if (message.includes('!price')) {
      let index = parseInt(message.substring(7)); 
      if(!isNaN(index) && groupMap.has(index)){
        let tempCartId = groupMap.get(index);
        let order = await get_group_order(tempCartId, false);
        context.sendText(parse_items(order));
      }
    } else if (message.includes('!done')) { 
      let index = parseInt(message.substring(6));
      if(!isNaN(index) && groupMap.has(index)){
        groupMap.delete(index);
        if(groupMap.size === 0) {
          state = STATE.IDLE;
          clearInterval(timer);
          timer = null;
        }
      }
    }
  }
}

module.exports = async function App(context) {
  if (context.event.isText && context.event.text === 'state') {
    console.log(state);
  }
  
  switch (state) {
    case STATE.IDLE:
      on_idle(context);
      break;
    case STATE.LISTENING:
      on_listening(context);
      break;
    case STATE.FINISHED:
      on_finished(context);
      break;
  }
};
