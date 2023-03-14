import { useFormik } from 'formik';
import { Grid, Tabs, Tab, TextField, Button } from '@mui/material';
import './Login.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { loginSchema } from '../../common/userSchemas';


const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log(values.email, values.password)
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
            style={{ minHeight: '60vh', border: '1px solid' }}
          >
            <Grid item xs={12} className="header-auth">
              <Tabs value={0}>
                <NavLink to={'/login'}>
                  <Tab label="Login" />
                </NavLink>

                <NavLink to={'/register'}>
                  <Tab label="Register" />
                </NavLink>
              </Tabs>
            </Grid>

            <Grid item xs={1}>
              <h4>Email</h4>
              <TextField
                className="login-input"
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
              />
              <div>{formik.touched.email ? formik.errors.email : ''}</div>
            </Grid>

            <Grid item xs={1}>
              <h4>Password</h4>
              <TextField
                className="login-input"
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
              />
              <div>{formik.touched.password ? formik.errors.password : ''}</div>
            </Grid>

            <Grid item xs={1}>
              <Button color="primary" variant="contained" type="submit">
                Login
              </Button>
            </Grid>

            <Grid item xs={1}>
              <NavLink to={'/reset'}>Forgot your password?</NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
  );
};

export default Login;
