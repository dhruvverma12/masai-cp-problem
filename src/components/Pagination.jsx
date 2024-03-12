// Pagination.js
import React from "react";
import { Button, ButtonGroup, Select } from "@chakra-ui/react";
import styles from "./Pagination.module.css";

const Pagination = ({ setPage, setLimit }) => {
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleLimitChange = (event) => {
    setLimit(Number(event.target.value));
  };

  return (
    <ButtonGroup className={styles.buttonGroup}>
      <Button data-cy="pagination-first-button" onClick={() => handlePageChange(1)} className={styles.button}></Button>
      <Button data-cy="pagination-previous-button" onClick={() => handlePageChange((prev) => Math.max(prev - 1, 1))} className={styles.button}></Button>
      <Select className={styles.select} data-cy="pagination-limit-select" onChange={handleLimitChange}>
        <option value="3" data-cy="pagination-limit-3"></option>
        <option value="6" data-cy="pagination-limit-6"></option>
        <option value="9" data-cy="pagination-limit-9"></option>
      </Select>
      <Button data-cy="pagination-next-button" onClick={() => handlePageChange((prev) => prev + 1)} className={styles.button}></Button>
      <Button data-cy="pagination-last-button" className={styles.button}></Button>
    </ButtonGroup>
  );
};

export default Pagination;
