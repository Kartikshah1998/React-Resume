import React, {Component} from 'react';
import {Form} from 'react-form-inc';
class WorkForm extends Component {
  constructor(props) {
    super()
  }
  render() {
    return (
      <div className="WorkForm">
      <h2 className="text-center">Work expirince:</h2>
      <Form
        className=""
        OnSubmit={(fs) => this.props.handleSubmit(fs, 'we')}
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
            text: "Company",
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
            name: "company",
            type: "text"
          }
        },{

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
          rules: 'required',
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

export default WorkForm;
