import express from 'express';

const router = express.Router();

export default () => {
  router.route('/').get((req, res) => {
    console.log('Anrop körs till erfarenheter!');

    res.json({
      data: [
        { type: 'Första erfarenheten' },
        { type: 'Andra erfarenheten' },
        { type: 'Tredje erfarenheten' }
      ]
    });
  });

  return router;
};
