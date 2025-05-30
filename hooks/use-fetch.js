'use client';

import { useState, useEffect } from 'react';
import { toast } from "sonner";

export function useFetch(fn) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = async (...args) => {
    try {
      setLoading(true);
      setError(null);
      const result = await fn(...args);
      setData(result);
      return result;
    } catch (err) {
      setError(err);
      toast.error(err.message || 'An error occurred');
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    data,
    fn: execute
  };
}

export default useFetch;