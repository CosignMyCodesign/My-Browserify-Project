// Where we configure a task for running the JSON Server
module.exports = {
  launchAPI: {
      cmd: "json-server -p 8088 -w ../../api/database.json"
  },
  _defaults: {
      bg: true
  }
}