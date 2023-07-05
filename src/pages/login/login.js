import React from 'react'
import styles from "./login.module.css";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Login = () => {
  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Вход аккаунта
      </Typography>
      <form >
        <TextField
          className={styles.field}
          type="email"
          label="E-Mail"
          fullWidth
        />
        <TextField
          type="password"
          className={styles.field}
          label="Пароль"
          fullWidth
        />
        <Button
          type="submit"
          size="large"
          variant="contained"
          fullWidth
        >
          Войти
        </Button>
      </form>
    </Paper>
  )
}

export default Login