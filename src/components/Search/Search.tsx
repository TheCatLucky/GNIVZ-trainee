import React from 'react';

import styles from './Search.module.scss';

export type SearchProps = {
  search: string;
  handleSearch: React.ChangeEventHandler<HTMLInputElement>;
};

const Search: React.FC<SearchProps> = ({ handleSearch, search }) => (
  <div className={styles.component}>
    <input
      type="text"
      value={search}
      onChange={handleSearch}
      placeholder="search..."
    />
  </div>
);

export default Search;
