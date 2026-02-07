import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow w-80">
        <input className="input" placeholder="Email" onChange={e=>setEmail(e.target.value)} />
        <input className="input mt-2" type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
        <button className="btn mt-4 w-full" onClick={()=>login(email,password)}>Login</button>
      </div>
    </div>
  );
}
