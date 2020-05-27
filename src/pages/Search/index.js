import React, { Fragment } from 'react';
import SectionWrapper from '../../components/common/section_wrapper';
import Search from '../../components/search';
import NavbarFooter from '../../components/common/navbar_footer';

const SearchScreen = () => {
  return (
    <Fragment>
      <SectionWrapper>
        <div className='has-text-centered has-text-white'>Buscar</div>
        <Search />
      </SectionWrapper>
      <NavbarFooter />
    </Fragment>
  );
};
export default SearchScreen;
