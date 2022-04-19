import React from "react";
import "./Listitems.css";
import FlipMove from "react-flip-move";

function ListItems(props){
    const items = props.items;
    const itemList = items.map(item => {
        return <div className="list" key={item.key}>
            <p>
                <input type="text" value={item.text} id={item.key} onChange={(e) => props.setUpdate(e.target.value, item.key)}/> 
                <span>
                <i className="fa-solid fa-trash" id="trash" 
                onClick={() => props.deleteItems(item.key)}></i>
                </span>
            </p>
            
        </div>
    })
    return(
        
        <div>
            <FlipMove duration={500} easing="ease-in-out">
                {itemList}
            </FlipMove>
        </div>
    )
}


export default ListItems;