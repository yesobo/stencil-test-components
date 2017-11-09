import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'st-header',
  styleUrl: 'st-header.scss'
})
export class StHeader {

  @Prop() title: string;

  @Prop() last: string;

  render() {
    return (
      <header class="navbar">
        <a class="navbar-brand a-content-verical-middle" href="/" aria-label="Bootstrap">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c0/AsterixDeutsch.svg" alt="" />
          <span>{this.title}</span>
        </a>
      </header>
    );
  }
}