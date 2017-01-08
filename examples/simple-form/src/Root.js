import React from 'react';
import MenuExamples from './presentational/MenuExamples';
import ButtonExamples from './presentational/ButtonExamples';
import CheckboxExamples from './presentational/CheckboxExamples';
import FABExamples from './presentational/FABExamples';
import InputExamples from './presentational/InputExamples';
import ListExamples from './presentational/ListExamples';

const Root = () =>
    <div>
        <MenuExamples />
        <CheckboxExamples />
        <InputExamples />
        <ListExamples />
        <ButtonExamples />
        <FABExamples />
    </div>;
export default Root;
