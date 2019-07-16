import React, {Component} from 'react';
import Simple from './templates/Simple';
import EduForm from './Forms/EduForm';
import ProfileForm from './Forms/ProfileForm';
import SkillForm from './Forms/SkillForm';
import WorkForm from './Forms/WorkForm';
class Create extends Component {
  constructor(props) {
    super()
    this.state = {
      cv:{}
    }
    this.handleSubmit = this
      .handleSubmit
      .bind(this);
      this.restore = this
      .restore
      .bind(this);
  }
componentWillMount(){
this.restore();
}
save(){
  try{
    localStorage.setItem('cv',JSON.stringify(this.state.cv));  
  }catch(e){ }
}
restore(){
  try{
    let cv = localStorage.getItem('cv');
     cv= JSON.parse(cv);
    if(typeof(cv) === 'object' && cv !==null){
      this.setState({cv:{...cv}})
        }else {//not working ?
          const s = {...this.props.dcv}
          localStorage.setItem('cv',JSON.stringify({...s})); 
          this.setState({cv:{...s}})
        }
   }catch(e){

   }

}
  handleSubmit(fs, t) {
    //t = keys: pi, we,ks,edu

    // if (!fs.isValid) 
    //   return;
 
      const formState = Object.assign({},fs.formData);
      for (const key in formState) {
        if (formState.hasOwnProperty(key)) {
          if(!(formState[key].length >0)) delete formState[key]  
        }
      }
    const cv = this.state.cv;
    switch (t) {
      case 'pi':
        for (const key in formState) {
          cv[key] = formState[key];
        }
        break;
      case 'we':
      if(!cv.workEx){
        cv.workEx=[];
        cv.workEx.push(formState)
      }else{
        cv.workEx.push(formState)
      }
        break;
      case 'ks':
      if(!cv.keySkill){
        cv.keySkill=[];
        cv.keySkill.push(formState)
      }else{
        cv.keySkill.push(formState)
      }
        break;
      case 'edu':
      if(!cv.edu){
        cv.edu=[];
        cv.edu.push(formState)
      }else{
        cv.edu.push(formState)
      }
        break;
      default:
      debugger;
        break;
    }
    this.setState({cv});
    this.save();
  }
  reset(){
    localStorage.setItem('cv',JSON.stringify({}));
    this.setState({cv:{}})//not working ?
    this.updateKey = Math.random();
    debugger;
  }
  print(){
    
this.props.history.push('/simple/print')
  }
  download(){

  }
  render() {
    return (
      <div className="Create ">
      <div className="col-md-6">
      <div className="col-md-6">
  <ProfileForm handleSubmit={this.handleSubmit}/>
  </div>

  <div className="col-md-6 ">
  <WorkForm handleSubmit={this.handleSubmit}/>
  </div>
  <div className="col-md-6">
  <SkillForm handleSubmit={this.handleSubmit}/>
  </div>
  <div className="col-md-12">
  <hr />
  </div>
 
  <div className="col-md-6">
  <EduForm handleSubmit={this.handleSubmit}/>
  </div>
  <div className="col-md-12">
  <hr />
  </div>
        </div>
        <div className="col-md-6">
        <div className=" text-center">
        <button type="button" className="btn btn-warning" onClick={this.reset.bind(this)}>Reset</button>
        <button type="button" className="btn btn-warning" onClick={this.print.bind(this)}>Print</button>
        </div>
        <Simple cv={this.state.cv} update={this.updateKey}/>
        </div>
      </div>
    );
  }
}

export default Create;
