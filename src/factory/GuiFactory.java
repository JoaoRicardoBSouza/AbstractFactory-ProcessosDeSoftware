package factory;

import produtos.Botao;
import produtos.Checkbox;

public interface GuiFactory {
    Botao criarBotao();
    Checkbox criarCheckbox();
}