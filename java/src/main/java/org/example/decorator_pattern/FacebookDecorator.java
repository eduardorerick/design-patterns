package org.example.decorator_pattern;

public class FacebookDecorator extends NotifierDecorator  {
    FacebookDecorator(Notifier notifier) {
        super(notifier);
    }

    @Override
    public String send() {
        return String.format("Notificação do facebook %s", super.send());
    }
}
