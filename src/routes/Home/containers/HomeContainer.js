/**
 * Created by brand on 1/15/2017.
 */
import { connect } from 'react-redux'
import { getExperience, setSelectedSkill } from '../modules/home'
import { showModal } from 'store/navigation'

import HomeView from '../components/HomeView'

const mapDispatchToProps = (dispatch) => ({
  showModal : (modalType) => dispatch(showModal(modalType)),
  fetchExperience: () => dispatch(getExperience()),
  setSelectedSkill: (skill) => dispatch(setSelectedSkill(skill))
})

const mapStateToProps = (state) => ({
  ...state,
  experienceData: state.home.experience,
  selectedSkill: state.home.selectedSkill
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
