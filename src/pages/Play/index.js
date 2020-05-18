import React, { Fragment } from 'react';
import NavbarFooter from '../../components/common/navbar_footer';
import SectionWrapper from '../../components/common/section_wrapper';
import Favorites from '../../components/favorites';

const FavoritesScreen = () => {
  return (
    <Fragment>
      <SectionWrapper>
        <div className='has-text-centered has-text-white'>Favoritos</div>
        <Favorites />
      </SectionWrapper>
      <NavbarFooter />
    </Fragment>
  );
};
export default FavoritesScreen;
