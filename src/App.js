import logo from "./logo.svg";
import "./App.css";
import { useState ,useEffect} from "react";
import { getDatabase, ref, push, set,onChildAdded } from "firebase/database";

function App() {
  const [name, setname] = useState("");
  const [chats, setChats] = useState([]);

  const [msg, Setmsg] = useState("");
  const db = getDatabase();
  const chatListRef = ref(db, "chats");

  useEffect(() => {
    onChildAdded(chatListRef, (data) => {
      setChats(chats=>[...chats,data.val()])
    });
  }, [])

  const sendChat = () => {
   
    const chatRef = push(chatListRef);
    set(chatRef, {
      name,
      message: msg,
    });
    // const c = [...chats];
    // c.push({
    //   name,message:msg
    // });
    // setChats(c);
    Setmsg("");
  };
  return (
    <div>
      {name ? null : (
        <div>
          <input
            type="text"
            placeholder="enter your name"
            onInput={(e) => setname(e.target.value)}
            value={name}
          ></input>
        </div>
      )}

      {name ? (
        <div>
          <h1>user :{name}</h1>
          <div className="chat-container">
            {chats.map((ele) => {
              return (
                <div className={`container ${ele.name === name ? "me" : ""}`}>
                  <p className="chatbox">
                    <strong>{ele.name}</strong>
                    <span>{ele.message}</span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}

      <div className="btm">
        <input
          type="text"
          placeholder="enter your chat"
          onChange={(e) => Setmsg(e.target.value)}
          value={msg}
        ></input>
        <button onClick={(e) => sendChat()}>Submit</button>
      </div>
    </div>
  );
}

export default App;
