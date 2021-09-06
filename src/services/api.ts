export const fakeApi = <TResponse>(response: TResponse): Promise<TResponse> =>
  new Promise((res) => setTimeout(() => res(response), 450));
