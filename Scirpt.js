const instersects = (a, b) => {
  const result = a.filter(item => b.includes(item));
  return Array.from(new Set(result));
}