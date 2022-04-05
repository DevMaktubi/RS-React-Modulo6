import { useQuery } from 'react-query';
import { api } from '../api';

type User = {
  id: number;
  name: string;
  email: string;
  createdAt: string;
};

type getUsersResponse = {
  totalCount: number;
  users: User[];
};

export async function getUsers(page: number): Promise<getUsersResponse> {
  const { data, headers } = await api.get('users', {
    params: { page },
  });
  const totalCount = Number(headers['x-total-count']);
  const users: User[] = data.users.map(user => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.created_at).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
    };
  });
  return { users, totalCount };
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function useUsers(page: number) {
  return useQuery(['users', page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
}
