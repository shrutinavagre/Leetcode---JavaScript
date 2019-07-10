
var strStr = function(haystack, needle) {
  if (!needle.length) return 0;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      const slice = haystack.slice(i, i + needle.length);
      if (slice === needle) {
        return i;
      }
    }
  }

  return -1;
};
