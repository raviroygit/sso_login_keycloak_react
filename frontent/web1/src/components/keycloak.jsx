// keycloak.js
import Keycloak from 'keycloak-js';

const keycloakConfig = {
  url: 'http://localhost:8080/',
  realm: 'sso-demo',
  clientId: 'company-portal',
  clientSecret:'1OKj6YoGsr1UJqYGRJWzcfPiUO46Jizl',
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;
