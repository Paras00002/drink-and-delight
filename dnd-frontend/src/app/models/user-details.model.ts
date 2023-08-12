import { Address } from './address.model';

export class UserDetails {
  userId!: string;
  username!: string;
  role!: string;
  designation!: string;
  gender!: string;
  emailId!: string;
  phoneNo!: string;
  dob!: string;
  address!: Address;
  firstName!: string;
  lastName!: string;
}
