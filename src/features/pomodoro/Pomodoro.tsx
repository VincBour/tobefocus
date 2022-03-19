import { useActor, useMachine } from "@xstate/react";
import {
  NextBtn,
  PauseBtn,
  StartBtn,
  TitleBtn,
} from "../../components/buttons";
import { Timer } from "../../components/timer/Timer";
import { pomodoroMachine } from "../../machine/pomodoroMachine";
import { getMinutes } from "../../utils/getMinutes";
import { getSeconds } from "../../utils/getSeconds";

export const Pomodoro = () => {
  const [state, send] = useMachine(pomodoroMachine);
  const onNext = () => {
    send("NEXT");
  };
  const onStartPause = () => {
    send("CONTINUE");
  };
  const [timerState] = useActor(state.children.timer);
  console.log("test", timerState);
  console.log("test", timerState.matches("running"));
  return (
    <div className="grid grid-cols-1 grid-rows-5 place-items-center">
      <div className="w-auto flex items-center justify-center my-4 mt-8">
        <TitleBtn isSelected={state.matches("focus")} label="Pomodoro" />
        <TitleBtn isSelected={state.matches("short")} label="Short" />
        <TitleBtn isSelected={state.matches("long")} label="Long" />
      </div>
      <div className="flex items-center gap-6 justify-center">
        <Timer
          minutes={getMinutes(state.context.data.remaining)}
          secondes={getSeconds(state.context.data.remaining)}
        />
        <NextBtn onClick={onNext} />
      </div>
      <div className="flex w-auto gap-5">
        {timerState.matches("running") ? (
          <PauseBtn onClick={onStartPause} />
        ) : (
          <StartBtn onClick={onStartPause} />
        )}
        <TitleBtn
          isSelected={false}
          label={`Time to focus #${state.context.actualLoop}`}
        />
      </div>
    </div>
  );
};
