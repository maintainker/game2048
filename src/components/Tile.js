import React from 'react';
import cn from "classnames";

const Tile = ({id,x,y,isMerged,isNew,value}) =>{
    return(
        <div key={id} className={cn(`tile tile-${value} tile-position-${x}-${y}`,{
            'tile-merged':isMerged,
            "tile-new":isNew
        })}>
        <div className="tile-inner">2</div>
    </div>)
}

export default Tile