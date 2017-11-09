import { Component, Prop, /*Event, EventEmitter*/ State } from '@stencil/core';


@Component({
  tag: 'st-input',
  styleUrl: 'st-input.scss'
})
export class StInput {

  @Prop() value: string;
  @Prop() last: string;

  // components inside propagate so we can use the standard input event instead of a CustomEvent
  // @Event() change: EventEmitter;

  changeHandler(event) {
    console.log(`triggering change handler with ${event.target.value}`);
  }

  render() {
    return (
      <div class="navbar">
          <input value={this.value} onChange={() => this.changeHandler(event)}/>
      </div>
    )
  }
}