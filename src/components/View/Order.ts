import { IEvents } from "../base/events";
import {Form} from "./Form";
import {IOrderForm} from "../../types/index";

export class Order extends Form<IOrderForm> {
  constructor(container: HTMLFormElement, events: IEvents) {
      super(container, events);
  }

  set phone(value: string) {
      (this.container.elements.namedItem('phone') as HTMLInputElement).value = value;
  }

  set email(value: string) {
      (this.container.elements.namedItem('email') as HTMLInputElement).value = value;
  }
}