export type responseBodyType = string
    | Blob
    | ArrayBufferView
    | ArrayBuffer
    | FormData
    | URLSearchParams
    | ReadableStream<Uint8Array>
    | null
    | undefined

export const mockResponse = (
  status: number | undefined,
  statusText: string,
  response: responseBodyType,
) => new window.Response(response, {
  status,
  statusText,
  headers: {
    'Content-type': 'application/json',
  },
});
