import { useState } from 'react'
import './App.css'

function App() {
  const [currentSummon, setCurrentSummon] = useState(1)
  const [currentCharge, setCurrentChaege] = useState(1)

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

  const handleClickSummonCurrentPlus = () => {
    handleClickPlus(currentSummon, setCurrentSummon)
  }

  const handleClickSummonCurrentMinus = () => {
    handleClickMinus(currentSummon, setCurrentSummon)
  }

  const handleClickChargeCurrentPlus = () => {
    handleClickPlus(currentCharge, setCurrentChaege)
  }

  const handleClickChargeCurrentMinus = () => {
    handleClickMinus(currentCharge, setCurrentChaege)
  }

  const handleRefresh = () => {
    setCurrentSummon(1)
    setCurrentChaege(1)
  }

  return (
    <>
      <div className="grid-counter">
        {/* イジン召喚権 */}
        <div className="box-summon-current-background-upper">
          <div>
            <span>+</span>
          </div>
        </div>
        <div className="box-summon-current-background-lower">
          <div>
            <span>-</span>
          </div>
        </div>
        <div className="box-summon-current-value">
          <div>
            <span>{currentSummon}</span>
          </div>
        </div>
        <button className="box-summon-current-plus" onClick={handleClickSummonCurrentPlus}></button>
        <button className="box-summon-current-minus" onClick={handleClickSummonCurrentMinus}></button>
        {/* マリョク配置権 */}
        <div className="box-charge-current-background-upper">
          <div>
            <span>+</span>
          </div>
        </div>
        <div className="box-charge-current-background-lower">
          <div>
            <span>-</span>
          </div>
        </div>
        <div className="box-charge-current-value">
          <div>
            <span>{currentCharge}</span>
          </div>
        </div>
        <button className="box-charge-current-plus" onClick={handleClickChargeCurrentPlus}></button>
        <button className="box-charge-current-minus" onClick={handleClickChargeCurrentMinus}></button>
        {/* その他 */}
        <button className="box-reset" onClick={handleRefresh}>🔁</button>
      </div>
    </>
  )
}

export default App
