let sum = 0;

for (let i = 0; i < 1000000000000; i++) {
  sum = sum + i;
}

console.log(sum);

// Why does none of the core reach 100% utilization ?
// Run the program locally, since js is single threaded, why does it take

// Answer: top command in linux fixes it, it was not showing proper hardware usage
