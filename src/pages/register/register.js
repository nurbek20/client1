import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import styles from "./register.module.css"

const Register = () => {
  return (
    <Paper classes={{root:styles.root}}>
      <Typography classes={{root:styles.title}} variant="h5">Создания аккаунта</Typography>
      <div className={styles.avatar}>
        <Avatar sx={{ width: 100, height: 100 }} />
      </div>
      <form>
        <TextField className={styles.field} type="text" label="FullName" variant="standard" fullWidth />
        <TextField className={styles.field} type="email" label="E-Mail" variant="standard" fullWidth />
        <TextField
        className={styles.field}
          type="password"
          label="Password"
          variant="standard"
          fullWidth
        />
        <Button type="submit" size="large" variant="contained" fullWidth>
          Зарегистрироваться
        </Button>
      </form>
    </Paper>
  );
};

export default Register;
