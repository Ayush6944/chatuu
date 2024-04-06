import React,{useState} from 'react'
import {Avatar, Button, Container,Paper, Stack, TextField, Typography} from "@mui/material"

export default function Login() {

const [isLogin,setIsLogin]=useState(true)
const toggleLogin =()=>setIsLogin((prev) => !prev);

  return (
    
    // <h1>hello</h1>
    <Container component ="main" maxWidth="xs"
    sx={{
      height:'100vh',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      // backgroundColor:'#f5f5f5'
      }}
    >

      <Paper
       elevation={3}
       sx={{
        padding:5,
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
       }}
       >
        {isLogin? (
        <>
        <Typography variant='h5'>Login</Typography>
        <form style={{
          width:'100%',
          marginTop:'1rem'

        }} >
          <TextField
          required
          fullWidth
          label="Username"
          name="username"
          margin='normal'
          variant='outlined'
          />
          <TextField
          required
          fullWidth
          label="Password"
          name="password"
          type='password'
          margin='normal'
          variant='outlined'
          />
          <TextField
          required
          fullWidth
          label="E-Mail"
          name="E-mail"
          type='Email'
          margin='normal'
          variant='outlined'
          />

          <Button variant='contained'  type='submit' color='primary' fullWidth>Login</Button>

          <Typography fullWidth padding={1}>Did not have account,creat a free accout.</Typography>
          <Button variant='text' 
          sx={{marginTop:'1rem'}}
          color='secondary'  
          onClick={toggleLogin} 
          fullWidth>Register</Button>



        </form>
        
        </>
        
        ) : (
        <>
        <Typography variant='h5'>Signup form</Typography>
        <form style={{
          width:'100%',
          marginTop:'1rem'

        }} >
          <Stack position={'relative'}
          width={'10rem'} margin={'auto'}
          >
            <Avatar  
            sx={{
              width:'10rem',
              height:'10rem',
              objectFit:'contain',

            }}
            />



          </Stack>



          <TextField
          required
          fullWidth
          label="Fullname"
          name="Fullname"
          margin='normal'
          variant='outlined'
          />
          <TextField
          required
          fullWidth
          label="Password"
          name="password"
          type='password'
          margin='normal'
          variant='outlined'
          />
          <TextField
          required
          fullWidth
          label="E-Mail"
          name="E-mail"
          type='Email'
          margin='normal'
          variant='outlined'
          />
          <TextField
          required
          fullWidth
          label="Username"
          name="username"
          type='text'
          margin='normal'
          variant='outlined'
          />

          <Button variant='contained' 
          m={'1 rem'} 
          sx={{marginTop:'1rem'}}
          type='submit' color='primary' 
          fullWidth>REGISTER</Button>


        <Typography textAlign={'center'} sx={{marginTop:'1rem'}}>
          Already have account.</Typography>


        <Button 
        variant='text'
        fullWidth 
        // onclick={toggleLogin} 
        color='success'  
        sx={{marginTop:'0.5rem'}} 
        onClick={toggleLogin}>Login</Button>
        
        </form>
        
        </>
        
        )}
      </Paper>


    </Container>
    
  )
  
}
