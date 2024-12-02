import { useState } from 'react'
import './App.css'

function App() {
  const [currentSummon, setCurrentSummon] = useState(1)
  const [currentCharge, setCurrentChaege] = useState(1)
  const [maxSummon, setMaxSummon] = useState(1)
  const [maxCharge, setMaxCharge] = useState(1)

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

  const handleClickSummonMaxPlus = () => {
    handleClickPlus(maxSummon, setMaxSummon)
  }

  const handleClickSummonMaxMinus = () => {
    handleClickMinus(maxSummon, setMaxSummon)
  }

  const handleClickChargeCurrentPlus = () => {
    handleClickPlus(currentCharge, setCurrentChaege)
  }

  const handleClickChargeCurrentMinus = () => {
    handleClickMinus(currentCharge, setCurrentChaege)
  }

  const handleClickChargeMaxPlus = () => {
    handleClickPlus(maxCharge, setMaxCharge)
  }

  const handleClickChargeMaxMinus = () => {
    handleClickMinus(maxCharge, setMaxCharge)
  }

  const handleRefresh = () => {
    setCurrentSummon(maxSummon)
    setCurrentChaege(maxCharge)
  }

  const handleDispose = () => {
    setCurrentSummon(1)
    setMaxSummon(1)
    setCurrentChaege(1)
    setMaxCharge(1)
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
        <div className="box-summon-max-background-upper">
          <div>
          <span>+</span>
          </div>
        </div>
        <div className="box-summon-max-background-lower">
          <div>
            <span>-</span>
          </div>
        </div>
        <div className="box-summon-max-value">
          <div>
            <span>/{maxSummon}</span>
          </div>
        </div>
        <button className="box-summon-max-plus" onClick={handleClickSummonMaxPlus}></button>
        <button className="box-summon-max-minus" onClick={handleClickSummonMaxMinus}></button>
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
        <div className="box-charge-max-background-upper">
          <div>
            <span>+</span>
          </div>
        </div>
        <div className="box-charge-max-background-lower">
          <div>
            <span>-</span>
          </div>
        </div>
        <div className="box-charge-max-value">
          <div>
            <span>/{maxCharge}</span>
          </div>
        </div>
        <button className="box-charge-max-plus" onClick={handleClickChargeMaxPlus}></button>
        <button className="box-charge-max-minus" onClick={handleClickChargeMaxMinus}></button>
        {/* その他 */}
        <button className="box-reset" onClick={handleRefresh}>🔁</button>
        <button className="box-dispose" onClick={handleDispose}>🗑️</button>
      </div>
    </>
  )
}

export default App
