import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Docs = ({ componentDocs }) => {
    const { description, props } = componentDocs;
    const propRows = _.map(props, (prop, key) =>
         (<tr key={key}>
             <td>{key}</td>
             <td>{prop.description}</td>
             <td>{prop.type.name}</td>
             <td>{_.get(prop.defaultValue, 'prop.defaultValue.value')}</td>
             <td>{prop.required && 'true'}</td>
         </tr>),
    );

    return (
        <div>
            <h3 className="mdc-typography--subheading2">Properties for {description}</h3>
            <div style={{ overflowX: 'auto' }}>
                <table>
                    <thead>
                        <tr>
                            <th>Property Name</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Default Value</th>
                            <th>Required</th>
                        </tr>
                    </thead>
                    <tbody>
                        {propRows}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
Docs.propTypes = {
    componentDocs: PropTypes.object.isRequired,
};
export default Docs;
