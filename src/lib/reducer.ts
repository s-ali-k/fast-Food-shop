// Define the types
interface Product {
    id: number;
    name: string;
    price: number;
  }
  
  interface BasketItem {
    product: Product;
    quantity: number;
  }
  
  interface State {
    items: BasketItem[];
  }
  
  // Define the action types and payloads
  type Action =
    | { type: 'ADD_ITEM'; payload: Product }
    | { type: 'REMOVE_ITEM'; payload: number } // payload is the product ID
    | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } }
    | { type: 'CLEAR_BASKET' };
  
  // Define the initial state
  export const initialState: State = {
    items: [],
  };
  
  // Reducer function
export  const basketReducer = (state: State, action: Action): State => {
    switch (action.type) {
      case 'ADD_ITEM': {
        const existingItem = state.items.find(item => item.product.id === action.payload.id);
        
        if (existingItem) {
          return {
            ...state,
            items: state.items.map(item =>
              item.product.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          };
        }
  
        return {
          ...state,
          items: [...state.items, { product: action.payload, quantity: 1 }],
        };
      }
  
      case 'REMOVE_ITEM': {
        return {
          ...state,
          items: state.items.filter(item => item.product.id !== action.payload),
        };
      }
  
      case 'UPDATE_QUANTITY': {
        console.log(11111)
        return {
          ...state,
          items: state.items.map(item =>
            item.product.id === action.payload.id
              ? { ...item, quantity: action.payload.quantity }
              : item
          ),
        };
      }
  
      case 'CLEAR_BASKET': {
        return initialState;
      }
  
      default:
        return state;
    }
  };
