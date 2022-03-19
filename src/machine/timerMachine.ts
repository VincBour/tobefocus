import { sendParent } from 'xstate/lib/actions';
import { assign, createMachine } from 'xstate';

interface TimerContext {
    duration: number;
    elapsed: number;
    remaining: number;
    interval: number;
}

export type TimerEvent = { type: "CONTINUE" } | { type: "TICK" }

export const timerMachine = createMachine<TimerContext, TimerEvent>({
    id: 'timer',
    initial: 'paused',
    context: {
        duration:0,
        elapsed: 0,
        remaining: 0,
        interval: 1
    },
    states: {
        'running': {
            invoke: {
                id:'timerClock_1', src: 'timerClock_1'
            },
            on: {
                CONTINUE: "paused",
                TICK: {
                    actions: [assign({
                        elapsed: context => +(context.elapsed + context.interval).toFixed(2),
                        remaining: context => +(context.duration -context.elapsed).toFixed(2)
                    }), sendParent((context, event) => {
                        console.log('timer context', context)
                        return {
                            type:"UPDATE_TIMER",
                            value: {
                                elapsed: context.elapsed,
                                remaining: context.remaining
                            }
                        }
                    })]
                },
                "": {
                    target: "paused",
                    cond: context => {
                      return context.elapsed >= context.duration;
                    }
                },
            }
        },
        'paused': {
            on: {
                CONTINUE: "running"
            }
        }
    },
    }, 
    {
        services: {
            timerClock_1: (context) => (cb) => {
              const interval = setInterval(() => {
                  cb("TICK");
              }, 1000 * context.interval);
              return () => {
                  clearInterval(interval);
              }
            }
          }
    }
)