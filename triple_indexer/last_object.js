function last_object(array, l, searchValue) {
while (l--) {
    if (array[l] ===searchValue) {
        break;
    }
}
  return l;
}