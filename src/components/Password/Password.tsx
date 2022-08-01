import React, { useEffect } from "react";
import { useState } from "react";
import { PasswordProps } from "./types";
import styles from "./Password.module.css";

const Password = ({ label, repeatLabel, setNotMatch }: PasswordProps) => {
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPassword(e.target.value);
  };

  const regExOk = password.match(/^(?=.*[0-9])(?=.*[A-Z]).{8,24}$/);
  const samePass = password === repeatPassword;

  useEffect(() => {
    if (!samePass || password === "" || !regExOk) {
      setNotMatch(true);
    } else {
      setNotMatch(false);
    }
  }, [password, regExOk, repeatPassword, samePass, setNotMatch]);

  return (
    <form className="flex max-w-2xl mt-5">
      <div>
        <label htmlFor="password" className="font-bold">
          {label}
        </label>
        <div className="border-solid border-gray-400 border-2 rounded-md hover:none">
          <input
            autoComplete="new-password"
            type="password"
            name=""
            id="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <span
          className={
            regExOk ? styles["ok-password-level"] : styles["bad-password-level"]
          }
        ></span>
      </div>
      <div className="mx-10">
        <label htmlFor="repeatPassword" className="font-bold">
          {repeatLabel}
        </label>
        <div className="border-solid border-gray-400 border-2 rounded-md ">
          <input
            type="password"
            name=""
            id="repeatPassword"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
        </div>
        <p className={styles["alert"]}>
          {!samePass && "La contraseña no coincide"}
        </p>
      </div>
    </form>
  );
};

export { Password };
