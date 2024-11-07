export const getApiMessage = (res: any) => {
  return (
    res?.data?.message ||
    res?.message ||
    res?.error.message ||
    "Something went wrong"
  );
};
