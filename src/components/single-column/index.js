/**
 * Created by lvx on 1/10/17.
 */
import React from 'react';
import classnames from 'classnames';
import './index.scss';

const SingleColumn = React.createClass({
    renderTitle() {
        const { title, headingColour, headingType } = this.props;
        let output;
        if (title && title.length) {
            if (headingType === 'h1') {
                output = <h1
                    className="title"
                    style={{ color: headingColour }}
                >
                    {title}
                </h1>;
            } else {
                output = <h2
                    className="title"
                    style={{ color: headingColour }}
                >
                    {title}
                </h2>;
            }
        }
        return output;
    },
    renderRule() {
        const { title, children, ruleColour } = this.props;
        let rule;
        if ((title && title.length) && (children && children.length)) {
            rule = <hr style={{ borderColor: ruleColour }} />;
        }
        return rule;
    },
    renderContent() {
        const { children } = this.props;
        let content;
        if (children && children.length) {
            content = <div
                className="content"
                dangerouslySetInnerHTML={{ __html: children }}
            />;
        }
        return content;
    },
    render() {
        const { className, isInZebraList, backgroundColour, children } = this.props;
        const classes = classnames('single-column', className, {
            'in-zebra-list': isInZebraList
        });
        return <section
            className={classes}
            style={{ backgroundColor: backgroundColour }}
        >
            <div className="wrapper">
                {this.renderTitle()}
                {this.renderRule()}
                {children}
            </div>
        </section>;
    }
});

export default SingleColumn;