# Demonstração do Design Pattern Abstract Factory (Java)

Projeto simples em Java que demonstra o funcionamento do padrão de projeto **Abstract Factory**, usando como exemplo uma fábrica de componentes de interface gráfica (botão e checkbox) para diferentes sistemas operacionais (Windows e Mac).

## O que é o Abstract Factory?

O Abstract Factory é um padrão de projeto **criacional** que fornece uma interface para criar **famílias de objetos relacionados** sem especificar suas classes concretas.

Neste projeto, em vez de a aplicação instanciar diretamente `BotaoWindows` ou `CheckboxMac`, ela pede os componentes a uma fábrica. Trocar o tema de toda a aplicação exige apenas trocar a fábrica utilizada.

## Como o projeto funciona

A classe `Aplicacao` recebe uma `GuiFactory` no construtor e a utiliza para criar um botão e um checkbox. Ela não sabe (nem precisa saber) se os componentes são do estilo Windows ou Mac. A classe `Main` executa a aplicação duas vezes, cada uma com uma fábrica diferente.

## Estrutura do projeto

```
src/
├── Main.java                # Ponto de entrada: escolhe a fábrica e executa a demonstração
├── Aplicacao.java           # Cliente: usa apenas as interfaces
├── GuiFactory.java          # Abstract Factory (interface)
├── WindowsFactory.java      # Fábrica concreta (família Windows)
├── MacFactory.java          # Fábrica concreta (família Mac)
├── Botao.java               # Interface do produto Botão
├── Checkbox.java            # Interface do produto Checkbox
├── BotaoWindows.java        # Produto concreto
├── CheckboxWindows.java     # Produto concreto
├── BotaoMac.java            # Produto concreto
└── CheckboxMac.java         # Produto concreto
```

## Papéis no padrão

| Papel no padrão | Classes do projeto |
|---|---|
| Abstract Factory | `GuiFactory` |
| Concrete Factories | `WindowsFactory`, `MacFactory` |
| Abstract Products | `Botao`, `Checkbox` |
| Concrete Products | `BotaoWindows`, `CheckboxWindows`, `BotaoMac`, `CheckboxMac` |
| Client | `Aplicacao` |

## Como executar

### Pelo IntelliJ IDEA

1. Abra o projeto no IntelliJ.
2. Abra o arquivo `Main.java`.
3. Clique no ícone de execução (▶) ao lado do método `main`.

### Pelo terminal

Na pasta `src`:

```bash
javac *.java
java Main
```

## Saída esperada

```
=== Aplicação com tema Windows ===
Renderizando um botão no estilo Windows
Renderizando um checkbox no estilo Windows

=== Aplicação com tema Mac ===
Renderizando um botão no estilo Mac
Renderizando um checkbox no estilo Mac
```

## Vantagens demonstradas

- **Desacoplamento:** o cliente depende apenas de interfaces, não de classes concretas.
- **Consistência:** a fábrica garante que os produtos de uma mesma família sejam usados juntos (nunca um botão Windows com um checkbox Mac).
- **Facilidade de troca:** mudar de família de produtos exige alterar apenas a fábrica passada para `Aplicacao`.
- **Extensibilidade (aberto/fechado):** para adicionar uma nova família (por exemplo, `LinuxFactory`), basta criar novas classes, sem modificar o código do cliente.

## Desvantagem

Adicionar um **novo tipo de produto** (por exemplo, `CampoTexto`) exige alterar a interface `GuiFactory` e todas as fábricas concretas.

## Tecnologias

- Java
- IntelliJ IDEA
