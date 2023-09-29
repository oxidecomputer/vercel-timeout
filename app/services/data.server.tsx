export async function getData() {
  let out = []
  for (let i of data()) {
    out.push(await i)
  }

  return out
}

const data = function* () {
  for (let i in [1,2,3]) {
    yield new Promise((resolve, _) => {
      setTimeout(() => {
        console.log('out ' + i)
        resolve(i)
      }, 1000)
    })
  }
}