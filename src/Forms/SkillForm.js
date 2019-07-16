import React, {Component} from 'react';
import {Form} from 'react-form-inc';
class SkillForm extends Component {
  constructor(props) {
    super()
  }
  render() {
    return (
      <div className="SkillForm">
      <h2 className="text-center">Key skills:</h2>
      <Form
        className=""
        OnSubmit={(fs) => this.props.handleSubmit(fs, 'ks')}
        btn={{
        text: "Add",
        props: {
          className: "btn btn-info "
        }
      }}
        fields={[{
          InputWrapClass: "form-group ",
          errorClass: 'has-error',
          successClass: 'has-success',
          rules: 'required',
          label: {
            text: "Skill",
            props: {
              className: "control-label"
            }
          },
          error: {
            text: "auto",
            props: {
              className: "help-block"
            }
          },
          props: {
            className: 'form-control input-md',
            name: "skill",
            type: "text"
          }
        }
      ]}/>
      </div>
    );
  }
}

export default SkillForm;
