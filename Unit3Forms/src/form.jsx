import { useState } from "react";

export default function Form({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function submit(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        }
      );
      const parsedResponse = await response.json();
      setToken(parsedResponse.token);
      // console.log(parsedResponse.token);
    } catch (err) {
      console.error(err);
      setToken(null);
    }
  }
  return (
    <form>
      <label>
        Username
        <input
          type="text"
          name="userName"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <label>
        Password
        <input
          type="text"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <button onClick={(event) => submit(event)}>Submit</button>
    </form>
  );
}
