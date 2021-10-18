/**
 * This executes a function after a specified delay.
 * @param func callback function
 * @param wait wait time in milliseconds
 * @returns {() => void} return function
 */
function debounce(func: () => void, wait: number): () => void {
  let timeout: ReturnType<typeof setTimeout>;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(func, wait);
  };
}

export default debounce;
