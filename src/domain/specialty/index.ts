export interface Specialty {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateSpecialtyRequest {
  name: string;
}
