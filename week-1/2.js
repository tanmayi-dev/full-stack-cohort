var counter = 0;
function printCounter() {
  console.log("counter=" + ++counter);
  setTimeout(printCounter, 1000);
}
printCounter();
