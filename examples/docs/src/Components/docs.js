import React from 'react';
import PropTypes from 'prop-types';

const Docs = ({ componentDocs }) => {
    const { description, props } = componentDocs;
    const propRows = [];
    for (const [key, value] of Object.entries(props)) {
      const { type, required, defaultValue, description } = value;
        propRows.push(<tr key={key}>
            <td>{key}</td>
            <td>{type.name}</td>
            <td>{String(required)}</td>
            <td>{defaultValue && defaultValue.value}</td>
            <td>{description}</td>
        </tr>)
    }
    return (
        <div>
            <h2>{`Properties for ${description}`}</h2>
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
  componentDocs: PropTypes.any,
}
export default Docs;
