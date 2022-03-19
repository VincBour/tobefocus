import React, { useState } from "react";
import "./App.css";
import { useMachine } from "@xstate/react";
import { pomodoroMachine } from "./machine/pomodoroMachine";
import { getMinutes } from "./utils/getMinutes";
import { getSeconds } from "./utils/getSeconds";
import {StartBtn} from "./components/buttons/startBtn";

function App() {
  const [state, send] = useMachine(pomodoroMachine, { devTools: true });

  console.log('state', state);

  const onNext = () => {
    send("NEXT");
  };
  const onChangeTimer = () => {
    send("CONTINUE");
  };
  const onReset = () => {
    send("RESET");
  };
  const onFocusChange = (value: number) => {
    send({ type: "FOCUS_UPDATE", value });
  }
  const onShortChange = (value: number) => {
    send({ type: "SHORT_UPDATE", value })
  }
  const onLongChange = (value: number) => {
    send({ type: "LONG_UPDATE", value })
  }
  console.log('STATE', state)
  console.log('STATE', state.context)
  return (
    <div className="App">
      <header className="App-header">
        <div className="parent">
          <div className="div1">
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
              <StartBtn />
            <div>{state.matches("focus") && <span>{state.context.focus}</span>}
            {state.matches("short") && <span>{state.context.short}</span>}
            {state.matches("long") && <span>{state.context.long}</span>}
            {state.matches("done") && <span>DONE</span>}</div>
            {/* <div>Elpased: {state.context.elapsed}</div> */}
            <div>{getMinutes(state.context.data.remaining)}:{getSeconds(state.context.data.remaining)}</div>
            </div>
            <div>
              <button onClick={onChangeTimer}>Paused</button>
              <button onClick={onChangeTimer}>Run</button>
              <button onClick={onReset}>Reset</button>
              <button onClick={onNext}>Next</button>
            </div>
          </div>
          <div className="div2">
            Context:
            <div>
              <span>
                Focus:
                <InputTimer actualValue={state.context.focus} onChange={onFocusChange} />
                ms
              </span>
            </div>
            <div>
              <span>Short : <InputTimer actualValue={state.context.short} onChange={onShortChange} /> ms</span>
            </div>
            <div>
              <span>Long: <InputTimer actualValue={state.context.long} onChange={onLongChange} /> ms</span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

const InputTimer: React.FC<{actualValue: number, onChange: (value: number) => void}>= ({ actualValue, onChange }) => {
  const [state, setState] = useState<number>(actualValue);
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = +event.currentTarget.value;
    setState(value);
    onChange(value);
  }
  return <input value={state} onChange={onInputChange}/>
}

export default App;
