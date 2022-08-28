import { atom,useAtom } from "jotai";
import users from "../assets/dummyData/dumpyData.json"

export const usersAtom=atom(users)

export const activeUserAtom=atom(null)
export const isSignedInAtom=atom(false)