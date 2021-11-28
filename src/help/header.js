import React from "react";

function Hed() {
    // const menus = [
    //     {id: 1, name: "home"},
    //     {id: 2, name: "about us"},
    //     {id: 3, name: "service"},
    //     {id: 4, name: "clients"},
    //     {id: 5, name: "invest"},
    //     {id: 6, name: "pricing"},
    //     {id: 7, name: "training"},
    //     {id: 8, name: "contact"}

    // ]
    
  return (
    <div>
      <header className="hed">
        
        
      {/* {menus.map(() => {
          return <span >{name}</span>;
        })}
         */}
        
        
        <span >home</span>
        <span>about us</span>
        <span>service</span>
        <span>clients</span>
        <span>invest</span>
        <span>pricing</span>
        <span>training</span>
        <span>contact</span>
      </header>
    </div>
  );
}
export default Hed;
