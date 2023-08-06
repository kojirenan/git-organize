import { atom } from 'recoil';
import { v4 as uuidv4 } from 'uuid';

export const listTeam = atom({
  key: 'listTeam',
  default: [
    {
      id: uuidv4(),
      name: 'Front-end',
      color: '#8c144c',
      visible: false,
    },
    {
      id: uuidv4(),
      name: 'Back-End',
      color: '#862776',
      visible: false,
    },
    {
      id: uuidv4(),
      name: 'FullStack',
      color: '#7f399f',
      visible: false,
    },
    {
      id: uuidv4(),
      name: 'Mobile',
      color: '#794cc8',
      visible: false,
    },
    {
      id: uuidv4(),
      name: 'DataScience',
      color: '#725ef2',
      visible: false,
    },
  ],
});

export const listUsers = atom({
  key: 'listUsers',
  default: [
    {
      id: uuidv4(),
      name: 'Renan Koji',
      login: 'kojirenan',
      public_repos: 19,
      followers: 1,
      avatar_url: 'https://avatars.githubusercontent.com/u/112651032?v=4',
      office: 'Dev. Júnior',
      team: 'Front-end',
    },
  ],
});
