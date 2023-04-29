package org.example.decorator_pattern;

public class SMSDecorator extends NotifierDecorator {
    SMSDecorator(Notifier notifier) {
        super(notifier);
    }

    @Override
    public String send() {
        return String.format("SMS %s", super.send());
    }
}
