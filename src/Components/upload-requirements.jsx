import "firebase/storage";
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import '../App.css';
import firebase from '../Firebase/firebase';

const Requirements = (props) => {

    // const {id} = props.match.params
    console.log('prospss', props.location.state);


    const [state, setState] = useState();
    const [stateFileDoc, setStateFileDoc] = useState('');
    const [stateFileRe, setStateFileRe] = useState('');


    const handleOnChangeDoc = (e) => {
        const file = e.target.files[0];
        setStateFileDoc(file.name)
        const storageRef = firebase.storage().ref(`pictures/${file.name}`)
        const task = storageRef.put(file)
        task.on('state_changed', (snapshot) => {
            snapshot.ref.getDownloadURL();
        }, (error) => {
            console.error(error.message)
        }, () => {
            // Upload complete
            setState(file)
        })
    }

    const handleOnChangeRe = (e) => {
        const file = e.target.files[0];
        setStateFileRe(file.name)
        const storageRef = firebase.storage().ref(`pictures/${file.name}`)
        const task = storageRef.put(file)
        task.on('state_changed', (snapshot) => {
            snapshot.ref.getDownloadURL();
        }, (error) => {
            console.error(error.message)
        }, () => {
            // Upload complete
            setState(file)
        })
    }

    return (
        <section>
            <p>Debe Subir los archivos como imagenes</p>
            <div>
                <label htmlFor="upload-doc"><i className="fas fa-plus-circle"></i>Ingrese Documento de Identidad</label>
                <input type='file' className="hide" id="upload-doc" onChange={handleOnChangeDoc} />
                <button htmlFor="upload-doc" onClick={() => { setStateFileDoc('') }}><i className="fas fa-trash-alt"></i></button>
                <small>
                    {stateFileDoc !== '' ? (<i className="fas fa-check"></i>) : ''}
                    {stateFileDoc}</small>
            </div>

            <div>
                <label htmlFor="upload-re"><i className="fas fa-plus-circle"></i>Ingrese Recibo</label>
                <input type='file' className="hide" id="upload-re" onChange={handleOnChangeRe} />
                <button htmlFor="upload-re" onClick={() => { setStateFileRe('') }}><i className="fas fa-trash-alt"></i></button>
                <small>
                    {stateFileRe !== '' ? (<i className="fas fa-check"></i>) : ''}
                    {stateFileRe}
                </small>
            </div>
            <Link className="btn btn-success" to="/detaildeposit">  Continuar</Link>
        </section>
    )
}

export default Requirements;