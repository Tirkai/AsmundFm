import { Accessor, createSignal, Setter } from "solid-js";

export class State<T> {
  constructor(initialValue: T) {
    const [value, setValue] = createSignal<T>(initialValue);

    this.get = value;
    this.set = setValue;
  }

  get: Accessor<T>;
  set: Setter<T>;
}
