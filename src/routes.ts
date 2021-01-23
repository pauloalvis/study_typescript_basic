import { Request, Response } from 'express';
import createUser from './services/createUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'pauloalvis@hotmail.com',
    password: '123456',
    techs: [
      'Node.js',
      'ReactJS',
      'React Native',
      { title: 'javaScript', experiense: 100 },
    ],
  });

  return response.json({ message: 'Hello World' })
}