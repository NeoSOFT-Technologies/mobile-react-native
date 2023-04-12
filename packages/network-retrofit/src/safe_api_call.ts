async function safeApiCall<T>(apicall: Promise<T>): Promise<T> {
  try {
    const networkResponse = await apicall
    return networkResponse
  } catch (e) {
    return e.message
  }
}

export default safeApiCall
