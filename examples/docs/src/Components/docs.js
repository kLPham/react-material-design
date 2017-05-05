import React from 'react';

const Main = ({ componentDocs }) => {
    const { description, props } = componentDocs;
    const propRows = []
    console.log('props', props);
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
            <h3>{`Properties for ${description}`}</h3>
            <section>
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
            </section>
        </div>
    );
};

export default Main;
