/**
 * Created by lvx on 1/10/17.
 */
import React from 'react'
import {connect} from 'react-redux'
import CloseButton from 'components/close-button'
import ContactDetail from 'components/contact-detail'
import { closeModal } from 'store/navigation'
import './index.scss'



class ContactTray extends React.Component {
    constructor(props){
        super(props);
        this.onClickClose = this.onClickClose.bind(this);
        this.onClickContent = this.onClickContent.bind(this);

    }
    onClickClose() {
        let { dispatch } = this.props;
        dispatch(closeModal());
    }
    onClickContent(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    render() {
        const contactData = this.props.contacts;
        return (
            <div className="contact-tray" onClick={this.onClickContent}>
                <CloseButton onClose={this.onClickClose} autoAnim={500}/>
                <div className="content">
                    {contactData.map(contactDetail => {
                        return <ContactDetail
                            key={`contact-detail-${contactDetail.type}`}
                            detail={contactDetail}
                        />;
                    })}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    ...state
})
export default connect(mapStateToProps)(ContactTray)


// return (
//     <div className="contact-tray" onClick={props.onClickContent}>
//         <CloseButton onClose={props.onClickClose} autoAnim={500} />
//         <div className="content">
//             {contactData.map(contactDetail => {
//                 return <ContactDetail
//                     key={`contact-detail-${contactDetail.type}`}
//                     detail={contactDetail}
//                 />;
//             })}
//         </div>
//     </div>
// );