export default function Authenticate({ token, message, setMessage }) {
  async function Auth() {
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const parsedResponse = await response.json();
      setMessage(parsedResponse.message);
    } catch (err) {
      console.error(err);
      setMessage(null);
    }
  }

  return (
    <article>
      <button onClick={() => Auth()}>Authenticate</button>
      <article>{token ? <p>{message}</p> : <p></p>}</article>
    </article>
  );
}
