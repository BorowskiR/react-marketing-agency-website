import React from 'react';
import InfoSection from '../../components/InfoSection';
import { homeObjOne, homeObjTwo } from '../Products/Data';

const Products = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
    </>
  );
};

export default Products;
