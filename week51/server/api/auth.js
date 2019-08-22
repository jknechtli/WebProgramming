
const users = [
  {
    username: 'joel',
    birthday: '15/09/1998',
    age: '20',
    email: 'abc@com.au',
    password: '123',
    valid: undefined,
  },
  {
    username: 'dave',
    birthday: '15/09/1987',
    age: '31',
    email: 'dave@com.au',
    password: 'farrow',
    valid: undefined,
  },
  {
    username: 'nish',
    birthday: '15/09/1993',
    age: '25',
    email: 'nish@com.au',
    password: 'ant',
    valid: undefined,
  },
];


module.exports = (req, res) => {

  if (!req.body) {
    return res.sendStatus(400);
  }

  const customer = {};
  customer.email = req.body.email;
  customer.upwd = req.body.upwd;
  customer.valid = false;

  users.forEach(user => {
    if (req.body.email === user.email && req.body.upwd === user.upwd) {
      customer.valid = true;
      customer.age = user.age;
      customer.birthday = user.birthday;
      customer.email = user.email;
      customer.password = '';
    }
  });

  res.send(customer);
}