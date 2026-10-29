package factory;

import produtos.Botao;
import produtos.BotaoWindows;
import produtos.Checkbox;
import produtos.CheckboxWindows;

public class WindowsFactory implements GuiFactory {
    @Override
    public Botao criarBotao() {
        return new BotaoWindows();
    }

    @Override
    public Checkbox criarCheckbox() {
        return new CheckboxWindows();
    }
}
