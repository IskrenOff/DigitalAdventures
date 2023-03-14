import { useFormik } from 'formik';
import { Grid, Tabs, Tab, TextField, Button } from '@mui/material';
import './Register.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { registerSchema } from '../../common/userSchemas';

const Register = ({ setDisplayMsg }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      // getUserByUsername(values.userName)
      //   .then((snapshot) => {
      //     if (snapshot.exists()) {
      //       setDisplayMsg({ opn: true, msg: 'Username already exists!' });
      //       return;
      //     }

      //     return registerUser(values.email, values.password)
      //       .then((u) => {
      //         createUserUsername(values.userName, u.user.uid, u.user.email, values.phoneNumber)
      //           .then(() => {
      //             setDisplayMsg({ opn: true, msg: `Account is created successfully!` });
      //             navigate('/');
      //           })
      //           .catch((error) => {
      //             console.log(error);
      //             setDisplayMsg({ opn: true, msg: `Oops something went wrong!` });
      //             return;
      //           });
      //       })
      //       .catch((e) => {
      //         if (e.message.includes(`email-already-in-use`)) {
      //           setDisplayMsg({
      //             opn: true,
      //             msg: `Email ${values.email} has already been registered!`,
      //           });
      //           return;
      //         }
      //       });
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //     setDisplayMsg({ opn: true, msg: `Oops something went wrong!` });
      //   });
    },
  });

  return (
      <div className="auth-container">
        <form onSubmit={formik.handleSubmit}>
          <Grid
            container
            spacing={4}
            direction="column"
            alignItems="center"
            justifyContent="center" 
          >
            <Grid item xs={3} className="header-auth">
              <Tabs value={1}>
                <NavLink to={'/login'}>
                  <Tab label="Login" />
                </NavLink>

                <NavLink to={'/register'}>
                  <Tab label="Register" />
                </NavLink>
              </Tabs>
            </Grid>

            <Grid item xs={1}>
              <h4>Username</h4>
              <TextField
                color="primary"
                className="register-input"
                id="userName"
                name="userName"
                // label="Username"
                value={formik.values.userName}
                onChange={formik.handleChange}
                error={formik.touched.userName && Boolean(formik.errors.userName)}
              />
              <div>{formik.touched.userName ? formik.errors.userName : ''}</div>
            </Grid>

            <Grid item xs={1}>
              <h4>Email</h4>
              <TextField
                className="register-input"
                id="email"
                name="email"
                // label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
              />
              <div>{formik.touched.email ? formik.errors.email : ''}</div>
            </Grid>

            <Grid item xs={1}>
              <h4>Password</h4>
              <TextField
                className="register-input"
                id="password"
                name="password"
                // label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
              />
              <div>{formik.touched.password ? formik.errors.password : ''}</div>
            </Grid>

            <Grid item xs={1}>
              <h4>Confirm password</h4>
              <TextField
                className="register-input"
                id="repeatPassword"
                name="repeatPassword"
                //label="Confirm Password"
                type="password"
                value={formik.values.repeatPassword}
                onChange={formik.handleChange}
                error={formik.touched.repeatPassword && Boolean(formik.errors.repeatPassword)}
              />
              <div>
                {formik.touched.repeatPassword ? formik.errors.repeatPassword : ''}
              </div>
            </Grid>

            <Grid item xs={1}>
              <Button type="submit">Register</Button>
            </Grid>
            <Grid item xs={1}>
              <NavLink to={'/login'}>Already have an account?</NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
  );
};

export default Register;
