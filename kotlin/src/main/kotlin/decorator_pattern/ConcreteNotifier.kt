package decorator_pattern

class ConcreteNotifier : Notifier {
    override fun send(): String {
        return "Enviado(a)!";
    }
}