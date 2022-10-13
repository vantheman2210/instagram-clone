import React from "react";
import { db, auth } from "../Firebase";
import {
	collection,
	addDoc,
	getDocs,
	where,
	doc,
	updateDoc,
	query,
	deleteDoc,
	serverTimestamp,
	arrayUnion
} from 'firebase/firestore';
import { useState, useEffect } from "react";

const UserPosts = () => { 
 

  return (
    <div></div>
  )
}; 



export default UserPosts;