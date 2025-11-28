export function getContactEmailTemplate(data: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background-color: #2563eb;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 5px 5px 0 0;
          }
          .content {
            background-color: #f9fafb;
            padding: 20px;
            border-radius: 0 0 5px 5px;
          }
          .field {
            margin-bottom: 15px;
          }
          .label {
            font-weight: bold;
            color: #2563eb;
          }
          .value {
            margin-top: 5px;
            padding: 10px;
            background-color: white;
            border-radius: 3px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Nova Mensagem do Site</h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Nome:</div>
              <div class="value">${escapeHtml(data.name)}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${escapeHtml(data.email)}</div>
            </div>
            ${data.phone ? `
            <div class="field">
              <div class="label">Telefone:</div>
              <div class="value">${escapeHtml(data.phone)}</div>
            </div>
            ` : ''}
            <div class="field">
              <div class="label">Mensagem:</div>
              <div class="value">${escapeHtml(data.message).replace(/\n/g, '<br>')}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

// Função auxiliar para escapar HTML e prevenir XSS
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

