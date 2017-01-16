import {isArray} from 'lodash'
/**
 * Created by lvx on 1/10/17.
 */
// ------------------------------------
// Constants
// ------------------------------------
export const SHOW_MODAL = 'SHOW_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'
export const SCROLL_TO = 'SCROLL_TO'

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

export const scrollTo = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type    : SCROLL_TO,
          payload : getState().navigation.scrollPosition
        })
        resolve()
      }, 200)
    })
  }
}

export const actions = {
  showModal,
  scrollTo,
  closeModal
}
// ------------------------------------
// Specialized Action Creator
// ------------------------------------
// export const updateLocation = ({ dispatch }) => {
//   return (nextLocation) => dispatch(locationChange(nextLocation))
// }


// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SHOW_MODAL]    : (state, action) => {
    if (isArray(action.payload)) {
      return {
        ...state,
        modal: action.payload[0],
        scrollPosition: action.payload[1]
      }
    } else {
      return {
        ...state,
        modal: action.payload
      }
    }
  },
  [CLOSE_MODAL] : (state) => {
    return {
      ...state,
      modal: null,
      scrollTo: null
    }
  },
  [SCROLL_TO]: (state, action) => {
    return {
      ...state,
      scrollTo: 0
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
