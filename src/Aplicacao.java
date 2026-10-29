import factory.GuiFactory;
import produtos.Botao;
import produtos.Checkbox;

public class Aplicacao {
    private final Botao botao;
    private final Checkbox checkbox;

    public Aplicacao(GuiFactory factory) {
        this.botao = factory.criarBotao();
        this.checkbox = factory.criarCheckbox();
    }

    public void renderizar() {
        botao.renderizar();
        checkbox.renderizar();
    }
}
