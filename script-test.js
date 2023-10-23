function generateArray(size, min, max, array = [], currentIndex = 0) {
   if (currentIndex === size) {
      return array;
   }

   const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
   array[currentIndex] = randomValue;

   return generateArray(size, min, max, array, currentIndex + 1);
}

module.exports = generateArray;
