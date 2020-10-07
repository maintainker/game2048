import hotkeys from 'hotkeys-js';
import { chain } from 'lodash';


const observerMap ={};
export const addKeyObserver = (key,callback) =>{
    if(!observerMap[key]){
        observerMap[key] = [];
        hotkeys(key,()=>executeCallbacks(key));
    }
    observerMap[key].push(callback);
}

export const removeKeyObserer = (key,callback)=>{
    observerMap[key] = observerMap[key].filter(item=> item !== callback);
}

const executeCallbacks = (key) =>{
    for(const ob of observerMap[key]){
        ob();
    }
} 