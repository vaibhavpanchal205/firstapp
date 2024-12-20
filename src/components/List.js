import { useState } from "react";
function List({list}){
    return (
        <ul>
            {List.map((posts) =>{
                return <li key={posts.id}>{posts.title}</li>;
            })}
        </ul>
    );
}

export default List;