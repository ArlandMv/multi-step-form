import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';

export class FormUserDetails extends Component {
  //state = {};
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    //this.props.values;
    return (
      <React.Fragment>
        <MuiThemeProvider>
          <h1>FormUserDetails</h1>
          <AppBar position='static'>Ingrese sus datos</AppBar>
          <TextField
            hintText='Ingrese su nombre'
            floatingLabelText='Nombre'
            onChange={handleChange('nombre')}
            defaultValue={values.nombre}
          />
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default FormUserDetails;
