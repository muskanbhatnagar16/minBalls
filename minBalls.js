const memory = [];

const calculateMinBalls = (weight) => {
  if (memory[weight]) {
    return memory[weight];
  } else if (weight === 0.25) {
    return 1;
  } else if (weight === 0.5) {
    return 1;
  } else if (weight === 0.75) {
    return 1;
  }

  const min = Math.min(
    calculateMinBalls(weight - 0.25),
    calculateMinBalls(weight - 0.5),
    calculateMinBalls(weight - 0.75)
  );
  memory[weight] = 1 + min;
  return 1 + min;
};

const main = () => {
  const weight = prompt("Please enter weight");
  if (Number(weight) % 0.25 !== 0) {
    alert("Invalid Weight");
    return;
  }

  console.log(
    "Min no of balls required = " + calculateMinBalls(Number(weight))
  );
};

main();
