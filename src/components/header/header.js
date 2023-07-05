import React from "react";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <div className={styles.logo}>Logo</div>
          <div className={styles.buttons}>
            <Button color="error" variant="contained">
              Выйти
            </Button>
            <Button variant="contained">Войти</Button>
            <Button variant="contained">Создать аккаунт</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
