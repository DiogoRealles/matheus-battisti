import e from 'express';
import express, {Request, Response, NextFunction} from 'express';
import { appendFile } from 'fs';
import { networkInterfaces } from 'os';

const server = express();

const PORT = 3000;

server.use(express.json());

function showPath(req: Request, res: Response, next: NextFunction){
  console.log(req.path);
  next();
}
server.use(showPath);

server.get('/', (req: Request, res: Response) => {
 
  res.send('Hello World!');

});


server.post('/api/product/', (req: Request, res: Response) => {

  console.log(req.body);

  return res.send('Add Product');

});


server.all('/api/product/check', (req: Request, res: Response) => {

  if(req.method === 'POST'){

    return res.send('Inseriu algum registro');

  } else if(req.method === 'GET'){

    return res.send('Leu algum registro!');

  } else {

    return res.send('Não podemos realizar esta operação!');

  }

});


server.get('/api/interfaces', (req: Request, res: Response) => {

  return res.send('Utilizando Interfaces no Express!');

});


server.get('/api/json', (req: Request, res: Response) => {
  
  return res.json({
    name: 'Shirt',
    price: 30.0,
    color: 'Blue',
    sizes: ['P', 'M', 'G']
  });
  
});


server.get('/api/product/:id', (req: Request, res: Response) => {
  console.log(req.params);
  
  const id = req.params.id;
  
  if(id === '1'){
    
    const product = {
      id: 1,
      name: 'bone',
      price: 10
    }

    return res.json(product);

  } else {
    
    return res.send('Product not found!');

  }
});


server.get('/api/product/:id/review/:reviewId', (req: Request, res: Response) => {
  console.log(req.params);

  const productId = req.params.id;
  const reviewId = req.params.reviewId;

  return res.send(`Review ${reviewId} of product ${productId}`);
});


function getUser(req: Request, res: Response){
  console.log(`Request user with id: ${req.params.id}`);

  return res.send('User found');
}
server.get('/api/user/:id', getUser);


function checkUser(req: Request, res: Response, next: NextFunction){
  if(req.params.id === '1'){
    console.log('Welcome!');
    next();
  } else {
    console.log('Access Restrite!');
  }
}
server.get('/api/user/:id/access', checkUser, (req: Request, res: Response) => {
  return res.json({msg: 'Welcome area adm'})
});

server.get('/api/user/:id/details/:name', (
  req: Request<{id: string, name: string}>,
  res: Response<{status: boolean}>) => {
    console.log(`Id: ${req.params.id}`);
    console.log(`Name: ${req.params.name}`);

    return res.json({status: true});
});


server.get('/api/error', (req: Request, res: Response) => {
  try {
    throw new Error('Error...');
  } catch (error: any) {
    res.status(500).json({msg: error.message});
  }
});

server.listen(PORT, () => {
 
  console.log(`Express running at port: ${PORT}`);

});
