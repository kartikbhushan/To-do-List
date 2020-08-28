import React from 'react';
import './ListItem.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';

//!Ask krithika about the arrow function in FontAwesomeIcon
function ListItems(props){
    const items = props.items;
    const listItems = items.map(item =>{
        return <div className="list" key={item.key}>
            <p><input type="text" 
                      id={item.key} 
                      value={item.text} 
                      onchnage ={
                          (e) =>{
                            props.setUpdate(e.target.value,item.key)
                          }
                        }
                />
                <span>               
                    <FontAwesomeIcon className="faicons" 
                                     icon='trash'
                                     onClick={() => props.deleteItem(item.key)}/> 
                                     
                </span>
            </p>
        </div>
    })
    return(
        <FlipMove duration={300} easing="ease-in-out">
        {listItems}
        </FlipMove>
    )
}

export default ListItems;