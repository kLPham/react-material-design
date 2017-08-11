import React, { Component } from 'react';
import _ from 'lodash';
import jsxToString from 'jsx-to-string';
import Playground from 'component-playground';
import { Textfield } from '../../../../components/react-material-design';
import componentDoc from '../docs/componentDoc.json';
import Docs from '../Components/docs';

const docs = _.pickBy(componentDoc, (value, key) => _.startsWith(key, '../../components/textfield/'));
const docsComponent = _.map(docs, (doc, key) => <Docs key={key} componentDocs={doc} />);


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
                <Playground
                  collapsableCode
                  codeText={jsxToString(
                      <code>
                          <Textfield required label="required, no help text" />
                          <br /> <Textfield label="helpText not persistent" helpText="not persistent" value="I have text" />
                          <br /> <Textfield label="helpText not persistent" helpText="here to help" />
                          <br /> <Textfield alignEnd value="enabled, pre-filled, no label, no help text " />
                          <br /> <Textfield helpTextPersistent label="label text, not pre-filled" helpText="default persistent" />
                          <br /> <Textfield alignEnd helpTextPersistent label="label text, not pre-filled" helpText="alignEnd persisten" />
                          <br /> <Textfield disabled label="disabled, no ht" value="pre-filled" />
                          <br /> <Textfield alignEnd disabled label="disabled, no ht" value="pre-filled" />
                      </code>)}
                  scope={{ React, Textfield }}
                />
                <br /> <Textfield alignEnd value={this.state.value} label="label text" helpText="not persistent" onChange={e => this.handleChange(e, 'value')} />
                {docsComponent}
            </div>
        );
    }
}
export default Textfields;
