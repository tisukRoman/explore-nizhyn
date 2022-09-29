import HeaderTextLinks from './HeaderTextLinks';
import { motion } from 'framer-motion';

const HeaderMobileModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div
      onClick={onClose}
      className='fixed w-full h-full top-0 left-0 bg-black bg-opacity-50 backdrop-blur-[1px]'
    >
      <motion.div
        initial={{ opacity: 0, translateY: -50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-20 left-0 bg-[#000] w-[90vw] md:max-w-screen-sm md:left-2/4 md:-translate-x-1/2 overflow-hidden transition-all h-auto`}
      >
        <HeaderTextLinks />
      </motion.div>
    </div>
  );
};

export default HeaderMobileModal;
