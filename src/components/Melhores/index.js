import React from 'react';
import SetItem from '../SetItem';

import './style.css';
import set01 from '../../assets/image/set01.png';
import set02 from '../../assets/image/set02.png';
import set03 from '../../assets/image/set03.png';
import set04 from '../../assets/image/set04.png';
import set05 from '../../assets/image/set05.png';
import set06 from '../../assets/image/set06.png';
import set07 from '../../assets/image/set07.png';
import set08 from '../../assets/image/set08.png';

const Melhores = () => {
  return (
    <div className='card_container_box_best'>
      <SetItem image={set01} />
      <SetItem image={set02} />
      <SetItem image={set03} />
      <SetItem image={set04} />
      <SetItem image={set05} />
      <SetItem image={set06} />
      <SetItem image={set07} />
      <SetItem image={set08} />
    </div>
  );
};
export default Melhores;
