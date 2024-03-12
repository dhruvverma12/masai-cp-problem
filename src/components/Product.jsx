// Product.js
import React from "react";
import { Stack, Image, Text, Box, Heading, Tag, TagLabel } from "@chakra-ui/react";
import styles from "./Product.module.css";

const Product = ({ img, category, brand, details, price }) => {
  return (
    <Stack className={styles.stack} data-cy="product">
      <Image className={styles.image} src={img} alt={details} data-cy="product-image" />
      <Text data-cy="product-category">{category}</Text>
      <Tag className={styles.tag}>
        <TagLabel data-cy="product-brand">{brand}</TagLabel>
      </Tag>
      <Heading data-cy="product-details">{details}</Heading>
      <Box className={styles.price} data-cy="product-price">{price}</Box>
    </Stack>
  );
};

export default Product;
