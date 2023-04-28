package decorator_pattern

fun decoratorPatternMain() {
    val concreteNotifier = ConcreteNotifier()
    val smsNotifier = SMSDecorator(concreteNotifier)
    val facebookNotifier = FacebookDecorator(concreteNotifier)
    val slackNotifier = SlackDecorator(concreteNotifier)

    println(smsNotifier.send())
    println(facebookNotifier.send())
    println(slackNotifier.send())
}