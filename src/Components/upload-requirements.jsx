import React, { useState } from 'react';
import firebase from '../Firebase/firebase';
import "firebase/storage";

const Requirements = () => {
    console.log('subir datos')

    // const [state, setState] = useState({});


    // const handleOnChange = (e) => {
    //     const file = e.target.files[0]
    //     const storageRef = firebase.storage().ref(`pictures/${file.name}`)
    //     const task = storageRef.put(file)
    //     task.on('state_changed', (snapshot) => {
    //         let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //         setState({
    //             uploadValue: percentage
    //         })
    //     }, (error) => {
    //         console.error(error.message)
    //     }, () => {
    //         // Upload complete
    //         setState({
    //             picture: task.snapshot.downloadURL
    //         })
    //     })
    // }
    // return (
    //     <div>
    //         <input type='file' onChange={handleOnChange} />
    //         <img width='90' src={state.picture} alt="imagen" />
    //     </div>
    // )
}

export default Requirements;