import "firebase/storage";
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import '../App.css';
import firebase from '../Firebase/firebase';

const Requirements = (props) => {

    // const {id} = props.match.params
    console.log('prosp', props.location.data)



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
             <img src="https://i.imgur.com/9eMjuLW.png" alt="imagen" />
            <h4 className="margintable">Debe Subir los archivos como imagenes</h4>
            <table className="font margintable">
                <tr className= "Rectangle-77">
                    <td>Documento de Identidad</td>
                    <td>
                    <label htmlFor="upload-doc"><i className="fas fa-plus-circle"></i></label>
                    </td>
                    <td>
                    <input type='file' className="hide" id="upload-doc" onChange={handleOnChangeDoc} />
                    </td>
                      <td>
                      <button htmlFor="upload-doc" onClick={() => { setStateFileDoc('') }}><i className="fas fa-trash-alt"></i></button>
                    </td>         
                <td>
                <small>
                    {stateFileDoc !== '' ? (<i class="fas fa-check"></i>) : ''}
                    {stateFileDoc}</small>
                </td>

                </tr>
                 <tr> <br/></tr>
                <tr  className= "Rectangle-77">
                <td>Recibo de servicios (luz o agua)</td>
                <td>
                    <label htmlFor="upload-re"><i className="fas fa-plus-circle"></i></label>
                </td>
                <td>
                <input type='file' className="hide" id="upload-re" onChange={handleOnChangeRe} />
                </td>
                <td>
                <button htmlFor="upload-re" onClick={() => { setStateFileRe('') }}><i className="fas fa-trash-alt"></i></button>
                </td>
               <td>
               <small>
                    {stateFileRe !== '' ? (<i className="fas fa-check"></i>) : ''}
                    {stateFileRe}
                </small>
               </td>            
                </tr> 
            </table>
            <button className="Rectangle-9 font"><Link to="/detaildeposit"></Link>CONTINUAR</button>
        </section>
    )
}

export default Requirements;