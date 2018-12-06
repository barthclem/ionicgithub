import {Repository} from "../models/repository.interface";
import {USER_LIST} from "./user.mocks";
/**
 * Created by barthclem on 3/17/18.
 */
export const REPOSITORY_LIST: Repository[] = [
  {
    name: 'Kalklex Camera',
    description: 'This is Camera is a superb product from Kalklex. It is of high quality and great engineering effort',
    owner: USER_LIST[0]
  },
  {
    name: 'Kalklex Television',
    description: 'This is Television is a superb product from Kalklex. It is of high quality and great engineering effort',
    owner: USER_LIST[0]
  },
  {
    name: 'Kalklex Music Player',
    description: 'This is Music Player is a superb product from Kalklex. It is of high quality and great engineering effort',
    owner: USER_LIST[1]
  },
  {
    name: 'Kalklex Radio',
    description: 'This is Radio is a superb product from Kalklex. It is of high quality and great engineering effort',
    owner: USER_LIST[1]
  }
];
