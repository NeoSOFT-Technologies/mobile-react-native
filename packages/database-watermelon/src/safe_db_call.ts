async function safeDbCall<T>(dbcall: Promise<T>): Promise<T> {
  try {
    const databaseResponse = await dbcall
    return databaseResponse
  } catch (e) {
    return e.message
  }
}

export default safeDbCall
