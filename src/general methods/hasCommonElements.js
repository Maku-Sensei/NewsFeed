function hasCommonElements(array1, array2) {
  return array1.some((item) => array2.includes(item));
}

export default hasCommonElements;
