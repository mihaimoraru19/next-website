const express = require('express');
const mailgun = require('mailgun-js');
const bodyParser = require('body-parser');
const cors = require('cors');

const server = express();
const port = 3100;

server.use(bodyParser.json());
server.use(cors());

// const corsOptions = {
//   origin: function(origin, callback) {
//     console.log(origin);
//     if (origin === 'http://localhost:3000')
//       callback(null, true);
//     else {
//       callback(new Error(`CORS not allowed origin ${origin}`));
//     }
//   }
// };

server.post('/submit', cors(), (req, res) => {
  const DOMAIN = "YOUR DOMAIN";
  const mg = mailgun({apiKey: "YOUR API KEY", domain: DOMAIN});
  const data = {
    from: `${req.body.name} <mail@sandboxd3af522bf63741e2a6b2fb5bfb6523b7.mailgun.org>`,
    to: "YOUR EMAIL",
    subject: `Personal Website » ${req.body.subject}`,
    text: `EMAIL: ${req.body.email}\n ${req.body.message}`
  };

  mg.messages().send(data);

  res.status(200).end();
});



server.listen(port, () => console.log(`Listening on port ${port}`));

