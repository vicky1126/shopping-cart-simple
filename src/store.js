import { createContext } from "react";

function calculateTotalPrice(carList) {
    return carList.map((item) => item.quantity * item.price)
      .reduce((a, b) => a + b, 0);
  }

export const cartInit ={
    carList: [],
}

export const cartReducer = (state, action)=>{
    //console.log(action)  // action 判斷 dispatch 觸發時傳入的參數
    const carList = [...state.carList]
    // 判斷產品是否已經在購物車內:
    // 1. 先取得當前購物車的目標品項的索引
    const index = carList.findIndex((item)=> item.id === action.payload.id)
    // console.log(action);
    // console.log(index);
    switch (action.type) {
      case 'ADD_TO_CART':
        if(index === -1){
          // 還未加入到購物車內
          carList.push(action.payload); //push 的值是由 dispatch 的 payload 傳入的
        }
        else{
          // 當前購物車的項目與加入的項目一致
          carList[index].quantity += action.payload.quantity ;
        }
  
        // 用 reduce 加總金額:
        // const array = carList.map((item)=>{
        //   return item.quantity * item.price;
        // })
        // const total = array.reduce((a, b)=>{ //a:前一個值 b:當前值
        //   return a + b;
        // },0)
  
        //用 reduce 加總金額的精簡寫法:
        // const total = carList.map((item) => item.quantity * item.price)
        // .reduce((a, b)=> a + b, 0); //a:前一個值 b:當前值
  
        //將上面兩行 code
        //右鍵選 Refactor... 再選 Extract to function in module scopec 會變:
        //const total = calculateTotalPrice(carList); 
  
        return{
          ...state,
          carList,
          total: calculateTotalPrice(carList),
        }
  
      case 'CHANGE_CART_QUANTITY':
        carList[index].quantity = action.payload.quantity ;
        return{
          ...state,
          carList,
          total: calculateTotalPrice(carList),
        }
  
      case 'REMOVE_CART_ITEM':
        carList.splice(index, 1)
        return{
          ...state,
          carList,
          total: calculateTotalPrice(carList),
        }
  
      default:
        return state
    }
}
export const CartContext = createContext({})