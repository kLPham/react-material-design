import React from 'react';
import { LayoutGrid, LayoutGridCell } from '../../../../components/react-material-design';

const childStyle = {
    backgroundColor: 'gray',
};
const LayoutGrids = () =>
    (<div>
        <h2>Grid</h2>
        <LayoutGrid>
            <LayoutGridCell>
                <div style={childStyle}>I am in a cell</div>
            </LayoutGridCell>
            <LayoutGridCell>
                <div style={childStyle}>I am in a cell too</div>
            </LayoutGridCell>
        </LayoutGrid>
        <h3>Column Span</h3>
        <LayoutGrid>
            <LayoutGridCell columnSpan={8}>
                <div style={childStyle}>I am in a cell</div>
            </LayoutGridCell>
            <LayoutGridCell columnSpan={8}>
                <div style={childStyle} >I am in a cell too</div>
            </LayoutGridCell>
        </LayoutGrid>
        <h4>Screen Size</h4>
        <h5>Tablet</h5>
        <LayoutGrid >
            <LayoutGridCell columnSpan={4} screenSize="tablet">
                <div style={childStyle}>I am in a cell</div>
            </LayoutGridCell>
            <LayoutGridCell columnSpan={4} screenSize="tablet">
                <div style={childStyle}>I am in a cell too</div>
            </LayoutGridCell>
        </LayoutGrid>
        <h3>Nested</h3>
        <LayoutGrid>
            <LayoutGridCell>
                <LayoutGrid nested>
                    <LayoutGridCell><div style={childStyle}>Second Level</div></LayoutGridCell>
                    <LayoutGridCell><div style={childStyle}>Second Level</div></LayoutGridCell>
                </LayoutGrid>
            </LayoutGridCell>
            <LayoutGridCell><div style={childStyle}>First Level</div></LayoutGridCell>
            <LayoutGridCell><div style={childStyle}>First Level</div></LayoutGridCell>
        </LayoutGrid>
        <h3>Alignment</h3>
        <LayoutGrid>
            <LayoutGridCell alignment="top"><div style={childStyle}>top</div></LayoutGridCell>
            <LayoutGridCell alignment="middle"><div style={childStyle}>middle</div></LayoutGridCell>
            <LayoutGridCell alignment="bottom"><div style={childStyle}>bottom</div></LayoutGridCell>
        </LayoutGrid>
    </div>);
export default LayoutGrids;
