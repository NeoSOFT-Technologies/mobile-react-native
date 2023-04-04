async function safeCall<T>(apicall: Promise<T>): Promise<T> {
  try {
    const loginResponse = await apicall
    return loginResponse
  } catch (e) {
    return e.message
  }
}

export default safeCall
