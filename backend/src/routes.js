import usersController from './controller/usersController.js';

const addRoutes = (app) => {
  app.get('/', (req, res) => {
    res.send(`Api server is running (${new Date()})`);
  });

  app.route('/users').get(usersController.getAll);
};

export default addRoutes;
