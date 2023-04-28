package decorator_pattern

class FacebookDecorator(notifier: Notifier) : NotifierDecorator(notifier) {
    override fun send(): String {
        val msg = super.send()
        return "Notificação do facebook $msg"
    }
}