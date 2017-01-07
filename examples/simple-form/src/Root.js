import React from 'react';
import ButtonExamples from './presentational/ButtonExamples';
import CheckboxExamples from './presentational/CheckboxExamples';
import FABExamples from './presentational/FABExamples';
import InputExamples from './presentational/InputExamples';
import ListExamples from './presentational/ListExamples';

const Root = () =>
    <div>
        <ListExamples />
        <ButtonExamples />
        <FABExamples />
        <CheckboxExamples />
        <InputExamples />
    </div>;
export default Root;
