const knex = require('knex');

const router = require('express').Router();

const knexConfig ={
  client: 'sqlite3',
  connection: { //string or object}
  filename:'./data/rolex.db3' // the root folder
},
useNullAsDefault: true
}

const db = knex(knexConfig);
router.get('/', (req, res) => {
  db('roles')
  .then(roles =>{
    res.status(200).json(roles);
  })
  .catch( error => {console.log(error)})
  // get the roles from the database
  // res.send('Write code to retrieve all roles');
});

router.get('/:id', (req, res) => {
  // retrieve a role by id
  res.send('Write code to retrieve a role by id');
});

router.post('/', (req, res) => {
  // add a role to the database
  res.send('Write code to add a role');
});

router.put('/:id', (req, res) => {
  // update roles
  res.send('Write code to modify a role');
});

router.delete('/:id', (req, res) => {
  // remove roles (inactivate the role)
  res.send('Write code to remove a role');
});

module.exports = router;
