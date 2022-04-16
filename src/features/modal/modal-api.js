// A mock function to mimic making an async request for data
export const fetchSetModalShow = (value) => {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: value }), 100)
  );
};
