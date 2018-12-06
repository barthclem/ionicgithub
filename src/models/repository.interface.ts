import {User} from "./user.interface";
/**
 * Created by barthclem on 3/17/18.
 */
export interface Repository {
  name: string;
  description: string;
  owner: User;
}
