    /*
 * Proprietary and Confidential
 *
 * Copyright 2020 Inrupt Inc. - all rights reserved.
 *
 * Do not use without explicit permission from Inrupt Inc.
 */

const namespace = require("@rdfjs/namespace");

/**
  Generated by artifact generator [@inrupt/lit-artifact-generator], version [0.10.5]
  as part of artifact: [vocab-solid-common], version: [0.3.2]
  at 'Tuesday, May 5, 2020 4:20 PM'.

  Vocabulary built from vocab list file: [solid-rdf-vocab/Common/Vocab-List-Solid-Common.yml].

  This extension adds predicates making explicit some implicit knowledge in the Workspace ontology.
 */

const RDFJS_NAMESPACE = namespace("http://www.w3.org/ns/pim/space#");

const _NAMESPACE = "http://www.w3.org/ns/pim/space#";
function _NS (localName) {
  return (_NAMESPACE + localName);
}

const WS = {
  PREFIX: "ws",
  NAMESPACE: _NAMESPACE,
  PREFIX_AND_NAMESPACE: { "ws": "http://www.w3.org/ns/pim/space#" },
  NS: _NS,

  // *****************
  // All the Classes.
  // *****************

  /**
   * A file describing a configuration. In this context, it is
 expected to describe the workspace configuration.
   */
  ConfigurationFile: RDFJS_NAMESPACE("ConfigurationFile"),

  /**
   * A  storage is a space of URIs in which you can individually control for each resource
    who has access to it.

   */
  ControlledStorage: RDFJS_NAMESPACE("ControlledStorage"),

  /**
   * A storage is a space of URIs in which you have access to data.

   */
  Storage: RDFJS_NAMESPACE("Storage"),

  /**
   * This is a workspace for storing the 
    information about the other workspaces.
    As a user, you normally don't have to worry about it.
   */
  MasterWorkspace: RDFJS_NAMESPACE("MasterWorkspace"),

  /**
   * Access only by the you, the user.
   */
  PrivateWorkspace: RDFJS_NAMESPACE("PrivateWorkspace"),

  /**
   * Workspaces are place where data is stored, and associated polices of privacy.
A given application typically stores information in several different
workspaces, some being user private, some shared, and some public.

   */
  Workspace: RDFJS_NAMESPACE("Workspace"),

  /**
   * A personal storage is a space of URIs in which you and only you have access to data,
    you cannot give access to anyone else.

   */
  PersonalStorage: RDFJS_NAMESPACE("PersonalStorage"),

  /**
   * A public storage is a space of URIs in which you have access to data,
    and all data is accessible to anyone without control.

   */
  PublicStorage: RDFJS_NAMESPACE("PublicStorage"),

  /**
   * Aceess is open to the public. Anything in a public workspace
    can be accesed by anyone.
   */
  PublicWorkspace: RDFJS_NAMESPACE("PublicWorkspace"),

  /**
   * AAceess may not be open to the public. 
    Contains preferences resources
   */
  PreferencesWorkspace: RDFJS_NAMESPACE("PreferencesWorkspace"),

  /**
   * Access is to some but not all people.
   */
  SharedWorkspace: RDFJS_NAMESPACE("SharedWorkspace"),

  // *******************
  // All the Properties.
  // *******************

  /**
   * master workspace
   */
  masterWorkspace: RDFJS_NAMESPACE("masterWorkspace"),

  /**
   * preferences file
   */
  preferencesFile: RDFJS_NAMESPACE("preferencesFile"),

  /**
   * The storage in which this workspace is
   */
  storage: RDFJS_NAMESPACE("storage"),

  /**
   * URIs which start with this string are in this workspace or storage.
This may be used for constructing URIs for new storage resources.

   */
  uriPrefix: RDFJS_NAMESPACE("uriPrefix"),

  /**
   * workspace
   */
  workspace: RDFJS_NAMESPACE("workspace"),

  //
  // Marker allowing us put commas at the end of all lines above (only the last line does not have a comma).
  //
  END_OF_VOCAB: 'End of vocab.'
}

module.exports = WS;
