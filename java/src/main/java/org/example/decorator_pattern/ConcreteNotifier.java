package org.example.decorator_pattern;

public class ConcreteNotifier implements Notifier {
    @Override
    public String send() {
        return "Enviado(a)!";
    }
}
