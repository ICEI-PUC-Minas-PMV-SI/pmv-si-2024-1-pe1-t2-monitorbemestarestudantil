# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.

O professor Rommel Carneiro apresenta alguns exemplos prontos para serem utilizados como referência:
- Login do sistema: [https://repl.it/@rommelpuc/LoginApp](https://repl.it/@rommelpuc/LoginApp) 
- Cadastro de Contatos: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

## Exemplo

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Responsável | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| A plataforma deve ser capaz de analisar o conteúdo gerado pelos usuários a fim de identificar indicadores de comportamento suicida. Essa funcionalidade deve ser capaz de classificar esse risco em níveis específicos, permitindo assim uma intervenção precoce e direcionada ao indivíduo, enviando alertas para o setor da universidade responsável pela promoção da saúde e bem estar dos estudantes. ; RF-005: A plataforma deve permitir que os usuários solicitem ajuda ou encaminhamento para profissionais de saúde mental qualificados quando necessário, garantindo a confidencialidade e privacidade das informações compartilhadas. ; RNF-004: A plataforma deve ter uma interface intuitiva e amigável, com elementos de design que facilitem a navegação e compreensão das funcionalidades, mesmo para usuários menos experientes. ; A plataforma deve estar em conformidade com as normas e regulamentações de saúde mental e privacidade de dados, garantindo que todas as práticas e procedimentos adotados estejam alinhados com as melhores práticas da área. ;   | Maria Eduarda | index.html; sign-up.html; login.html; login.js; index.css; login-signup.css; theme.css |
|RF-002| A plataforma deve permitir que os usuários registrem seu estado emocional atual, incluindo sentimentos, pensamentos e sintomas associados. ; RF-004: A plataforma deve fornecer feedback e sugestões personalizadas com base nos dados registrados pelos usuários, visando promover hábitos saudáveis e prevenir crises emocionais. ; RNF-002: A plataforma deve ser compatível com uma variedade de dispositivos e navegadores web, garantindo uma experiência consistente para os usuários, independentemente do dispositivo utilizado. ; RNF-003: A plataforma deve ter tempos de resposta rápidos para garantir uma experiência de usuário fluida e satisfatória, com tempo de carregamento de páginas e processamento de solicitações dentro de limites aceitáveis. | João Paulo | pensagementos.html; home-logged.html; nav-bar.css; pensamentos.css; custom-footer.css; homepage.css; footer.js; navbar.js; search-box.js |

## Descrição das estruturas:

## Notícia
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único da notícia            | 1                                              |
| Diario Emocional | Opções de Sentimento do Dia | Resposta do Usuario | Estou Triste |
| Dia     | Data de hoje | Sentimento do Usuario Hoje | 
| Id do usuário  | Numero (Inteiro)  | Identificador do usuário autor da notícia | 1                                              |
| Diario Emocional | Opções de Sentimento do Dia | Resposta do Usuario | Estou Feliz |
| Dia     | Data de hoje | Sentimento do Usuario Hoje |
| Id do usuário  | Numero (Inteiro)  | Identificador do usuário autor da notícia | 1                                              |
| Diario Emocional | Opções de Sentimento do Dia | Resposta do Usuario | Estou Neutro |
| Dia     | Data de hoje | Sentimento do Usuario Hoje |
