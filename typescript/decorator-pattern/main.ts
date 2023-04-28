//PARA MAIS INFORMAÇÕES LEIA : o que é.md, problema.md

abstract class Notifier {
  public abstract send(): string;
}

class NotifierDecorator extends Notifier {
  protected decoratedNotifier: Notifier;

  constructor(notifier: Notifier) {
    super();
    this.decoratedNotifier = notifier;
  }
  public send() {
    return this.decoratedNotifier.send();
  }
}

class ConcreteNotifier extends Notifier {
  public send() {
    return "Enviado(a)!";
  }
}

class SMSDecorator extends NotifierDecorator {
  constructor(notifier: Notifier) {
    super(notifier);
  }
  public send(): string {
    return `SMS ${super.send()}`;
  }
}

class FacebookDecorator extends NotifierDecorator {
  constructor(notifier: Notifier) {
    super(notifier);
  }
  public send(): string {
    return `Notificação do facebook ${super.send()}`;
  }
}

class SlackDecorator extends NotifierDecorator {
  constructor(notifier: Notifier) {
    super(notifier);
  }
  public send(): string {
    return `Notificação do slack ${super.send()}`;
  }
}

let concreteNotifier = new ConcreteNotifier();
let smsNotifier = new SMSDecorator(concreteNotifier);
let facebookNotifier = new FacebookDecorator(concreteNotifier);
let slackNotifier = new SlackDecorator(concreteNotifier);

console.log(concreteNotifier.send());
console.log(smsNotifier.send());
console.log(facebookNotifier.send());
console.log(slackNotifier.send());
