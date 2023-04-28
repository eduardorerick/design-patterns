package decorator_pattern

class SMSDecorator(notifier: Notifier) : NotifierDecorator(notifier) {
    override fun send(): String {
        val msg = super.send()
        return "SMS $msg"
    }
}