/**
 * Created by brand on 1/12/2017.
 */

import Rest from 'utils/rest'
// ------------------------------------
// Constants
// ------------------------------------
export const GET_EXPERIENCE = 'GET_EXPERIENCE'
export const SET_SELECTED_SKILL = 'SET_SELECTED_SKILL'

const rest = Rest()

export function Resources (rest) {
  return {
    get (data) {
      return rest.get(`experience/`, data)
    }
  }
}

let experienceApi = Resources(rest)

// ------------------------------------
// Actions
// ------------------------------------

export function getExperience2 (value = 1) {
  return {
    type    : GET_EXPERIENCE,
    payload : value
  }
}

export function setSelectedSkill (skill) {
  return {
    type    : SET_SELECTED_SKILL,
    payload : skill
  }
}

export const getExperience = () => {
  return (dispatch, getState) => {
    return experienceApi.get().then(result => {
      return dispatch({
        type: GET_EXPERIENCE,
        payload: result
      })
    })
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     dispatch({
    //       type    : GET_EXPERIENCE,
    //       payload : 'test'
    //     })
    //     resolve()
    //   }, 200)
    // })
  }
}

export const actions = {
  getExperience,
  setSelectedSkill
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_EXPERIENCE]    : (state, action) => {
    return {
      ...state,
      experience: action.payload
    }
  },
  [SET_SELECTED_SKILL]: (state, action) => {
    return {
      ...state,
      selectedSkill: action.payload
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  experience: [],
  selectedSkill: 'front-end'
}
export default function homeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
