<div align="center">
  <img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Execute e publique seu app Winove

Este projeto contém tudo o que você precisa para rodar e publicar a landing page de advocacia na plataforma Winove.

## Executar localmente

**Pré-requisitos:** Node.js 18+ e npm.

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Defina a variável `GEMINI_API_KEY` em um arquivo [.env.local](.env.local), se quiser integrar com o Gemini.
3. Rode o app em modo desenvolvimento:
   ```bash
   npm run dev
   ```
4. Para gerar os arquivos otimizados para produção:
   ```bash
   npm run build
   ```
5. Visualize a build localmente:
   ```bash
   npm run preview
   ```

A aplicação agora utiliza somente assets locais, evitando bloqueios de CSP durante o deploy.
