package org.example.decorator_pattern;

public class SlackDecorator extends NotifierDecorator {
    SlackDecorator(Notifier notifier) {
        super(notifier);
    }

    @Override
    public String send() {
        return String.format("Notificação do slack %s", super.send());
    }
}
