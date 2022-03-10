function array_move(arr, old_index, new_index) {
    while (old_index < 0) {
        old_index += arr.length;
    }
    while (new_index < 0) {
        new_index += arr.length;
    }
    if (new_index >= arr.length) {
   new_index=-1
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
}
