import { z } from 'zod';

export const UserValidation = z.object({
  profile_photo: z.string().url().min(1),
  name: z.string().min(3).max(30),
  lastname: z.string().min(3).max(30),
  username: z.string().min(3).max(30),
  address: z.string().min(1).max(100),
  postCode: z.string().min(1).max(10),
  city: z.string().min(1).max(30),
  province: z.string().min(1).max(30),
  country: z.string().min(1).max(30),
  telephone: z.string().max(15),
});