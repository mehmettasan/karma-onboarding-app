import { atom } from "jotai";
import users from "../assets/dummyData/dumpyData.json"

export const usersAtom=atom(users);

export const activeUserAtom=atom(null);
export const isSignedInAtom=atom(false);
export const trackBarStatusAtom=atom(0);
export const newUserAtom=atom({
    id:0,
    userName:"",
    date:"",
    password:"",
    imageURL:"",
    likes:[]
});