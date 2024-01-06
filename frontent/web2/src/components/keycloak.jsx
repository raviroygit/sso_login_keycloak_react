// keycloak.js
import Keycloak from 'keycloak-js';

const keycloakConfig = {
  url: 'http://localhost:8080/',
  realm: 'sso-demo',
  clientId: 'employee-portal',
  clientSecret: 'WsYOwF22O9mcEVp8oaoU287GaF1FZixn'
};

const keycloakInst = new Keycloak(keycloakConfig);

export default keycloakInst;
