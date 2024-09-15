import  { createContext, useState } from "react";

export const ItemsContext = createContext({
    items:[],
    setItems:()=>{}
});

export const ItemsProvider=(props) => {
    const [items,setItems]=useState([]);
  return (
    <>
      <ItemsContext.Provider
        value={{
          // user_name: "Rodish",
          items,
          setItems,
        }}
      >
        {props.children}
      </ItemsContext.Provider>
    </>
  );
};
