import HeaderTextLinks from './HeaderTextLinks';

const HeaderMobileModal = () => {
  return (
    <div
      className={`fixed top-20 left-0 bg-[#000] w-[90vw] md:max-w-screen-sm md:left-2/4 md:-translate-x-1/2 overflow-hidden transition-all h-auto`}
    >
      <HeaderTextLinks />
    </div>
  );
};

export default HeaderMobileModal;
