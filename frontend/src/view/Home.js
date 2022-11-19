import React, { useEffect, useState } from "react";
import { Container, Grid, Card, TextField, Stack, Button } from "@mui/material";
import "./index.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import { useSelector } from "react-redux";
import {useDispatch} from "react-redux";
import { loginAction } from "../redux/auth/actions";
const styles = { width: "100%", height: "100vh" };
const ViewComponent = (props) => {
  const navigate = useNavigate();
  const dispatch= useDispatch();
  const {token,isFetching} = useSelector((state)=> state?.auth);
  const [Password,setPassword] = useState();
  const [email,setEmail]=useState();
  const login =()=>{
   loginAction({email,Password}) (dispatch) ;
  }
  useEffect(()=>{
    
    if(token){
      navigate("/dashboard");
    }
  },[token])
  
  return (
    <Container sx={styles}>
      <Grid
        sx={styles}
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item sm={3} xs={0}></Grid>
        <Grid item sm={6} xs={12}>
          <Card className="signin_container">
            <Stack spacing={2} alignItems="center" justifyContent="center">
              <img src={logo} alt="logo" />
              <label>Signin Shop Managment</label>

              <TextField
                fullWidth
                id="filled-basic"
                label="Email"
                variant="filled"
              />
              <TextField
                fullWidth
                id="filled-basic"
                label="Password"
                variant="filled"
              />
              <Button
                fullWidth
                variant="contained"
                onClick={() => {
                  navigate("/dashboard");
                }}
              >
                Signin
              </Button>
            </Stack>
          </Card>
        </Grid>
        <Grid item sm={3} xs={0}></Grid>
      </Grid>
    </Container>
  );
};

export default ViewComponent;
