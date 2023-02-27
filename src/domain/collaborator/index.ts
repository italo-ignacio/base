import type { Phone } from 'domain/phone';
import type { Role } from 'domain/enums';
import type { Specialty } from 'domain/specialty';
import type { Unity } from 'domain/unity';

export interface Collaborator {
  id: string;
  email: string;
  nif: string;
  role: Role;
  phone: Phone;
  name: string;
  unities: Unity;
  specialties: Specialty;
}
