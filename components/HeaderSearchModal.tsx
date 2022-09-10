import React, { FC, FormEvent } from 'react';
import TextInput from './TextInput';
import Button from './Button';

type HeaderSearchModalProps = {
  searchValue: string;
  onSearchChange: (e: FormEvent<HTMLInputElement>) => void;
  onSearch: () => void;
};

const HeaderSearchModal: FC<HeaderSearchModalProps> = ({
  searchValue,
  onSearchChange,
  onSearch
}) => {
  return (
    <div
      className={`fixed py-6 px-12 top-20 left-0 bg-[#000] w-[90vw] md:max-w-screen-sm md:left-2/4 md:-translate-x-1/2 overflow-hidden transition-all`}
    >
      <TextInput
        value={searchValue}
        onChange={onSearchChange}
        has_error={0}
        placeholder='Введіть ключові слова...'
      />
      <Button onClick={onSearch}>Шукати</Button>
    </div>
  );
};

export default HeaderSearchModal;
