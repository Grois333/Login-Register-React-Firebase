import React from 'react';
import { Button } from 'rebass';
import firebase from 'firebase';


const logOutUser = () => {

 firebase.auth().signOut();

};


const LogOut = () => {

 return <Button className="logout" onClick={logOutUser} children="Log Out" />;

};

export default LogOut;