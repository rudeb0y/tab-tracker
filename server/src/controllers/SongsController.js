const { Song } = require('../models');

module.exports = {
  async post(req, res) {
    try {
      const song = await Song.create(req.body);
      res.send({
        song,
      });
    } catch (err) {
      res.status(400).send({
        error: 'There was a problem creating the song',
      });
    }
  },
  async index(req, res) {
    try {
      const songs = await Song.findAll({
        where: {},
        limit: 10,
      });

      return res.send({
        songs,
      });
    } catch (err) {
      return res.status(500).send({
        error: err,
      });
    }
  },
};
