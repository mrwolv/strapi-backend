import type { Schema, Attribute } from '@strapi/strapi';

export interface CapabilitiesCapabilities extends Schema.Component {
  collectionName: 'components_capabilities_capabilities';
  info: {
    displayName: 'Capabilities';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'capabilities.capabilities': CapabilitiesCapabilities;
    }
  }
}
