import { MessagingProtocol } from "../interfaces/mesaging-protocol";

export class Messaging implements MessagingProtocol {
  sendMessage(message:string): void {
    console.log('Mensagem envaida: ', message);
  }
}
