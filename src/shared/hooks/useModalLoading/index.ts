import { useState } from 'react';

export const useModalLoading = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadingTrue = () => setIsLoading(true);
  const handleLoadingFalse = () => setIsLoading(false);

  return { isLoading, handleLoadingTrue, handleLoadingFalse };
};
