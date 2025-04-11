import { useState } from "react"
import { Link } from "react-router-dom"

import styles from "./App.module.scss"
import avatar from "./assets/avatar.png"

const App = () => {
  const [count, setCount] = useState(0)

  // 
  return (
    <div>
        <Link to="/about">About</Link>
        <Link to="/shop">Shop</Link>
          <h1 className={styles.heading}>{count}</h1>
          <button onClick={() => setCount(s => s + 1)} className={styles.button}>+</button>
          <button onClick={() => setCount(s => s - 1)} className={styles.button}>-</button>
          <img src={avatar} alt="" height={100} />
    </div>
  )
}
export default App