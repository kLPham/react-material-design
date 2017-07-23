import React from 'react';
import PropTypes from 'prop-types';

const Docs = ({ componentDocs }) => {
  const { description, props } = componentDocs;
  const propRows = [];
  for (const [key, value] of Object.entries(props)) {
    const { type, required, defaultValue, description } = value;
    propRows.push(
      <tr key={key}>
        <td>{key}</td>
        <td>{type.name}</td>
        <td>{String(required)}</td>
        <td>{defaultValue && defaultValue.value}</td>
        <td>{description}</td>
      </tr>,
    );
  }
  return (
    <div>
      <h2 className="mdc-typography--display1">{`Properties for ${description}`}</h2>
      <table>
        <thead>
          <tr>
            <th classNames="mdc-typography--title">Property Name</th>
            <th classNames="mdc-typography--title">Type</th>
            <th classNames="mdc-typography--title">Required</th>
            <th classNames="mdc-typography--title">Default Value</th>
            <th classNames="mdc-typography--title">Description</th>
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
};
export default Docs;
