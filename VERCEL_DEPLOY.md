# 🚀 Deployment su Vercel - Guida Completa

Questa guida ti accompagnerà nel deploy del portfolio su Vercel, inclusa la configurazione delle email SMTP.

## 📋 Prerequisiti

- ✅ Account GitHub con il repository del portfolio
- ✅ Account Vercel (gratuito: [vercel.com](https://vercel.com))
- ✅ Account Gmail (o altro provider SMTP) per le email

---

## 🔧 Step 1: Preparazione del Repository

Il progetto è già pronto per Vercel! I file necessari sono stati creati:

- ✅ `vercel.json` - Configurazione Vercel
- ✅ `api/contact.ts` - Serverless function per il form di contatto
- ✅ `package.json` - Script di build ottimizzati

---

## 📦 Step 2: Deploy su Vercel

### Opzione A: Deploy tramite Dashboard Vercel (Consigliato)

1. **Vai su [vercel.com](https://vercel.com) e accedi**

2. **Clicca su "Add New Project"**

3. **Importa il tuo repository GitHub**
   - Seleziona il repository del portfolio
   - Vercel lo rileverà automaticamente

4. **Configura il progetto**
   - **Framework Preset**: Vite (dovrebbe essere rilevato automaticamente)
   - **Root Directory**: `./` (lasciare vuoto se il progetto è nella root)
   - **Build Command**: `npm run build` (già configurato)
   - **Output Directory**: `dist/public` (già configurato)

5. **Clicca "Deploy"**

6. **Attendi il deployment** (circa 2-3 minuti)

### Opzione B: Deploy tramite CLI

```bash
# Installa Vercel CLI globalmente
npm i -g vercel

# Nel tuo progetto, esegui:
vercel

# Segui le istruzioni per:
# - Autenticazione
# - Configurazione del progetto
# - Deploy
```

---

## ⚙️ Step 3: Configurazione Variabili d'Ambiente (SMTP)

### Per Gmail:

1. **Crea una App Password Gmail**:
   - Vai su [myaccount.google.com](https://myaccount.google.com)
   - Sicurezza → Verifica in due passaggi (se non attiva, attivala)
   - Sicurezza → Password delle app
   - Seleziona "Altro" → Digita "Portfolio"
   - Copia la password generata (16 caratteri)

2. **Aggiungi le variabili d'ambiente su Vercel**:
   - Vai al tuo progetto su Vercel
   - Clicca su **Settings** → **Environment Variables**
   - Aggiungi le seguenti variabili:

   ```
   SMTP_HOST = smtp.gmail.com
   SMTP_PORT = 587
   SMTP_USER = tuo-email@gmail.com
   SMTP_PASS = la-tua-app-password-gmail
   SMTP_FROM = "Portfolio Contact" <tuo-email@gmail.com>
   ```

3. **Redeploy il progetto**:
   - Dopo aver aggiunto le variabili, vai su **Deployments**
   - Clicca sui tre puntini del deployment più recente
   - Seleziona **Redeploy**

### Per altri provider SMTP:

**Outlook/Office365:**
```
SMTP_HOST = smtp.office365.com
SMTP_PORT = 587
SMTP_USER = tuo-email@outlook.com
SMTP_PASS = la-tua-password
```

**SendGrid:**
```
SMTP_HOST = smtp.sendgrid.net
SMTP_PORT = 587
SMTP_USER = apikey
SMTP_PASS = la-tua-api-key-sendgrid
```

---

## ✅ Step 4: Verifica del Deployment

1. **Visita l'URL del tuo portfolio**:
   - Vercel assegna automaticamente un URL (es: `tuo-portfolio.vercel.app`)
   - Puoi anche configurare un dominio personalizzato

2. **Testa il form di contatto**:
   - Vai alla sezione Contact
   - Compila e invia un messaggio di test
   - Controlla la tua casella email

3. **Controlla i log su Vercel**:
   - Vai su **Deployments** → Seleziona il deployment
   - Clicca su **Functions** per vedere i log della serverless function
   - Verifica eventuali errori

---

## 🎨 Step 5: Configurazione Dominio Personalizzato (Opzionale)

1. **Su Vercel**:
   - Settings → Domains
   - Aggiungi il tuo dominio
   - Segui le istruzioni per configurare i DNS

2. **Dal tuo provider DNS**:
   - Aggiungi i record CNAME o A come indicato da Vercel

---

## 🔍 Troubleshooting

### Il form di contatto non funziona:

1. **Verifica le variabili d'ambiente**:
   - Assicurati che siano tutte configurate correttamente
   - Controlla che non ci siano spazi extra nei valori

2. **Controlla i log**:
   - Vai su Vercel → Deployments → Functions → `/api/contact`
   - Leggi gli errori nei log

3. **Verifica Gmail App Password**:
   - Assicurati di usare una **App Password** e non la password normale
   - Verifica che la verifica in due passaggi sia attiva

### Il build fallisce:

1. **Controlla i log di build su Vercel**
2. **Verifica localmente**: `npm run build`
3. **Controlla che tutte le dipendenze siano in `package.json`**

### Errori TypeScript:

1. **Ignora gli errori pre-esistenti** in `server/storage.ts` (non bloccano il deployment)
2. **Vercel compila solo il frontend e le serverless functions**

---

## 📝 Note Importanti

- ✅ **Le serverless functions** (`api/contact.ts`) vengono deployate automaticamente
- ✅ **Il frontend** viene buildato come static files e servito da Vercel
- ✅ **Le variabili d'ambiente** sono sicure e non accessibili dal client
- ✅ **Gmail App Password** è necessaria per Gmail (non usare la password normale)

---

## 🎉 Completato!

Il tuo portfolio è ora live su Vercel! 🚀

**URL del progetto**: `https://tuo-progetto.vercel.app`

Se hai bisogno di aiuto, controlla la [documentazione Vercel](https://vercel.com/docs).

