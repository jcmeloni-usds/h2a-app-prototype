import React from 'react';
import ProgressButton from '@department-of-veterans-affairs/formation/ProgressButton';

import FormTitle from 'us-forms-system/lib/js/components/FormTitle';

class Introduction extends React.Component {
  constructor(props) {
    super(props);
    this.startForm = this.startForm.bind(this);
  }

  startForm() {
    const firstPage = this.props.route.pageList[1].path;
    this.props.router.push(firstPage);
  }  

  render() {
    return (
      <div className="schemaform-intro">
        <FormTitle title="H-2A Visa Program"/>
        
        <p>[Some lovely intro text about what this is.]</p>
        
        <h4>Follow the steps below to [...].</h4>

        <div className="process schemaform-process">
          <ol>
            <li className="process-step list-one">
              <div><h5>Prepare</h5></div>
              <div><h6>To fill out this application, you’ll need:</h6></div>
              <ul>
                <li>[....]</li>
              </ul>
              <p><strong>What if I need help filling out my application?</strong> [text here]</p>
            </li>
            <li className="process-step list-two">
              <div><h5>Apply</h5></div>
              <p>Complete this H-2A Application Form.</p>
              <p>After submitting the form, [....]</p>
            </li>
            <li className="process-step list-three">
              <div><h5>[Agency] Review</h5></div>
              <p>[....]</p>
            </li>
            <li className="process-step list-four">
              <div><h5>[Even More Agency] Reviews</h5></div>
              <p>[....]</p>
            </li>
            <li className="process-step list-five">
              <div><h5>Decision</h5></div>
              <p>[....]</p>
            </li>
          </ol>

        </div>

        <ProgressButton
          onButtonClick={this.startForm}
          buttonText="Start H-2A Visa Program Application"
          buttonClass="usa-button-primary schemaform-start-button"
          afterText="»"/>
      </div>
    );
  }
}

export default Introduction;
