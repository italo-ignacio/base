export interface Unity {
  id: number;
  name: string;
  code: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreateUnityRequest {
  name: string;
  code: number;
}
