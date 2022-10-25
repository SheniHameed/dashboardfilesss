import { Component } from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import AuthUser from "./auth.user";

type Props = {};

type State = {
  redirect: string | null,
  FullName: string,
  UserName:string,
  Email:string, 
  Permission:string,
  MobileNumber:string,
  address: string, 
  CreatedBY:string,
  CompanyID:string,
  Password:string,
  loading: boolean,
  message: string
};

export default class Usermodule extends Component<Props, State> {
  
  constructor(props: Props) {
    super(props);
    this.handleUsermodule = this.handleUsermodule.bind(this);
   
    this.state = {
      redirect: null,
     
      FullName:"",
      UserName:"",
      Email:"", 
      Permission:"",
      MobileNumber:"",
      address:"", 
      CreatedBY:"",
      CompanyID:"",
      Password:"",
      loading: false,
      message: ""
    };
  }

  componentDidMount() {
   // const currentUser = AuthService.getCurrentUser();

    // if (currentUser) {
    //   this.setState({ redirect: ''});
    // };
  }

  componentWillUnmount() {
    window.location.reload();
  }



  handleUsermodule(formValue: {  FullName: string,
    UserName:string,
    Email:string, 
    Permission:string,
    MobileNumber:string,
    address: string, 
    CreatedBY:string,
    CompanyID:string,
    Password:string,   }) {
       
    const { 
      FullName,
      UserName,
      Email, 
      Permission,
      MobileNumber,
      address, 
      CreatedBY,
      CompanyID,
      Password,
       } = formValue;

    this.setState({
      message: "",
      loading: true
    });
   
   
        

    AuthUser.Usermodule(
      FullName,
        UserName,
        Email,        
        Permission,
        MobileNumber,
        address,
        CompanyID,
        CreatedBY,
        Password).then(
      () => {
        // this.setState({
        //   redirect: '/Dashboard'
        // });
      },
      error => {
        
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        this.setState({
          loading: false,
          message: resMessage
        });
      }
    );
  }

  render() {
    // if (this.state.redirect) {
    //   return <Navigate to={this.state.redirect} />
    // }


    const initialValues = {
        
      FullName:"",
      UserName:"",
      Email:"", 
      Permission:"",
      MobileNumber:"",
      address:"", 
      CreatedBY:"",
      CompanyID:"",
      Password:"",
    };

    return (<div className='u-page'>
		<div className="col-md-12">
        <div className="card card-container">
                

          <Formik
            initialValues={initialValues}
           
            onSubmit={this.handleUsermodule}
          >
            <Form>
			<h1 className="u-heading">Create New</h1>
                        
              <div className="u-group">
                <label htmlFor="UserName">UserName</label>
                <Field name="UserName" type="text" className="form-control" />
                <ErrorMessage
                  name="UserName"
                  component="div"
                  className="alert alert-danger"
                />
              </div>
			  
              <div className="u-group">
                <label htmlFor="Email">Email</label>
                <Field name="Email" type="Email" className="form-control" />
                <ErrorMessage
                  name="Email"
                  component="div"
                  className="alert alert-danger"
                />
              </div>
              <div className="u-group">
                <label htmlFor="address">address</label>
                <Field name="address" type="address" className="form-control" />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="alert alert-danger"
                />
              </div>
              <div className="u-group">
                <label htmlFor="MobileNumber">MobileNumber</label>
                <Field name="MobileNumber" type="MobileNumber" className="form-control" />
                <ErrorMessage
                  name="MobileNumber"
                  component="div"
                  className="alert alert-danger"
                />
              </div>
              <div className="u-group">
                <label htmlFor="RepairCenter">RepairCenter</label>
                <Field name="RepairCenter" type="RepairCenter" className="form-control" />
                <ErrorMessage
                  name="RepairCenter"
                  component="div"
                  className="alert alert-danger"
                />
              </div>
              <div className="u-group">
                <label htmlFor="Permision">Permission</label>
                <Field name="Permision" type="Permision" className="form-control" />
                <ErrorMessage
                  name="Permision"
                  component="div"
                  className="alert alert-danger"
                />
              </div>
              <div className="u-group">               
			 <button type="submit" className="btn btn-primary btn-block  "  >                 
              Submit
                </button>                
                </div>            

              
            </Form>
          </Formik>
        </div>
      </div>
	  </div>
    );
  }
}



