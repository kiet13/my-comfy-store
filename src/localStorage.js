export const getStateFromStorage = (key) => {
  try {
    const persistedState = localStorage.getItem('state') || '{}'
    return JSON.parse(persistedState)[key]
  } catch (e) {
    console.log(e)
  }
}

export const setStateToStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (err) {
    console.log(err)
  }
}
