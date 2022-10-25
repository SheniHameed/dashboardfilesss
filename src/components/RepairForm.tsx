import { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Authrepair from "./auth.repair";



type Props = {};

type State = {
  redirect: string | null, 
  CNIC:String,
  CustomerName:String,
  MobileNumber:String,
  Product:String,
  Brand:String,
  Model:String,
  IMEI:String,
  Repaircenter:String,
  Advanceamount:String,
  loading: boolean,
  message: string
};

export default class Repairform extends Component<Props, State> {
  
  constructor(props: Props) {
    super(props);
    this.handleRepairform = this.handleRepairform.bind(this);

    this.state = {
      redirect: null,
      CNIC:"",
      CustomerName:"",
      MobileNumber:"",
      Product:"",
      Brand:"",
      Model:"",
      IMEI:"",
      Repaircenter:"",
      Advanceamount:"",
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
      
      CNIC:Yup.string().required("This field is required!"),
CustomerName:Yup.string().required("This field is required!"),
MobileNumber:Yup.string().required("This field is required!"),
Product:Yup.string().required("This field is required!"),
Brand:Yup.string().required("This field is required!"),
Model:Yup.string().required("This field is required!"),
IMEI:Yup.string().required("This field is required!"),
Repaircenter:Yup.string().required("This field is required!"),
Advanceamount:Yup.string().required("This field is required!"),
    });
  }

  handleRepairform(formValue: {  
    CNIC:String,
    CustomerName:String,
    MobileNumber:String,
    Product:String,
    Brand:String,
    Model:String,
    IMEI:String,
    Repaircenter:String,
    Advanceamount:String, }) {
    const {  CNIC,
    CustomerName,
    MobileNumber,
    Product,
    Brand,
    Model,
    IMEI,
    Repaircenter,
    Advanceamount,} = formValue;

    this.setState({
      message: "",
      loading: true
    });


    Authrepair.Repairform( 
        CNIC,
        CustomerName,
        MobileNumber,
        Product,
        Brand,
        Model,
        IMEI,
        Repaircenter,
        Advanceamount,).then(
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
        CNIC:"",
  CustomerName:"",
  MobileNumber:"",
  Product:"",
  Brand:"",
  Model:"",
  IMEI:"",
  Repaircenter:"",
  Advanceamount:"",
    };

    return (<div className='c-page'>
		<div className="col-md-12">
        <div className="card card-container">
          
      

          <Formik
            initialValues={initialValues}
           // validationSchema={this.validationSchema}
            onSubmit={this.handleRepairform}
          >
            <Form>
			<h1 className="main-heading">Cleint INFO</h1>
                        
              <div className="f-group">
                <label htmlFor="CustomrName">CustomerName</label>
                <Field name="FullName" type="text" className="form-control" />
                <ErrorMessage
                  name="FullName"
                  component="div"
                  className="alert alert-danger"
                />
              </div>
			  
              <div className="form-group">
                <label htmlFor="CNIC">CNIC</label>
                <Field name="CNIC" type="CNIC" className="form-control" />
                <ErrorMessage
                  name="CNIC"
                  component="div"
                  className="alert alert-danger"
                />
              </div>
              <div className="form-group">
                <label htmlFor="MobileNumber">MobileNumber</label>
                <Field name="MobileNumber" type="MobileNumber" className="form-control" />
                <ErrorMessage
                  name="MobileNumber"
                  component="div"
                  className="alert alert-danger"
                />
                
              </div>
              <div className="form-group">
                <label htmlFor="UserName">Product</label>
                <Field name="Product" type="Product" className="form-control" />
                <ErrorMessage
                  name="Product"
                  component="div"
                  className="alert alert-danger"
                />
                
              </div>
              <h1 className="main-heading">Repair Form Details</h1>
              <div className="form-group">
                <label htmlFor="Brand">Brand</label>
                <Field name="Brand" type="Brand" className="form-control" />
                <ErrorMessage
                  name="Brand"
                  component="div"
                  className="alert alert-danger"
                />
                
              </div>
              <div className="form-group">
                <label htmlFor="Model">Model</label>
                <Field name="Model" type=" Model" className="form-control" />
                <ErrorMessage
                  name="Model"
                  component="div"
                  className="alert alert-danger"
                />
                
              </div>
              <div className="form-group">
                <label htmlFor=" IMEI">IMEI</label>
                <Field name=" IMEI" type=" IMEI" className="form-control" />
                <ErrorMessage
                  name=" IMEI"
                  component="div"
                  className="alert alert-danger"
                /></div>
                 <div className="form-group">
                <label htmlFor=" complaint">COMPLAINT</label>
                <Field name=" complaint" type=" complaint" className="form-control" />
                <ErrorMessage
                  name=" complaint"
                  component="div"
                  className="alert alert-danger"
                />
              </div>
              <h1 className="main-heading">3rdform Details</h1>
              <div className="form-group">
                <label htmlFor=" IMEI">Repaircenter</label>
                <Field name=" Repaircenter" type=" Repaircenter" className="form-control" />
                <ErrorMessage
                  name=" Repaircenter"
                  component="div"
                  className="alert alert-danger"
                /></div>
                 <div className="Advanceamount">
                <label htmlFor=" Advanceamount">Advanceamount</label>
                <Field name="Advanceamount" type="Advanceamount" className="form-control" />
                <ErrorMessage
                  name="Advanceamount"
                  component="div"
                  className="alert alert-danger"
                />
              </div>
              <div className="form-group">                
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
