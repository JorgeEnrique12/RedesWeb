import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Notificacion.css';
class Notificacion extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const tipo = this.props.tipo;
    var show = "";
    return(
      <Card raised className={`centered ${ this.props.tipo }`}  >
      <CardContent>
        <Typography  color="textPrimary" gutterBottom>
          {this.props.fecha}
        </Typography>
        <Typography variant="h6" component="h1">
          {this.props.titulo}
        </Typography>
        <Typography color="textSecondary">
        {this.props.tipo}
        </Typography>
        <Typography component="p">
        {this.props.desc}
          <br />
        </Typography>
      </CardContent>
    </Card>
    )
  }
}
export default Notificacion;