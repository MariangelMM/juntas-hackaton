import "firebase/storage";
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import '../App.css';
import firebase from '../Firebase/firebase';
import Header from '../Components/header'

const Requirements = (props) => {

    // const {id} = props.match.params
    console.log('prospss', props.location.state);

    const propsState = props.location.state;

    const [setState] = useState();
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
        <section className="font">
            <Header />
            <img className="img-fluid" src="https://i.imgur.com/9eMjuLW.png" alt="imagen" />
            <h4 className="margintable">Debe Subir los archivos como imagenes</h4>
            <table className="font margintable">
                <tbody>
                    <tr className="row-yellow">
                        <td>Documento de Identidad</td>
                        <td>{stateFileDoc}</td>
                        <td>
                            <label htmlFor="upload-doc"><i className="fas fa-plus-circle btn-plus"></i></label>
                        </td>
                        <td>
                            <input type='file' className="hide" id="upload-doc" onChange={handleOnChangeDoc} />
                        </td>
                        <td>
                            <button htmlFor="upload-doc" className="btnColorTrash" onClick={() => { setStateFileDoc('') }}><i className="fas fa-trash-alt"></i></button>
                        </td>
                        <td>
                            <small>
                                {stateFileDoc !== '' ? (<i className="fas fa-check"></i>) : ''}
                            </small>
                        </td>

                    </tr>
                    <tr className="row-yellow">
                        <td>Recibo de servicios (luz o agua)</td>
                        <td> {stateFileRe}</td>
                        <td>
                            <label htmlFor="upload-re"><i className="fas fa-plus-circle btn-plus"></i></label>
                        </td>
                        <td>
                            <input type='file' className="hide" id="upload-re" onChange={handleOnChangeRe} />
                        </td>
                        <td>
                            <button htmlFor="upload-re" className="btnColorTrash" onClick={() => { setStateFileRe('') }}><i className="fas fa-trash-alt"></i></button>

                        </td>
                        <td>
                            <small>
                                {stateFileRe !== '' ? (<i className="fas fa-check"></i>) : ''}

                            </small>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br />
            <Link className="btn-pink-link ml-1000 ml-10 " to={{
                pathname: "/detaildeposit",
                propsState,
            }}
            >Continuar</Link>

        </section>
    )
}

export default Requirements;
