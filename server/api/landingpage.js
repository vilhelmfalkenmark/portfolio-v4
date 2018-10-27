import express from 'express';

const router = express.Router();

export default () => {
  router.route('/').get((req, res) => {
    console.log('Anrop körs till landingPage!');

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
