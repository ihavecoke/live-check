import liveQuery from "./../src/index"

test("should return true when condition return true ", async () => {
  const result = await liveQuery(() => true)
  expect(result).toStrictEqual(true)
})

test("should return false when condition return false ", async () => {
  try {
    await liveQuery(() => false, { checkTimes: 10 })
  } catch (e) {
    expect(e).toStrictEqual(false)
  }
})
