package decorator_pattern

open class NotifierDecorator(notifier: Notifier) : Notifier {
    private var decoratedNotifier: Notifier = notifier

    override fun send(): String {
        return this.decoratedNotifier.send()
    }
}