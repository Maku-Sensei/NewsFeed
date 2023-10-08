function shuffleArray(array) {
  const shuffled = array.slice(); // Create a copy of the input array
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements at i and j
  }
  return shuffled;
}
export default shuffleArray;
