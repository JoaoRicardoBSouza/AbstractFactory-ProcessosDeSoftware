import factory.MacFactory;
import factory.WindowsFactory;

public class Main {
    public static void main(String[] args) {
        System.out.println("=== Aplicação com tema Windows ===");
        Aplicacao appWindows = new Aplicacao(new WindowsFactory());
        appWindows.renderizar();

        System.out.println();

        System.out.println("=== Aplicação com tema Mac ===");
        Aplicacao appMac = new Aplicacao(new MacFactory());
        appMac.renderizar();
    }
}
