import React from 'react';
import { LayoutGrid, LayoutGridCell } from '../../../../components/react-material-design';
// import { LayoutGrid } from 'react-material-design';

const LayoutGridExamples = () =>
    <div>
        <h2>LayoutGrid Examples</h2>
        <LayoutGrid>
            <LayoutGridCell span={6}>span 6</LayoutGridCell>
            <LayoutGridCell>1</LayoutGridCell>
            <LayoutGridCell alignment="middle">middle</LayoutGridCell>
            <LayoutGridCell span={4}>span 4</LayoutGridCell>
            <LayoutGridCell>2</LayoutGridCell>
            <LayoutGridCell alignment="bottom">bottom</LayoutGridCell>
            <LayoutGridCell>3</LayoutGridCell>
            <LayoutGridCell span={2}>span 2</LayoutGridCell>
            <LayoutGridCell alignment="top">top</LayoutGridCell>
            <LayoutGridCell>5</LayoutGridCell>
            <LayoutGridCell>6</LayoutGridCell>
        </LayoutGrid>
    </div>;
export default LayoutGridExamples;
