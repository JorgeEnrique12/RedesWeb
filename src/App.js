import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';
import Notificacion from './Components/Notificacion'
class App extends Component {

  constructor(){
    super();
    this.state = {
      notificaciones:null
    };
  }
  componentDidMount(){
    const databaseRef = firebase.database().ref().child('Redes');
    const speedRef = databaseRef.child('Notificaciones');
    speedRef.on('value', snap => {
          this.setState({
            notificaciones:snap.val()
          });
    });
  }
  render() {
    var noti;
    if(this.state.notificaciones!=null){
       noti = this.state.notificaciones.map(notificacion => 
        <div>
            <Notificacion fecha = {notificacion.Fecha} desc = {notificacion.Desc} tipo = {notificacion.Tipo} titulo = {notificacion.Desc}/>
            <br></br>
        </div>
      );
    }
    
    return (
      <div className="App">
        <h2>Notificaciones Redes</h2>
        {noti}
        
      </div>
    );
  }
}

export default App;
