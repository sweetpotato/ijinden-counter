import { useState } from 'react'
import './App.css'

function App() {
  const [summon, setSummon] = useState(1)
  const [charge, setChaege] = useState(1)
  const [pulledUp, setPulledUp] = useState(false)

  const handleClickPlus = (value, setValue) => {
    if (value >= 99) {
      return
    }
    setValue(value + 1)
  }

  const handleClickMinus = (value, setValue) => {
    if (value <= 0) {
      return
    }
    setValue(value - 1)
  }

  const handleClickSummonPlus = () => {
    handleClickPlus(summon, setSummon)
  }

  const handleClickSummonMinus = () => {
    handleClickMinus(summon, setSummon)
  }

  const handleClickChargePlus = () => {
    handleClickPlus(charge, setChaege)
  }

  const handleClickChargeMinus = () => {
    handleClickMinus(charge, setChaege)
  }

  const handleRefresh = () => {
    setSummon(1)
    setChaege(1)
  }

  const handleToggle = () => {
    setPulledUp(!pulledUp)
  }

  return (
    <>
      <div className={`grid-counter ${pulledUp ? 'pulled-up' : 'full-screen'}`}>
        {/* イジン召喚権 */}
        <div className="box-summon-background-upper">
          <div>
            <span>+</span>
          </div>
        </div>
        <div className="box-summon-background-lower">
          <div>
            <span>-</span>
          </div>
        </div>
        <div className="box-summon-value">
          <div>
            <span>{summon}</span>
          </div>
        </div>
        <button className="box-summon-plus" onClick={handleClickSummonPlus}></button>
        <button className="box-summon-minus" onClick={handleClickSummonMinus}></button>
        {/* マリョク配置権 */}
        <div className="box-charge-background-upper">
          <div>
            <span>+</span>
          </div>
        </div>
        <div className="box-charge-background-lower">
          <div>
            <span>-</span>
          </div>
        </div>
        <div className="box-charge-value">
          <div>
            <span>{charge}</span>
          </div>
        </div>
        <button className="box-charge-plus" onClick={handleClickChargePlus}></button>
        <button className="box-charge-minus" onClick={handleClickChargeMinus}></button>
        {/* その他 */}
        <button className="box-toggle" onClick={handleToggle}>{pulledUp ? '⬇️' : '⬆️'}</button>
        <button className="box-reset" onClick={handleRefresh}>🔁</button>
      </div>
    </>
  )
}

export default App
