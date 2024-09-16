import {createContext, useReducer } from "react";

export const TodoItemsContext = createContext([
    {
        Items:[],
        eventOnItems:()=>{},
        eventDelete:()=>{}
      }
]);
function reducer(state,action) {
    let item = state;
    if(action.type ==='NEW_ITEM') {
      item =[...state,{name:action.payload.todoName,date:action.payload.todoDate}]
    }
    if(action.type === "DELETE_ITEM") {
      item = state.filter((event)=>{event.name!== action.payload.name})
    }
    return item;
  }
const TodoItemsContextProvider = ({children}) => {
    let[Items,dispatch] = useReducer(reducer,[]);
    const eventOnItems = (todoName,todoDate)=>{
    const newItem = {
      type:"NEW_ITEM",
      payload: {
        todoName,
        todoDate
      }
    };
    dispatch(newItem);
    };
    const eventDelete = (name)=>{
        const itemDelete = {
        type:"DELETE_ITEM",
        payload: {
            name
        }
        };
        dispatch(itemDelete);
    };
    return (
        <TodoItemsContext.Provider value={{
            Items,
            eventOnItems,
            eventDelete
            }}
            >
                {children}
            </TodoItemsContext.Provider>
        );
};
export default TodoItemsContextProvider;