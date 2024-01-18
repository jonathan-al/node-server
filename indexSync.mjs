import { createServer } from "http"

// Sync function
function sleep(ms) {
  const end = Date.now() + ms
  while (Date.now() < end) {
    // console.log(Date.now())
  }
}

console.log(`Start ${new Date()}`)

// this sleep will be executed once because it is before server.listen
sleep(3000)

console.log(`End ${new Date()}`)

const server = createServer(async (req, res) => {
  console.log(req.url)
  console.log(`Start2 ${new Date()}`)

  // This sleep blocks next requests because is a sync function
  sleep(10000)

  console.log(`End2 ${new Date()}`)
  res.end("<h1>Hello</h1>")
})

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to request on port 8000")
})
