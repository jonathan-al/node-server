import { createServer } from "http"

// Async function
async function addAsync(a, b, time) {
  return await new Promise((resolve) => {
    // console.log("sleep")
    setTimeout(() => resolve(a + b), time)
  })
}

console.log(`Start ${new Date()}`)
const x = await addAsync(2, 3, 10000).then((value) => value)
// after get x it will be ready for all requests without sleep
// because it was calculated before server.listen
console.log(`End ${new Date()}`)

const server = createServer(async (req, res) => {
  // console.log(req.url)
  console.log(`Start2 ${new Date()}`)
  // x is ready to use, users has to wait for the next sleep only
  const y = await addAsync(x, 3, 10000).then((value) => value.toString())
  // console.log(`This is the API y=${y}`)
  console.log(`End2 ${new Date()}`)
  res.end(`This is the API y=${y}`)
})

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to request on port 8000")
})
