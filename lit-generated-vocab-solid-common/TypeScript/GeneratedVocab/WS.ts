/*
 * Proprietary and Confidential
 *
 * Copyright 2020 Inrupt Inc. - all rights reserved.
 *
 * Do not use without explicit permission from Inrupt Inc.
 */

import { LitVocabTerm, getLocalStore } from "@inrupt/lit-vocab-term";
import dataFactory from "@rdfjs/data-model";
const namedNode = dataFactory.namedNode;

/**
  Generated by artifact generator [@inrupt/lit-artifact-generator], version [0.10.5]
  as part of artifact: [vocab-solid-common], version: [0.3.3]
  at 'Tuesday, May 5, 2020 4:20 PM'.

  Vocabulary built from vocab list file: [solid-rdf-vocab/Common/Vocab-List-Solid-Common.yml].

  This extension adds predicates making explicit some implicit knowledge in the Workspace ontology.
 */

function _NS(localName: string) { 
  return (namedNode("http://www.w3.org/ns/pim/space#" + localName));
}

const WS = {
  PREFIX: "ws",
  NAMESPACE: "http://www.w3.org/ns/pim/space#",
  PREFIX_AND_NAMESPACE: { "ws": "http://www.w3.org/ns/pim/space#" },
  NS: _NS,

  // *****************
  // All the Classes.
  // *****************

  /**
   * A file describing a configuration. In this context, it is
 expected to describe the workspace configuration.
   */
  ConfigurationFile: new LitVocabTerm(
    _NS("ConfigurationFile"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Configuration file`, "en")
    .addLabel(`Fichier de configuration`, "fr")
    .addComment(`A file describing a configuration. In this context, it is
 expected to describe the workspace configuration.`, "en"),

  /**
   * A  storage is a space of URIs in which you can individually control for each resource
    who has access to it.

   */
  ControlledStorage: new LitVocabTerm(
    _NS("ControlledStorage"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabelNoLanguage(`access controlled storage`)
    .addCommentNoLanguage(`A  storage is a space of URIs in which you can individually control for each resource
    who has access to it.
`),

  /**
   * A storage is a space of URIs in which you have access to data.

   */
  Storage: new LitVocabTerm(
    _NS("Storage"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabelNoLanguage(`storage`)
    .addCommentNoLanguage(`A storage is a space of URIs in which you have access to data.
`),

  /**
   * This is a workspace for storing the 
    information about the other workspaces.
    As a user, you normally don't have to worry about it.
   */
  MasterWorkspace: new LitVocabTerm(
    _NS("MasterWorkspace"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`Master Workspace`, "en")
    .addCommentNoLanguage(`This is a workspace for storing the 
    information about the other workspaces.
    As a user, you normally don't have to worry about it.`),

  /**
   * Access only by the you, the user.
   */
  PrivateWorkspace: new LitVocabTerm(
    _NS("PrivateWorkspace"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabelNoLanguage(`Private workspace`)
    .addCommentNoLanguage(`Access only by the you, the user.`),

  /**
   * Workspaces are place where data is stored, and associated polices of privacy.
A given application typically stores information in several different
workspaces, some being user private, some shared, and some public.

   */
  Workspace: new LitVocabTerm(
    _NS("Workspace"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabelNoLanguage(`workspace`)
    .addCommentNoLanguage(`Workspaces are place where data is stored, and associated polices of privacy.
A given application typically stores information in several different
workspaces, some being user private, some shared, and some public.
`),

  /**
   * A personal storage is a space of URIs in which you and only you have access to data,
    you cannot give access to anyone else.

   */
  PersonalStorage: new LitVocabTerm(
    _NS("PersonalStorage"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabelNoLanguage(`personal storage`)
    .addCommentNoLanguage(`A personal storage is a space of URIs in which you and only you have access to data,
    you cannot give access to anyone else.
`),

  /**
   * A public storage is a space of URIs in which you have access to data,
    and all data is accessible to anyone without control.

   */
  PublicStorage: new LitVocabTerm(
    _NS("PublicStorage"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabelNoLanguage(`public storage`)
    .addCommentNoLanguage(`A public storage is a space of URIs in which you have access to data,
    and all data is accessible to anyone without control.
`),

  /**
   * Aceess is open to the public. Anything in a public workspace
    can be accesed by anyone.
   */
  PublicWorkspace: new LitVocabTerm(
    _NS("PublicWorkspace"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabelNoLanguage(`Public workspace`)
    .addCommentNoLanguage(`Aceess is open to the public. Anything in a public workspace
    can be accesed by anyone.`),

  /**
   * AAceess may not be open to the public. 
    Contains preferences resources
   */
  PreferencesWorkspace: new LitVocabTerm(
    _NS("PreferencesWorkspace"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabelNoLanguage(`Preferences workspace`)
    .addCommentNoLanguage(`AAceess may not be open to the public. 
    Contains preferences resources`),

  /**
   * Access is to some but not all people.
   */
  SharedWorkspace: new LitVocabTerm(
    _NS("SharedWorkspace"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabelNoLanguage(`Shared workspace`)
    .addCommentNoLanguage(`Access is to some but not all people.`),

  // *******************
  // All the Properties.
  // *******************

  /**
   * master workspace
   */
  masterWorkspace: new LitVocabTerm(
    _NS("masterWorkspace"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`master workspace`, "en"),

  /**
   * preferences file
   */
  preferencesFile: new LitVocabTerm(
    _NS("preferencesFile"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabelNoLanguage(`preferences file`),

  /**
   * The storage in which this workspace is
   */
  storage: new LitVocabTerm(
    _NS("storage"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabelNoLanguage(`storage`)
    .addCommentNoLanguage(`The storage in which this workspace is`),

  /**
   * URIs which start with this string are in this workspace or storage.
This may be used for constructing URIs for new storage resources.

   */
  uriPrefix: new LitVocabTerm(
    _NS("uriPrefix"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabelNoLanguage(`URI prefix`)
    .addCommentNoLanguage(`URIs which start with this string are in this workspace or storage.
This may be used for constructing URIs for new storage resources.
`),

  /**
   * workspace
   */
  workspace: new LitVocabTerm(
    _NS("workspace"),
    dataFactory,
    getLocalStore(),
    false
  )
    .addLabel(`workspace`, "en"),

};

export { WS };
