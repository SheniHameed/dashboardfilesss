import { Component } from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import AuthService from "./auth.service";

type Props = {};

type State = {
  redirect: string | null,
  Email: string,
  Password: string,
  loading: boolean,
  message: string
};

export default class Login extends Component<Props, State> {
  
  constructor(props: Props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);

    this.state = {
      redirect: null,
      Email: "",
      Password: "",
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

  validationSchema() {
    return Yup.object().shape({
      Email: Yup.string().required("This field is required!"),
      Password: Yup.string().required("This field is required!"),
    });
  }

  handleLogin(formValue: { Email: string; Password: string }) {
    const { Email, Password } = formValue;

    this.setState({
      message: "",
      loading: true
    });


    AuthService.login(Email, Password).then(
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
      Email: "",
      Password: "",
    };

    return (<div className='full-page'>
		<div className="col-md-12">
        <div className="card card-container">
          <img
            src="/pics/logo.png"
            alt="-img"
            className="profile-img-card"
          />
      

          <Formik
            initialValues={initialValues}
            validationSchema={this.validationSchema}
            onSubmit={this.handleLogin}
          >
            <Form>
			<h1 className="main-heading">SIGN-IN </h1>
                        <h2 className="head">Welcome to Mobile Repair System</h2><br></br>
              <div className="form-group">
                <label htmlFor="Email">Email</label>
                <Field name="Email" type="text" className="form-control" />
                <ErrorMessage
                  name="Email"
                  component="div"
                  className="alert alert-danger"
                />
              </div>
			  
              <div className="form-group">
                <label htmlFor="Password">Password</label>
                <Field name="Password" type="Password" className="form-control" />
                <ErrorMessage
                  name="Password"
                  component="div"
                  className="alert alert-danger"
                />
              </div>
			 
              <div className="form-group">                
			 <button type="submit" className="btn btn-primary btn-block "  >                 
              Login
                </button>
                
                <p className="message">Dont have an account? contact portal administor</p></div>            

              
            </Form>
          </Formik>
        </div>
      </div>
	  </div>
    );
  }
}



