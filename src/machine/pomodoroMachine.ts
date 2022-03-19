import {
  assign,
  createMachine,
  send,
} from "xstate";
import { TimerEvent, timerMachine } from "./timerMachine";

interface PomodoroContext {
  focus: number;
  short: number;
  long: number;
  loop: number;
  actualLoop: number;
  data: {
    elapsed: number;
    remaining: number;
  };
}

type PomodoroEvent =
  | { type: "FOCUS_UPDATE"; value: number }
  | { type: "NEXT" }
  | { type: "UPDATE_TIMER"; value: { elapsed: number; remaining: number } }
  | { type: "LONG_UPDATE"; value: number }
  | { type: "SHORT_UPDATE"; value: number }
  | { type: "RESET"; value: number } | TimerEvent;

export const pomodoroMachine = createMachine<PomodoroContext, PomodoroEvent>(
  {
    id: "pomodoro",
    initial: "focus",
    context: {
      focus: 1500,
      short: 300,
      long: 900,
      loop: 4,
      actualLoop: 1,
      data: {
        elapsed: 0,
        remaining: 0,
      },
    },
    states: {
      focus: {
        entry: "focusAlert",
        on: {
          NEXT: [
            {
              target: "long",
              cond: (context) => context.loop === context.actualLoop,
            },
            {
              target: "short",
              actions: "loopIncrease",
            },            
          ],
        },
        invoke: [
          {
            id: "reset",
            src: (context) => (cb) => {
              cb({ type: "RESET", value: context.focus });
            },
          },
          {
            id: "timer",
            src: timerMachine,
            data: (context, _) => ({
              duration: context.focus,
              elapsed: 0,
              remaining: context.focus,
              interval: 1,
            }),
          },
        ],
      },
      short: {
        entry: ["shortAlert"],
        on: {
          NEXT: [{ target: "focus" }],
        },
        invoke: [
          {
            src: (context) => (cb) => {
              cb({ type: "RESET", value: context.short });
            },
          },
          {
            id: "timer",
            src: timerMachine,
            data: (context, _) => ({
              duration: context.short,
              elapsed: 0,
              remaining: context.short,
              interval: 1,
            }),
          },
        ],
      },
      long: {
        entry: "longAlert",
        invoke: [
          {
            src: (context) => (cb) => {
              cb({ type: "RESET", value: context.long });
            },
          },
          {
            id: "timer",
            src: timerMachine,
            data: (context, _) => ({
              duration: context.long,
              elapsed: 0,
              remaining: context.long,
              interval: 1,
            }),
          },
        ],
        on: {
          NEXT: { target: "done", actions: assign({
            actualLoop: (context, event) => 0
          }) },
        },
      },
      done: {
        entry: "doneAlert",
        on: {
          NEXT: { target: "focus" },
        },
      },
    },
    on: {
      CONTINUE: {
        actions: send({ type: "CONTINUE" }, { to: "timer" }),
      },
      UPDATE_TIMER: {
        actions: assign({
          data: (_, event) => {
            return {
              elapsed: event.value.elapsed,
              remaining: event.value.remaining,
            };
          },
        }),
      },
      FOCUS_UPDATE: {
        actions: assign({
          focus: (_, event) => event.value,
        }),
      },
      SHORT_UPDATE: {
        actions: assign({
          short: (_, event) => event.value,
        }),
      },
      LONG_UPDATE: {
        actions: assign({
          long: (_, event) => event.value,
        }),
      },
      RESET: {
        actions: assign({
          data: (_, event) => {
            return {
              elapsed: 0,
              remaining: event.value,
            };
          },
        }),
      },
    },
  },
  {
    actions: {
      loopIncrease: assign({
        actualLoop: (context, event) => context.actualLoop + 1
      }),
      focusAlert: (context: PomodoroContext, event: PomodoroEvent) => {
        console.log("Focus Start");
      },
      shortAlert: (context: PomodoroContext, event: PomodoroEvent) => {
        console.log("Short Start");
      },
      longAlert: (context: PomodoroContext, event: PomodoroEvent) => {
        console.log("Long Start");
      },
      doneAlert: (context: PomodoroContext, event: PomodoroEvent) => {
        console.log("Done");
      },
    },
  }
);
