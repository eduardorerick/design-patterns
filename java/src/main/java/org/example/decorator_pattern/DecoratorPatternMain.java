package org.example.decorator_pattern;

public class DecoratorPatternMain {
    public static void main() {
        var concreteNotifier = new ConcreteNotifier();
        var smsNotifier = new SMSDecorator(concreteNotifier);
        var facebookNotifier = new FacebookDecorator(concreteNotifier);
        var slackNotifier = new SlackDecorator(concreteNotifier);

        System.out.println(smsNotifier.send());
        System.out.println(facebookNotifier.send());
        System.out.println(slackNotifier.send());
    }
}