export async function getData() {
  let out = []
  for (let i of data()) {
    out.push(await i)
  }

  return out
}

const data = function* () {
  let numbers = [...Array(30).keys()]
  for (let i in numbers) {
    yield new Promise((resolve, _) => {
      setTimeout(() => {
        resolve(str())
      }, 100)
    })
  }
}

export function str() {
  let s = ""

  for (let i = 0; i < 10000; i++) {
    s += (Math.random() + 1).toString(36).substring(7) + "\n"
  }

  return s
}