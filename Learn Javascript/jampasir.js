function hourglassFibonacci(n) {
    const final = []
    for (let i = 0; i < n; i++) {
      const fib = [];
      for (let j = 0; j < n - i; j++) {
        if (j == 0) {
          for (k = 0; k < i; k++) {
            fib.push(" ")
          }
          fib.push(1)
        } else if (j == 1) {
          fib.push(1)
        } else if (j > 1) {
          fib.push(fib[fib.length - 2] + fib[fib.length - 1])
        }
      }
      const reverseFib = fib.map(fib.pop, [...fib])
      final.push(`${fib.join("")}${reverseFib.join("")}`)
    }
    const reverseFinal = final.map(final.pop, [...final])
    return `${final.join("\n")}\n${reverseFinal.join("\n")}`
  }
  
  console.log(hourglassFibonacci(5))
  console.log("\n")
  console.log(hourglassFibonacci(3))
  console.log("\n")
  console.log(hourglassFibonacci(2))