import React from 'react';
import { Slider } from '../../../../components/react-material-design';

const Sliders = () => (
  <div>
      <h1>Sliders</h1>
      <h2>Continuous Sliders</h2>
      <Slider />
      <Slider initialValue={20} />
    <h3>Disabled</h3>
    <Slider disabled />
  </div>
          );
export default Sliders;
