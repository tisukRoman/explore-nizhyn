import React, { FC, FormEvent } from 'react';
import { motion } from 'framer-motion';
import TextInput from './TextInput';
import Button from './Button';

type HeaderSearchModalProps = {
  searchValue: string;
  onSearchChange: (e: FormEvent<HTMLInputElement>) => void;
  onSearch: (e: Event) => void;
  onClose: () => void;
};

const HeaderSearchModal: FC<HeaderSearchModalProps> = ({
  searchValue,
  onSearchChange,
  onSearch,
  onClose,
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
    onClick={onClose}
    className='absolute backdrop-blur-[2px] top-0 left-0 h-screen w-screen bg-black bg-opacity-30'
  >
    <motion.div
      initial={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed py-6 px-12 top-20 left-0 bg-[#000] w-[90vw] md:max-w-screen-sm md:left-2/4 md:-translate-x-1/2 overflow-hidden transition-all`}
    >
      <TextInput
        autoFocus
        value={searchValue}
        onKeyPress={onSearch}
        onChange={onSearchChange}
        has_error={0}
        placeholder='Введіть ключові слова...'
      />
      <Button onClick={onSearch}>Шукати</Button>
    </motion.div>
  </motion.div>
);

export default HeaderSearchModal;
