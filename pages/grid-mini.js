import React, { useState } from 'react';
import Layout from '../components/layout/layout';
import FlexCard from '../components/flex-card';
import {
  miniCardModule,
  smallGridItems,
  mediumCardModule,
  mediumCardModuleNoImages,
  largeCardModule
} from '../utils/grid-data';

const MiniGrid = () => {
  const [itemsMini, setminiCardModule] = useState(miniCardModule);
  const [itemsSmall, setItemsSmall] = useState(smallGridItems);
  const [itemsMedium, setItemsMedium] = useState(mediumCardModule);
  const [itemsMediumNoImages, setMediumItemsNoImages] = useState(
    mediumCardModuleNoImages
  );
  const [itemsLarge, setItemsLarge] = useState(largeCardModule);

  return (
    <Layout>
      <div>
        <h3 style={{ textAlign: 'center', marginTop: '7rem' }}>
          Stay Proteted with Custimized and Risk Management Solutions
        </h3>
      </div>
      <div>
        <FlexCard items={itemsMini} layout="miniCardModule" />
        <FlexCard items={itemsSmall} layout="cardModuleSmall" />
        <FlexCard items={itemsMedium} layout="cardModuleMedium" />
        <FlexCard items={itemsLarge} layout="largeCardModule" />

        {/* <FlexCard
          items={itemsMediumNoImages}
          layout="cardModuleMediumNoImages"
        /> */}
      </div>
    </Layout>
  );
};

export default MiniGrid;
