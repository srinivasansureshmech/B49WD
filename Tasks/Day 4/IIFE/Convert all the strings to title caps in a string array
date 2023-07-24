const stringArray = ["hello world", "javascript is awesome", "happy coding"];

(function(arr) {
  const titleCapsArray = arr.map(function(str) {
    return str
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  });

  console.log(titleCapsArray);
})(stringArray);
