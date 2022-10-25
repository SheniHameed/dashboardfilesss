import { Component } from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import AuthCompany from "./auth.company";

type Props = {};

type State = {
  redirect: string | null,
  CompanyName: string,
  address: string,
  NTNNumber: string,
  loading: boolean,
  message: string
};

export default class Companymodule extends Component<Props, State> {
  
  constructor(props: Props) {
    super(props);
    this.handleCompanymodule = this.handleCompanymodule.bind(this);

    this.state = {
      redirect: null,
      CompanyName: "",
      address: "",
      NTNNumber: "",
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
      CompanyName: Yup.string().required("This field is required!"),
      address: Yup.string().required("This field is required!"),
      NTNNumber: Yup.string().required("This field is required!"),
    });
  }

  handleCompanymodule(formValue: { CompanyName: string;  address: string; NTNNumber: string }) {
    const { CompanyName, address,NTNNumber } = formValue;

    this.setState({
      message: "",
      loading: true
    });
   
  

    AuthCompany.Companymodule(CompanyName, address,NTNNumber).then(
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
      CompanyName: "",
      address: "",
      NTNNumber:"",
    };

    return (<div className='c-page'>
		<div className="col-md-12">
        <div className="card card-container">
          
      

          <Formik
            initialValues={initialValues}
            validationSchema={this.validationSchema}
            onSubmit={this.handleCompanymodule}
          >
            <Form>
			<h1 className="c-heading">Cleint Form </h1>
                        
              <div className="c-group">
                <label htmlFor="Companyname">CompanyName</label>
                <Field name="CompanyName" type="text" className="form-control" />
                <ErrorMessage
                  name="CompanyName"
                  component="div"
                  className="alert alert-danger"
                />
              </div>
			  
              <div className="c-group">
                <label htmlFor="address">address</label>
                <Field name="address" type="address" className="form-control" />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="alert alert-danger"
                />
              </div>
              <div className="c-group">
                <label htmlFor="NTNNumber">NTNNumber</label>
                <Field name="NTNNumber" type="NTNNumber" className="form-control" />
                <ErrorMessage
                  name="NTNNumber"
                  component="div"
                  className="alert alert-danger"
                />
              </div>
              <div className="c-group">                
			 <button type="submit" className="btn btn-primary btn-block "  >                 
              Save
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



