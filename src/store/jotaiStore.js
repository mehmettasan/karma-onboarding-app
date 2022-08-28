import { atom } from "jotai";
import { getUsers } from "../firebase/firebaseCommands";

const users=getUsers();

export const usersAtom=atom(users);

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