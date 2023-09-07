import React, { useState } from 'react';
import CheckBox from 'react-animated-checkbox';
//import 'react-animated-checkbox/build/animate.css';

const Successpayment = () => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
  };

  return (
    <div style={{marginTop:'10%'}}>
      <CheckBox
        checked={checked}
        checkBoxStyle={{
          checkedColor: '#34b93d',
          size: 100,
          unCheckedColor: '#b8b8b8',
        }}
        duration={400}
        onClick={handleClick}
      />
    </div>
  );
};

export default Successpayment;
