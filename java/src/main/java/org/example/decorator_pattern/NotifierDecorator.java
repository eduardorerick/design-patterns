package org.example.decorator_pattern;

public class NotifierDecorator implements Notifier {
    private final Notifier decoratedNotifier;

    NotifierDecorator(Notifier notifier) {
        this.decoratedNotifier = notifier;
    }

    @Override
    public String send() {
        return this.decoratedNotifier.send();
    }
}


