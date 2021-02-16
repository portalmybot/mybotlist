import React from 'react';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider
} from 'react-query'

import { getAllBots } from '../services/bot.service';

const useBot = () => {
  const queryClient = useQueryClient
  const query = useQuery('bots', getAllBots)

}

export default useBot