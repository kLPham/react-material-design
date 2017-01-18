import React from 'react';
import ButtonExamples from './presentational/ButtonExamples';
// import CardExamples from './presentational/CardExamples';
import CheckboxExamples from './presentational/CheckboxExamples';
import FABExamples from './presentational/FABExamples';
import TextfieldExamples from './presentational/TextfieldExamples';
import ListExamples from './presentational/ListExamples';
import MenuExamples from './presentational/MenuExamples';
import RadioExamples from './presentational/RadioExamples';

const Root = () =>
    <div>
        <ButtonExamples />
        {/*<CardExamples />*/}
        <CheckboxExamples />
        <FABExamples />
        <TextfieldExamples />
        <ListExamples />
        <MenuExamples />
        <RadioExamples />
    </div>;

export default Root;
