// This file contains the specifications for api requests
const controller = {
  get: (req, res) => {
    res.status(200).send('get')
  },
  post: (req, res) => {
    res.status(200).send(req.body.data);
  }
}

module.exports = controller;