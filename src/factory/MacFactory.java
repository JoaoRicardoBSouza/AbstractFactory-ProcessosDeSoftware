package factory;

import produtos.Botao;
import produtos.BotaoMac;
import produtos.Checkbox;
import produtos.CheckboxMac;

public class MacFactory implements GuiFactory {
    @Override
    public Botao criarBotao() {
        return new BotaoMac();
    }

    @Override
    public Checkbox criarCheckbox() {
        return new CheckboxMac();
    }
}
