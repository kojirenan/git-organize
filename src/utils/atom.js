import { atom } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import hexToRgba from 'hex-to-rgba';

export const listTeam = atom({
  key: 'listTeam',
  default: [
    {
      id: uuidv4(),
      name: 'Front-end',
      color: '#8c144c',
      secundaryColor: hexToRgba('#8c144c', 0.5),
      visible: false,
    },
    {
      id: uuidv4(),
      name: 'Back-End',
      color: '#862776',
      secundaryColor: hexToRgba('#862776', 0.5),
      visible: false,
    },
    {
      id: uuidv4(),
      name: 'FullStack',
      color: '#7f399f',
      secundaryColor: hexToRgba('#7f399f', 0.5),
      visible: false,
    },
    {
      id: uuidv4(),
      name: 'Mobile',
      color: '#794cc8',
      secundaryColor: hexToRgba('#794cc8', 0.5),
      visible: false,
    },
    {
      id: uuidv4(),
      name: 'DataScience',
      color: '#725ef2',
      secundaryColor: hexToRgba('#725ef2', 0.5),
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
