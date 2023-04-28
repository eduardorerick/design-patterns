package decorator_pattern

class SlackDecorator(notifier: Notifier) : NotifierDecorator(notifier) {
    override fun send(): String {
        val msg = super.send()
        return "Notificação do slack $msg"
    }
}