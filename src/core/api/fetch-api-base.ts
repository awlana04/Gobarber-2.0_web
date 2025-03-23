const FetchAPIBase = async (
  path: string,
  fetchOptions?: {
    method: string;
    headers: any;
    data: any;
  }
) => {
  const response = await fetch(
    `${
      process.env.NEXT_PUBLIC_ENV === 'test'
        ? process.env.NEXT_PUBLIC_FRONTEND_URI
        : process.env.NEXT_PUBLIC_BACKEND_URI
    }${path}`,
    {
      method: fetchOptions?.method,
      headers: fetchOptions?.headers,
      body: JSON.stringify(fetchOptions?.data),
    }
  );

  return response;
};

export default FetchAPIBase;
