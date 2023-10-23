// lab_6.2
// Гринчук Тарас
// Лабораторна робота № 6.2
// Опрацювання одновимірних масивів рекурсивним способом
// Варіант №4

// Рекурсивний спосіб
function generateArray(size, min, max, array = [], currentIndex = 0) {
   if (currentIndex === size) {
      return array;
   }

   const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
   array[currentIndex] = randomValue;

   return generateArray(size, min, max, array, currentIndex + 1);
}

function findMin(array, currentIndex = 0, min = array[0], indexOfMin = 0) {
   if (currentIndex === array.length) {
      return { value: min, index: indexOfMin };
   }

   if (array[currentIndex] < min) {
      min = array[currentIndex];
      indexOfMin = currentIndex;
   }

   return findMin(array, currentIndex + 1, min, indexOfMin);
}

function findMax(array, currentIndex = 0, max = array[0], indexOfMax = 0) {
   if (currentIndex === array.length) {
      return { value: max, index: indexOfMax };
   }

   if (array[currentIndex] > max) {
      max = array[currentIndex];
      indexOfMax = currentIndex;
   }

   return findMax(array, currentIndex + 1, max, indexOfMax);
}

function calcArithmetic(a, b) {
   return (a + b) / 2;
}

const array = generateArray(20, 1, 100);
console.log("Сформований масив: " + array);
const minInfo = findMin(array);
console.log(`Мінімальне значення масиву: ${minInfo.value}, його індекс в масиві: ${minInfo.index}`);
const maxInfo = findMax(array);
console.log(`Максимальне значення масиву: ${maxInfo.value}, його індекс в масиві: ${maxInfo.index}`);
const result = calcArithmetic(minInfo.index, maxInfo.index);
console.log(`Середнє арифметичне індексів мінімального та максимального значень: ${result}`);

