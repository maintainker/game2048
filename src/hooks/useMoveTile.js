import { useEffect } from "react"
import { addKeyObserver, removeKeyObserer } from "../util/keyboard";
import { makeTile,moveTile } from "../util/tile";

const useMoveTile = ({tileList,setTileList}) => {
    const moveAndAdd = ({x,y}) =>{
        const newTileList = moveTile({tileList,x,y});
        const newTile = makeTile(newTileList);
        newTile.isNew = true;
        newTileList.push(newTile);
        setTileList(newTileList);
    }
    const moveUp =() =>{
        moveAndAdd({x:0,y:-1});
    }
    const moveDown =() =>{
        moveAndAdd({x:0,y:1});
    }
    const moveLeft =() =>{
        moveAndAdd({x:-1,y:0});
    }
    const moveRight =() =>{
        moveAndAdd({x:1,y:0});
    }

    useEffect(()=>{
        addKeyObserver('up',moveUp);
        addKeyObserver('down',moveDown);
        addKeyObserver('left',moveLeft);
        addKeyObserver('right',moveRight);
    });
    return ()=>{
        removeKeyObserer("up",moveUp);
        removeKeyObserer("down",moveDown);
        removeKeyObserer("left",moveLeft);
        removeKeyObserer("right",moveRight);
    }
}

export default useMoveTile;