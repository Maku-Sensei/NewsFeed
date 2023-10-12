function hasCommonElements<T>(array1: T[], array2: T[]) {
  return array1.some((item) => array2.includes(item));
}

export default hasCommonElements;
