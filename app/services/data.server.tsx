export async function getData(size: number) {
  let out = []
  for (let i of data(size)) {
    out.push(await i)
  }

  return out
}

const data = function* (size: number) {
  let numbers = [...Array(30).keys()]
  for (let i in numbers) {
    yield new Promise((resolve, _) => {
      setTimeout(() => {
        resolve(str(size))
      }, 100)
    })
  }
}

export function str(size: number) {
  let s = ""

  for (let i = 0; i < size; i++) {
    s += (Math.random() + 1).toString(36).substring(7) + "\n"
  }

  return s
}