/**
 * Created by lvx on 1/10/17.
 */
// ------------------------------------
// Constants
// ------------------------------------
export const SHOW_MODAL = 'SHOW_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'

// ------------------------------------
// Actions
// ------------------------------------
export function showModal (modal) {
  return {
    type    : SHOW_MODAL,
    payload : modal
  }
}

export function closeModal () {
  return {
    type    : CLOSE_MODAL
  }
}


// ------------------------------------
// Specialized Action Creator
// ------------------------------------
export const updateLocation = ({ dispatch }) => {
  return (nextLocation) => dispatch(locationChange(nextLocation))
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SHOW_MODAL]    : (state, action) => {
    return {
      ...state,
      modal: action.payload
    }
  },
  [CLOSE_MODAL] : (state) => {
    return {
      ...state,
      modal: null
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { modal: null }
export default function navigationReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
