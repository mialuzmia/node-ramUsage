import * as http from 'http';

import { stats } from './pcRamUsage.js';


const host = 'http://localhost';
const port = 3000;

http.createServer((req, res) => {
  let url = req.url;
  if (url === '/stats'){
    res.end(JSON.stringify(stats, null, 2));
  }else{
    res.end('<h1>Seja bem vindo</h1>');
  }
})
.listen(port, () => console.log(`Server is running in ${host}:${port}`));

// setInterval(() => {
//   console.clear();
//   console.log(stats);
  
// }, 1000);