import React from 'react';
// import { Button, Card, CardBody, CardTitle, CardText } from 'reactstrap';
// import { Link } from 'react-router-dom';

class Login extends React.Component {

    render() {
        
        return (
            // <div className="container" >
            //     <div className="row">
            //         <div className="col-12 col-md-6 offset-1">
            //             <Card>
            //                 <CardTitle>
            //                     SignIn/ SignUp
            //         </CardTitle>
            //                 <CardBody>
            //                     <CardText><b>Create your Account with Social Networks</b></CardText>
            //                     <Link to='/auth/google'> <Button color="danger"> Continue with Google+</Button> </Link>
            //                 </CardBody>

            //             </Card>

            //         </div>
            //     </div>
            // </div>
            <div>
                
                

                <form>
                    <div class='info'>
                        <h2>SignIn To Your Immeasurable Account </h2>
                    </div>
                <div className="imgcontainer">
                    <img src="/assets/images/unnamed.png" alt="" class="avatar"/>
                </div>

                <div className="container">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />
                        
                    <button type="submit">Login</button>
                    <label>
                    <input type="checkbox" checked="checked" name="remember" /> Remember me
                    </label>
                </div>

               
                </form>
            </div>
        );
    }

}
export default Login;  