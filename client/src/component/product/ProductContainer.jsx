// ProductContainer.js
import React, { useState } from 'react';
import ProductCard from './CardWithHover';
import ModalComponent from './ModalComponent';
import FilterSelect from './FilterSelect';

const ProductContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  return (
    <div>
      <FilterSelect/>
      <ProductCard handleIconClick={toggleModal} handleSecClick={toggleModal}/>
      {isModalOpen && <ModalComponent closeModal={toggleModal} />}
    </div>
  );
};

export default ProductContainer;
