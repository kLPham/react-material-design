import React, { Component } from 'react';
import { Textfield } from '../../../../components/react-material-design';
// import { Textfield } from 'react-material-design';

class Textfields extends Component {
  state = {
    value: 'value',
  }
  handleChange = (value, name) => this.setState({
    [name]: value,
  });
  render() {
    return (
      <div>
          <h1>Textfields</h1>
          <br /> <Textfield required label="required, no help text" />
          <br /> <Textfield label="helpText not persistent" helpText="not persistent" value="I have text" />
          <br /> <Textfield label="helpText not persistent" helpText="here to help" />
          <br />
          <br /> <Textfield alignEnd value={this.state.value} label="label text" helpText="not persistent" onChange={e => this.handleChange(e, 'value')} />
          <br /> <Textfield alignEnd value="enabled, pre-filled, no label, no help text " />
          <br /> <Textfield helpTextPersistent label="label text, not pre-filled" helpText="default persistent" />
        <br /> <Textfield alignEnd helpTextPersistent label="label text, not pre-filled" helpText="alignEnd persisten" />
        <br />
        <Textfield disabled label="disabled, no ht" value="pre-filled" />
        <br />
        <Textfield alignEnd disabled label="disabled, no ht" value="pre-filled" />
      </div>
    );
  }
}
export default Textfields;
