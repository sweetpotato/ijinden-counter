import { useState } from 'react'
import './App.css'

function App() {
  const [summon, setSummon] = useState(1)
  const [charge, setCharge] = useState(1)
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
    handleClickPlus(charge, setCharge)
  }

  const handleClickChargeMinus = () => {
    handleClickMinus(charge, setCharge)
  }

  const handleRefresh = () => {
    setSummon(1)
    setCharge(1)
  }

  const handleToggle = () => {
    setPulledUp(!pulledUp)
  }

  return (
    <>
      <div className={`grid-counter ${pulledUp ? 'pulled-up' : 'full-screen'}`}>
        {/* イジン召喚権 */}
        <button className="box-summon-plus box-button" onClick={handleClickSummonPlus}></button>
        <button className="box-summon-minus box-button" onClick={handleClickSummonMinus}></button>
        <div className="box-summon-background-upper box-upper">
          <div>+</div>
          <div>イジン召喚権</div>
        </div>
        <div className="box-summon-background-lower box-lower">
          <div>-</div>
        </div>
        <div className="box-summon-value box-value">
          <div>
            {/* vertical-align のために span が必要 */}
            <span>{summon}</span>
          </div>
        </div>
        {/* マリョク配置権 */}
        <button className="box-charge-plus box-button" onClick={handleClickChargePlus}></button>
        <button className="box-charge-minus box-button" onClick={handleClickChargeMinus}></button>
        <div className="box-charge-background-upper box-upper">
          <div>+</div>
          <div>マリョク配置権</div>
        </div>
        <div className="box-charge-background-lower box-lower">
          <div>-</div>
        </div>
        <div className="box-charge-value box-value">
          <div>
            {/* vertical-align のために span が必要 */}
            <span>{charge}</span>
          </div>
        </div>
        {/* その他 */}
        <button className="box-toggle box-side" onClick={handleToggle}>{pulledUp ? '⬇️' : '⬆️'}</button>
        <button className="box-reset box-side" onClick={handleRefresh}>🔁</button>
      </div>
    </>
  )
}

export default App
