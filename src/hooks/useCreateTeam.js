import { v4 as uuidv4 } from 'uuid';
import hexToRgba from 'hex-to-rgba';

const useCreateTeam = () => {
  return name => {
    const number = Math.ceil(Math.random() * 5);
    const colors = ['#8c144c', '#862776', '#7f399f', '#794cc8', '#725ef2'];
    const primaryColor = colors[number];
    const newTeam = {
      id: uuidv4(),
      name: name,
      color: primaryColor,
      secundaryColor: hexToRgba(primaryColor, 0.5),
      visible: false,
    };
    return newTeam;
  };
};

export default useCreateTeam;
