import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
// TODO: Methods

const Docs = ({ componentDocs }) => {
    const { description, props } = componentDocs;
    const propRows = _.map(props, (doc, key) =>
        (
            <tr key={key}>
                <td>{key}</td>
                <td>{doc.type.name}</td>
                <td>{String(doc.required)}</td>
                <td>{doc.defaultValue && doc.defaultValue.value}</td>
                <td>{doc.description}</td>
            </tr>
        ));

    return (
        <div>
            <h3 className="mdc-typography--display1">{`Properties for ${description}`}</h3>
            <table>
                <thead>
                    <tr>
                        <th>Property Name</th>
                        <th>Type</th>
                        <th>Required</th>
                        <th>Default Value</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {propRows}
                </tbody>
            </table>
        </div>
    );
};
Docs.propTypes = {
    componentDocs: PropTypes.object,
};
export default Docs;
