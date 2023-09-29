import seedrandom from 'seedrandom'

const POSSIBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

export const RandomBytes = ({ n }: { n: number }) => {
  const rng = seedrandom(String(n))
  let pseudoRandomData = ''

  for (let i = 0; i < n; i++) {
    const index = Math.floor(rng() * POSSIBLE_CHARS.length)
    pseudoRandomData += POSSIBLE_CHARS[index]
    if (i % 80 === 0) pseudoRandomData += '\n'
  }

  return <div className="hidden">{pseudoRandomData}</div>
}
