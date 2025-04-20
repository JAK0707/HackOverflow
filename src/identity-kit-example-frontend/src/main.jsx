import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Styles
import './index.scss'; // Tailwind and your custom styles


// Context + IdentityKit
import { AuthProvider } from "./StateManagement/useContext/useClient";
import {
  IdentityKitProvider,
  IdentityKitTheme
} from "@nfid/identitykit/react";
import {
  IdentityKitAuthType,
  NFIDW,
  Plug,
  InternetIdentity
} from "@nfid/identitykit";
import "@nfid/identitykit/react/styles.css"; // IdentityKit built-in styles

// Config
const signers = [NFIDW, Plug, InternetIdentity];
const canisterID = 'vg3po-ix777-77774-qaafa-cai'

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <IdentityKitProvider
      signers={signers}
      theme={IdentityKitTheme.SYSTEM}
      authType={IdentityKitAuthType.DELEGATION}
      signerClientOptions={{
        targets: [canisterID],
        retryTimes: 2
      }}
    >
      <React.StrictMode>
        <AuthProvider>
          <App />
        </AuthProvider>
      </React.StrictMode>
    </IdentityKitProvider>
  );
}
