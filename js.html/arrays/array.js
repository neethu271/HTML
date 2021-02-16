var array = [10, 20, 30, 40, 40, 40, 40];

for (i = 0; i < array.length; i++) {
    if (array[i] == 40) {
        continue;
    }
    console.log(array[i]);
}