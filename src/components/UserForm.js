import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
export class UserForm extends Component {
  state = {
    step: 1,
    idpersona: '',
    rut: '',
    nombre: '',
    apMaterno: '',
    apPaterno: '',
    telefono: '',
    correo: '',
    cargo: '',
    dirreccion: '',
  };

  //Proximo paso
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };
  //Paso anterior
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  //Handle fiels change
  //recive input generico y vinculandolo al valor del e.target
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      idpersona,
      rut,
      nombre,
      apMaterno,
      apPaterno,
      telefono,
      correo,
      cargo,
      dirreccion,
    } = this.state;
    const values = {
      idpersona,
      rut,
      nombre,
      apMaterno,
      apPaterno,
      telefono,
      correo,
      cargo,
      dirreccion,
    };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return <h2>FormPersonalDetails</h2>;
      case 3:
        return <h2>FormPersonalDetails</h2>;
      default:
        return <h3>Never should have come here</h3>;
    }
  }
}

export default UserForm;
