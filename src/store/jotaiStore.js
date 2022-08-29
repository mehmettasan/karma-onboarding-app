import { atom } from "jotai";

export const activeUserAtom=atom(null);
export const isSignedInAtom=atom(false);
export const trackBarStatusAtom=atom(0);
export let newUserAtom=atom({
    id:0,
    userName:"",
    date:"",
    password:"",
    imageURL:"",
    likes:[]
});