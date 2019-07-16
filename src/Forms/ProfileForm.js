import React, {Component} from 'react';
import {Form} from 'react-form-inc';
class ProfileForm extends Component {
  constructor(props) {
    super()
  }
  render() {
    return (
      <div className="ProfileForm">
      <h2 className="text-center">Personal info:</h2>
      <Form
       
        className=""
        OnSubmit={(fs) => this.props.handleSubmit(fs, 'pi')}
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
            text: "Full Name",
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
            name: "fname",
            type: "text"
          }
        }, {
          InputWrapClass: "form-group ",
          errorClass: 'has-error',
          successClass: 'has-success',
          rules: 'required',
          label: {
            text: "Job Title",
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
            name: "jobTitle",
            type: "text"
          }
        }, {
          InputWrapClass: "form-group ",
          errorClass: 'has-error',
          successClass: 'has-success',
          rules: 'numeric|required',
          label: {
            text: "Phone",
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
            name: "phone",
            type: "tel"
          }
        }, {
          InputWrapClass: "form-group ",
          errorClass: 'has-error',
          successClass: 'has-success',
          rules: 'email|required',
          label: {
            text: "Email",
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
            name: "email",
            type: "email"
          }
        }, {
          InputWrapClass: "form-group ",
          errorClass: 'has-error',
          successClass: 'has-success',
          rules: 'required',
          label: {
            text: "Website",
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
            name: "site",
            type: "url"
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
              className: "help-block pull-left"
            }
          },
          props: {
            className: 'form-control input-md',
            name: "profile",
            type: "text"
          }
        }
      ]}/>
    </div>
    );
  }
}

export default ProfileForm;
