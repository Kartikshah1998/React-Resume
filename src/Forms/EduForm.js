import React, {Component} from 'react';
import {Form} from 'react-form-inc';
class ProfileForm extends Component {
  constructor(props) {
    super()
  }
  render() {
    return (
      <div className="ProfileForm">
      <h2 className="text-center">Education:</h2>
      <Form
        className=""
        OnSubmit={(fs) => this.props.handleSubmit(fs, 'edu')}
        btn={{
        text: "Add",
        props: {
          className: "btn btn-info "
        }
      }}
        fields={[
        {
          InputWrapClass: "form-group ",
          errorClass: 'has-error',
          successClass: 'has-success',
          rules: 'required',
          label: {
            text: "Institute",
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
            name: "institute",
            type: "text"
          }
        }, {
          InputWrapClass: "form-group ",
          errorClass: 'has-error',
          successClass: 'has-success',
          rules: 'required',
          label: {
            text: "From",
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
            name: "from",
            type: "date"
          }
        }, {
          InputWrapClass: "form-group ",
          errorClass: 'has-error',
          successClass: 'has-success',
          rules: 'date|required',
          label: {
            text: "To",
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
            name: "to",
            type: "date"
          }
        }, {
          InputWrapClass: "form-group ",
          errorClass: 'has-error',
          successClass: 'has-success',
          rules: 'required',
          label: {
            text: "Description",
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
            name: "description",
            type: "text"
          }
        }
      ]}/>
      </div>
    );
  }
}

export default ProfileForm;
